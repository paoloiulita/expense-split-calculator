import { useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import {
  buildSettlements,
  calculateNetBalances,
  Expense,
  Person,
  parseImportFile,
} from './lib/calculations'

const STORAGE_KEY = 'expense-split-calculator-state-v1'

const initialPeople: Person[] = [
  { id: 'alice', name: 'Alice' },
  { id: 'bob', name: 'Bob' },
  { id: 'carol', name: 'Carol' },
]

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ffb74d' },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
})

function App() {
  const [people, setPeople] = useState<Person[]>(initialPeople)
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [personName, setPersonName] = useState('')
  const [expenseForm, setExpenseForm] = useState({
    description: '',
    amount: '',
    payer: initialPeople[0]?.name ?? '',
  })
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null)
  const [importMode, setImportMode] = useState<'merge' | 'overwrite'>('merge')
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    const storedState = window.localStorage.getItem(STORAGE_KEY)
    if (!storedState) {
      return
    }

    try {
      const parsed = JSON.parse(storedState) as {
        people?: Person[]
        expenses?: Expense[]
      }

      if (parsed.people?.length) {
        setPeople(parsed.people)
      }

      if (parsed.expenses?.length) {
        setExpenses(parsed.expenses)
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ people, expenses }),
    )
  }, [people, expenses])

  useEffect(() => {
    if (!people.length) {
      return
    }

    if (
      !expenseForm.payer ||
      !people.some((person) => person.name === expenseForm.payer)
    ) {
      setExpenseForm((current) => ({ ...current, payer: people[0].name }))
    }
  }, [people, expenseForm.payer])

  const balances = useMemo(
    () => calculateNetBalances(people, expenses),
    [people, expenses],
  )
  const settlements = useMemo(
    () => buildSettlements(people, balances),
    [people, balances],
  )

  const handleAddPerson = (event: React.FormEvent) => {
    event.preventDefault()

    const name = personName.trim()

    if (!name) {
      setNotice('Please enter a person name before adding them.')
      return
    }

    if (
      people.some((person) => person.name.toLowerCase() === name.toLowerCase())
    ) {
      setNotice(`${name} is already part of the group.`)
      return
    }

    const newPerson: Person = {
      id: crypto.randomUUID(),
      name,
    }

    setPeople((current) => [...current, newPerson])
    setExpenseForm((current) => ({ ...current, payer: name }))
    setPersonName('')
    setNotice(`${name} added to the travel group.`)
  }

  const handleExpenseSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!people.length) {
      setNotice('Add at least one person before logging an expense.')
      return
    }

    const description = expenseForm.description.trim()
    const amount = Number(expenseForm.amount)
    const payer = expenseForm.payer || people[0].name

    if (!description || Number.isNaN(amount) || amount <= 0) {
      setNotice('Please fill in a valid description and amount.')
      return
    }

    const nextExpense: Expense = {
      id: editingExpenseId ?? crypto.randomUUID(),
      description,
      amount: Number(amount.toFixed(2)),
      payer,
    }

    if (editingExpenseId) {
      setExpenses((current) =>
        current.map((expense) =>
          expense.id === editingExpenseId ? nextExpense : expense,
        ),
      )
      setEditingExpenseId(null)
    } else {
      setExpenses((current) => [nextExpense, ...current])
    }

    setExpenseForm({ description: '', amount: '', payer: people[0].name })
    setNotice(editingExpenseId ? 'Expense updated.' : 'Expense added.')
  }

  const startEditingExpense = (expense: Expense) => {
    setEditingExpenseId(expense.id)
    setExpenseForm({
      description: expense.description,
      amount: expense.amount.toString(),
      payer: expense.payer,
    })
  }

  const handleDeleteExpense = (expenseId: string) => {
    setExpenses((current) =>
      current.filter((expense) => expense.id !== expenseId),
    )
    if (editingExpenseId === expenseId) {
      setEditingExpenseId(null)
      setExpenseForm({
        description: '',
        amount: '',
        payer: people[0]?.name ?? '',
      })
    }
  }

  const handleDeletePerson = (personId: string) => {
    const personToDelete = people.find((person) => person.id === personId)

    if (!personToDelete) {
      return
    }

    const remainingPeople = people.filter((person) => person.id !== personId)
    const remainingExpenses = expenses.filter(
      (expense) => expense.payer !== personToDelete.name,
    )

    setPeople(remainingPeople)
    setExpenses(remainingExpenses)

    if (
      editingExpenseId &&
      !remainingExpenses.some((expense) => expense.id === editingExpenseId)
    ) {
      setEditingExpenseId(null)
      setExpenseForm({
        description: '',
        amount: '',
        payer: remainingPeople[0]?.name ?? '',
      })
    } else if (expenseForm.payer === personToDelete.name) {
      setExpenseForm((current) => ({
        ...current,
        payer: remainingPeople[0]?.name ?? '',
      }))
    }

    setNotice(
      `${personToDelete.name} was removed and their expenses were deleted.`,
    )
  }

  const handleImportFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const content = await file.text()
    const importedData = parseImportFile(content)

    if (importMode === 'overwrite') {
      setPeople(importedData.people)
      setExpenses(importedData.expenses)
      setNotice(
        `Imported ${importedData.expenses.length} expenses and replaced the current list.`,
      )
    } else {
      const existingNames = new Set(
        people.map((person) => person.name.toLowerCase()),
      )
      const mergedPeople = [...people]

      importedData.people.forEach((person) => {
        if (!existingNames.has(person.name.toLowerCase())) {
          existingNames.add(person.name.toLowerCase())
          mergedPeople.push(person)
        }
      })

      setPeople(mergedPeople)
      setExpenses((current) => [...current, ...importedData.expenses])
      setNotice(
        `Imported ${importedData.expenses.length} expenses and merged them into the current list.`,
      )
    }

    event.target.value = ''
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Expense Split Calculator
            </Typography>
            <Typography color="text.secondary" maxWidth="720px">
              Track people, log shared expenses, and see who should pay whom in
              real time.
            </Typography>
          </Paper>

          {notice ? (
            <Alert severity="info" onClose={() => setNotice(null)}>
              {notice}
            </Alert>
          ) : null}

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Manage people
                </Typography>
                <Box component="form" onSubmit={handleAddPerson} sx={{ mt: 2 }}>
                  <TextField
                    label="Person name"
                    value={personName}
                    onChange={(event) => setPersonName(event.target.value)}
                    fullWidth
                    size="small"
                  />
                  <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Add person
                  </Button>
                </Box>

                <List dense sx={{ mt: 2, flexGrow: 1 }}>
                  {people.map((person) => (
                    <ListItem
                      key={person.id}
                      disablePadding
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label={`delete ${person.name}`}
                          onClick={() => handleDeletePerson(person.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={person.name} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {editingExpenseId ? 'Edit expense' : 'Add an expense'}
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleExpenseSubmit}
                  sx={{ mt: 2 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Description"
                        name="description"
                        value={expenseForm.description}
                        onChange={(event) =>
                          setExpenseForm((current) => ({
                            ...current,
                            description: event.target.value,
                          }))
                        }
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Amount"
                        name="amount"
                        type="number"
                        value={expenseForm.amount}
                        onChange={(event) =>
                          setExpenseForm((current) => ({
                            ...current,
                            amount: event.target.value,
                          }))
                        }
                        fullWidth
                        inputProps={{ min: 0, step: '0.01' }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="payer-label">Payer</InputLabel>
                        <Select
                          labelId="payer-label"
                          value={expenseForm.payer}
                          label="Payer"
                          onChange={(event) =>
                            setExpenseForm((current) => ({
                              ...current,
                              payer: event.target.value,
                            }))
                          }
                        >
                          {people.map((person) => (
                            <MenuItem key={person.id} value={person.name}>
                              {person.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 2 }}
                  >
                    <Button type="submit" variant="contained">
                      {editingExpenseId ? 'Save expense' : 'Add expense'}
                    </Button>
                    {editingExpenseId ? (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setEditingExpenseId(null)
                          setExpenseForm({
                            description: '',
                            amount: '',
                            payer: people[0]?.name ?? '',
                          })
                        }}
                      >
                        Cancel edit
                      </Button>
                    ) : null}
                  </Stack>
                </Box>

                <Table sx={{ mt: 3 }} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Payer</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expenses.map((expense) => (
                      <TableRow key={expense.id} hover>
                        <TableCell>{expense.description}</TableCell>
                        <TableCell>{expense.amount.toFixed(2)}</TableCell>
                        <TableCell>{expense.payer}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label={`edit ${expense.description}`}
                            onClick={() => startEditingExpense(expense)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label={`delete ${expense.description}`}
                            onClick={() => handleDeleteExpense(expense.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Import from file
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Upload a text file with one line per expense in the form name
                  amount. The importer can merge or overwrite current entries.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<UploadFileIcon />}
                  >
                    Upload file
                    <input
                      hidden
                      accept=".txt,.csv,text/plain"
                      type="file"
                      onChange={handleImportFile}
                    />
                  </Button>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={importMode === 'overwrite'}
                        onChange={() =>
                          setImportMode((current) =>
                            current === 'merge' ? 'overwrite' : 'merge',
                          )
                        }
                      />
                    }
                    label={importMode === 'overwrite' ? 'Overwrite' : 'Merge'}
                  />
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Balance summary
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {people.map((person) => (
                    <Box
                      key={person.id}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography>{person.name}</Typography>
                      <Chip
                        label={`${balances[person.name] >= 0 ? '+' : ''}${balances[person.name].toFixed(2)}`}
                        color={
                          balances[person.name] >= 0 ? 'success' : 'warning'
                        }
                      />
                    </Box>
                  ))}
                </Stack>

                <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
                  Who owes whom
                </Typography>
                {settlements.length ? (
                  <List dense>
                    {settlements.map((settlement, index) => (
                      <ListItem
                        key={`${settlement.from}-${settlement.to}-${index}`}
                        disablePadding
                      >
                        <ListItemText
                          primary={`${settlement.from} pays ${settlement.to} ${settlement.amount.toFixed(2)}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography color="text.secondary">
                    Everyone is settled up.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App

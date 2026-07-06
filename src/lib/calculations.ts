export interface Person {
  id: string
  name: string
}

export interface Expense {
  id: string
  description: string
  amount: number
  payer: string
}

export interface ImportedExpensePayload {
  people: Person[]
  expenses: Expense[]
}

export interface Settlement {
  from: string
  to: string
  amount: number
}

export function calculateNetBalances(people: Person[], expenses: Expense[]) {
  const balances = people.reduce<Record<string, number>>((acc, person) => {
    acc[person.name] = 0
    return acc
  }, {})

  if (people.length === 0) {
    return balances
  }

  expenses.forEach((expense) => {
    const share = expense.amount / people.length

    people.forEach((person) => {
      if (person.name === expense.payer) {
        balances[person.name] = Number(
          (balances[person.name] + expense.amount - share).toFixed(2),
        )
      } else {
        balances[person.name] = Number(
          (balances[person.name] - share).toFixed(2),
        )
      }
    })
  })

  return balances
}

export function buildSettlements(
  people: Person[],
  balances: Record<string, number>,
): Settlement[] {
  const creditors = people
    .filter((person) => balances[person.name] > 0.01)
    .map((person) => ({
      name: person.name,
      amount: Number(balances[person.name].toFixed(2)),
    }))
  const debtors = people
    .filter((person) => balances[person.name] < -0.01)
    .map((person) => ({
      name: person.name,
      amount: Number(Math.abs(balances[person.name]).toFixed(2)),
    }))

  const settlements: Settlement[] = []

  while (creditors.length > 0 && debtors.length > 0) {
    const creditor = creditors[0]
    const debtor = debtors[0]
    const amount = Number(Math.min(creditor.amount, debtor.amount).toFixed(2))

    if (amount <= 0) {
      break
    }

    settlements.push({ from: debtor.name, to: creditor.name, amount })

    creditor.amount = Number((creditor.amount - amount).toFixed(2))
    debtor.amount = Number((debtor.amount - amount).toFixed(2))

    if (creditor.amount <= 0.01) {
      creditors.shift()
    }

    if (debtor.amount <= 0.01) {
      debtors.shift()
    }
  }

  return settlements
}

export function parseImportFile(content: string): ImportedExpensePayload {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  const people = new Map<string, Person>()
  const expenses: Expense[] = []

  lines.forEach((line, index) => {
    const [payer, amount] = line.split(/\s+/)
    const numericAmount = Number(amount)

    if (!payer || Number.isNaN(numericAmount)) {
      return
    }

    if (!people.has(payer)) {
      people.set(payer, { id: `${payer.toLowerCase()}-${index}`, name: payer })
    }

    expenses.push({
      id: `imported-${index}`,
      description: `Imported expense ${index + 1}`,
      amount: Number(numericAmount.toFixed(2)),
      payer,
    })
  })

  return {
    people: Array.from(people.values()),
    expenses,
  }
}

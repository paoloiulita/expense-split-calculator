import fs from 'fs'

export type Expense = { person: string, amount: number }
export type Balances = Record<string, Record<string, number>>

export const formatMoney = (n: number) => n.toFixed(2)

export function computeTotals(expenses: Expense[]): Record<string, number> {
  const totals: Record<string, number> = {}
  for (const e of expenses) {
    totals[e.person] = (totals[e.person] || 0) + e.amount
  }
  return totals
}

export function computeBalances(names: string[], expenses: Expense[]): Balances {
  const balances: any = {}
  for (const n of names) {
    balances[n] = {}
    for (const m of names) {
      balances[n][m] = 0
    }
  }

  for (const expense of expenses) {
    const share = expense.amount / names.length
    for (const name of names) {
      if (name !== expense.person) {
        balances[name][expense.person] += share
      }
    }
  }

  return balances as Balances
}

export function parseExpensesFile(filePath: string): Expense[] {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)

  return lines.map((line) => {
    const [name, amount] = line.split(/\s+/)
    return {
      person: name,
      amount: Number(amount),
    }
  })
}

export function inferPeople(expenses: Expense[]): string[] {
  const people = new Set<string>()
  for (const expense of expenses) {
    people.add(expense.person)
  }
  return Array.from(people).sort()
}

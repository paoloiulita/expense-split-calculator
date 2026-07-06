import assert from 'assert'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { computeBalances, computeTotals, Expense, parseExpensesFile, inferPeople } from '../lib'

const names: string[] = ['paolo', 'andrea', 'carlo', 'stefano']

// simple scenario: paolo paid 120 -> others owe 30 each
const expenses: Expense[] = [{ person: 'paolo', amount: 120 }]

const balances = computeBalances(names, expenses)
assert.strictEqual(balances.andrea.paolo, 30)
assert.strictEqual(balances.carlo.paolo, 30)
assert.strictEqual(balances.stefano.paolo, 30)
assert.strictEqual(balances.paolo.paolo, 0)

const totals = computeTotals(expenses)
assert.strictEqual(totals.paolo, 120)

// comprehensive scenario: every person paid
const expenses2: Expense[] = [
    { person: 'paolo', amount: 120 },
    { person: 'andrea', amount: 100 },
    { person: 'carlo', amount: 80 },
    { person: 'stefano', amount: 60 },
]

const balances2 = computeBalances(names, expenses2)
assert.strictEqual(balances2.paolo.paolo, 0)
assert.strictEqual(balances2.paolo.andrea, 25)
assert.strictEqual(balances2.paolo.carlo, 20)
assert.strictEqual(balances2.paolo.stefano, 15)
assert.strictEqual(balances2.andrea.paolo, 30)
assert.strictEqual(balances2.andrea.andrea, 0)
assert.strictEqual(balances2.andrea.carlo, 20)
assert.strictEqual(balances2.andrea.stefano, 15)

const totals2 = computeTotals(expenses2)
assert.strictEqual(totals2.paolo, 120)
assert.strictEqual(totals2.andrea, 100)
assert.strictEqual(totals2.carlo, 80)
assert.strictEqual(totals2.stefano, 60)

// parse from external file
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'expenses-'))
const filePath = path.join(tmpDir, 'expenses.txt')
fs.writeFileSync(filePath, 'paolo 10\nandrea 20\ncarlo 30\n', 'utf8')
const parsedExpenses = parseExpensesFile(filePath)
assert.deepStrictEqual(parsedExpenses, [
    { person: 'paolo', amount: 10 },
    { person: 'andrea', amount: 20 },
    { person: 'carlo', amount: 30 },
])
assert.deepStrictEqual(inferPeople(parsedExpenses), ['andrea', 'carlo', 'paolo'])

console.log('Comprehensive test passed')

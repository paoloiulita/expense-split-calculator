#!/usr/bin/env node
import path from 'path'
import { computeBalances, computeTotals, formatMoney, parseExpensesFile, inferPeople } from './lib'

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

clear()
console.log(
  chalk.red(
    figlet.textSync('Expense Split Calculator', { horizontalLayout: 'full' })
  )
);

const filePath = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve('expenses.txt')

function runCLI() {
  const expenses = parseExpensesFile(filePath)
  const peopleNames = inferPeople(expenses)

  let totalSpent = 0
  const totals = computeTotals(expenses)
  for (const name of peopleNames) {
    const totalForThisPerson = totals[name] || 0
    totalSpent += totalForThisPerson
    console.log(`${name} ha speso in totale ${chalk.bold(formatMoney(totalForThisPerson))}`)
  }

  console.log(`------------`)
  console.log(`in totale sono stati spesi ${chalk.bold(formatMoney(totalSpent))}`)
  console.log(`ogni persona deve quindi alla fine aver speso ${chalk.bold(formatMoney(totalSpent / peopleNames.length))}`)
  console.log(`------------`)

  const balances = computeBalances(peopleNames, expenses)
  for (const name of peopleNames) {
    for (const other of peopleNames) {
      if (name === other) continue
      const debit = balances[name][other] || 0
      const credit = balances[other][name] || 0
      const diff = debit - credit
      if (diff > 0) {
        console.log(`${name} deve dare ${chalk.bold(formatMoney(diff))} a ${chalk.bold(other)}`)
      }
    }
  }
}

if (require.main === module) runCLI()


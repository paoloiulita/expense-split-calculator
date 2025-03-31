#!/usr/bin/env node
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

clear()
console.log(
  chalk.red(
    figlet.textSync('Expense Split Calculator', { horizontalLayout: 'full' })
  )
);

type Name = 'paolo' | 'andrea' | 'carlo' | 'stefano'
type Person = { name: Name, creditors: Map<Person, number> }
type Expense = { person: Person, amount: number }

const people: Person[] = [
	{ name: 'paolo', creditors: new Map() },
	{ name: 'andrea', creditors: new Map() },
	{ name: 'carlo', creditors: new Map() },
	{ name: 'stefano', creditors: new Map() }
]
const getPerson = (name: string): Person => people.find(p => p.name === name)!

const expenses: Expense[] = []
expenses.push({ person: getPerson('paolo'),		amount: 145	})
expenses.push({ person: getPerson('paolo'),		amount: 35	})
expenses.push({ person: getPerson('paolo'),		amount: 45	})
expenses.push({ person: getPerson('andrea'),	amount: 120	})
expenses.push({ person: getPerson('stefano'),	amount: 140	})
expenses.push({ person: getPerson('carlo'),		amount: 20	})
expenses.push({ person: getPerson('andrea'),	amount: 15	})
expenses.push({ person: getPerson('carlo'),		amount: 70	})
expenses.push({ person: getPerson('carlo'),		amount: 50	})
expenses.push({ person: getPerson('paolo'),		amount: 160	})
expenses.push({ person: getPerson('andrea'),	amount: 20	})
expenses.push({ person: getPerson('andrea'),	amount: 15	})
expenses.push({ person: getPerson('stefano'),	amount: 20	})
expenses.push({ person: getPerson('andrea'),	amount: 17	})
expenses.push({ person: getPerson('paolo'),		amount: 80	})
expenses.push({ person: getPerson('andrea'),	amount: 5		})
expenses.push({ person: getPerson('andrea'),	amount: 96	})
expenses.push({ person: getPerson('paolo'),		amount: 54	})
expenses.push({ person: getPerson('andrea'),	amount: 16	})
expenses.push({ person: getPerson('andrea'),	amount: 98	})
expenses.push({ person: getPerson('paolo'),		amount: 30	})
expenses.push({ person: getPerson('andrea'),	amount: 19	})
expenses.push({ person: getPerson('paolo'),		amount: 50	})
expenses.push({ person: getPerson('carlo'),		amount: 47	})
expenses.push({ person: getPerson('carlo'), 	amount: 71 	})

const setCreditForExpense = (person: Person, expense: Expense) => {
	const dividedAmount = expense.amount / people.length
	const amountDueToExpensePerson = person.creditors.get(expense.person) || 0
	const newAmount = amountDueToExpensePerson + dividedAmount
	person.creditors.set(expense.person, newAmount)
}

const logCredit = (person: Person) => {
	for (const [creditor, debitIHaveWithThisPerson] of person.creditors) {
		const creditIHaveWithThisPerson = creditor.creditors.get(person) || 0
		const difference = debitIHaveWithThisPerson - creditIHaveWithThisPerson
		if (difference > 0) {
			console.log(`${person.name} deve dare ${chalk.bold(difference)} a ${chalk.bold(creditor.name)}`)
		}
	}
}

let totalSpent = 0

for (const person of people) {
	let totalForThisPerson = 0
	for (const expense of expenses) {
		if (expense.person !== person) {
			setCreditForExpense(person, expense)
		} else {
			totalForThisPerson = totalForThisPerson + expense.amount
		}
	}
	totalSpent = totalSpent + totalForThisPerson
	console.log(`${person.name} ha speso in totale ${chalk.bold(totalForThisPerson)}`)
}

console.log(`------------`)
console.log(`in totale sono stati spesi ${chalk.bold(totalSpent)}`)
console.log(`ogni persona deve quindi alla fine aver speso ${chalk.bold(totalSpent / people.length)}`)
console.log(`------------`)

for (const person of people) {
	logCredit(person)
}

import { describe, expect, it } from 'vitest'
import {
  buildSettlements,
  calculateNetBalances,
  parseImportFile,
} from './calculations'

describe('calculateNetBalances', () => {
  it('calculates the expected net balances for a shared expense', () => {
    const people = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Carol' },
    ]
    const expenses = [
      { id: '1', description: 'Dinner', amount: 120, payer: 'Alice' },
    ]

    expect(calculateNetBalances(people, expenses)).toEqual({
      Alice: 80,
      Bob: -40,
      Carol: -40,
    })
  })
})

describe('buildSettlements', () => {
  it('creates payments from creditors to debtors', () => {
    const people = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Carol' },
    ]
    const balances = { Alice: 80, Bob: -40, Carol: -40 }

    expect(buildSettlements(people, balances)).toEqual([
      { from: 'Bob', to: 'Alice', amount: 40 },
      { from: 'Carol', to: 'Alice', amount: 40 },
    ])
  })
})

describe('parseImportFile', () => {
  it('parses the legacy text import format', () => {
    const imported = parseImportFile('Alice 50\nBob 30')

    expect(imported.people).toHaveLength(2)
    expect(imported.expenses).toEqual([
      {
        id: 'imported-0',
        description: 'Imported expense 1',
        amount: 50,
        payer: 'Alice',
      },
      {
        id: 'imported-1',
        description: 'Imported expense 2',
        amount: 30,
        payer: 'Bob',
      },
    ])
  })
})

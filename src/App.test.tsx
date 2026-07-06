import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('adds a person and shows it in the list', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/person name/i), 'Diana')
    await user.click(screen.getByRole('button', { name: /add person/i }))

    expect(
      await screen.findByText('Diana', { selector: 'span' }),
    ).toBeInTheDocument()
  })

  it('deletes a person and removes their expenses', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/person name/i), 'Diana')
    await user.click(screen.getByRole('button', { name: /add person/i }))

    await user.type(screen.getByLabelText(/description/i), 'Dinner')
    await user.clear(screen.getByLabelText(/amount/i))
    await user.type(screen.getByLabelText(/amount/i), '60')
    await user.click(screen.getByRole('button', { name: /add expense/i }))

    await user.click(screen.getByRole('button', { name: /delete diana/i }))

    expect(
      screen.queryByText('Diana', { selector: 'span' }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Dinner')).not.toBeInTheDocument()
  })
})

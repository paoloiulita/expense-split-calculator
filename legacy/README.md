# Expense Split Calculator

Simple CLI to compute how much each person owes after shared expenses.

## Usage

Create a plain-text file with one expense per line in this format:

```text
name amount
```

Example:

```text
paolo 10
andrea 20
carlo 30
```

Then run:

```bash
npm start -- expenses.txt
```

If you omit the file path, the CLI will look for `expenses.txt` in the project root.

## Development

```bash
npm install
npm start -- expenses.txt
npm test
```

Notes:

- Calculation logic is in `src/lib.ts` and exported as pure functions for testing.
- CLI is `src/index.ts` and only runs when executed directly.

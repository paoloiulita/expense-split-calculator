# Expense Split Calculator

A modern React + TypeScript single-page application for managing shared expenses, calculating balances, and importing legacy text-based expense files.

## Features

- Add participants and create, edit, or delete shared expenses.
- Automatically split each expense equally among all participants and calculate who owes whom.
- Save participants and expenses in the browser's local storage so they remain available after a refresh in that browser.
- Import expenses from a text file, either merging them with or replacing the current data.

Data is stored locally in your browser; it is not synced between browsers or devices.

## Getting started

Install Node.js 22 and pnpm 9, then run:

```sh
pnpm install
pnpm dev
```

Vite prints the local development URL in the terminal.

### Import file format

Use one expense per line, with a participant name followed by the amount, separated by whitespace:

```text
Alice 50.00
Bob 30
```

Imported entries receive generated descriptions (for example, “Imported expense 1”). Importing in **Merge** mode appends the expenses and adds any new participant names; **Overwrite** replaces the current participants and expenses.

## Scripts

- `pnpm dev` – start the local Vite development server
- `pnpm build` – type-check and create a production build
- `pnpm preview` – preview the production build locally
- `pnpm test` – run Vitest tests once
- `pnpm test:watch` – run Vitest in watch mode
- `pnpm lint` – run ESLint

## Deployment

The app is publicly available at [https://paoloiulita.github.io/expense-split-calculator/](https://paoloiulita.github.io/expense-split-calculator/).

The GitHub Actions workflow builds and deploys the app to GitHub Pages when changes are pushed to the `main` branch. It can also be started manually from the Actions tab.

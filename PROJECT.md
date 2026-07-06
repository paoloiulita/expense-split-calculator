You are an expert Frontend Engineer. Your task is to rewrite this Node.js-based "Expense Split Calculator" into a modern, production-ready React Single Page Application (SPA) that runs entirely in the browser and can be deployed to GitHub Pages.

Please use the following technical specifications to architect the new application.

---

### 1. Technical Stack & Tooling

Always use the latest stable versions of all dependencies. Initialize the project with the following stack:

- **Build Tool:** Vite (configured for React and TypeScript)
- **Package Manager:** `pnpm`
- **Frontend Framework:** React SPA with TypeScript (strict mode enabled)
- **UI Library:** Material UI (MUI) v6+ (utilize standard components, themes, and icons)
- **Styling:** MUI `sx` prop or styled-components. Use CSS Modules _only_ if explicit custom overrides are necessary.
- **Code Quality:** Prettier and ESLint configured with standard TypeScript/React rules. I don't want semicolons. I want single quotes for strings.
- **Git Hooks:** Husky configured to run linting, formatting, and unit tests on pre-commit.
- **Testing:** Vitest and React Testing Library for comprehensive unit testing of calculation logic and core UI components.

---

### 2. Core Features & UI Requirements

Build a clean, responsive, and intuitive Dashboard GUI using MUI components that handles:

#### A. Manage People

- Add new participants by name.
- Display a list of current participants.

#### B. CRUD Expenses

- **Create/Update:** Form to add/edit expenses including: Description, Amount, Payer (single person).
- **Read:** A clean data table or list showing all logged expenses.
- **Delete:** Ability to remove an expense.

#### C. Real-Time Balance State Engine

- Implement a state management system (e.g., React Context or custom hooks) that automatically recalculates balances in real-time whenever a person or expense is added, updated, or deleted.
- Display an optimized "Who owes whom how much" breakdown panel based on the accumulated balances.

#### D. Data Persistence & File Import

- **Local Storage:** Automatically sync the application state (people, expenses) to `localStorage` on every change so data persists across page refreshes.
- **File Import:** Provide a file upload button/dropzone. Parse the uploaded file (matching the original Node.js app's format) and seamlessly merge or overwrite it into the current React application state.

---

### 3. Deployment Configuration

- Configure the Vite build pipeline to output to the correct base path for GitHub Pages deployment (e.g., `base: '/<repository-name>/'`).
- Include a GitHub Actions workflow file (`.github/workflows/deploy.yml`) to automatically build and deploy the SPA to the `gh-pages` branch upon pushing to the `main` branch.

---

### 4. Current application

Do not delete the current node app, place it instead into a proper folder. I will take care of deleting it

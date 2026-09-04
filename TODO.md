# Expense Tracker — Project TODO

> A focused, complete expense tracking application built step by step with React, TypeScript, Laravel, and SQL.
>
> **Rule:** Complete the current phase before expanding the scope. Each phase has a clear goal, checklist, verification steps, and explicit Git commit points.

---

# 0. Project Rules

## Core Rules

- [ ] Keep the project scope focused
- [ ] Do not add features outside the roadmap without explicitly changing the scope
- [ ] Build the project step by step rather than copying a complete implementation
- [ ] Understand each feature before implementing it
- [ ] Prefer simple solutions over unnecessary abstractions
- [ ] Keep commits small enough to represent meaningful milestones
- [ ] Do not delete the project because a direction changes
- [ ] Freeze or archive work that is not currently needed
- [ ] Keep the Git history as a record of progress

## Version 1 Scope

The application will eventually support:

- [ ] View expenses
- [ ] Add expenses
- [ ] Edit expenses
- [ ] Delete expenses
- [ ] Categorize expenses
- [ ] Filter expenses
- [ ] Calculate total expenses
- [ ] Persist data in SQL
- [ ] Expose data through a Laravel API
- [ ] Connect the React frontend to the Laravel backend
- [ ] Handle loading and errors
- [ ] Build and deploy the application

## Explicitly Out of Scope for Version 1

- [ ] Authentication
- [ ] User accounts
- [ ] Multiple users
- [ ] Payments
- [ ] Notifications
- [ ] Advanced analytics
- [ ] Complex dashboards
- [ ] Recurring expenses
- [ ] Budget management
- [ ] Mobile application
- [ ] AI features

---

# Phase 1 — Project Initialization

## Goal

Prepare the repository and establish a clean React + TypeScript development environment.

## Repository

- [x] Create Git repository
- [x] Create `README.md`
- [x] Add GitHub remote
- [x] Push initial README commit
- [x] Create React + TypeScript + Vite application
- [x] Verify the application runs successfully
- [x] Remove unnecessary starter files
- [x] Rename project in `package.json` from `vite-project` to `expense-tracker`
- [x] Verify the project still starts after the rename

## Git Commit

After the project is initialized and cleaned:

```bash
git add .
git commit -m "chore: initialize React TypeScript app"
git push
```

- [x] Create this commit

---

# Phase 2 — Project Foundation

## Goal

Create a simple project structure and establish the core expense domain.

## Project Structure

- [x] Create `src/components/`
- [x] Create `src/types/`
- [x] Create `src/data/`
- [x] Create `src/utils/` only if a real need appears
- [x] Avoid unnecessary folders
- [ ] Keep component responsibilities clear

## Expense Domain

- [x] Define the `Expense` interface
- [x] Decide which fields an expense requires
- [x] Decide which fields are optional, if any
- [x] Define supported expense categories
- [x] Decide how category values are represented in TypeScript
- [x] Decide how expense IDs are represented
- [x] Decide how dates are represented
- [x] Create initial sample expenses
- [x] Verify sample data matches the `Expense` type

## Initial Application Shell

- [x] Create the main application layout
- [x] Add the application title
- [x] Add the expense section
- [x] Add a total section placeholder
- [x] Add an empty-state placeholder
- [x] Keep the first layout simple

## Verification

- [x] Application runs with `npm run dev`
- [x] No TypeScript errors
- [x] No unused imports
- [x] No unnecessary starter code remains

## Git Commit

When the project structure and expense model are ready:

```bash
git add .
git commit -m "feat: add expense domain model and app foundation"
git push
```

- [x] Create this commit

---

# Phase 3 — Expense List

## Goal

Display existing expenses in a clear and reusable list.

## Components

- [x] Create `ExpenseList`
- [x] Create `ExpenseItem`
- [x] Define props for `ExpenseList`
- [x] Define props for `ExpenseItem`
- [x] Pass expense data through props
- [x] Render the expense collection with `.map()`
- [x] Use a stable expense ID for React `key`

## Expense Display

- [x] Display expense person
- [x] Display amount
- [x] Display category
- [x] Format the amount consistently
- [ ] Make each expense visually distinguishable

## Empty State

- [x] Detect an empty expense list
- [x] Display a useful empty-state message
- [x] Verify the empty state does not break the layout

## Verification

- [x] Multiple expenses render correctly
- [x] Each expense displays the correct data
- [x] Keys are stable and unique
- [x] Empty list renders correctly
- [x] No console warnings related to list rendering

## Git Commit

When the expense list is working:

```bash
git add .
git commit -m "feat: add expense list"
git push
```

- [x] Create this commit

---

# Phase 4 — Add Expense

## Goal

Allow users to create a new expense through a form.

## Expense Form

- [x] Create `ExpenseForm`
- [x] Add person input
- [x] Add amount input
- [x] Add category select
- [x] Add submit button
- [x] Use semantic HTML form elements

## Form State

- [x] Create state for form fields
- [x] Decide whether to use one state object or separate states
- [x] Handle input changes
- [x] Type form event handlers correctly
- [x] Handle category changes
- [x] Handle form submission
- [x] Prevent the browser's default submit behavior

## Creating an Expense

- [x] Build the new expense object
- [x] Generate a unique expense ID
- [x] Add the new expense to application state
- [x] Update the visible expense list
- [x] Reset the form after successful submission

## Validation

- [x] Prevent an empty person
- [x] Prevent an invalid amount
- [x] Prevent a missing category and check that turns to other
- [x] Handle missing/empty category according to the business rule
- [x] Display useful validation feedback
- [x] Verify invalid data does not enter the expense list

## Data Flow

- [x] Decide where the source of truth for expenses lives
- [x] Pass the required callback from parent to form
- [x] Type the callback prop correctly
- [x] Keep form presentation separate from expense collection state where appropriate

## Verification

- [x] Create a valid expense
- [x] Confirm it appears in the list
- [x] Confirm all entered values are correct
- [x] Confirm the form resets
- [x] Test invalid inputs
- [x] Test multiple new expenses

## Git Commit

When adding a new expense works:

```bash
git add .
git commit -m "feat: add expense form"
git push
```

- [x] Create this commit

---

# Phase 5 — Delete Expense

## Goal

Allow users to remove an existing expense.

## Delete Flow

- [x] Add a delete button to `ExpenseItem`
- [x] Create the delete handler
- [x] Decide where deletion state logic belongs
- [x] Pass a delete callback through props
- [x] Type the callback prop correctly
- [x] Identify the expense by ID
- [x] Remove only the selected expense from state

## Verification

- [x] Delete one expense
- [x] Verify the correct expense disappears
- [x] Verify other expenses remain
- [x] Delete the first expense
- [x] Delete the last expense
- [x] Delete until the list is empty
- [x] Verify the empty state appears

## Git Commit

```bash
git add .
git commit -m "feat: add expense deletion"
git push
```

- [x] Create this commit

---

# Phase 6 — Expense Total

## Goal

Calculate and display total spending.

## Total Calculation

- [ ] Calculate the total from the current expense collection
- [ ] Decide where derived total logic should live
- [ ] Display the total amount
- [ ] Format the total consistently
- [ ] Handle an empty expense list correctly

## Verification

- [ ] Verify total with zero expenses
- [ ] Verify total with one expense
- [ ] Verify total with multiple expenses
- [ ] Add an expense and verify the total updates
- [ ] Delete an expense and verify the total updates
- [ ] Confirm the total is calculated from current data

## Git Commit

```bash
git add .
git commit -m "feat: add expense total calculation"
git push
```

- [ ] Create this commit

---

# Phase 7 — Categories and Filtering

## Goal

Allow users to filter expenses by category.

## Category Definition

- [ ] Define the supported category values
- [ ] Use the same category definition in the form
- [ ] Use the same category definition in filtering
- [ ] Prevent inconsistent category strings
- [ ] Display categories consistently

## Filter UI

- [ ] Create a category filter control
- [ ] Add an `All` option
- [ ] Display every supported category
- [ ] Handle filter changes
- [ ] Type the filter state correctly

## Filtering Logic

- [ ] Filter expenses by the selected category
- [ ] Preserve the original expense collection
- [ ] Display the filtered collection
- [ ] Handle the `All` category
- [ ] Handle a category with no matching expenses
- [ ] Keep filtering logic understandable and maintainable

## Total Behavior

- [ ] Decide whether total represents all expenses or filtered expenses
- [ ] Implement the chosen behavior consistently
- [ ] Verify the result manually

## Verification

- [ ] Filter by each category
- [ ] Select `All`
- [ ] Test a category with no matching expenses
- [ ] Add an expense and test the filter
- [ ] Delete an expense and test the filter
- [ ] Verify total behavior

## Git Commit

When category filtering works:

```bash
git add .
git commit -m "feat: add expense categories and filtering"
git push
```

- [ ] Create this commit

---

# Phase 8 — Frontend MVP Completion

## Goal

Finish the first complete frontend-only version.

At the end of this phase, the application must be usable without a backend.

## MVP Features

- [ ] View expenses
- [ ] Add expense
- [ ] Delete expense
- [ ] Calculate total
- [ ] Categorize expenses
- [ ] Filter expenses
- [ ] Validate form input
- [ ] Handle empty states
- [ ] Handle basic error states where relevant

## Component Review

- [ ] Review `App` responsibility
- [ ] Review `ExpenseList` responsibility
- [ ] Review `ExpenseItem` responsibility
- [ ] Review `ExpenseForm` responsibility
- [ ] Review filter responsibility
- [ ] Confirm state lives at the appropriate level
- [ ] Confirm props have meaningful names
- [ ] Confirm callback props have clear names
- [ ] Remove components that have no real responsibility
- [ ] Avoid premature abstractions

## TypeScript Review

- [ ] Review all interfaces
- [ ] Review callback types
- [ ] Review event handler types
- [ ] Remove avoidable `any`
- [ ] Remove incorrect or overly broad types
- [ ] Confirm data models match actual usage

## Code Quality

- [ ] Remove unused imports
- [ ] Remove dead code
- [ ] Remove console debugging
- [ ] Review naming
- [ ] Review component naming
- [ ] Review file naming
- [ ] Review duplicated logic
- [ ] Keep formatting consistent

## Verification

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run `npm run dev`
- [ ] Manually test every MVP feature
- [ ] Fix all TypeScript errors
- [ ] Fix all ESLint errors
- [ ] Check browser console for warnings/errors

## Git Commit

This is the first major milestone:

```bash
git add .
git commit -m "feat: complete expense tracker frontend MVP"
git push
```

- [ ] Create this commit

---

# Phase 9 — Frontend Persistence

## Goal

Keep expenses after a page refresh.

## Local Storage

- [ ] Choose a consistent localStorage key
- [ ] Save expenses to localStorage
- [ ] Load expenses when the app starts
- [ ] Handle missing localStorage data
- [ ] Parse stored JSON safely
- [ ] Handle invalid stored data safely
- [ ] Save changes after adding an expense
- [ ] Save changes after deleting an expense
- [ ] Save changes after editing an expense once editing exists

## Verification

- [ ] Add an expense
- [ ] Refresh the page
- [ ] Confirm the expense remains
- [ ] Delete an expense
- [ ] Refresh the page
- [ ] Confirm deletion persists
- [ ] Test an empty localStorage state
- [ ] Test malformed stored data

## Git Commit

```bash
git add .
git commit -m "feat: persist expenses locally"
git push
```

- [ ] Create this commit

---

# Phase 10 — Laravel Backend Setup

## Goal

Introduce a real backend while keeping the frontend contract clear.

## Backend Project

- [ ] Create the Laravel backend project
- [ ] Verify Laravel installation
- [ ] Configure the local environment
- [ ] Verify the Laravel development server starts
- [ ] Verify a test route works
- [ ] Decide backend/frontend directory structure
- [ ] Keep frontend and backend responsibilities separate

## API Design

Define the API before implementation.

Planned endpoints:

```text
GET    /api/expenses
POST   /api/expenses
GET    /api/expenses/{expense}
PUT    /api/expenses/{expense}
DELETE /api/expenses/{expense}
```

## API Contract

- [ ] Define request shape for creating an expense
- [ ] Define request shape for updating an expense
- [ ] Define response shape
- [ ] Define validation errors
- [ ] Define not-found behavior
- [ ] Define success status codes
- [ ] Define error status codes
- [ ] Keep the API contract predictable

## Laravel Structure

- [ ] Create API routes
- [ ] Create `ExpenseController`
- [ ] Create request validation structure
- [ ] Create response structure
- [ ] Keep controller responsibilities clear

## Verification

- [ ] Start Laravel server
- [ ] Verify API routes are reachable
- [ ] Verify JSON responses work
- [ ] Verify invalid requests are handled predictably

## Git Commit

```bash
git add .
git commit -m "feat: add Laravel expense API"
git push
```

- [ ] Create this commit

---

# Phase 11 — SQL Database

## Goal

Persist expenses in a real relational database.

## Database Choice

- [ ] Choose the SQL database for development
- [ ] Configure Laravel database connection
- [ ] Verify Laravel can connect to the database

## Expense Table

Initial structure:

```text
id
title
amount
category
date
created_at
updated_at
```

## Migration

- [ ] Create the expenses migration
- [ ] Define all required columns
- [ ] Choose suitable database column types
- [ ] Add timestamps
- [ ] Run the migration
- [ ] Verify the table exists

## Laravel Model

- [ ] Create the `Expense` model
- [ ] Define mass-assignable fields
- [ ] Configure casts where appropriate
- [ ] Verify model/database mapping

## Controller Integration

- [ ] Read expenses from the database
- [ ] Create expenses in the database
- [ ] Read a single expense
- [ ] Update an expense
- [ ] Delete an expense
- [ ] Handle missing records
- [ ] Validate incoming data

## Verification

- [ ] Create an expense through the API
- [ ] Confirm the record exists in SQL
- [ ] Retrieve the record
- [ ] Update the record
- [ ] Delete the record
- [ ] Confirm deletion in SQL
- [ ] Verify invalid input is rejected

## Git Commit

```bash
git add .
git commit -m "feat: add SQL persistence for expenses"
git push
```

- [ ] Create this commit

---

# Phase 12 — Connect React to Laravel API

## Goal

Make the backend and frontend work together.

## API Service Layer

- [ ] Create a frontend API service layer
- [ ] Create `getExpenses`
- [ ] Create `createExpense`
- [ ] Create `deleteExpense`
- [ ] Create `getExpense` if the UI needs it
- [ ] Create `updateExpense` when editing is implemented
- [ ] Keep HTTP logic separate from UI components where appropriate

## Fetching Expenses

- [ ] Load expenses from the Laravel API
- [ ] Store API data in frontend state
- [ ] Display a loading state
- [ ] Handle a failed GET request
- [ ] Display an error message when appropriate

## Creating Expenses

- [ ] Submit form data to the API
- [ ] Wait for API success
- [ ] Add returned expense to the UI or refetch the list
- [ ] Handle validation errors from Laravel
- [ ] Handle network/server errors
- [ ] Prevent duplicate submissions

## Deleting Expenses

- [ ] Send delete request
- [ ] Wait for API success
- [ ] Update the UI
- [ ] Handle delete failures
- [ ] Prevent inconsistent frontend state

## Remove Local Storage as Source of Truth

- [ ] Stop using localStorage as the primary data source
- [ ] Confirm SQL is now the source of truth
- [ ] Remove obsolete persistence logic
- [ ] Keep only logic that still has a clear purpose

## Verification

- [ ] Load data from SQL through Laravel
- [ ] Create an expense from React
- [ ] Confirm it appears in SQL
- [ ] Delete an expense from React
- [ ] Confirm it is deleted from SQL
- [ ] Refresh the browser and confirm data persists
- [ ] Test API failure states

## Git Commit

```bash
git add .
git commit -m "feat: connect frontend to Laravel API"
git push
```

- [ ] Create this commit

---

# Phase 13 — Edit Expense

## Goal

Allow users to modify an existing expense.

## Edit UI

- [ ] Add an edit button
- [ ] Decide whether to reuse `ExpenseForm`
- [ ] Load an existing expense into the form
- [ ] Distinguish create mode from edit mode
- [ ] Change the form title/button text when editing
- [ ] Populate all editable fields

## Edit Logic

- [ ] Create an edit handler
- [ ] Submit updated data
- [ ] Send a `PUT` request
- [ ] Update the database
- [ ] Update frontend state after success
- [ ] Handle validation errors
- [ ] Handle API errors
- [ ] Reset the form after successful editing

## Verification

- [ ] Edit title
- [ ] Edit amount
- [ ] Edit category
- [ ] Edit date
- [ ] Verify database record changes
- [ ] Refresh the page
- [ ] Verify changes persist
- [ ] Cancel or exit edit mode cleanly

## Git Commit

```bash
git add .
git commit -m "feat: add expense editing"
git push
```

- [ ] Create this commit

---

# Phase 14 — Loading, Error, and Edge States

## Goal

Make the application behave predictably when operations take time or fail.

## Loading States

- [ ] Loading expenses
- [ ] Creating expense
- [ ] Updating expense
- [ ] Deleting expense
- [ ] Disable relevant controls during operations
- [ ] Prevent duplicate requests

## Error States

- [ ] API unavailable
- [ ] Validation failure
- [ ] Not-found expense
- [ ] Database failure
- [ ] Network failure
- [ ] Unexpected server response

## Empty States

- [ ] No expenses at all
- [ ] No expenses match the active filter
- [ ] Clear messaging for each case

## Recovery

- [ ] Allow the user to retry failed loading when useful
- [ ] Keep successful data visible when an unrelated operation fails where appropriate
- [ ] Avoid silently swallowing errors

## Verification

- [ ] Test slow responses if possible
- [ ] Test failed GET
- [ ] Test failed POST
- [ ] Test failed PUT
- [ ] Test failed DELETE
- [ ] Test validation errors
- [ ] Test empty list
- [ ] Test empty filtered list

## Git Commit

```bash
git add .
git commit -m "feat: improve loading and error handling"
git push
```

- [ ] Create this commit

---

# Phase 15 — UI and UX Polish

## Goal

Make the application clean, understandable, and presentable.

## Layout

- [ ] Improve page spacing
- [ ] Improve section hierarchy
- [ ] Improve form layout
- [ ] Improve expense list layout
- [ ] Improve total display
- [ ] Improve filter layout
- [ ] Ensure the interface is visually coherent

## Controls

- [ ] Improve button labels
- [ ] Improve button states
- [ ] Improve form labels
- [ ] Improve validation messages
- [ ] Improve loading indicators
- [ ] Improve error messages

## Accessibility

- [ ] Associate labels with form controls
- [ ] Use semantic HTML
- [ ] Ensure buttons have clear labels
- [ ] Check keyboard usability
- [ ] Check focus behavior
- [ ] Check readable contrast

## Responsive Design

- [ ] Test desktop layout
- [ ] Test narrow viewport
- [ ] Fix overflow issues
- [ ] Make forms usable on smaller screens
- [ ] Make expense list readable on smaller screens

## Code Quality

- [ ] Review component names
- [ ] Review variable names
- [ ] Review prop names
- [ ] Remove duplicate logic
- [ ] Remove dead code
- [ ] Remove unnecessary abstractions
- [ ] Review TypeScript types
- [ ] Remove avoidable `any`
- [ ] Run ESLint
- [ ] Run production build

## Git Commit

```bash
git add .
git commit -m "refactor: polish expense tracker UI and code quality"
git push
```

- [ ] Create this commit

---

# Phase 16 — Final Testing

## Goal

Verify the complete application before release.

## Expense Creation

- [ ] Create a valid expense
- [ ] Create multiple expenses
- [ ] Reject empty title
- [ ] Reject invalid amount
- [ ] Reject missing category
- [ ] Reject missing date
- [ ] Confirm database record is correct

## Expense Display

- [ ] Verify all expenses are displayed
- [ ] Verify title
- [ ] Verify amount
- [ ] Verify category
- [ ] Verify date
- [ ] Verify formatting

## Expense Editing

- [ ] Edit title
- [ ] Edit amount
- [ ] Edit category
- [ ] Edit date
- [ ] Verify database update
- [ ] Verify frontend update

## Expense Deletion

- [ ] Delete one expense
- [ ] Delete multiple expenses
- [ ] Delete the final expense
- [ ] Verify database deletion
- [ ] Verify frontend state

## Filtering

- [ ] Filter by each category
- [ ] Select `All`
- [ ] Test category with no matches
- [ ] Add expense while filter is active
- [ ] Delete expense while filter is active
- [ ] Edit expense while filter is active
- [ ] Verify total behavior

## Persistence

- [ ] Refresh browser
- [ ] Confirm data remains
- [ ] Confirm edits remain
- [ ] Confirm deletions remain

## Error Handling

- [ ] Test backend unavailable
- [ ] Test invalid request
- [ ] Test missing expense
- [ ] Test server error
- [ ] Test network error
- [ ] Verify useful messages appear

## Build and Quality

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Verify no TypeScript errors
- [ ] Verify no ESLint errors
- [ ] Verify no important console warnings
- [ ] Review README
- [ ] Review TODO
- [ ] Review Git status

## Git Commit

```bash
git add .
git commit -m "test: verify complete expense tracker"
git push
```

- [ ] Create this commit

---

# Phase 17 — Deployment Preparation

## Goal

Prepare the project for production deployment.

## Frontend

- [ ] Verify production build
- [ ] Choose frontend hosting
- [ ] Configure production environment variables
- [ ] Configure API base URL
- [ ] Build production frontend
- [ ] Verify frontend can reach production API

## Laravel Backend

- [ ] Choose backend hosting
- [ ] Configure production environment
- [ ] Configure application URL
- [ ] Configure database connection
- [ ] Configure API environment variables
- [ ] Configure CORS correctly
- [ ] Run production migrations
- [ ] Verify API health

## SQL Database

- [ ] Create production SQL database
- [ ] Configure secure database credentials
- [ ] Run migrations
- [ ] Verify tables
- [ ] Verify CRUD operations

## Verification

- [ ] Open production frontend
- [ ] Load expenses
- [ ] Create expense
- [ ] Edit expense
- [ ] Delete expense
- [ ] Filter expenses
- [ ] Refresh the page
- [ ] Confirm database persistence
- [ ] Verify API errors are handled

## Git Commit

```bash
git add .
git commit -m "chore: prepare expense tracker for production"
git push
```

- [ ] Create this commit

---

# Phase 18 — Final Release

## Goal

Declare the first complete version finished.

## Final Application Requirements

- [ ] React frontend works
- [ ] TypeScript build passes
- [ ] Laravel API works
- [ ] SQL database works
- [ ] React communicates with Laravel
- [ ] Expenses can be created
- [ ] Expenses can be displayed
- [ ] Expenses can be edited
- [ ] Expenses can be deleted
- [ ] Expenses can be filtered
- [ ] Total expenses are calculated correctly
- [ ] Loading states work
- [ ] Error handling works
- [ ] Empty states work
- [ ] Production build works
- [ ] Application is deployed
- [ ] README is updated
- [ ] TODO is fully reviewed
- [ ] Git working tree is clean
- [ ] Final release commit is created

## Final Commit

```bash
git add .
git commit -m "release: complete expense tracker"
git push
```

- [ ] Create this commit

---

# Commit History

The intended major Git milestones are:

- [ ] `chore: initialize React TypeScript app`
- [ ] `feat: add expense domain model and app foundation`
- [ ] `feat: add expense list`
- [ ] `feat: add expense form`
- [ ] `feat: add expense deletion`
- [ ] `feat: add expense total calculation`
- [ ] `feat: add expense categories and filtering`
- [ ] `feat: complete expense tracker frontend MVP`
- [ ] `feat: persist expenses locally`
- [ ] `feat: add Laravel expense API`
- [ ] `feat: add SQL persistence for expenses`
- [ ] `feat: connect frontend to Laravel API`
- [ ] `feat: add expense editing`
- [ ] `feat: improve loading and error handling`
- [ ] `refactor: polish expense tracker UI and code quality`
- [ ] `test: verify complete expense tracker`
- [ ] `chore: prepare expense tracker for production`
- [ ] `release: complete expense tracker`

---

# Definition of Done

The Expense Tracker is DONE when all required items below are checked:

- [ ] The frontend is complete
- [ ] The backend is complete
- [ ] The SQL database is connected
- [ ] CRUD operations work
- [ ] Filtering works
- [ ] Total calculation works
- [ ] Validation works
- [ ] Loading states work
- [ ] Error handling works
- [ ] The production build works
- [ ] The application is deployed
- [ ] The README documents the project accurately
- [ ] The final Git history contains the intended milestones
- [ ] No unfinished core feature remains

# Project Completion

**Status:** In Development

**Final target:** A small, complete, deployed expense tracking application.

**Primary principle:** Finish the defined project before expanding it.

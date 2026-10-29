# Order submission review

## Interview: 15 minutes

Customers occasionally report duplicate orders. The team suspects repeated
clicks, but has not confirmed the cause.

Review the pull request adding order submission in Angular and ASP.NET Core.
The development proxy maps `/api/orders` to the backend `/orders` route.
The database is shared by all backend instances.

Spend approximately 3 minutes reading, 8 minutes discussing findings, and
4 minutes outlining a solution and tests. No implementation is required.

Please explain:

1. How duplicates might occur, and what evidence you would collect.
2. Which frontend, API, and database changes you recommend and why.
3. What the client should observe when it repeats an order submission,
   including after an uncertain network outcome.
4. The most important tests for your proposed solution.

Ask questions and state assumptions. Prioritize correctness over style.
Do not merge the pull request.

## Run locally (optional)

Requirements: .NET 10 SDK, Node.js 20.19+ or 22.12+, npm.

```sh
cd frontend
npm ci
npm run build
cd ../backend
dotnet run --urls http://localhost:5080
```

Open `http://localhost:5080`. The backend serves the compiled frontend
and maps the development `/api` route prefix. SQLite uses `orders.db`
in the backend working directory. This is a small interview fixture, not
a production checkout: authentication, payments, and inventory are out of scope.

## Validation

Run `npm run build` in `frontend` and `dotnet build` in `backend`.
With the server running, `curl -f http://localhost:5080/health` should return
`{"status":"ok"}`. Use a fresh database for independent manual experiments.

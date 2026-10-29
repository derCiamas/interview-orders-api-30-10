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

# lqa-evaluation

## Running the tests
**NOTE:** before running the tests you will need to create a .env file that contains two variables "UN" and "PW". 
These are the username and password, repectively, for the test user. Without this informatoin the test will always fail.

1. Once the repo is cloned:
`npm ci`

2. Create a `.env` file and add `UN` and `PW` to the file with credentials from the assignment instructions

3. Running the tests:
To run the tests in UI mode:
`npx playwright test --ui`

To run the tests in headless mode:
`npx playwright test`

4. Reviewing the results:
`npx playwright show-report`

## Objective
Create a Playwright-driven test suite that leverages data-driven techniques to minimize code duplication and improve scalability. By driving test scenarios from a JSON object, we can dynamically adapt each test case without repeating code, ensuring a clean and maintainable structure as new cases are added.

**Setup and Preparation**
Set up a new project or workspace dedicated to this task.
Ensure Playwright and its necessary dependencies are installed and configured.
Login Automation (Updated 12/2/24)
If you had already completed work using the previous Asana login, you may use this link for instructions.
Implement login automation for Asana using the following credentials:
**Demo App:** https://animated-gingersnap-8cf7f2.netlify.app/
**Email:** admin
**Password:** password123
The script should input these credentials into the login form and submit it successfully.

## Test Case 1
1. Login to Demo App.
2. Navigate to "Web Application."
3. Verify "Implement user authentication" is in the "To Do" column.
4. Confirm tags: "Feature" "High Priority”

## Test Case 2
1. Login to Demo App.
2. Navigate to "Web Application."
3. Verify "Fix navigation bug" is in the "To Do" column.
4. Confirm tags: "Bug"

## Test Case 3
1. Login to Demo App.
2. Navigate to "Web Application."
3. Verify "Design system updates" is in the "In Progress" column.
4. Confirm tags: "Design”

## Test Case 4
1. Login to Demo App.
2. Navigate to "Mobile Application."
3. Verify "Push notification system" is in the "To Do" column.
4. Confirm tags: "Feature”

## Test Case 5
1. Login to Demo App.
2. Navigate to "Mobile Application."
3. Verify "Offline mode" is in the "In Progress" column.
4. Confirm tags: "Feature" & "High Priority”

## Test Case 6
1. Login to Demo App.
2. Navigate to "Mobile Application."
3. Verify "App icon design" is in the "Done" column.
4. Confirm tags: "Design”

# Water Jug Challenge API

## Description

This project is a RESTful API developed in Express and TypeScript to solve the **Water Jug Riddle**. The API allows to calculate the steps required to measure exactly `amount_wanted` gallons using two jugs of capacities `bucket_x` and `bucket_y`.

The implemented algorithm returns the most efficient solution (fewest steps) by comparing two strategies: start by filling bucket X or bucket Y first.

## Algorithm

### Algorithm Description

The algorithm is an implementation based on the use of the basic operations that can be performed on two buckets:
- **Fill** a bucket.
- **Empty** a bucket.
- **Transfer** water from one bucket to another.

The two solutions obtained are compared and the one with the least steps is selected.

### Possible steps:
1. Fill a bucket (X or Y).
2. Empty a bucket (X or Y).
3. Transfer the contents of one bucket to the other.

### Algorithm Complexity

The algorithm has a **time complexity** that is approximately **O(n)**, where `n` is the number of operations needed to reach the solution (depending on the bucket sizes and the value of `amount_wanted`). Although it is not a complete exhaustive search, a sequential exploration of the possible steps to achieve the goal is performed.

The **space complexity** is also **O(n)**, since the steps performed until the solution is found are stored.

## Installation

### Prerequisites

- Node.js (version >= 20)
- npm (version >= 6)

### Steps to install and run the project

1. Clone the repository:

```bash
git clone https://github.com/angeldfreitez/chicks-group-back.git
```

2. Install the dependencies

```bash
nvm use
npm install
```
3. Run the project

```bash
npm start
```

This will start the server at http://localhost:3000.

### Routes
```bash
localhost:3000/api/water-jug/solve
```
#### Payload
```json
{
"x_capacity": 3,
"y_capacity": 4,
"z_amount_wanted": 4
}
```
#### Response
```json
{
"steps": [
{
"step": 1,
"bucketX": 0,
"bucketY": 4,
"action": "Fill bucket Y || SOLVED"
}
],
"resume": "Solution found by prioritizing bucketY, in 1 steps. Final state: bucketX=0, bucketY=4"
}
```
## Project Structure
The project follows a modular structure for easy maintenance and scalability. Here is a brief explanation of how it is organized:

```
water-jug-challenge/
│
├── src/
│ ├── controllers/
│ │ └── water-jug.controller.ts
│ ├── entities/
│ │ └── index.ts
│ ├── services/
│ │ └── water-jug-solver.service.ts
│ ├── routes/
│ │ └── water-jug.route.ts
│ └── app.ts
│
├── tests/
│ ├── water-jug.controller.spec.ts
│ └── water-jug.service.spec.ts
│
├── node_modules/
├── .gitignore
├── .nvmrc
├── package.json
├── tsconfig.json
└── README.md

```

## Technologies Used

- **Node.js**: A runtime environment for JavaScript that allows building server-side applications. Used to execute backend logic and handle HTTP requests.

- **Express.js**: A minimalist framework for Node.js that simplifies the creation of RESTful APIs. It is used to define API routes and handle HTTP requests and responses efficiently.

- **TypeScript**: A typed superset of JavaScript that adds static typing, which makes it easier to develop scalable and more secure applications, helping to prevent type errors during development.

- **Jest**: A testing framework for JavaScript and TypeScript that is used to perform unit testing on the project. Jest allows you to write automated tests that ensure that your code works as expected.

- **Supertest**: A module for HTTP testing in Node.js. It is used in conjunction with Jest to perform integration testing of Express server routes and endpoints, allowing you to simulate HTTP requests and verify responses without having to start the server.

- **ts-node**: A TypeScript runner that allows you to run `.ts` files directly without having to compile to JavaScript. Used during development to run the server without the need to generate JavaScript code manually.

- **nodemon**: A tool that monitors changes to project files and automatically restarts the server. It makes the workflow easier during development as there is no need to manually restart the server after each change.
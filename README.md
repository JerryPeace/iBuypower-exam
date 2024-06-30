### Setup & Running Instructions

### 1. Running the UI service

  #### Using Docker Compose (Recommended)
  Clone the repository from GitHub and navigate to the root directory of the app.
  You can review the docker-compose.yml file for detailed docker configurations.

  ```
  docker-compose up
  open http://localhost:3000/iBuypower

  docker-compose stop
  ```

  #### Development by local
  Clone the repository from GitHub and navigate to the root directory of the app.

  #### Run NEXT.JS server
  ```
  pnpm install
  pnpm run start:local
  open http://localhost:3000/iBuypower
  ```

### 2. Running App Tests
  I use Jest and React Testing Library, React Testing Library is a JavaScript testing utility built specifically to test React components. It simulates user interactions on isolated components and asserts their outputs to ensure the UI is behaving correctly.
  ```
  pnpm run test
  ```

# CI workflow for Node.js App
### This is a test project for **Back-End Test Automation** October 2024 Course @ SoftUni

[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF.svg)](https://github.com/features/actions)
[![Jenkins](https://img.shields.io/badge/CI-Jenkins-D24939.svg)](https://www.jenkins.io/)

---
## Overview
This repository contains a Node.js app. The project focuses on building a CI workflow using GitHub Actions to automate testing of a pre-existing Node.js application ("Student Registry").

## Project Goals:

- Implement a CI workflow in GitHub Actions and Jenkins.
- Configure the workflow to run tests on the "Student Registry" application.
- Test the application using multiple Node.js versions.

## Prerequisites:

- Basic understanding of Node.js and testing frameworks.
- Familiarity with GitHub Actions and Jenkins.
  
## Setup:

- Clone this repository.
- Install dependencies and run the application:
  
  ``` sh
  npm install
  npm start
  ```
  
- Review the existing "Student Registry" application code.
  
## Running Tests:

The CI workflow is already defined in the `.github/workflows` directory. Pushing your code to the main branch will trigger the workflow automatically. The workflow will:

- Set up the environment.
- Install dependencies.
- Run tests for the "Student Registry" application on two different Node.js versions.

## Jenkins Setup

If using Jenkins for CI, follow these steps to integrate and run tests automatically:

1. **Install Jenkins**: Download and install Jenkins from the [official Jenkins site](https://www.jenkins.io/).
   
2. **Create a New Job**:
   - Set up a new Pipeline or Freestyle project.
   - Connect to the repository by setting up Git SCM in the job configuration.
   
3. **Configure Build Steps**:
   - Add build steps to install dependencies and run tests.
   - Example build script:
     ```sh
     npm install
     npm test
     ```

4. **Schedule Builds**:
   - Use the "Build Triggers" section to set up automatic builds on repository changes or specific schedules.
   
5. **Post-Build Actions**:
   - Configure actions like reporting or notifications to integrate with GitHub or other tools.

Using Jenkins along with GitHub Actions allows more flexibility in customizing the CI pipeline, especially for larger or distributed testing scenarios.

## Additional Notes:

- This project serves as a demonstration of CI/CD concepts using a pre-existing application.
- The specific details of the "Student Registry" application are not covered in this repository.

## Contributing
Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request.

## License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please open an issue in the repository.

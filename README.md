# OpenCart Product Comparison Automation Project
## Introduction
This project automates the product comparison functionality of the OpenCart web application using Cypress. The product comparison feature allows users to compare multiple products based on attributes like price and specifications. This automation ensures that the comparison feature works as expected and provides users with accurate information.
## Project Type
Testing Automation using Cypress
## Deployed App
Since this project is about testing and not deploying a live application, the OpenCart web application is used for testing purposes:  
[Opencart web application](https://tutorialsninja.com/demo/ )
## Directory Structure
opencart-comparison-automation/  
├── cypress/  
│   ├── integration/  
│   ├── fixtures/  
│   ├── support/  
│   └── reports/  
├── node_modules/  
|── readme.md
├── cypress.json  
├── package.json  
## Video Walkthrough of the Project
[Link to the video](https://youtu.be/-T8wZ2Bf8Uo)
## Features
Key features of the automation:

Automatically adding multiple products to the comparison list.  
Verifying that products are correctly displayed on the comparison page.  
Checking that attributes like price, name, and specifications are shown accurately.  
Removing a product from the comparison and ensuring it updates the comparison page.  
## Design Decisions or Assumptions
###Design Pattern:  
The project follows the Page Object Model (POM) design pattern to ensure modularity and reusability of code.  
### Assumptions:
The penCart web application is functional and stable.  
The comparison page does not have a fixed product limit.  
Products added for comparison are always available on the site.  
## Installation & Getting Started
To get the project up and running on your local machine:   

Step-1: Clone the repository:  
Step-2: Navigate to the project directory:  
Step-3: Install the dependencies:  
Step-4: Run Cypress in headless mode:  
npx cypress run
Open Cypress in interactive mode:  
npx cypress open
## Usage
Once the setup is complete, you can run the tests directly via the Cypress command line or interactive GUI. Example of a typical test flow:

Open the Cypress dashboard.  
Select the test file related to product comparison.  
Run the tests and view results on the GUI or generated HTML reports.  
## Credentials
You don’t need any special credentials to access and test the OpenCart demo site.
## APIs Used
This project does not interact directly with APIs. It focuses on UI-based test automation.
## API Endpoints
Since this is a UI automation project, no API endpoints are used directly.
## Technology Stack
Cypress: The primary tool used for test automation.  
JavaScript: The language used for writing Cypress test scripts.  
Mochawesome: Reporting tool for generating test results in HTML format.  
Page Object Model (POM): Used to structure the test code efficiently, separating page interactions from test logic.  

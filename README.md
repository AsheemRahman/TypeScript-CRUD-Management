# TypeScript-Student-Management

## Overview

This is a CRUD (Create, Read, Update, Delete) application built using TypeScript. It serves as a management system for students, allowing users to perform various operations on student records. The application leverages asynchronous operations to fetch data from a mock API and implements dependency injection for better code organization.

## Features

- **Create** new student records
- **Read** student details
- **Update** existing student information
- **Delete** student records
- Asynchronous operations using Promises and async/await
- Proper error handling
- Dependency injection for class dependencies

## Technologies Used

- TypeScript
- Node.js
- Express

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
   *  git clone https://github.com/AsheemRahman/TypeScript-CRUD-Management.git
2.Navigate to the project directory:
  
   *  cd TypeScript-CRUD-Management.

3.Install the dependencies
   *  npm install

4.Running the Application
To start the application, use the following command:
   * npm start


## API Endpoints
 * GET /api/students - Fetch all students
 * POST /api/students - Create a new student
 * PUT /api/students/:id - Update a student by ID
 * DELETE /api/students/:id - Delete a student by ID

## Usage
* Use a tool like Postman or your browser to interact with the API endpoints.
* You can create, update, or delete student records as needed.

## Error Handling
The application implements proper error handling for API requests. If an error occurs, an appropriate message will be returned.

# Backend Application using NodeJS, Express, PostgreSQL. 

## Overview

This is a NodeJS backend application built with Express and PostgreSQL, implementing CRUD operations on a user table. The application uses UUID to autogenerate user IDs and follows best practices for file structure and code organization.

## Features

* CRUD operations on user table
* Validation for email and password using regex
* UUID autogeneration for user IDs
* PostgreSQL database integration

## Getting Started

### Prerequisites

* NodeJS installed locally
* Railway account created
* Select PostgreSQL and create table with name "users"
* Add column names such as id, email, password

### Steps to Run the App

1. Clone the repository: `git clone https://github.com/NischithIsAFK/Best-practices-file-structure.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following content:
4. DATABASE_URL=your-db-url
5. To run the application- `node index.js`

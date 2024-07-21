# Todo List Application

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Description

This is a full-stack Todo List application that allows users to manage their tasks. The application has a backend built with Laravel and a frontend built with React. Users can create, update, and delete todos, and assign them to different users.

## Features

- User authentication with Sanctum.
- CRUD operations for todos.
- Assign todos to multiple users.
- Pagination for todos.
- Responsive design.

## Technologies Used

- **Backend:** Laravel 11
- **Frontend:** React with Vite, React Router
- **Database:** MySQL
- **Styling:** Tailwind CSS

## Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 19 or higher
- npm or yarn
- MySQL database

## Installation

### Backend Setup

1. Clone this repository
    ```bash
    cd server
    ```

2. Install dependencies
    ```bash
    composer install
    ```

3. Copy the `.env` file and configure the environment variables
    ```bash
    cp .env.example .env
    ```
   Update the `.env` file with your database credentials and other settings.

4. Generate the application key
    ```bash
    php artisan key:generate
    ```

5. Run the database migrations and seeders
    ```bash
    php artisan migrate --seed
    ```

6. Serve the application
    ```bash
    php artisan serve
    ```

### Frontend Setup

1. Clone this repository
    ```bash
    cd client
    ```

2. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file and configure the environment variables
   create `.env` file with your and put the value:
      ```bash
    VITE_API_URL=http://localhost:8000
    ```

5. Start the development server
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

- Navigate to `http://localhost:3000` to access the frontend application.
- Use the authentication flow to log in or register.
- Create, update, delete, and assign todos.

## API Endpoints

### Authentication

- **POST** `/api/login` - Log in a user
- **POST** `/api/register` - Register a new user

### Todos

- **GET** `/api/todos` - Get all todos for the authenticated user
- **POST** `/api/todos` - Create a new todo
- **PUT** `/api/todos/{id}` - Update an existing todo
- **DELETE** `/api/todos/{id}` - Delete a todo

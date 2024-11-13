
# Contact Manager App

A robust, secure application built with Node.js, Express, and MongoDB that simplifies contact management with complete CRUD operations and JWT authorization. The application follows the MVC architecture to ensure a structured and scalable codebase, providing a secure and user-friendly experience for managing contacts.

## Project Overview
This project follows a modular structure, promoting maintainability and scalability. Here's a breakdown of the key components:

* Express Server: The core application server handling routing and HTTP requests.
* Express Routers: Organize API endpoints into logical modules, ensuring separation of concerns.
* Async Handlers: Leverage asynchronous functions for efficient handling of I/O operations.
* Middleware: Enhance the application's functionality by intercepting requests and responses.
* MongoDB Setup: Utilizes MongoDB for data persistence.
* Mongoose Schema: Defines the structure and validation rules for contact data.
* CRUD API: Implements Create, Read, Update, and Delete operations for managing contacts.
* User Authentication: Provides secure user registration and login mechanisms.
* JWT Tokens: Employs JSON Web Tokens (JWT) for secure access control.
* Relationships: Enables the creation of relationships between contacts (optional).
* Protected Routes: Enforces authorization by requiring valid JWT tokens for accessing sensitive data.

## Tech Stack
* Backend: Node.js, Express
* Database: MongoDB
* Authentication: JSON Web Tokens (JWT)
* Architecture: MVC

## Getting Started
Follow these instructions to set up the project locally.

# Prerequisites
* Node.js (v14 or higher)
* MongoDB (local or cloud instance)

# Installation
1. Clone the repository
   git clone https://github.com/RAYNZ13/Contact-Manager-App.git
   cd Contact-Manager-App

| CRUD Action | HTTP Method | Endpoint          |
| :-------- | :------- | :------------------------- |
| `Get All Contacts` | `GET` | /api/contacts |
| `Get Single Contacts` | `GET` | /api/contacts/:id |
| `Create Contacts` | `POST` | /api/contacts |
| `Update Contacts` | `PUT` | /api/contacts/:id |
| `Delete Contacts` | `DELETE` | /api/contacts/:id |





# Contact Manager App

This Node.js and Express.js application provides a robust platform for managing your contacts. It offers a RESTful API with CRUD operations, user authentication, and authorization features.

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
## API Reference


```http
  GET /api/contacts
```

| CRUD Action | HTTP Method | Endpoint          |
| :-------- | :------- | :------------------------- |
| `Get All Contacts` | `GET` | /api/contacts |
| `Get Single Contacts` | `GET` | /api/contacts/:id |
| `Create Contacts` | `POST` | /api/contacts |
| `Update Contacts` | `PUT` | /api/contacts/:id |
| `Delete Contacts` | `DELETE` | /api/contacts/:id |




# **E-commerce API Documentation**

## **Overview**
This project is an e-commerce API built using Node.js and Prisma. It is designed to manage product inventory, user orders, and authentication for an e-commerce platform. The API includes a variety of functionalities including CRUD operations for users, products, and orders, authentication with JWT tokens, rate limiting, error handling, and more.

### **Tech Stack**
- **Node.js** for the server-side framework.
- **Prisma** ORM to interact with PostgreSQL database.
- **JWT** for user authentication and authorization.
- **Rate Limiting** for preventing abuse of the API.
- **CSV Parsing** for migrating legacy system data.

---

## **Installation and Setup**

### **1. Clone the repository**
```bash
git clone https://github.com/Dominicmburu/E-ccomerce-backend.git
```

### **2. Install Dependencies**
```bash
pnpm install
```

### **3. Set up environment variables**
Create a `.env` file at the root of the project with the following variables:

```bash
DATABASE_URL=
JWT_SECRET=
```

### **4. Run the Database Migrations**
Before running the app, migrate your database using Prisma:

```bash
npx prisma migrate deploy
```

### **5. Start the Server**
Run the server with the following command:

```bash
pnpm run dev
```

---

## **Features & Functionality**

### **1. Authentication & Authorization (JWT)**

- **Login**: Users can log in by providing their username and password. If valid, a JWT token will be generated and returned to the client.
- **Register**: New users can create an account by providing their username, email, and password.
- **Protected Routes**: JWT authentication is required for accessing protected routes such as creating orders and managing products.

### **2. CRUD Operations**

- **Products**:
  - **Get all products**: Fetch a list of all products.
  - **Get a product by ID**: Fetch product details by product ID.
  - **Add a new product**: Create a new product by providing `name`, `price`, and `stock`.
  - **Update a product**: Modify product details.
  - **Delete a product**: Remove a product from the database.

- **Users**:
  - **Get user by ID**: Fetch user details using their ID.
  - **Update user details**: Update username or email.

- **Orders**:
  - **Create an order**: Place a new order with products and quantity.
  - **Get all orders**: Fetch a list of all orders.
  - **Get an order by ID**: Fetch order details by order ID.

### **3. Rate Limiting**
The API is protected with rate limiting to prevent abuse. This ensures that users can only make a certain number of requests per minute.

### **4. Data Migration from Legacy System (CSV)**

A script (`migrationScript.js`) is provided to migrate data from a legacy system. This script reads a CSV file (`legacy_data.csv`) and inserts product and user records into the database.

---

## **API Endpoints**

### **Authentication Routes**

- **POST /auth/register**: Register a new user
  - Request body: `{ "username": "string", "email": "string", "password": "string" }`
  - Response: `{ "message": "User created successfully" }`

- **POST /auth/login**: Log in an existing user
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: `{ "message": "Login successful", "token": "jwt-token" }`

---

### **Product Routes**

- **GET /products**: Get all products
  - Response: `[{ "id": 1, "name": "Product 1", "price": 20.00, "stock": 100 }]`

- **POST /products**: Create a new product
  - Request body: `{ "name": "string", "price": "number", "stock": "number" }`
  - Response: `{ "id": 1, "name": "Product 1", "price": 20.00, "stock": 100 }`

- **GET /products/:id**: Get product details by ID
  - Response: `{ "id": 1, "name": "Product 1", "price": 20.00, "stock": 100 }`

- **PUT /products/:id**: Update product details
  - Request body: `{ "name": "string", "price": "number", "stock": "number" }`
  - Response: `{ "id": 1, "name": "Updated Product", "price": 25.00, "stock": 80 }`

- **DELETE /products/:id**: Delete a product
  - Response: `{ "message": "Product deleted successfully" }`

---

### **Order Routes**

- **POST /orders**: Create a new order
  - Request body: `{ "userId": "number", "productId": "number", "quantity": "number" }`
  - Response: `{ "id": 1, "totalPrice": 40.00, "status": "pending" }`

- **GET /orders**: Get all orders
  - Response: `[{ "id": 1, "userId": 1, "totalPrice": 40.00, "status": "pending" }]`

- **GET /orders/:id**: Get order details by ID
  - Response: `{ "id": 1, "userId": 1, "totalPrice": 40.00, "status": "pending" }`

---

### **User Routes**

- **GET /users/:id**: Get user details by ID
  - Response: `{ "id": 1, "username": "User1", "email": "user1@example.com" }`

- **PUT /users/:id**: Update user details
  - Request body: `{ "username": "string", "email": "string" }`
  - Response: `{ "id": 1, "username": "UpdatedUser", "email": "updateduser@example.com" }`

---

## **Middleware**

- **authMiddleware.js**: Protects routes by verifying the JWT token.
- **errorHandler.js**: Global error handler for catching and responding to errors.
- **rateLimitMiddleware.js**: Applies rate limiting to prevent abuse of the API.

---

## **Database Schema (Prisma)**

The project uses Prisma ORM to interact with a PostgreSQL database. The schema defines the following models:

- **User**:
  - `id`: Primary key (auto-increment).
  - `username`: String (unique).
  - `email`: String (unique).
  - `password`: String (hashed password).

- **Product**:
  - `id`: Primary key (auto-increment).
  - `name`: String (product name).
  - `price`: Decimal (product price).
  - `stock`: Integer (number of items in stock).
  - `createdAt`: Timestamp (created date).
  - `updatedAt`: Timestamp (updated date).

- **Order**:
  - `id`: Primary key (auto-increment).
  - `totalPrice`: Decimal (total price of the order).
  - `status`: String (order status such as "pending").
  - `createdAt`: Timestamp (created date).
  - `updatedAt`: Timestamp (updated date).

---

## **Testing**
Make sure to test the API using tools like **Postman**. You can test various endpoints by sending requests and verifying responses.

---



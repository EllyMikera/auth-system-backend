# 🔐 Auth System Backend

A RESTful authentication API built with **Node.js**, **Express.js**, **MySQL**, and **JSON Web Tokens (JWT)**. This backend handles user registration, user authentication, JWT verification, and retrieval of authenticated user profile information.

> **Note:** This repository contains **only the backend** of the application. It is designed to be consumed by a separate React frontend.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Database Configuration](#-database-configuration)
- [Running the Server](#-running-the-server)
- [Authentication Flow](#-authentication-flow)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 📌 Overview

This project provides the backend API for a user authentication system. It allows users to register, log in securely, and access protected resources using JSON Web Tokens (JWT).

The API communicates with a MySQL database to store user information and authenticate requests from the frontend application.

---

## ✨ Features

- User registration
- User login
- JWT-based authentication
- Protected profile endpoint
- MySQL database integration
- RESTful API architecture
- Environment variable configuration
- Middleware-based authentication

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- cors
- mysql2

---

## 📁 Project Structure

```text
authproject/
│
├── config/
├── controllers/
├── middleware/
├── routes/
├── .gitignore
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate a user and return a JWT |
| GET | `/profile` | Retrieve the authenticated user's profile (Protected) |

---

## 🚀 Getting Started

Follow these instructions to run the backend locally.

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/EllyMikera/auth-system-backend.git
```

### 2. Navigate into the project directory

```bash
cd auth-system-backend
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name

JWT_SECRET=your_secret_key
```

> **Important:** Never commit your `.env` file to GitHub.

---

## 🗄 Database Configuration

Create a MySQL database and update the environment variables with your database credentials.

Ensure that your users table matches the schema expected by the application before starting the server.

---

## ▶ Running the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will typically run on:

```
http://localhost:5000
```

---

## 🔑 Authentication Flow

1. A new user registers through the `/register` endpoint.
2. User credentials are stored securely in the MySQL database.
3. The user logs in through the `/login` endpoint.
4. Upon successful authentication, the server generates a JSON Web Token (JWT).
5. The client includes the JWT in subsequent requests.
6. Protected routes, such as `/profile`, verify the JWT before granting access.

---

## 🔮 Future Improvements

- Refresh token implementation
- Email verification
- Password reset functionality
- Role-based authorization
- Request rate limiting
- Docker support

---

## 👤 Author

**Elly Mikera**

- GitHub: https://github.com/EllyMikera
- LinkedIn: https://www.linkedin.com/in/elly-mikera-a1b52836a

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. It helps others discover the project and support its development
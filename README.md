# Fullstack-eCommerce-Backend
This project aims to develop the back end of an eCommerce site for one of Fullstack Solutions' clients. The eCommerce site will serve as a platform for users to browse and purchase products online. The back end will handle various functionalities such as user authentication, product management, order processing, and more.

#Instructions for Local Setup:

# Clone the Repository:

1. git clone <repository-url>

# Install Dependencies:

2. cd <project-folder>
npm install

# Set Up Environment Variables:

3. Create a .env file in the root directory.
Define the required environment variables such as database connection details, JWT secret key, etc.
makefile

DB_HOST=<database-host>
DB_USER=<database-username>
DB_PASSWORD=<database-password>
DB_NAME=<database-name>
JWT_SECRET=<jwt-secret-key>

# Database Setup:

### Database Schema

```sql
-- users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- products table
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- order_items table to represent the relationship between orders and products
CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);


Set up a PostgreSQL database according to the defined schema.
Run any database migrations or seed data scripts, if applicable.

# Start the Server:

npm start

# Access the API:

The server should now be running locally at http://localhost:3000.
You can use API testing tools like Postman to send requests to the endpoints.

# API Endpoint Documentation:

Refer to the provided Postman collection file (<collection-file-name>.json) for sample requests and documentation of API endpoints.
Alternatively, you can use cURL commands to interact with the API from the command line.

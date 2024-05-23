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

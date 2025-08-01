# Flight-Reservation-System

This is a **backend-focused aeroplane reservation system** built using **Node.js**, **Express.js**, and **MySQL**, designed with a **microservices architecture**. It handles core airline reservation features such as user registration, flight scheduling, ticket booking, and payment management.

---


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. 

Inside `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config-js`. One more example can be setup you logginf library that can help you to prepare meaningful logs, so configuration for this library should also be fone here. 


- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.


-`middleware` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc/

-`controllers` -> They are kind of the  last middleware as post the you can call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controkkers and send the output.


- `repositories` -> This folder contains all the logic using which we interact with the DB by writing queries, all the raw queries or ORM queries will go here.


-`services` -> contains the business logic and interacts with repositories for data from the database.


- `utils` -> contains helper methods, error classes etc.

- Inside the `src/config` floder create a file named as config.json and write the following code:


### setup the project

- Download this template from github and open it in your favourite text editor.

- Go inside the folder path and execute the     following command:
    npm install

-In the root directory create a `.env` file and add the following env variables
        PORT = <port number of your choice>
  ex: 
         PORT = 3000

- go inside the `src` folder and execute the following command:
   npx sequelize init







{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


or


go inside the source folder execute the following commands: npx sequelize init
(By executing the above command you will get migrations and seeders folder along with a config.json inside the folder. )

- If your are setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex:
- If you are setting up test or prod environment, make sure you also replace the host with the hosted db url.

- To run the server execute:
 npm run dev







## 🛠️ Tech Stack

- **Node.js** – Runtime environment for backend services.
- **Express.js** – Web framework for building APIs.
- **MySQL** – Relational database for persistent storage.
- **Sequelize / Raw SQL** – ORM or direct SQL for data manipulation.
- **RESTful APIs** – Services communicate via standard HTTP methods.
- **Postman / Thunder Client** – Used for testing endpoints.

---

# Non Functional Requirement
- We can expect more flight searches than bookings.
- The system needs to be relaible in terms of booking.
- Expect that we will be having 1,00,000 total users.
- 1,00,000 booking might come up in a quarter.
- In one day you might be getting 100 bookings.
- System should be able to make sure that we don't change the prices when booking payment is going on.
- System should be able to auto scale itself for atleast 3x more traffic.


## 🧱 Microservices Structure

The system is separated into distinct services for scalability and maintainability:

### 1. **User Service**
- Handles user registration, login, authentication.
- Role management (admin, passenger).

### 2. **Flight Service**
- CRUD operations for flights.
- Handles flight scheduling, availability, and routes.

### 3. **Reservation Service**
- Manages ticket booking, seat assignment, and booking status.
- Checks for seat availability before confirmation.

### 4. **Payment Service**
- Simulated payment processing.
- Generates invoices and booking confirmation.

Each service runs independently and communicates over HTTP (REST API).

---

//Winston, http-status-codes, nodemon, 
# Coffee API

## Description

This project is a simple Node.js API that allows you to manage coffee products. The API provides endpoints to retrieve a list of coffee products and add new products. It also includes basic error handling and validation.

## Database Schema

The database used is SQLite, a lightweight and easy-to-use relational database. The database schema is designed to store information about coffee products. The main table is `Product`, which stores the details of each coffee product.


### Table `Product`

The `Product` table has the following columns:

- `id`: Unique product identifier (generated automatically by Sequelize).
- `name`: Product name (text string, not null).
- `description`: Product description (text, not null).
- `price`: Product price (floating, not zero).
- `imageUrl`: Product image URL (text string, not null)
.

### Scheme Design

The scheme design is minimalist and focuses on storing the essential information of the coffee products. The choice of SQLite as a database is due to its simplicity and ease of configuration, making it ideal for small and medium-sized projects.

### Implementación

The database schema implementation is done using Sequelize, an ORM (Object-Relational Mapping) for Node.js. Sequelize allows you to define models and automatically synchronize the database schema.

The `Product` model is defined in the file [`src/models/Product.js`](src/models/Product.js) and is synchronized with the database in the file [`src/server.js`](src/server.js).

When starting the server, if the Product table is empty, default data is loaded from the defaultProducts.js file. This logic is implemented in the product.service.js file.


## How to Execute the Project

### Clone the Repository

```sh
git clone https://github.com/acsoliz/coffee-api.git

```

### Access the project folder

```sh 
cd coffee-api

```

### Install Dependencies

```sh
npm install

```

### Run in Development Mode

```sh
npm run dev

```


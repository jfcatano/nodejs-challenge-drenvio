# NodeJS Challenge for DrEnvio.

## Description
This project is a Node.js challenge for DrEnvio.

## Installation
1. Clone the repository.
2. Install the dependencies by running the following command:
    ```
    npm install
    ```

## Usage
1. Run the following command to start the nodejs server:
    ```
    npm run dev
    ```
2. Start testing the routes.

## Project information
* I created post and create routes for users and products. You can see they here the localhost routes:
- Route to find users: http://localhost:3000/api/users
- Route to find products with stock: http://localhost:3000/api/products
- Route to find products without stock: http://localhost:3000/api/products/all
- Route to find a product price for a user (You can obtain the special price or the base price if applies to it): http://localhost:3000/api/price/:user_id/:product_name


* Same routes, but the link redirects to the API deployment:
- Route to find users: https://nodejs-challenge-drenvio.amjor.shop/api/users
- Route to find products with stock: https://nodejs-challenge-drenvio.amjor.shop/api/products
- Route to find products without stock: https://nodejs-challenge-drenvio.amjor.shop/api/products/all
- Route to find a product price for a user: https://nodejs-challenge-drenvio.amjor.shop/api/price/:user_id/:product_name


# Thanks
I accept all feedback comments to improve the code and improve as a developer.
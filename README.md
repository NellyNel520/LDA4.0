# London Dior Apparel
#### Date: 3/10/2023
##### By: Channel Harris 

##### [Portfolio Site](https://www.channelharris.com/) | [Github](https://github.com/NellyNel520) | [LinkedIn](https://www.linkedin.com/in/channelharris/) | 

***

#### ***Description***
This project is a full-stack E-commerce application built using the M.E.R.N (MongoDB, Express.js, React.js, Node.js) stack. It includes an admin dashboard for easy management of the E-commerce platform. The app incorporates various technologies and features such as React, Redux Toolkit, Firebase image upload, JWT authentication, and route protection for both admin and users. It also mobile friendly and incorporates a responsive web design.

The main goal of this project is to provide a robust and scalable E-commerce solution with a user-friendly interface and efficient management capabilities for administrators.


##### ***Deployment***
The E-commerce App itself was deployed and can be viewed [here](https://londondiorapparel-4-0.onrender.com )
You can create an account and place a mock order using the stripe test payment card info. 
   * Card number: 4242 4242 4242 4242
   * Experation: Use a valid future date, such as 12/34.
   * CVC: Use any three-digit CVC

The Admin Dashboard was deployed and can be view [here](https://admin-lda4-0.onrender.com/)

* Admin dashboard is restricted to admin users only. In order to view the applications complete functionality, use the login info below
    * Email: admin@email.com
    * Password: 1234

***

#### ***Technologies Used*** 
* Node.js
* Express
* Mongoose 
*React
    * React-Redux
    * Redux-toolkit
* Stripe API
* Firebase Image Upload
* Recharts
* Tailwind CSS
* Styled Components

***

## ***Features***
### *User-Facing Features:*
* **User Registration and Login:** Users can create an account or log in using their credentials. JWT authentication is used to secure user sessions.
* **Product Listing and Filtering:** Users can browse and filter through available products on the platform. The filter functionality allows users to filter products based on category, color, and size.
* **Shopping Cart:** Users can add products to their cart, update the quantity, and remove items. The cart maintains a summary of the selected products.
* **Order Placement:** Users can place orders for the products in their cart and make their payment using the stripe API for a secure checkout process.
* **User Profile:** Users can view and update their profile information, including name, email, phone number, password and address. As well as view order details and previous order history. Order details include product information, quantities, size, color, total cost, and order status.


### *Admin Dashboard Features:*
*  **Authentication and Route Protection:** The admin dashboard is protected with authentication, ensuring that only authorized administrators can access it. JWT authentication is used to validate admin and user sessions.
* **Product Management:** Admins can perform CRUD operations on products. They can add new products, update existing products, upload product images using Firebase image upload, and delete products from the platform.
* **User Management:** Admins have the ability to manage user accounts. They can view a list of registered users, view user details, update user information, and delete user accounts if necessary.
* **Order Management:** Admins can view a list of orders placed by users, including order details such as product information, quantities, total cost, and order status. Admins can update the order status to reflect the progress of order fulfillment.
* **Comprehensive Data Collection:** The application collects relevant data points such as sales performance, customer insights, user behavior, product performance as well as monthly and and annual financial reports.
* **Data Visualization with Recharts:** The collected data is analyzed and presented using Recharts, a powerful data visualization library. Admins can view visual representations of sales, user engagement, and other important metrics through various types of charts, including line charts, bar charts, and pie charts.

***
# *Installation and Setup*
To install and set up the MERN stack ecommerce app with admin dashboard and data analytics, follow these steps:
    1. Fork and clone the repository from GitHub.
    2. Install the necessary dependencies by running npm install in the project directory.
    3. Configure the environment variables by creating a .env file and providing the required values (e.g., MongoDB connection URL, JWT secret key, Firebase API key, etc.).
    4. Start the development server by running npm start in the client and admin directory.  This will start the frontend servers.
    5. Start the backend server by running npm run dev in the backend directory.

Access the ecommerce app in your web browser at http://localhost:3000. The admin dashboard can be accessed at http://localhost:3000/admin.



*** 
### *Folder Structure*
The folder structure of the project is organized as follows:

* Client: Contains the frontend code built with React.js, including components, Redux Toolkit slices, and pages.
* Server: Contains the backend code built with Node.js and Express.js, including API routes, models, controllers, and middleware.
* Public: Contains the static assets used by the frontend.
* Uploads: Contains the uploaded product images stored in the server.
* Config: Contains configuration files, such as database connection settings and JWT secret key.
* Server: Contains custom middleware functions for authentication and authorization.
* Models: Contains the MongoDB database models.
* Routes: Contains the API routes for various functionalities.
* Controllers: Contains the logic for handling API requests and interacting with the database.
* Dashboard: Contains the code for the customizable analytics dashboard using Recharts.

With these features and capabilities, the MERN stack ecommerce app with admin dashboard and data analytics provides a comprehensive solution for managing an ecommerce platform and making data-driven decisions for business growth and success.



***
## Credits
This project was developed by Channel Harris as a demonstration of MERN stack E-commerce app with admin dashboard and data analytics. The project utilizes various open-source libraries, frameworks, and resources, including:

* React.js: https://reactjs.org/
* Redux Toolkit: https://redux-toolkit.js.org/
* Firebase: https://firebase.google.com/
* JSON Web Tokens (JWT): https://jwt.io/
* Express.js: https://expressjs.com/
* Node.js: https://nodejs.org/
* MongoDB: https://www.mongodb.com/
* Recharts: https://recharts.org/
* Tailwind CSS: https://tailwindcss.com/docs/installation

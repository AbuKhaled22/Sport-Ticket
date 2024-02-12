## Sports Ticket Web Application

This is a full-stack web application for purchasing sports tickets. Users can browse available tickets, sign up or log in to their accounts, add items to their cart, and send inquiries. The application consists of a front-end developed with React and a back-end server built with Node.js and Express. MongoDB is used as the database to store user information, products, and cart items.

### Features

- **User Authentication**: Users can sign up for a new account or log in to an existing one.(still not completed)
  
- **Ticket Shopping**: Users can browse available tickets, add them to their cart, and view details about each ticket.

- **Shopping Cart**: Users can add tickets to their cart and view the items in their cart. Items can be removed from the cart as well.

- **Inquiries**: Users can send inquiries regarding tickets or other information through a contact form.

### Technologies Used

- **Front-end**: React, React Router
  - **Styling**: CSS, Bootstrap
  
- **Back-end**: Node.js, Express
  - **Database**: MongoDB with Mongoose
  
- **Other Tools**: Axios for HTTP requests, CORS for enabling cross-origin resource sharing, dotenv for environment variable management

### Getting Started in VS code

1. Clone this repository: `git clone <repository-url>`
2. access the repository: cd sport-Ticket
3. open the repository: code . 
4. Install dependencies for both the front-end and back-end:
   - Front-end: `cd frontend && npm install express`
   - Back-end: `cd backend && npm install express`
5. Set up environment variables:
   - Add in a `.env` file in the `backend` directory your mongodb connection link.
6. Start the back-end server: `cd backend && node index.js`
7. Start the front-end development server: `cd frontend && npm start`
8. Access the application at `http://localhost:3000` in your web browser.

### Note:
add a table in the database the table name is (products) and the elements:
1. 
name:"Team USA vs Germany FIBA World Cup"
price:150
img:"https://resources.prod.fiba.pulselive.com/fiba-courtside/photo/2023/09/07/111320da-dd8f-4aee-b9c9-0e30bb5b3f83/USA-v-Germany.JPG"}

2.
name:"barcelona VS real madrid"
price: 60
img: "https://www.fcbarcelona.com/photo-resources/2023/10/26/03879242-a327-4753-8866-5a93929484ab/HORARIS_NEW-Real_Madrid.jpg?width=1200&height=750"

3.
name:"Al Hilal VS Al Nassr"
price:45
img: "https://image.discovery.indazn.com/ca/v2/ca/image?id=4pnxehb56bh11mxxq3m16rt1g_image-header_pIt_1700752737000&quality=70"

4. 
name: "Barça VS Liverpool"
price: 90
img: "https://www.fcbarcelona.com/photo-resources/2019/04/30/791e280a-9a0b-4100-a67b-e7af908eb3f0/mini_3200x2000_Messi_Salah_PREVIA.jpg?width=1200&height=750"

## Future Update: Admin Page Implementation

In the next update, we plan to introduce an admin page to provide administrators with control over sports tickets, including the ability to add new products and manage orders and inquiries. This feature will enhance the functionality of the application and streamline the administrative tasks associated with managing ticket sales.

### Features to be Implemented

- **Admin Dashboard**: The admin page will include a dashboard providing an overview of product listings, orders, and inquiries.

- **Product Management**: Admins will be able to add, edit, and delete products from the inventory. This functionality will enable them to keep the ticket listings up to date and relevant.

- **Order Management**: Admins will have access to a list of orders placed by users. They can view order details, mark orders as processed, and update order statuses.

- **Inquiry Management**: The admin page will allow administrators to view and respond to inquiries submitted by users. They can mark inquiries as resolved once they have been addressed.

- **Authentication and Authorization**: Access to the admin page will be restricted to authorized administrators. Authentication mechanisms will ensure that only authorized users can access the admin features.

### Contributors

- [Your Name](https://github.com/yourusername)


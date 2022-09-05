``## Node JS Api - E commerce
This API was made with **Node JS and Express** and was set to work with a remote db with **postgres and sequelize**

### Deploy:
The API was also deployed in heroku: https://nodeapi-remote-postgresql.herokuapp.com/

### instructions
You can try the project with -- npm ci -- to install the dependencies in your local, and run it with -- npm start -- and test it with Postman

### Data required
You have to add the values required for the different requests in the body to register and login and set the jwt in the headers by indicating user-token and the token.

### Sessions
The sessions lasts 10 minutes so when it finishes you have to login again. Only admin is allowed to create, update and delete the products.

### Mail
You will receive a mail when you are registered and also when you made the checkout (with your data and your products) made with Nodemailer and connected with gmail.

### Chat
You can try the chat made with socket.io at : https://nodeapi-remote-postgresql.herokuapp.com/static/

### Endpoints:
https://nodeapi-remote-postgresql.herokuapp.com/api/users/register
https://nodeapi-remote-postgresql.herokuapp.com/api/users/login
https://nodeapi-remote-postgresql.herokuapp.com/api/products
https://nodeapi-remote-postgresql.herokuapp.com/api/products/9
https://nodeapi-remote-postgresql.herokuapp.com/api/carts
https://nodeapi-remote-postgresql.herokuapp.com/api/upload
https://nodeapi-remote-postgresql.herokuapp.com/api/carts/product/5
https://nodeapi-remote-postgresql.herokuapp.com/checkout
https://nodeapi-remote-postgresql.herokuapp.com/static/``


## Node JS Api - E commerce
This API was made with **Node JS and Express** and was set to work with a remote db with **postgres and sequelize**

### Deploy:
The API was also deployed in heroku: `https://nodeapi-remote-postgresql.herokuapp.com/`

### Instructions
You can try the project with **-- npm ci --** to install the dependencies in your local, and run it with **-- npm start --** and test it with Postman

### Dependencies/libraries used:
The API uses : 
- ``express``
- ``body-parser``
- ``dotenv``
- ``express-validator``
- ``jwt-simple``
- ``moment``
- ``multer``
- ``nodemailer``
- ``pg``
- ``sequelize``
- ``socket.io``

### Data required
You have to add the values required for the different requests in the body to register and login and set the jwt in the headers by indicating user-token and the token.

### Sessions
**The sessions lasts 10 minutes** so when it finishes you have to login again. Only admin is allowed to create, update and delete the products.

### Mail
You will receive a mail when you are registered and also when you made the checkout (with your data and your products) made with Nodemailer and connected with gmail.

### Chat
You can try the chat made with socket.io at : `https://nodeapi-remote-postgresql.herokuapp.com/static/`

### Upload Images
You can upload images by adding a file with the key `myFile` at the body at : `https://nodeapi-remote-postgresql.herokuapp.com/static/`. Only Admin is allowed

### Config
The config file loads environment variables from a .env file (which is not uploaded for security) into process.env to run database and different configurations.

### Endpoints and Methods:
- POST ``https://nodeapi-remote-postgresql.herokuapp.com/register``
- POST ``https://nodeapi-remote-postgresql.herokuapp.com/login``
- GET ``https://nodeapi-remote-postgresql.herokuapp.com/api/products``
- GET - POST - UPDATE - DELETE ``https://nodeapi-remote-postgresql.herokuapp.com/api/products/:productId``
- GET - UPDATE - DELETE ``https://nodeapi-remote-postgresql.herokuapp.com/api/carts``
- GET ``https://nodeapi-remote-postgresql.herokuapp.com/api/checkout``
- POST ``https://nodeapi-remote-postgresql.herokuapp.com/api/upload``
- GET - POST - UPDATE - DELETE ``https://nodeapi-remote-postgresql.herokuapp.com/api/carts/product/5``
- UPDATE``https://nodeapi-remote-postgresql.herokuapp.com/api/carts/2``
- CHAT ``https://nodeapi-remote-postgresql.herokuapp.com/static/``


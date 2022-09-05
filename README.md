## Node JS Api - E commerce
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
At the command prompt, type `nano`


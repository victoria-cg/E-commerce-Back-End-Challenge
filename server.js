const express = require('express');
const routes = require('./routes');
// import sequelize connection with the connection.js file
const sequelize = require('./config/connection.js');
//calls express for use to run the server
const app = express();
//uses port specified in the.env file or 3001 if not specified
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server, done with sequelize.sync before the event listener to start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});
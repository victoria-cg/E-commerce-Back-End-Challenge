# E-commerce-Back-End-Challenge

## Description

This project was completed for the Object Relational Mapping module of the UT/EdX programming bootcamp. The goal of the project was to use the ORM technology Sequelize to complete the provided starter code backend of mock e-commerce site. Completing the code offered the opportunity to practice the concepts of creating models and associations for a MySQL database using Sequelize, as well as to practice creating GET, PUT, POST, and DELETE routes. Additionally, running the application provided experience with API testing using Insomnia, as well as the use of environment variables to secure credentials.


## Installation

The application can be run locally as long as the user has MySQL installed. Download the repository code to run the application according to the directions in the 'usage' section below.


## Usage

From the command line, run the command npm install to install all the required node dependencies. Then login to MySQL bash in the terminal. From there, run SOURCE db/schema.sql to setup the SQL database. run 'quit' to exit MySQL and return to the default bash command line. Use the command 'npm run seed' to seed the database with the seed placeholder data. After that, run 'node server' or 'npm run start' to start the server running locally on the specified port. From there, the localhost URL routes can be tested/used to manipulate the database either with an API testing software like Insomnia or in a web browser.

See a video example of application use here: https://drive.google.com/file/d/10o7cjy0rRRJZnwgqHuLOae1wKzkRngqf/view?usp=sharing


## Credits

Bootcamp TA Walter Perry: editing sequelize variable in connection.js to remove the environment variable for connecting to Heroku

Tutoring with bootcamp tutor Alexis Gonzalez: debugging routing syntax and performing CRUD operations with async functions used in category-routes.js

XPert AI LLM tool:

Refactoring/checking my code to accurate async syntax for post/put/get/delete request in category-routes.js
Debugging syntax for request.body on post route for creating new category in category-routes.js, tag routes
Debugging use of “onDelete SET NULL” for product foreign key referencing “category” so that category delete route works
Debugging get route for “tag” with use of “through: ProductTag” for accurate syntax/use of associations

Reference for Sequelize validations and constraints:
 Sequelize. (2024). Validations & Constraints. Sequelize. Retrieved March 28, 2024, from https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

Reference for Sequelize ‘belongs to many’
Sequelize. (2024). BelongsToMany. Sequelize. Retrieved March 28, 2024, from https://sequelize.org/docs/v7/associations/belongs-to-many/


Reference for sequelize joins and associations:
Sequelize. (2024). Eager Loading. Sequelize. Retrieved March 28, 2024, from https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/



## License

This project uses an MIT license. More information available in the 'License' section of the repository or here: https://choosealicense.com/licenses/mit/


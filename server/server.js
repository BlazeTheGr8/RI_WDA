/*Import statements for importing the ExpressJS framework and the CORS middleware which handles cross-origin requests */
const express = require('express');
const cors = require('cors'); 

// Creates an instance of the express app
const app = express();

// Defines the port number to run the server on
const port = 3000;

// Parses incoming JSON data
app.use(express.json());

// Enabled CORS for cross-origin requests
app.use(cors());

/** Defines the GET route as well as the text content being sent as a JSON response 
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
app.get('/api/page', (req, res) => {
  const textContent = {
    registerButtonText: 'Register',
    depositAmountText: '$1,600',
    depositText: 'Deposit Bonus',
    signUpButtonText: 'Sign Up',
  };
  res.json(textContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Simple log message to show that server is running after executing 'node server.js'
});

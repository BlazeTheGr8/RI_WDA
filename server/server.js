const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

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
  console.log(`Server is running on port ${port}`);
});

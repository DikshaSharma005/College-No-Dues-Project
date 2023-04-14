const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
      return;
    }

    const users = JSON.parse(data);
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);

    if (user) {
      res.status(200).send({ message: 'Authenticated', user });
    } else {
      res.status(401).send({ message: 'Invalid username or password' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

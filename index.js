const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const friends = require('./friends');
const user = require('./users');

app.post('/login', (req, res) => {
  if(req.body.email !== user.email) {
    return res.status(400).send('User not exist!');
  }
  
  if(req.body.password !== user.password) {
    return res.status(401).send('Invalid credentials')
  }

  res.json({...user, token: '123456abcxyz'});
});

app.get('/friends', (req, res) => {
  res.json(friends)
});

app.listen(3000, () => console.log('server started on port: 3000'));
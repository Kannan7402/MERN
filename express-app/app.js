const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'kannan', email: 'kanna@example.com' },
  { id: 2, name: 'rathees', email: 'rathees@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/',(req,res)=>
{
  res.send('Welcome to User list')
})

app.get('/users/name/:name', (req, res) => {
  const { name } = req.params;
  const filter = users.filter((u) => u.name.toLowerCase() === name.toLowerCase());
  res.json(filter);
});

app.get('/users/id/:id', (req, res) => {
  const { id } = req.params;
  const filter = users.filter((u) => u.id == id);
  res.json(filter);
});

app.get('/users/email/:email', (req, res) => {
  const { email } = req.params;
  const filter = users.filter((u) => u.email.toLowerCase() === email.toLowerCase());
  res.json(filter);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

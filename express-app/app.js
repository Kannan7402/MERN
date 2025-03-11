const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
  { id: 1, name: 'kannan', email: 'kanna@example.com' },
  { id: 2, name: 'rathees', email: 'rathees@example.com' }
];

app.get('/',(req,res)=>
{
  res.send('Welcome');
})

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id)); // Ensure we are comparing integers
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  const newId = users.length +1; 
  const newUser = { id: newId, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index !== -1) {
    users[index] = { id: parseInt(id), name, email }; 
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const user = users.find((u) => u.id === parseInt(id)); 

  if (user) {
    Object.assign(user, updates);
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id)); 
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

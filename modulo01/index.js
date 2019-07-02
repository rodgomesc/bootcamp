const express = require('express');

const server = express();

// Query Params = ?teste=1
// Route Params = /users/1
// Request Body = {"name":"rodrigo", "email":"rodgomesc@gmail.com"}

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);

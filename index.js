const express = require('express');
const server = express();

// Query params = ?

 server.get("/hello", (req, res) => {
  const {nome, idade} = req.query;

    return res.json({
      title: "Hello World",
      message: `ola ${nome} mundo tudo bem`,
      idade:idade
    });
});

server.get("/hello/:nome", (req, res) => {
  const {nome} = req.params;

    return res.json({
      title: "Hello World",
      message: `ola ${nome} tudo mundo com voce`
    });
});

server.listen(3000);


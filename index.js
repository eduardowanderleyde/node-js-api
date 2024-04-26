const express = require('express');
const server = express();

server.use(express.json());

let customers = [
    { id: 1, name: 'John Doe', site: 'https://www.johndoe.com' },
    { id: 2, name: 'Google', site: 'https://www.google.com' },
    { id: 3, name: 'Jim Doe', site: 'https://www.jimdoe.com' }
];

server.get('/customers', (req, res) => {
    return res.json(customers);
});

server.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;
    
    return res.status(status).json(customer);
});

server.post('/customers', (req, res) => {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

server.listen(3000);
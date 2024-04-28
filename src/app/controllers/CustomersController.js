let customers = [
  { id: 1, name: 'John Doe', site: 'https://www.johndoe.com' },
  { id: 2, name: 'Google', site: 'https://www.google.com' },
  { id: 3, name: 'Jim Doe', site: 'https://www.jimdoe.com' }
];


class CustomersController {
  //List all customers
  index(req, res) {
    return res.json(customers); 
  }; 
  //Recover a customer by id
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    console.debug("GET :: /customers/:id", customer)
    
    return res.status(status).json(customer);
    
  };
  //Create a new customer
  create(req, res) {
    const { name, site} = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = {id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);  
  };
  //Update a customer
  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
      customers[index] = { id, name, site };
    }
    return res.status(status).json(customers[index]);
    
  };
  //Delete a customer
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index, 1);
    }
    return res.status(status).json();
  }
  
}
module.exports = new CustomersController();
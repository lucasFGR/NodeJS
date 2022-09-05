const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).send({ error: "costumer not found" });
  }
  request.customer = customer;
  return next();
}
/**
 * cpf = string
 * name = string
 * id = uuid
 * statement = []
 */

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const costomerAlreadyExits = customers.some(
    (costumer) => costumer.cpf === cpf
  );

  if (costomerAlreadyExits) {
    return response.status(400).send({ error: "Costumer already exists" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send(customers);
});

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  return response.json(customer.statement);
});

app.listen(1412);

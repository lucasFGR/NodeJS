const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const costumers = [];
/**
 * cpf = string
 * name = string
 * id = uuid
 * statement = []
 */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const costomerAlreadyExits = costumers.some(
    (costumer) => costumer.cpf === cpf
  );

  if (costomerAlreadyExits) {
    return response.status(400).send({ error: "Costumer already exists" });
  }

  costumers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send(costumers);
});

app.get("/statement/:cpf", (request, response) => {
  const { cpf } = request.params;

  const costumer = costumers.find(cost);
});

app.listen(1412);

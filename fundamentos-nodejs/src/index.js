const express = require("express");
const { json } = require("express/lib/response");

const app = express();

app.use(express.json());
/**
 *  GET - buscar informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parametros
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos de inserção / Altereação
 */

// Retorna os cursos
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

// Insere um novo curso
app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// recebendo o id do curso 1 e alterando ele para curso 6
app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 4", "Curso 4"]);
});

// Recebendo o id do curso 2 e alterando ele para curso 7
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7 ", "Curso 4", "Curso 5"]);
});

// Recebendo o id do curso 4 e excluindo ele da lista
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7 ", "Curso 4", "Curso 5"]);
});

// Cria uma porta onde podemos chamar a nossa aplicação
app.listen(3333);

const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    return response.json(["curso 1", "curso 2"]);
});

app.post("/courses", (request, response) => {
    return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.put("/courses/:id", (request, response) => {
    return response.json(["curso 1", "curso 2", "curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 1", "curso 4", "curso 5"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 1", "curso 4"]);
});

app.listen(3333);
require('dotenv').config();
const pool = require('./src/config/db');
const express = require("express");
const pluginRouter = require('./src/routes/plugins.routes');
const app = express();

app.use(express.json());


app.get('/ping', async (req, res) => {
  try {
    const result = await pool.query('SELECT now()');
    res.status(200).json({
      status: 'success',
      message: 'Pong!',
      data: result[0],
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error al ejecutar la consulta',
      error: error.message,
    });
  }
});

app.use('/plugins', pluginRouter);

app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`🧑‍💻 Perfil del usuario con ID: ${userId}`);
});


app.get("/api/item", (req, res) => {
  res.send("GET: Obteniendo item");
});

app.post("/api/item", (req, res) => {
  res.send("POST: Creando nuevo item");
});

app.put("/api/item", (req, res) => {
  res.send("PUT: Actualizando item");
});

app.delete("/api/item", (req, res) => {
  res.send("DELETE: Eliminando item");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

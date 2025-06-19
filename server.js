require('dotenv').config();
const express = require('express');
const pluginRouter = require('./src/routes/plugins.routes');

const app = express();
app.use(express.json());

app.use('/plugins', pluginRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
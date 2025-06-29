
require('dotenv').config();
const pool = require('./src/config/db');
const express = require("express");
const pluginRouter = require('./src/routes/plugins.routes');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use('/api/plugins', pluginRouter);
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
const service = require('../services/plugins.service');
const pool = require('../config/db');


exports.getAll = async (req, res) => {
  try {
    const plugins = await service.getAll();
    res.json(plugins);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener plugins' });
  }
};


exports.getOne = async (req, res) => {
  try {
    const plugin = await service.getById(req.params.id);
    if (!plugin)
      return res.status(404).json({ error: 'Plugin no encontrado' });
    res.json(plugin);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener plugin' });
  }
};


exports.createPlugin = async (req, res) => {
  try {
    const { nombre, tipo, empresa, gratis, fecha, aplicacion } = req.body;

    
    if (!nombre || !tipo || !empresa || !aplicacion || fecha == null || gratis == null) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevo = await service.create({ nombre, tipo, empresa, gratis, fecha, aplicacion });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear plugin' });
  }
};

exports.createPlugin = async (req, res) => {
  try {
    const { nombre, tipo, empresa, gratis, imagen, aplicacion } = req.body; // CAMBIO: imagen en lugar de fecha

    
    if (!nombre || !tipo || !empresa || !aplicacion || !imagen || gratis == null) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevo = await service.create({ nombre, tipo, empresa, gratis, imagen, aplicacion }); // CAMBIO: imagen
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear plugin' });
  }
};


exports.updatePlugin = async (req, res) => {
  try {
    const { nombre, tipo, empresa, gratis, imagen, aplicacion } = req.body; // CAMBIO: imagen

    if (!nombre || !tipo || !empresa || !aplicacion || !imagen || gratis == null) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const actualizado = await service.update(req.params.id, { nombre, tipo, empresa, gratis, imagen, aplicacion });
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar plugin' });
  }
};

exports.deletePlugin = async (req, res) => {
  try {
    const eliminado = await service.remove(req.params.id);
    res.json(eliminado);
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar plugin' });
  }
};

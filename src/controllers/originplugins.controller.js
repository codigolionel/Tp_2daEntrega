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
    const nuevo = await service.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear plugin' });
  }
};

exports.updatePlugin = async (req, res) => {
  try {
    const actualizado = await service.update(req.params.id, req.body);
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
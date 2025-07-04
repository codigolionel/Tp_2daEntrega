const express = require('express');
const router = express.Router();
const controller = require('../controllers/plugins.controller');


router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.createPlugin);
router.put('/:id', controller.updatePlugin);
router.delete('/:id', controller.deletePlugin);

module.exports = router;
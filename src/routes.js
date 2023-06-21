const express = require('express');
const router = express.Router();
const turnoController = require('./controllers/turnoController');

router.get('/', turnoController.listarTurnos);
router.post('/', turnoController.crearTurno);
router.put('/:turnoId', turnoController.cambiarFechaTurno);
router.delete('/:turnoId', turnoController.eliminarTurno);

module.exports = router;

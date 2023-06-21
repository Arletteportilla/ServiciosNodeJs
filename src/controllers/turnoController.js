const Turno = require('../models/Turno');
const turnos = [];

exports.listarTurnos = (req, res) => {
res.json(turnos);
};

exports.crearTurno = (req, res) => {
const { id, fecha, nombreMascota, nombreDueño } = req.body;
const nuevoTurno = new Turno(id, fecha, nombreMascota, nombreDueño);
turnos.push(nuevoTurno);
res.status(201).json({ message: 'Turno creado exitosamente' });
};

exports.cambiarFechaTurno = (req, res) => {
const { turnoId } = req.params;
const { fecha } = req.body;
const turno = turnos.find((t) => t.id === turnoId);
if (!turno) {
    res.status(404).json({ message: 'Turno no encontrado' });
} else {
    turno.fecha = fecha;
    res.json({ message: 'Fecha del turno actualizada exitosamente' });
}
};

exports.eliminarTurno = (req, res) => {
const { turnoId } = req.params;
const index = turnos.findIndex((t) => t.id === turnoId);
if (index === -1) {
    res.status(404).json({ message: 'Turno no encontrado' });
} else {
    turnos.splice(index, 1);
    res.json({ message: 'Turno eliminado exitosamente' });
}
};

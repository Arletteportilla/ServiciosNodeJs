const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/turnos', routes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
console.log(`Funcionando desde el puerto ${PORT}`);
});

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => console.log('Base de datos Conectada'))
  .catch(error => console.log(error));

//Definir Puerto
const port = process.env.PORT || 3000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de Viajes';

  return next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
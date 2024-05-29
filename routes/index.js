import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos || res - lo que express nos responde
  res.send('Hola Mundo');
});

router.get('/nosotros', (req, res) => {
  res.send('Nosotros');
});

router.get('/Contacto', (req, res) => {
  res.send('Contacto');
});
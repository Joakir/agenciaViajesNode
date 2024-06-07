import { Viaje } from "../models/Viaje.js";

const paginaInicio  = (req, res) => { // req - lo que enviamos || res - lo que express nos responde
  res.render('inicio', {
    pagina: 'Inicio'
  });
}

const paginaNosotros = (req, res) => { 
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
}

const paginaViajes = async (req, res) => {
  //Consultar DB
  const viajes = await Viaje.findAll()

  res.render('viajes', {
    pagina: 'Próximos Viajes', 
    viajes,               //Object literal, esto es lo mismo a viajes : viajes
  });
}

const paginaTestimoniales = (req, res) => {
  res.render('testimoniales', {
    pagina: 'Testimoniales'
  });
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales
}
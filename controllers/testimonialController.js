
const guardarTestimonial = (req, res) => {
  //Validar...
  const {nombre, correo, mensaje} = req.body;

  const errores = [];

  if(nombre.trim() === ''){
    errores.push({mensaje: 'El Nombre esta vacio'});
  }
  if(correo.trim() === ''){
    errores.push({mensaje: 'El Correo esta vacio'});
  }
  if(mensaje.trim() === ''){
    errores.push({mensaje: 'El Mensaje esta vacio'});
  }

  console.log(errores);
}


export {
  guardarTestimonial,
}
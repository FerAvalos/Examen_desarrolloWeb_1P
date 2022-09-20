import { useState } from 'react';
import { Datos_Mostrar } from './Components/Datos_Mostrar';

export const Examen = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    apodo: ''
  })

   const agregarDatos = (e) => {
    console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos.nombre+" "+datos.apellido+" "+datos.apodo+" " + datos.done)
    setDatos('')
  }

   const Limpiar = (e) => {
    document.getElementById("Datos_form").reset()
  }


  return (
    <div className='contenedor'>
      <form onSubmit={handleSubmit} id='Datos_form'>
        <div className='nombre'>Nombre:
          <input 
            type="text"
            name='nombre' 
            onChange={agregarDatos} />
        </div>
        <div className='apellido'>Apellido:
          <input 
            type="text" 
            name='apellido'
            onChange={agregarDatos} />
        </div>
        <div className='apodo'>Apodo:
            <input type="text"
            name='apodo' 
            onChange={agregarDatos} />
        </div>
        <button
            className="button_enviar"
            disabled={(datos.nombre && datos.apellido && datos.apodo) ? "" : "disabled"}
          >
            Enviar
        </button>
        <button
            className="button_limpiar"
            onClick={Limpiar}
          >
            Limpiar
        </button>
      </form>
      <Datos_Mostrar datos={datos}></Datos_Mostrar>
    </div>
  );
}
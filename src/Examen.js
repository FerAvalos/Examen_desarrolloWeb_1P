import { useState } from 'react';

export const Examen = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    apodo: ''
  })

  function agregarNombre(e) {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }))
  }

  function agregarApellido(e) {
    setDatos((valores) => ({
      ...valores,
      apellido: e.target.value,
    }))
  }

  function agregarApodo(e) {
    setDatos((valores) => ({
      ...valores,
      apodo: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Dato cargado ' + datos.nombre + ' ' 
      +datos.apellido + ' ' 
      +datos.apodo);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Nombre:
          <input 
            type="text" 
            value={datos.nombre} 
            onChange={agregarNombre} />
        </div>
        <div>Apellido:
          <input 
            type="text" 
            value={datos.apellido} 
            onChange={agregarApellido} />
        </div>
        <div>Apodo
            <input type="text" 
            value={datos.apodo} 
            onChange={agregarApodo} />
        </div>
      </form>
      <button
            className="button_add"
            type='submit'
            disabled={(datos.nombre && datos.apellido && datos.apodo) ? "" : "disabled"} //Si descripción no tiene valor se deshabilita, si lo tiene lo habilita
          >
            Agregar
          </button>
      <hr />
      <h3>Datos</h3>
      <div>Nombre:{datos.nombre}</div>
      <div>Apellido:{datos.apellido}</div>
      <div>Apodo:{datos.apodo}</div>
    </div>
  );
}
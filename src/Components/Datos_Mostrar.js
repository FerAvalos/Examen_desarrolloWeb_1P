import React from 'react'

export const Datos_Mostrar = (props) => {
    const {datos} = props

  return (
    <>
        <div>
            <p>Datos: </p>
            {(datos.nombre && datos.apellido && datos.apodo) ?  <div>{datos.nombre} {datos.apellido} ({datos.apodo})</div>: "No hay info"}
        </div>
    </>
  )
}

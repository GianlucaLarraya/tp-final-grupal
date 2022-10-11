import React from 'react'
import { productos } from '../../data/productos'
import { BtnPrimary } from '../BtnPrimary'



export const Map = () => {

  console.log(productos)

  return (
    <>
      <h2>Map</h2>
      <p>El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.</p>
      <ul>
        {productos.map(({id}) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
      <BtnPrimary
        url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map'}
        targ={'_blanck'}
        btnTxt={'Map()'}
      />
      <hr/>
    </>
  )
}

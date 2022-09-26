import React from 'react'
import { BtnPrimary } from '../BtnPrimary';

export const JsFunction = () => {


  return (
    <>
        <h2>Funciones JS</h2>
        <p>Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.</p>
      <h6>Temas relacionados</h6>
      <ul>
        <li>argumentos</li>
        <li>
          <a
            href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions#comparaci%C3%B3n_de_funciones_tradicionales_con_funciones_flecha'
            target='_blanck'
          >
            Funciones de Flecha
          </a>
        </li>
      </ul>
        <BtnPrimary 
            url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions'} 
            targ={'_blank'} 
            btnTxt={'Funciones JS'}
        />
    <hr/>
    </>
  )
}

import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const TemplateString = () => {
    
    const nombre = 'Claudio'
    const apellido = 'Uccello'

    console.log(`Hola ${ nombre } ${apellido}`)

    return (
        <>
            <h2>TemplateString</h2>
            <p>Es un método para concatenar variables, muy usado en JSX permite concatenar sin necesidad de utilizar operadores</p>
            <h6>Uso de concatenación clásico</h6>
            <div
                className='mb-3'
            >
                <code>
                    console.log('Hola' + ' ' + nombre + ' ' + apellido)
                </code>
            </div>
            <BtnPrimary
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals'}
                targ={'_blank'}
                btnTxt={'TemplateString'}
            />

            <hr />
        </>
    )
}

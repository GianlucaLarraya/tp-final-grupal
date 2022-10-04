import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const VarConstLet = () => {

    const nombre = 'Claudio'
    const apellido = 'Uccello'
    let edad = 35

    
    
    console.log(nombre, apellido)
    console.log(edad)
    console.log(edad + nombre)
    edad = 46
    
    console.log(edad)

    console.log(nombre + ' ' + apellido)


    return (
        <>
            <h2>Var Const Let</h2>
            <p>Diferencia entre</p>
            <ul>
                <li>
                    <code>var</code>
                </li>
                <li>
                    <code>const</code>
                </li>
                <li>
                    <code>let</code>
                </li>
            </ul>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Fragment</li>
                <li>Function</li>
            </ul>
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const'}
                targ={'_blank'}
                btnTxt={'CONST'}
            />
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let'}
                targ={'_blank'}
                btnTxt={'LET'}
            />

            <hr />
        </>

    )
}

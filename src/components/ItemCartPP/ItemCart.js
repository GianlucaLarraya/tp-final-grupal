import React, { useContext } from 'react';
import { CartContext } from '../CartContextPP/CartContext';
import { productos } from '../../data/productos';
import './ItemCart.css'

export const ItemCart = ({ item }) => {
    const { title, amount, id, price} = item
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)
    return (

        <div className='cartItem'>
            <p>
                {title} 
            </p>
            <div>
                {amount}
                <p>Total: $ {amount * price } </p>
            </div>
            <hr/>
        </div>
    )
}
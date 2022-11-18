import React, { useContext } from 'react'
import './Servicios.css';
import { productos } from '../../data/productos';
import { CartContext } from '../CartContextPP/CartContext'

export const Servicios = ({data}) => {

    const { addItemToCart, } = useContext(CartContext)

    return (

    <section id="servicios">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    
                    <h6>SERVICIOS</h6>
                    <h1>Nuestros Servicios</h1>
                    <p>En MZ Solutions, creamos experiencias digitales únicas a partir de nuestros servicios de: Marketing Digital, Google Ads, Meta Ads, TikTok Ads, Diseño Web, E-commerce, Community Managment, Videos Corporativos, SEO, y mucho más.</p>
                </div>
            </div>
            <div class="row g-4">
                    {productos.map(
                            (product, i) => (
                                <div key={i} class="col-lg-4 col-sm-6">
                                    <div class="card">
                                      <h5 class="mt-4 mb-2">{product.title}</h5>
                                      <p>{product.text}</p>
                                      <button className='btn btn-primary' onClick={()=> addItemToCart(product)}>Contratar servicio -${product.price}</button>
                                    </div>
                                </div>
                            )
                                
                        )}
            </div>
            
        </div>
    </section>
      
    )
  }
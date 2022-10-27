import React from 'react';
import './HeroBanner.css';

const background = "./assets/img/hero.jpg"

export const HeroBanner = () => {
  return (

    <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h1 class="display-4 text-white">Marketing sencillo para tu emprendimiento</h1>
                    <p class="text-white my-3">Tenemos todo lo que tu marca necesita para crecer, te acompañamos en cada paso del camino</p>
                    <a href="#portfolio" class="btn btn-outline-light">Nuestro Portfolio</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

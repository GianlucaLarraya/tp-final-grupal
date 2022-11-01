import React from 'react';
import './Portfolio.css';


export const Portfolio = () => {
  return (

    <section id="portfolio">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6>PORTFOLIO</h6>
                    <h1>Nuestros proyectos más recientes</h1>
                    <p>Trabajamos con marcas y emprendimientos de todo tipo, podes ver como los ayudamos a crecer a través de nuestros diversos servicios</p>
                </div>
            </div>
        </div>

        <div class="container">
         <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <img src="../TP 1/assets/daniele-d-andreti-9Am-iidiO40-unsplash.jpg" class="card-img-top" alt="imagen">
                <div class="card-body">
                  <h5 class="card-title">Nescafé</h5>
                  <p class="card-text">Basandonos en la antigua imagen de la marca, embarcamos un rebranding en todos sus productos, comenzando por la vuelta de la clásica taza Nescafé roja</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../TP 1/assets/mk-2-JoMUpNRfxdw-unsplash.jpg" class="card-img-top" alt="imagen">
                <div class="card-body">
                  <h5 class="card-title">Castro Capital</h5>
                  <p class="card-text">Nos encargamos de transformar por completo sus redes sociales, ofreciendoles un servicio de generación de contenido, community managment, y por otro lado hemos rediseñado su web para asegurar un mejor alcance y prioridad en los motores de búsqueda.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../TP 1/assets/04.png" class="card-img-top"  alt="imagen">
                <div class="card-body">
                  <h5 class="card-title">Paz Nuts</h5>
                  <p class="card-text">Diseñamos por completo la imagen de marca, generamos una página web priorizando el diseño, y la implementación de técnicas SEO. Ademas generamos contenido para todas sus redes sociales de forma periodica.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../TP 1/assets/redimensionada.jpg" class="card-img-top" alt="imagen" style= "max-height: 550px">
                <div class="card-body">
                  <h5 class="card-title">Café Fugaz</h5>
                  <p class="card-text">Lanzamiento de la marca junto a influencers precisamente seleccionados. Estrategia de Paid Media para publicitar la marca.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
   </section>

    
  )
}

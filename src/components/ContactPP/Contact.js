import React from 'react';
import './Contact.css';


export const Contact = () => {
    return (

        <section id="contacto">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6>CONTACTO</h6>
                    <h1>Charlemos</h1>
                    <p>Contactate con nuestro equipo para decidir que servicio es mejor para tu marca</p>
                </div>
            </div>
            
            <form action="" class="row g-3 justify-content-center">
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Nombre Completo" />
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="E-mail" />
                </div>
                <div class="col-md-10">
                    <input type="text" class="form-control" placeholder="Asunto" />
                </div>
                <div class="col-md-10">
                    <textarea name="" id="" cols="30" rows="5" class="form-control"
                        placeholder="Contanos un poco acerca de tu marca!"></textarea>
                </div>
                <div class="col-md-10 d-grid">
                    <button class="btn btn-outline-dark">Contacto</button>
                </div>
            </form>

        </div>
    </section>

        )
    }
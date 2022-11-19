import React from "react";
import './Team.css'
import { team } from "../../data/team";

export const Team = () => {

    return(
        <section id="team">
        <div class="container">
         <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
                <h6>TEAM</h6>
                <h1>Conocé nuestro equipo</h1>
                <p>Contamos con un equipo de diversas profesionales preparadas para llevar a tu marca al siguiente nivel</p>
            </div>
        </div>
        <div class="row text-center g-4">
            
                {team.map(
                    ({name, description,img}) => (
                        <div class="col-lg-3 col-md-6">
                        <div class="team card">
                        <img src={img} alt="imagen"/>
                        <h5 class="mb-0 mt-4">{name}</h5>
                        <p>{description}</p>  
                        </div>
                        </div>
                        
                    )
                )}
            
         </div>
        </div>
    </section>
    )
}
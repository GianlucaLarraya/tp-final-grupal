import React from 'react';
import './Blog.css';
import { articles } from "../../data/blogarticles";

export const Blog = () => {

    return(

<section id="Blog">
<div class="container-fluid">
    <div class="row mb-5">
        <div class="col-md-8 mx-auto text-center">
            <h6>BLOG</h6>
            <h1>Artículos redactados por nosotras para que mejores tus estrategias!</h1>
            <p>Todos los meses renovamos un set de artículos para que aprendas de marketing digital</p>
        </div>
    </div>
</div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  
   {articles.map(
    ({title,text,img}) => (
        <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="blogtitle" >{title}</h5>
              <p>{text}</p>
            </div>
          </div>
          )


    )}
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
</section>
    )
   }
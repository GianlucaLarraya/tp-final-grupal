import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";

import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
import { DesestArray } from "./components/fundamentos/07-DesestArray";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Map } from "./components/fundamentos/04-1-Map";


function App() {
  //  console.log(dataProducts)
  return (
    <>
    <DesestArray />
    <Map />
    <NavBar />
    <HeroBanner />
      <CardGrid data={productos} />
    <Footer />

    </>
  );
}

export default App;

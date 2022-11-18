import './App.css';
import { NavBar } from "./components/NavBarPP/NavBar";
import { Servicios } from "./components/ServiciosPP/Servicios";
import { Home } from "./components/pages/Home";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

    <NavBar />
     
      <Routes>

        <Route path="/" element={<Home />} />
        


      </Routes>


    </>
  );
}

export default App;

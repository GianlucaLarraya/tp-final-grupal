import './App.css';
import { NavBar } from "./components/NavBarPP/NavBar";
import { Servicios } from "./components/ServiciosPP/Servicios";
import { Home } from "./components/pages/Home";
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContextPP/CartContext';


function App() {
  return (
    <>
    
    <CartProvider>
    <NavBar />
     
      <Routes>

        <Route path="/" element={<Home />} />
        


      </Routes>
    </CartProvider>


    </>
  );
}

export default App;

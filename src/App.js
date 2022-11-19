import './App.css';
import { NavBar } from "./components/NavBarPP/NavBar";
import { Home } from "./components/pages/Home";
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContextPP/CartContext';
import { Blog } from './components/BlogPP/Blog';
import { BlogPage } from './components/pages/BlogPage';
import { Portfolio } from './components/PortfolioPP/Portfolio';
import { PortfolioPage } from './components/pages/PortfolioPage';


function App() {
  return (
    <>
    
    <CartProvider>
    <NavBar />
     
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        


      </Routes>
    </CartProvider>


    </>
  );
}

export default App;

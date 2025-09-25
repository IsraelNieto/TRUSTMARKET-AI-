import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ExploreProducts from './components/ExploreProducts';
import RegisterProduct from './components/RegistrarProducto';
import ViewSales from './components/ViewSales';
import Chatbot from './components/Chatbot'; // <-- ¡Importamos el nuevo componente!
import MiAppFlotante from './components/MiAppFlotante';
import ForgotPassword from './components/ForgotPassword'; // Importa el componente
import ResetPassword from './components/ResetPassword';   // Importa el componente
import MisCompras from './components/MisCompras'; // <-- Importa el nuevo componente
import Perfil from './components/Perfil';       // <-- Importa el nuevo componente
import EditarPerfil from './components/EditarPerfil'; // <-- Importa el nuevo componente
import Seguridad from './components/Seguridad'; // <-- Importa el nuevo componente
import DatosCuenta from './components/DatosCuenta'; // <-- Importa el nuevo componente
import Tarjetas from './components/Tarjetas'; // <-- Importa el nuevo componente
import Direcciones from './components/Direcciones'; // <-- Importa el nuevo componente


import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('activeUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('activeUser', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    setUser(null);
    navigate('/');
  };

  /*<img src="./assets/images/logo.jpg" alt="Logo de TRUSTMARKET AI" />*/
  return (
    <>
      <header>
        <h1>TRUSTMARKET AI</h1>
        <Navbar user={user} onLogout={handleLogout} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />

           {/* === RUTAS AÑADIDAS === */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {user?.role === 'cliente' && (
          <>
            <Route path="/explore-products" element={<ExploreProducts />} />
            <Route path="/mis-compras" element={<MisCompras />} /> {/* <-- Nueva ruta */}
            <Route path="/perfil" element={<Perfil />} />         {/* <-- Nueva ruta */}
            <Route path="/editar-perfil" element={<EditarPerfil />} /> {/* <-- Nueva ruta */}
            <Route path="/seguridad" element={<Seguridad />} /> {/* <-- Nueva ruta */}
            <Route path="/datos-cuenta" element={<DatosCuenta />} /> {/* <-- Nueva ruta */}
            <Route path="/tarjetas" element={<Tarjetas />} /> {/* <-- Nueva ruta */}
            <Route path="/direcciones" element={<Direcciones />} /> {/* <-- Nueva ruta */}
          </>
        )}

        {user?.role === 'vendedor' && (
          <>
            <Route path="/register-product" element={<RegisterProduct />} />
            <Route path="/view-sales" element={<ViewSales />} />
            
     
          </>
        )}
      </Routes>
      
      <MiAppFlotante /> {/* <-- ¡Lo renderizamos aquí! */}
    </>
  );
};

/*<Chatbot /> {/* <-- ¡Lo renderizamos aquí! */

const RootApp = () => (
  <Router>
    <App />
    <div id="app-chatbot-container">
      <Chatbot />
    </div>
  </Router>
);

export default RootApp;
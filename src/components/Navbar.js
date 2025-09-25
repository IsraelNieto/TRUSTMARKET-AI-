import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Chatbot from "../components/Chatbot"; // 👈 Importa tu Chatbot.js

const Navbar = ({ user, onLogout }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src="/assets/images/logo.jpg" alt="TrustMarket AI" />
            <span>TRUSTMARKET AI</span>
          </div>

          {/* Menú */}
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">Inicio</Link>
            </li>
            <li>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); handleScroll("nosotros"); }} className="navbar-link">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#soluciones" onClick={(e) => { e.preventDefault(); handleScroll("soluciones"); }} className="navbar-link">Soluciones</a>
            </li>
            <li>
              <a href="#vendedores" onClick={(e) => { e.preventDefault(); handleScroll("vendedores"); }} className="navbar-link">Para Vendedores</a>
            </li>
            <li>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); handleScroll("contacto"); }} className="navbar-link">Contacto</a>
            </li>
            {user?.role === "cliente" && (
              <li>
                <Link to="/explore-products" className="navbar-link">Explora Productos</Link>
              </li>
            )}
            {user?.role === "vendedor" && (
              <>
                <li>
                  <Link to="/register-product" className="navbar-link">Registrar Productos</Link>
                </li>
                <li>
                  <Link to="/view-sales" className="navbar-link">Ver Ventas</Link>
                </li>
              </>
            )}
          </ul>

          {/* Botones */}
          <div className="navbar-buttons">
            {user ? (
              <button onClick={onLogout} className="navbar-btn navbar-btn-primary">
                Cerrar Sesión
              </button>
            ) : (
              <>
                <Link to="/register" className="navbar-btn navbar-btn-secondary">Regístrate</Link>
                <Link to="/login" className="navbar-btn navbar-btn-secondary">Iniciar Sesión</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      

     
    </>
  );
};

export default Navbar;

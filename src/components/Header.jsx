import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <img width="120px" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/landing">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item ">
              <div id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle  text-white"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Inmuebles
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link className="nav-link active" to="/sale">
                          Comprar
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link active" to="/rental">
                          Alquilar
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

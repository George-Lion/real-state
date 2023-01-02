import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to="/landing">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to="/services">
                Sevicios
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

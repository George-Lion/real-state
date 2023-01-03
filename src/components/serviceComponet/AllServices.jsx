import React from "react";

export const AllServices = () => {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection"></use>
              </svg>
            </div>
            <h2>Busca tu vivienda</h2>
            <p>
              Seleccciona la vivienda en nuestro buscador y consulta su
              información.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle"></use>
              </svg>
            </div>
            <h2>Consulta su precio</h2>
            <p>Accede a la valoración estimada de la vivienda.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2"></use>
              </svg>
            </div>
            <h2>Solicita una valoración</h2>
            <p>
              Facilítanos una dirección de email y nos pondremos en contacto
              contigo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

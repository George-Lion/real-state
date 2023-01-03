import React from "react";

export const Information = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://www.pngmart.com/files/7/Real-Estate-PNG-HD.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold">
          Te ayudamos a conocer el valor real de tu vivienda
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            En WorldHome te ofrecemos un sistema de tasación que te permitirá
            conocer el valor real de un inmueble basándose en otros similares de
            la misma zona.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};

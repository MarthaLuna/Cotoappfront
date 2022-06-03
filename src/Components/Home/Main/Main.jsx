import React from "react";
import "./Main.scss";

export const Main = () => {
  return (
    <section className="Body d-flex align-items-center justify-content-center">
      <div className="Body-Container h-100 d-flex align-items-center justify-content-center">
        <div className="Body-Content p-4 d-flex flex-md-row flex-column align-items-center justify-content-center">
          <div className="Image h-100 w-100 mb-3 mb-md-0">
            <div className="Image-Container h-100">
              <div className="Image-Content h-100">
                <img
                  style={{ objectFit: "cover" }}
                  className="h-100 img-fluid rounded"
                  src="https://www.cosasdearquitectos.com/wp-content/uploads/Residencial-Bosque-Alto-Contexto-Arquitectos-1.jpg"
                />
              </div>
            </div>
          </div>

          <div className="Description ms-md-4 w-100">
            <div className="Description-Container">
              <div className="Description-Content">
                <p className="m-0">
                  El texto descriptivo, en este caso un retrato de una persona,
                  provoca en el receptor una imagen tal que la realidad
                  descripta cobra forma, se materializa en su mente. En este
                  caso el texto habla de un personaje real: Doña Uzeada de
                  Ribera Maldonado de Bracamonte y Anaya. Como se trata de una
                  descripcion literaria, la actitud del emisor es subjetiva,
                  dado que pretende transmitir su propia vision personal al
                  describir y la funcion del lenguaje es predominantemente
                  poetica, ya que persigue una estetica en particular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

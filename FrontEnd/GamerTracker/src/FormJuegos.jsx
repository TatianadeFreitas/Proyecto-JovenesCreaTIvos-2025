import { useState } from "react";

function FormJuegos({ onClose, onSubmit, juegoInicial }) {
  const [nombre, setNombre] = useState(juegoInicial?.nombre || "");
  const [descripcion, setDescripcion] = useState(juegoInicial?.descripcion || "");
  const [genero, setGenero] = useState(juegoInicial?.genero || "");
  const [año, setAño] = useState(juegoInicial?.año || "");


 const enviarFormulario = (evento) => {
  evento.preventDefault();
  onSubmit({ nombre, descripcion, genero, año });
};


    //Estilos con Boostrap
  return (
    <div className="modal-backdrop-custom modal fade show d-block">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Agregar Juego</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={enviarFormulario}>
            <div className="modal-body">

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Descripción"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
              />

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Género"
                value={genero}
                onChange={e => setGenero(e.target.value)}
              />

              <input
                type="number"
                className="form-control mb-2"
                placeholder="Año"
                value={año}
                onChange={e => setAño(e.target.value)}
              />

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default FormJuegos;

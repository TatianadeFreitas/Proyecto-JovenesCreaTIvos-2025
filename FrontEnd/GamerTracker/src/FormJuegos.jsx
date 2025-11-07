import { useState } from "react";

function FormJuegos({ onClose, onSubmit, juegoInicial }) {
  const [nombre, setNombre] = useState(juegoInicial?.nombre || "");
  const [descripcion, setDescripcion] = useState(juegoInicial?.descripcion || "");
  const [genero, setGenero] = useState(juegoInicial?.genero || "");
  const [año, setAño] = useState(juegoInicial?.año || "");

  // Nuevos campos
  const [completado, setCompletado] = useState(juegoInicial?.completado || false);
  const [horasJugadas, setHorasJugadas] = useState(juegoInicial?.horasJugadas || 0);
  const [puntuacion, setPuntuacion] = useState(juegoInicial?.puntuacion || 0);
  const [reseña, setReseña] = useState("");

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    onSubmit({
      nombre,
      descripcion,
      genero,
      año,
      completado,
      horasJugadas,
      puntuacion,
      reseñas: reseña ? [{ texto: reseña }] : []
    });
  };

  return (
    <div className="modal-backdrop-custom modal fade show d-block">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{juegoInicial ? "Editar Juego" : "Agregar Juego"}</h5>
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

              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkCompletado"
                  checked={completado}
                  onChange={() => setCompletado(!completado)}
                />
                <label className="form-check-label" htmlFor="checkCompletado">
                  ¿Completado?
                </label>
              </div>

              <label>Horas jugadas:</label>
              <input
                type="number"
                className="form-control mb-2"
                value={horasJugadas}
                onChange={e => setHorasJugadas(e.target.value)}
              />

              <select
                className="form-control mb-2"
                value={puntuacion}
                onChange={e => setPuntuacion(e.target.value)}
              >
                <option value="0">Sin puntuación</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>

              <textarea
                className="form-control mb-2"
                placeholder="Escribe una reseña (opcional)"
                value={reseña}
                onChange={e => setReseña(e.target.value)}
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

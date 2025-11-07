import "./CartaJuegos.css";

function CartaJuegos({ juego, editar, eliminar }) {

    // Convertimos la puntuación en estrellas
    const estrellas = "⭐".repeat(juego.puntuacion || 0);

    return (
        <article className="card">
            <div className="card-header">
                <h2>{juego.nombre}</h2>
                <p className="genero-año">{juego.genero} • {juego.año}</p>
            </div>

            <div className="card-body">
                <p><strong>Descripción: </strong>{juego.descripcion}</p>
                <p><strong>Completado:</strong> {juego.completado ? "Sí" : "No"}</p>
                <p><strong>Horas jugadas:</strong> {juego.horasJugadas || 0}h</p>
                <p><strong>Puntuación:</strong> {estrellas || "Sin puntuar"}</p>

                {juego.reseñas?.length > 0 && (
                    <p><strong>Última reseña:</strong> "{juego.reseñas[juego.reseñas.length - 1].texto}"</p>
                )}
            </div>

            <div className="card-footer">
                <button className="btn editar" onClick={() => editar(juego)}>Editar</button>
                <button className="btn eliminar" onClick={() => eliminar(juego._id)}>Eliminar</button>
            </div>
        </article>
    )
}

export default CartaJuegos;

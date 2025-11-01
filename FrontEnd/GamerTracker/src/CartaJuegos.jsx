import "./CartaJuegos.css";

function CartaJuegos() {
    return (
        <article className="card">
            <h2>Titulo del juego</h2>
            <img src="" alt="Portada del juego"/>
            <p>Descripción del juego</p>
            <p>Género</p>
            <p>Año</p>

            <div className="botones">
                <button className="btn editar">Editar</button>
                <button className="btn eliminar">Eliminar</button>
            </div>
        </article>
    )
}

export default CartaJuegos;

import "./CartaJuegos.css";

function CartaJuegos({ juego, editar, eliminar}) {
    return ( 
        <article className="card">
            <h2>{juego.nombre}</h2>
            {/*si no hay imagen se aplica una predeterminada */}
            <img src={juego.imagen || "https://via.placeholder.com/200"} alt={juego.nombre}/>
            <p>{juego.descripcion}</p>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.año}</p>

            <div className="botones">
                <button className="btn editar" onClick={()=> editar(juego)}>Editar</button>
                <button className="btn eliminar" onClick={()=> eliminar(juego._id)}>Eliminar</button>
            </div>
        </article>
    )
}

export default CartaJuegos;

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CartaJuegos from "./CartaJuegos";
import BtnAgregar from "./BtnAgregar";
import FormJuegos from "./FormJuegos.jsx";
import BarraBusqueada from "./BarraBusqueda.jsx";


function IndexPage() {

  const navigate = useNavigate();
  const [juegos, setJuegos] = useState([]);
  const [filtro, setFiltro] = useState(""); 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [juegoEditando, setJuegoEditando] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/juegos")
      .then(res => res.json())
      .then(data => setJuegos(data.data)); //El array de juegos dentro del JSON
  }, []);

  //crear juego
  const agregarJuego = async (nuevoJuego) => {
    await fetch("http://localhost:3000/api/juegos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoJuego)
    });

    setMostrarFormulario(false);
    window.location.reload();
  };

  //editar juego
  const editarJuego = async (juegoActualizado) => {
    await fetch(`http://localhost:3000/api/juegos/${juegoEditando._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juegoActualizado)
    });

    setMostrarFormulario(false);
    setJuegoEditando(null);
    window.location.reload();
  };

  //eliminar juego
const eliminarJuego = async (id) => {
  if (!confirm("¿Seguro que quieres eliminar este juego?")) return;

  await fetch(`http://localhost:3000/api/juegos/${id}`, {
    method: "DELETE"
  });

  // Actualiza la lista sin recargar
  setJuegos(
  juegos.filter(juego => 
    juego._id !== id // Mantener todos los juegos cuyo _id sea distinto al que quiero borrar.
  )
);
};


// Barra de búsqueda - Filtrado de juegos
const juegosFiltrados = juegos.filter(juego =>
  juego.nombre.toLowerCase().includes(filtro.toLowerCase())
);


  return (
    <div className="estructura">
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li><button className="nav-btn" onClick={() => navigate('/')}>Home</button></li>
            <li><button className="nav-btn" onClick={() => navigate('/contacto')}>Contacto</button></li>
          </ul>

          {/*Barra de búsqueda dentro del nav */}
          <BarraBusqueada onBuscar={setFiltro} />
        </nav>
      </header>

      <section className="cuerpo-juegos">
        {juegosFiltrados.map((juego) => (
          <CartaJuegos
            key={juego._id}
            juego={juego}
            editar={(juegoAeditar) => { 
              setJuegoEditando(juegoAeditar); 
              setMostrarFormulario(true);
            }}
            eliminar={eliminarJuego}
          />
        ))}
      </section>


      <BtnAgregar onClick={() => { setJuegoEditando(null); setMostrarFormulario(true); }}/>

      {mostrarFormulario && (
        <FormJuegos
          onClose={() => { setMostrarFormulario(false); setJuegoEditando(null); }}
          onSubmit={juegoEditando ? editarJuego : agregarJuego}
          juegoInicial={juegoEditando}
        />
      )}
    </div>
  );
}


export default IndexPage;

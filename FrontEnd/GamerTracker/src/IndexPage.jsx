import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CartaJuegos from "./CartaJuegos";


function IndexPage() {

   const navigate = useNavigate();
  // Efecto para cargar datos o inicializar componentes
  useEffect(() => {}, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><button onClick={() => navigate('/')}>Home</button></li>
            <li><button onClick={() => navigate('/contacto')}>Contacto</button></li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Juegos Disponibles</h1>
          <CartaJuegos />
      </section>
    </div>
  );
}

export default IndexPage;

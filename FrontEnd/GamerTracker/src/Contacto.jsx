import { useNavigate } from 'react-router-dom';

function Contacto() {
  const navigate = useNavigate();

  return (
    <div className="estructura">
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li><button className="nav-btn" onClick={() => navigate('/')}>Home</button></li>
            <li><button className="nav-btn" onClick={() => navigate('/index')}>Volver</button></li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Página de Contacto</h1>
        <p>Acá va el contenido de la página de contacto.</p>
      </section>
      
    </div>
  );
}

export default Contacto;
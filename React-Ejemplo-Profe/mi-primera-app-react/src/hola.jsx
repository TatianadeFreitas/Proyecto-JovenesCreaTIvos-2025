import './navbar.css';

export default function Navbar({ seccionActiva, cambiarSeccion }) {
    const navegarA = (seccion) => {
        cambiarSeccion(seccion)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h2 onClick={() => navegarA('inicio')}>
                        💼 Franco Torres
                    </h2>
                </div>
                
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <button 
                            onClick={() => navegarA('inicio')}
                            className={`navbar-link ${seccionActiva === 'inicio' ? 'active' : ''}`}
                        >
                            🏠 Inicio
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button 
                            onClick={() => navegarA('perfil')}
                            className={`navbar-link ${seccionActiva === 'perfil' ? 'active' : ''}`}
                        >
                            👨‍💻 Perfil Profesional
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button 
                            onClick={() => navegarA('jugos')}
                            className={`navbar-link ${seccionActiva === 'jugos' ? 'active' : ''}`}
                        >
                            🥤 Mis Jugos
                        </button>
                    </li>
                </ul>
                
                <div className="navbar-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
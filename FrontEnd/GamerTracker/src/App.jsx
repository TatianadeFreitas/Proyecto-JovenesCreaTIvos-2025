import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="app-titulo">Hola Bienvenido a GamerTracker</h1>
      <button className="btn-iniciar" onClick={() => navigate('/index')}>Iniciar Experiencia</button>
    </>
  );
}

export default App;

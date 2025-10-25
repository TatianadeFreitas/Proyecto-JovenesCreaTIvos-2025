
import './App.css'
import { useState, useEffect } from 'react'
import JugoCard from './JugoCard.jsx'

function App() {
  // Datos del perfil profesional
  const nombre = "Franco"
  const profesion = "Fullstack Developer"
  const edad = 31
  const ciudad = "Montevideo"
  const habilidades = ["NestJS", "Node.js", "Angular", "Maestro Pokemon"]
  const disponible = true

  // Estados para los jugos
  const [jugos, setJugos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Función para obtener los jugos del servidor
  const obtenerJugos = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:3001/api/jugosAll')
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }
      
      const resultado = await response.json()
      
      if (resultado.success) {
        setJugos(resultado.data)
      } else {
        throw new Error('Error en la respuesta del servidor')
      }
    } catch (err) {
      setError(err.message)
      console.error('Error al obtener jugos:', err)
    } finally {
      setLoading(false)
    }
  }

  // useEffect para cargar los datos al montar el componente
  useEffect(() => {
    obtenerJugos()
  }, [])

  // Obtener solo los primeros 3 jugos para mostrar como favoritos
  const jugosFavoritos = jugos.slice(0, 3)

  return (
    <div className="container">
      {/* Sección de Perfil Profesional */}
      <h1>Perfil Profesional</h1>
      <div className="card">
        <h2>{nombre}</h2>
        <p><strong>Profesión:</strong> {profesion}</p>
        <p><strong>Edad:</strong> {edad} años</p>
        <p><strong>Ciudad:</strong> {ciudad}</p>

        <p>
          <strong>Estado:</strong> 
          <span className={disponible ? 'estado-disponible' : 'estado-no-disponible'}>
            {disponible ? '✅ Disponible' : '❌ No disponible'}
          </span>
        </p>

        <h3>Habilidades:</h3>
        <ul>
          {habilidades.map((hab, index) => (
            <li key={index}>{hab}</li>
          ))}
        </ul>
      </div>

      {/* Sección de Jugos Favoritos */}
      <h1 style={{ marginTop: '40px' }}>🥤 Mis Jugos Favoritos</h1>
      
      <button onClick={obtenerJugos} className="refresh-btn">
        🔄 Actualizar Favoritos
      </button>

      {loading && (
        <div className="loading">
          <p>⏳ Cargando jugos favoritos...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>❌ Error: {error}</p>
          <p>Asegúrate de que el servidor esté corriendo en http://localhost:3001</p>
        </div>
      )}

      {!loading && !error && jugosFavoritos.length > 0 && (
        <div className="jugos-container">
          <p className="total-jugos">Mis top 3 jugos favoritos</p>
          
          {jugosFavoritos.map((jugo, index) => (
            <JugoCard
              key={jugo.id}
              jugo={jugo}
              index={index}
              showMedalla={true}
              showAllReviews={false}
            />
          ))}
          
          <div className="ver-mas">
            <p>🍹 ¡Y muchos jugos más disponibles en nuestra tienda!</p>
          </div>
        </div>
      )}
    </div>
  )
}


export default App

import './JugoCard.css'

const JugoCard = ({ 
  jugo, 
  index = null, 
  showMedalla = false, 
  showAllReviews = false 
}) => {
  // Función para calcular promedio de puntuaciones
  const calcularPromedio = (reseñas) => {
    if (reseñas.length === 0) return 0
    const suma = reseñas.reduce((acc, reseña) => acc + reseña.puntuacion, 0)
    return (suma / reseñas.length).toFixed(1)
  }

  // Obtener medalla según el índice
  const obtenerMedalla = (indice) => {
    switch (indice) {
      case 0: return '🥇 '
      case 1: return '🥈 '
      case 2: return '🥉 '
      default: return ''
    }
  }

  // Determinar qué reseñas mostrar
  const reseñasAMostrar = showAllReviews ? jugo.reseñas : jugo.reseñas.slice(0, 1)

  return (
    <div className="jugo-card">
      <div className="jugo-header">
        <h2>
          {showMedalla && index !== null && obtenerMedalla(index)}
          {jugo.nombre}
        </h2>
        <span className="precio">${jugo.precio}</span>
      </div>
      
      <p className="descripcion">{jugo.descripcion}</p>
      
      <div className="rating">
        <span className="promedio">⭐ {calcularPromedio(jugo.reseñas)}</span>
        <span className="total-reseñas">({jugo.reseñas.length} reseñas)</span>
      </div>

      <div className="reseñas">
        <h4>
          {showAllReviews ? 'Reseñas:' : 'Reseñas destacadas:'}
        </h4>
        {reseñasAMostrar.map((reseña, reseñaIndex) => (
          <div key={reseñaIndex} className="reseña">
            <div className="reseña-header">
              <strong>{reseña.usuario}</strong>
              <span className="puntuacion">
                {'⭐'.repeat(reseña.puntuacion)}
              </span>
            </div>
            <p className="comentario">"{reseña.comentario}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JugoCard
// Importación de dependencias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//Conexión a MongoDB Atlas
const mongo_URL = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/tatiana";

mongoose
  .connect(mongo_URL)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(error => console.error('Error al conectar MongoDB:', error));

//Esquema y Modelo de Juego
const JuegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  genero: String,
  año: Number
}, { versionKey: false });

const Juego = mongoose.model('Juego', JuegoSchema);

// Ruta principal
app.get('/', (req, res) => {
  res.json({
      message: 'API de Juegos - Conectada a MongoDB',
      version: '1.0.0',
      endpoints: {
          'GET /api/juegos': 'Obtener todos los juegos',
          'GET /api/juegos/:id': 'Obtener juego por ID',
          'POST /api/juegos': 'Crear juego',
          'PUT /api/juegos/:id': 'Actualizar juego',
          'DELETE /api/juegos/:id': 'Eliminar juego',
          'GET /health': 'Verificar estado del servidor'
      }
  });
});

// ========== ENDPOINTS PARA JUEGOS ==========

// Endpoint para obtener todos los juegos
app.get('/api/juegos', async (req, res)=> {

    try{
        const juegos = await Juego.find();
        res.json({
             success: true, 
             count: juegos.length, 
             data: juegos
        });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/juegos/:id', async (req, res) => {
  try {
      const juego = await Juego.findById(req.params.id);
      if (!juego) return res.status(404).json({ success: false, message: 'Juego no encontrado' });
      res.json({ success: true, data: juego });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});

//CRUD (Create, Read, Update, Delete)

// Crear un juego (POST)
app.post('/api/juegos', async (req, res) => {
  try {
      const nuevoJuego = new Juego(req.body);
      await nuevoJuego.save();
      res.status(201).json({ success: true, message: 'Juego agregado', data: nuevoJuego });
  } catch (error) {
      res.status(400).json({ success: false, message: error.message });
  }
});

// Actualizar un juego
app.put('/api/juegos/:id', async (req, res) => {
  try {
      const juegoActualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!juegoActualizado) return res.status(404).json({ success: false, message: 'Juego no encontrado' });
      res.json({ success: true, message: 'Juego actualizado', data: juegoActualizado });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});

// Eliminar un juego
app.delete('/api/juegos/:id', async (req, res) => {
  try {
      const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
      if (!juegoEliminado) return res.status(404).json({ success: false, message: 'Juego no encontrado' });
      res.json({ success: true, message: 'Juego eliminado' });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
});

// Endpoint de estado del servidor
app.get('/health', (req, res) => {
  res.json({
      status: '✅ OK',
      timestamp: new Date().toISOString()
  });
});

// Servidor
app.listen(PORT, () => {
  console.log('🚀 ======================================');
  console.log(`🎮 Servidor de Juegos iniciado`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📡 API Juegos: http://localhost:${PORT}/api/juegos`);
  console.log('🚀 ======================================');
});
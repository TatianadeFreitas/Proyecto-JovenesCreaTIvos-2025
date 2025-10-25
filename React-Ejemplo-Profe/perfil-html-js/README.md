# Comparación: React vs HTML/JavaScript Vanilla

Este proyecto muestra exactamente la misma funcionalidad implementada de dos formas diferentes:

## 📁 Estructura del Proyecto

```
react/
├── mi-primera-app-react3/     # Versión React
│   ├── src/
│   │   ├── App.jsx           # Componente principal
│   │   ├── App.css           # Estilos
│   │   └── main.jsx          # Punto de entrada
│   └── ...
└── perfil-html-js/           # Versión HTML/JS
    ├── index.html            # Estructura HTML
    ├── styles.css            # Estilos (idénticos)
    └── script.js             # Lógica JavaScript
```

## 🔍 Diferencias Principales

### **React (Declarativo)**
```jsx
// Los datos son parte del componente
const nombre = "Franco"
const habilidades = ["NestJS", "Node.js", "Angular"]

// El JSX describe CÓMO debe verse la UI
return (
  <div className="card">
    <h2>{nombre}</h2>
    <ul>
      {habilidades.map((hab, index) => (
        <li key={index}>{hab}</li>
      ))}
    </ul>
  </div>
)
```

### **HTML/JavaScript (Imperativo)**
```javascript
// Los datos están separados
const perfilData = {
    nombre: "Franco",
    habilidades: ["NestJS", "Node.js", "Angular"]
}

// Debes manipular el DOM manualmente
function renderizarPerfil() {
    document.getElementById('nombre').textContent = perfilData.nombre;
    
    const lista = document.getElementById('habilidades');
    lista.innerHTML = '';
    perfilData.habilidades.forEach(hab => {
        const li = document.createElement('li');
        li.textContent = hab;
        lista.appendChild(li);
    });
}
```

## ⚡ Ventajas y Desventajas

### **React**
✅ **Ventajas:**
- **Reactividad automática** - Los cambios se reflejan automáticamente
- **Código más limpio** - JSX es más legible
- **Componentes reutilizables** - Fácil de escalar
- **Ecosystem** - Miles de librerías disponibles

❌ **Desventajas:**
- **Curva de aprendizaje** - Conceptos como hooks, estado, etc.
- **Bundle size** - Archivo más pesado
- **Dependencias** - Necesita build process

### **HTML/JavaScript Vanilla**
✅ **Ventajas:**
- **Sin dependencias** - Funciona directamente en el navegador
- **Control total** - Acceso directo al DOM
- **Rendimiento** - Más rápido para aplicaciones simples
- **Simplicidad** - Fácil de entender para principiantes

❌ **Desventajas:**
- **Manejo manual del estado** - Debes re-renderizar manualmente
- **Código repetitivo** - Más verbose para aplicaciones complejas
- **Difícil de mantener** - Se vuelve complicado al escalar

## 🚀 Cómo Ejecutar

### **Versión React:**
```bash
cd mi-primera-app-react3
npm install
npm run dev
```

### **Versión HTML/JS:**
```bash
cd perfil-html-js
# Simplemente abre index.html en tu navegador
start index.html
```

## 🎯 Funcionalidades Implementadas

Ambas versiones incluyen:
- ✅ Mostrar información del perfil
- ✅ Lista de habilidades con estilos
- ✅ Estado de disponibilidad
- ✅ Estilos idénticos con efectos hover
- ✅ Diseño responsive
- ✅ Interactividad (click para cambiar estado)

## 💡 Funciones Interactivas (Solo HTML/JS)

En la versión HTML/JS agregué funciones extras para demostrar la interactividad:

- **Click en estado** - Cambia entre disponible/no disponible
- **Doble click en tarjeta** - Agrega nuevas habilidades
- **Consola del navegador** - Prueba `window.perfilApp.agregarHabilidad("React")`

## 🎨 Estilos

Ambas versiones comparten exactamente los mismos estilos CSS para una comparación justa:
- Gradiente de fondo moderno
- Tarjeta con efectos hover
- Habilidades estilo "pill" con gradientes
- Animaciones suaves
- Diseño responsive

---

**Conclusión:** React brilla en aplicaciones complejas con mucho estado, mientras que HTML/JS vanilla es perfecto para proyectos simples sin dependencias.
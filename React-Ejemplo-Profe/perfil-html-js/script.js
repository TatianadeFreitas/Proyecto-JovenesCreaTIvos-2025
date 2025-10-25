const perfilData = {
    nombre: "Franco",
    profesion: "Fullstack Developer",
    edad: 31,
    ciudad: "Montevideo",
    habilidades: ["NestJS", "Node.js", "Angular"],
    disponible: true
};

function renderizarPerfil() {
    const nombreElement = document.getElementById('nombre');
    const profesionElement = document.getElementById('profesion');
    const edadElement = document.getElementById('edad');
    const ciudadElement = document.getElementById('ciudad');
    const estadoElement = document.getElementById('estado');
    const habilidadesElement = document.getElementById('habilidades');

    nombreElement.textContent = perfilData.nombre;
    profesionElement.textContent = perfilData.profesion;
    edadElement.textContent = perfilData.edad;
    ciudadElement.textContent = perfilData.ciudad;

    if (perfilData.disponible) {
        estadoElement.textContent = '✅ Disponible';
        estadoElement.className = 'estado-disponible';
    } else {
        estadoElement.textContent = '❌ No disponible';
        estadoElement.className = 'estado-no-disponible';
    }

    habilidadesElement.innerHTML = ''; 
    perfilData.habilidades.forEach((habilidad, index) => {
        const li = document.createElement('li');
        li.textContent = habilidad;
        habilidadesElement.appendChild(li);
    });
}

function toggleDisponibilidad() {
    perfilData.disponible = !perfilData.disponible;
    renderizarPerfil(); 
}

function agregarHabilidad(nuevaHabilidad) {
    if (nuevaHabilidad && !perfilData.habilidades.includes(nuevaHabilidad)) {
        perfilData.habilidades.push(nuevaHabilidad);
        renderizarPerfil(); 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Aplicación HTML/JS cargada');
    renderizarPerfil();
    
    const estadoElement = document.getElementById('estado');
    estadoElement.style.cursor = 'pointer';
    estadoElement.addEventListener('click', toggleDisponibilidad);
    
    const card = document.getElementById('profileCard');
    card.addEventListener('dblclick', function() {
        const nuevaHabilidad = prompt('Ingresa una nueva habilidad:');
        if (nuevaHabilidad) {
            agregarHabilidad(nuevaHabilidad.trim());
        }
    });
    
    console.log('💡 Haz click en el estado para cambiar disponibilidad');
    console.log('💡 Haz doble click en la tarjeta para agregar habilidades');
});

window.perfilApp = {
    data: perfilData,
    renderizar: renderizarPerfil,
    toggleDisponibilidad: toggleDisponibilidad,
    agregarHabilidad: agregarHabilidad
};
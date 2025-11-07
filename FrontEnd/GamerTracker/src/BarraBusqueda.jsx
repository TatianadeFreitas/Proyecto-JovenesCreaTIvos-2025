import { useState } from "react";

function BarraBusqueada({ onBuscar }) {

  /*Creamos un estado llamado "texto" para guardar lo que el usuario escribe
  useState("") significa que empieza vacío
  setTexto es la función que usamos para actualizar ese texto*/
  const [texto, setTexto] = useState("");

  const cambiarTexto = (e) => {
    const valor = e.target.value;  // e.target.value es el texto actual que el usuario ingresó
    setTexto(valor);
    onBuscar(valor);
  };

  return (
    <input
      type="text"
      placeholder="Buscar juego..."
      value={texto}
      onChange={cambiarTexto}
      className="barra-busqueda"
    />
  );
}

export default BarraBusqueada;

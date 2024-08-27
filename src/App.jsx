// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [texto, setTexto] = useState("Este es un ejemplo, pulsa en encriptar");

//   return (
//     <>
//       <div></div>
//       <h1>Encriptador de Texto </h1>
//       <div className="card">
//         <button onClick={() => setCount((texto) =>)}>
//           Encriptar
//         </button>
//         <button onClick={() => setCount((texto) => )}>
//           Descencriptar
//         </button>
//         <p>{texto}</p>
//       </div>
//       <p className="read-the-docs">Ecriptador de texto</p>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

// Función para encriptar usando un cifrado César simple
const encriptarTexto = (texto) => {
  const desplazamiento = 3;
  return texto.replace(/[a-zA-Z]/g, (c) =>
    String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= c.charCodeAt(0) + desplazamiento
        ? c.charCodeAt(0) + desplazamiento
        : c.charCodeAt(0) + desplazamiento - 26
    )
  );
};

// Función para desencriptar usando un cifrado César simple
const desencriptarTexto = (texto) => {
  const desplazamiento = 3;
  return texto.replace(/[a-zA-Z]/g, (c) =>
    String.fromCharCode(
      (c >= "a" ? 97 : 65) <= c.charCodeAt(0) - desplazamiento
        ? c.charCodeAt(0) - desplazamiento
        : c.charCodeAt(0) - desplazamiento + 26
    )
  );
};

function App() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <>
      <h1>Encriptador de Texto</h1>
      <div className="card">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ingresa el texto aquí"
        />
        <button onClick={() => setResultado(encriptarTexto(texto))}>
          Encriptar
        </button>
        <button onClick={() => setResultado(desencriptarTexto(texto))}>
          Desencriptar
        </button>
        <p>{resultado}</p>
      </div>
      <p className="read-the-docs">Encriptador de texto</p>
    </>
  );
}

export default App;

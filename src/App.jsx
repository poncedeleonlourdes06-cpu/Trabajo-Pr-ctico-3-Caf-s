
// Permite Acceder al estado del coponete
import { useState } from "react";

import cafes from "./data/Cafes";


const App = () => {
    // // código javascript
    // Pongo el estado y la función, también agrega el valor inicial de la página
    const [pagina, setPagina] = useState(0);
    const siguientecafe = () => {
        if (pagina + 1 < cafes.length) {
            setPagina(
                pagina + 1
            );
        }
    };
    const anteriorcafe = () => {
        if (pagina > 0) {
            setPagina(
                pagina - 1
            );
        }
    };
    return (
        // // código JSX (estrusctura que ve el usuario)
        <div className="contenedor">
            <h1>Nuestros Cafés</h1>

            <div className="tarjeta-cafe">
                <h2>{cafes[pagina].titulo}</h2>

                {/* contador de los cafes */}

                <p className="pagina">Página {pagina + 1} de {cafes.length}</p>

                <img key={pagina}
                    className="imagen-cafe"
                    src={cafes[pagina].imagen}
                    alt={cafes[pagina].titulo}
                    width="300"
                />

                <p className="descripcion">{cafes[pagina].descripcion}</p>

                <div className="botones">
                    <button
                        onClick={anteriorcafe}
                        disabled={pagina === 0}
                    >
                        Anterior
                    </button>

                    <button
                        onClick={siguientecafe}
                        disabled={pagina + 1 === cafes.length}

                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

// // la exportación de la función
export default App;


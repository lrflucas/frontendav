import { useState } from "react";

const ShowMessage = () => {
    const [aparecer, setAparecer] = useState(false);

    return (
        <div>
            <br></br>
            <h1>Desafio 3</h1>
            <button onClick={() => setAparecer(!aparecer)}>Mostrar Mensagem</button>

            {aparecer && <p>Olá, esta é a mensagem secreta!</p>}
            
            <br></br>
            <h1>Desafio 4</h1>
        </div>
    );
};

export default ShowMessage;
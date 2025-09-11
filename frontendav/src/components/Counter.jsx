import { useState } from "react";

const Counter = () => {
    const [contar, setContar] = useState(0);

    return (
        <div>
            <br></br>
            <h1>Desafio 2</h1>
            <h2>Valor: {contar}</h2>
            <button onClick={() => setContar(contar+1)}>Aumentar</button>
        </div>
    );
};

export default Counter;
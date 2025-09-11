import { useState } from "react";

const RandomNumber = () => {
    const [numero, setNumero] = useState(0);

    function gerarNumero() {
        let novoNumero = Math.floor(Math.random() * 100) + 1;
        setNumero(novoNumero);
    };

    return (
        <div>
            <br></br>
            <h1>Desafio 5</h1>
            <h2>{numero}</h2>
            <button onClick={gerarNumero}>Gerar número aleatório</button>
        </div>
    );
};

export default RandomNumber;
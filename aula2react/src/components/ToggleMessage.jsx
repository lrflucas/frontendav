import { useState } from "react";

const ToggleMessage = () => {
    const [mensagem, setMensagem] = useState("Olá, React!");

    function trocarMensagem() {
        setMensagem((mensagemAtual) => mensagemAtual === "Olá, React!" ? "Até logo, React!" : "Olá, React!");
    };

    return (
        <div>
            <p>{mensagem}</p>
            <button onClick={trocarMensagem}>Trocar de mensagem</button>
        </div>
    );
};

export default ToggleMessage;
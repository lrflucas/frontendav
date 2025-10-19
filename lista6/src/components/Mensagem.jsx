import { useState } from "react";
import './Mensagem.css'

const Mensagem = () => {
    const [online, setOnline] = useState(true);

    function trocarStatus() {
        setOnline(!online)
    };

    return (
        <p className={online ? 'ativo' : 'inativo'} onClick={trocarStatus}>Usuário online</p>
    );
};

export default Mensagem;
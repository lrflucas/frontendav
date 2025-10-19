import { useState } from "react";

const BotaoDinamico = () => {
    const [ativo, setAtivo] = useState(false);

    function trocarEstado() {
        setAtivo(!ativo)
    };

    return (
        <button onClick={trocarEstado} style={{
            backgroundColor: ativo ? 'green' : 'red',
            color: 'black'
        }}>{ativo ? 'Desativar' : 'Ativar'}</button>
    );
};

export default BotaoDinamico;
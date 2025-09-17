import { useEffect, useState } from "react";

const Montar = () => {
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        setMensagem("O componente foi montado!");
    }, []);

    return (
        <h2>{mensagem}</h2>
    );
};

export default Montar;
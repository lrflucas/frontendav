import { useState } from 'react';
import './Formulario.css'

const Formulario = ({ onAdicionar }) => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [curso, setCurso] = useState("");

    const envio = (e) => {
        e.preventDefault();

        const novoAluno = { nome, idade, curso };
        onAdicionar(novoAluno);

        setNome("");
        setIdade("");
        setCurso("");
    };

    return (
        <form className="formulario" onSubmit={envio}>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <input type="text" placeholder="Curso" value={curso} onChange={(e) => setCurso(e.target.value)}/>

            <button type="submit">Adicionar</button>
        </form>
    );
};

export default Formulario;
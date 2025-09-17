import { useState } from "react";

const ListaDeTarefas = () => {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa() {
        if(tarefa.trim() !== "") {
            setTarefas([...tarefas, tarefa]);
            setTarefa("");
        };
    };

    function removerTarefa(index) {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Digite uma tarefa"/>
            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}{" "} <button onClick={() => removerTarefa(index)}>Remover</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeTarefas;
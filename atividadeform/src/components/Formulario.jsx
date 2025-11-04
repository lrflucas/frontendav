import { useState } from "react";

const Formulario = () => {
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [curso, setCurso] = useState("");
    const [idade, setIdade] = useState("");
    const [mensagem, setMensagem] = useState("");

    const envio = (e) => {
        e.preventDefault();

        const dados ={
            nome,
            matricula,
            curso,
            idade,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        })
        .then((resposta) => resposta.json())
        .then((resultado) => {
            setMensagem(`Inscrição concluída!
            Nome: ${dados.nome}
            Matrícula: ${dados.matricula}
            Curso: ${dados.curso}
            Idade: ${dados.idade}
            ID gerado: ${resultado.id}`);

        setNome("");
        setMatricula("");
        setCurso("");
        setIdade("");
        })
        .catch((erro) => {
            setMensagem(`Erro ao enviar: ${erro.message}`);
        });
    };

    return (
        <form onSubmit={envio}>
            <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </label>
            <label>
                Matrícula:
                <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)}/>
            </label>
            <label>
                Curso:
                <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)}/>
            </label>
            <label>
                Idade:
                <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            </label>

            <button type="submit">Enviar</button>

            {mensagem && (<p>{mensagem}</p>)}

        </form>
    );
};

export default Formulario;
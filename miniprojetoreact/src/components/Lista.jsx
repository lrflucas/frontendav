import './Lista.css'

const Lista = ({ alunos, onRemover }) => {

    return (
        <div className='lista-alunos'>
            <h2>Lista de alunos</h2>
            
            {alunos.length === 0 ? (
                <p>Nenhum aluno cadastrado.</p>
            ) : (
                alunos.map((aluno, index) => (
                    <div key={index} className='aluno-item'>
                        <span>
                            <strong>{aluno.nome}</strong> - {aluno.idade} anos - {aluno.curso}
                        </span>
                        <button onClick={() => onRemover(index)}>Remover</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Lista;
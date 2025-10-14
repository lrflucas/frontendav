import './ExibirDetalhes.module.css'

const ExibirDetalhes = ({ marca, modelo, ano, cor }) => {
    return (
        <div className="card">
            <h3>{marca} {modelo}</h3>
            <p><strong>Ano:</strong> {ano}</p>
            <p><strong>Cor:</strong> {cor}</p>
        </div>
    );
};

export default ExibirDetalhes;
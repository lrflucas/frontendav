import './App.css'
import ExibirDetalhes from './components/ExibirDetalhes'

function App() {
  
  return (
    <div>
      <h1>Desafio 5</h1>

      <div>
        <ExibirDetalhes marca="Audi" modelo="A3" ano={2024} cor="Amarelo" />
        <ExibirDetalhes marca="Volkswagen" modelo="Fusca" ano={1970} cor="Azul" />
        <ExibirDetalhes marca="Nissan" modelo="Kicks" ano={2024} cor="Azul" />
      </div>
    </div>
  );
}

export default App

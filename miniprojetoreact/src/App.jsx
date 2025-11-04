import { useState } from 'react';
import './App.css'
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [alunos, setAlunos] = useState([]);

  function adicionarAluno(novoAluno) {
    setAlunos([...alunos, novoAluno]);
  };

  function removerAluno(index) {
    const novaLista = alunos.filter((_, i) => i !== index);
    setAlunos(novaLista);
  };

  return (
    <div className='app-container'>
      <Formulario onAdicionar={adicionarAluno}/>
      <Lista alunos={alunos} onRemover={removerAluno}/>
    </div>
  );
}

export default App

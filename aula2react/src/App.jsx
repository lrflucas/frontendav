import './App.css'
import meteora from './assets/meteora.jpeg'
import BoasVindas from './components/BoasVindas'
import ListaDeTarefas from './components/ListaDeTarefas'
import Montar from './components/Montar'
import ToggleMessage from './components/ToggleMessage'

function App() {

  return (
    <div>
      <img src="/meteora.jpeg" alt="Foto na public"/>
      <img src={meteora} alt="Foto na assets"/>
      <br/>
      <br/>
      <h1>Questão 16</h1>
      <BoasVindas nome="Lucas"/>
      <BoasVindas nome="Cinthia"/>
      <BoasVindas nome="Ademilson"/>
      <br/>
      <h1>Questão 17</h1>
      <ToggleMessage/>
      <h1>Questão 18</h1>
      <Montar/>
      <h1>Questão 19 e 20</h1>
      <ListaDeTarefas/>
    </div>
  )
}

export default App

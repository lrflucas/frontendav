import './App.css'
import Header from './components/Header'
import BotaoDinamico from './components/BotaoDinamico'
import Mensagem from './components/Mensagem'
import CardCarro from './components/CardCarro'

function App() {

  return (
    <div>
      <Header/>
      <BotaoDinamico/>
      <br/>
      <br/>
      <Mensagem/>
      <br/>
      <CardCarro modelo="A3" marca="Audi" preco="225.000,00"/>
      <br/>
      <CardCarro modelo="Fusca" marca="Volkswagen" preco="30.000,00"/>
      <br/>
      <CardCarro modelo="Kicks" marca="Nissan" preco="115.000,00"/>
    </div>
  )
}

export default App
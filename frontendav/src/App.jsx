import './App.css'
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Challenge from './components/Challenge';
import Counter from './components/Counter';
import ShowMessage from './components/ShowMessage';
import Greeting from './components/Greeting';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className='App'>
      <h1>Olá Mundo!</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Challenge/>
      <Counter/>
      <ShowMessage/>
      <Greeting name="Lucas" />
      <Greeting name="Cinthia" />
      <Greeting name="Rodrigo" />
      <RandomNumber/>
    </div>
  );
}

export default App;

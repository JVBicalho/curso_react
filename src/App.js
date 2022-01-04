import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SeyMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name =' JV Bicalho'
  const newName = name.toLocaleUpperCase()

  function sum(a,b){
    return a +b
  }

  const url =' https://via.placeholder.com/150'
  return (
    <div className="App">
      <SayMyName name="JV Bicalho" />
      <HelloWorld/>
      <Pessoa nome="JV Bicalho" idade="23" profissao="programador" foto={url} />
    </div>
  );
}

export default App;

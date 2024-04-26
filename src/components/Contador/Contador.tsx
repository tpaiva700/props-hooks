import { useState } from 'react';
import './Contador.css'

function Contador() {

  // let valor : number = 0;

  const [valor, setValor] = useState(0);

  function somarUm(){
    setValor(valor + 1);
    // valor ++;
  }

  return (
    <div className="container">
        <p>O valor é: {valor}</p>
        <button onClick={somarUm}>Adicionar +1 </button>
    </div>
  )
}

export default Contador
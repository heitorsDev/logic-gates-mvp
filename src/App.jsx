import { useState } from 'react'
import Circuit from './components/Circuit'
import './App.css'

function App() {

  return (
    <>
      <div className="descriptions">
        <div className="description-text">
        Dois interruptores são como botões que podem ligar ou desligar uma luz. Para acender a luz, ambos os interruptores precisam estar ligados ao mesmo tempo. É como se fosse necessário apertar dois botões ao mesmo tempo para fazer algo acontecer. Quando um ou nenhum dos botões está pressionado, a luz fica apagada, mas quando os dois estão pressionados, a luz acende,        </div>
        <a href="http://gg.gg/1au9oi"><div className="botao">
          <b>Voltar</b>
        </div></a>
      </div>
    <div className="bg">
      <Circuit>
        
      </Circuit>

      </div>
    </>
  )
}

export default App

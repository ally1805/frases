import { useState } from 'react'
import './App.css'
import logo from './assets/trab1.png'

function App() {

  const [ textoFrase, setTextofrase] = useState("")
  const [categoriaSelection, setCategoriaSelection] = useState("")

  const todasFrases = [
    {id: 1,
      nome: "Motivacional",
      frases:['Não desista!', 
      'Continue persistindo.', 
      'Treine mais.', 
      'Nnehuma árvore alcança o céu, sem ter raízes no inferno.'
    ]
      }

    {
      id: 2,
      nome: "Bom dia",
      frases: ['Bom Dia!',
      'Que seu dia seja abençoado.',
      'Comece o dia agradecendo.',
      'Bom dia! Que o universo esteja à seu favor.'
    ]
    }

  ]

  return (
    <>
      <div>
        <img src={logo} alt="logo frases" className='logo'/>

        <h2 className='titulo'>Categoria</h2>

        <section className='area-categoria'>

          {todasFrases.map ((item, index) =>(
            <button className='botao-categoria' style {{}} key={item.id}>{item.nome}</button>
          ))
          }

        </section>
        
        <button className='botao -frase'>Gerar frases</button>

        {textoFrase !==''&& <p className='texto -frase'>{textoFrase}</p>}
      </div>
     </>
  )
}

export default App

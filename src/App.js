
import './App.css';
import {useState,useEffect} from 'react'
import Characters from "./components/Characters"
function App() {

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(0)

  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      
      .then((response)  => response.json())
      .then(({results}) => setCharacterList(results))
      .catch((err) => console.log(err))

  },[next])

  const nextPage = ()=> {
    setNext(next + 1)
  }
  const prevPage = ()=> {
    if(next>1){
      setNext(next - 1)
    }
  }

  return (
    <div className="App">
      <button onClick={()=> prevPage()} >Voltar</button>
      <button onClick={()=> nextPage()}>Next</button>  
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;

import React , {useState , useEffect} from "react"; 
import "./App.css"


// Api Url = "https://dog.ceo/api/breeds/image/random/10"


function App(){

  const [dogs , setDogs] = useState([])


useEffect(()=> {

  function loadApi(){

    let url = "https://dog.ceo/api/breeds/image/random/10"

    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      
      console.log(json.message)
      setDogs(json.message)

    })

    .catch((error)=>{
      console.log("Não foi possível carregar a API")
    })
   
  }

  loadApi()

} , [])

  return(

  


    <div className="container">

            <header>
           <div className="tituloesub">
            <h1>Consumindo API</h1>
            <p>Api dos Doguinhos</p>
           </div>

           <div className="nav">

           <a>Home</a>
           <a>Favoritos</a>
           <a>Sair</a>

           </div>

            </header>

             <h1>Doguinhos</h1>

          {dogs.map((item)=>{
            return(
              <div key={item} className="cards">
                 
                 <img src = {item}/>
              </div>

            )
          })}


    </div>
  )
}


export default App; 
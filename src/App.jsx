 
import { useState } from "react"

import { EntryCard } from "./Components/EntryCard"

function App() {
  const [title, setTitle] = useState("Hola")
  const [blogEntries, setBlogEntries] = useState([
    { 
      entryTitle:"entrada 1",
      content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. quasi ab reprehenderit veritatis perspiciatis iure dolores cumque sed quia commodi consequatur",
      picture:"https://th.bing.com/th/id/OIP.FsZA_uZGw8oAxT5JhB0wGAHaE8?pid=ImgDet&rs=1"
    },
    { 
      entryTitle:"entrada 2",
      content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. quasi ab reprehenderit veritatis perspiciatis iure dolores cumque sed quia commodi consequatur veritatis perspiciatis iure dolores cumque sed quia commodi consequatur",
      picture:"https://th.bing.com/th/id/OIP.S0LQ66DOsh_kKMCUqb49hAHaD0?pid=ImgDet&rs=1"
    },
    { 
      entryTitle:"entrada 3",
      content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. quasi ab reprehenderit veritatis perspiciatis iure dolores cumque sed ",
      picture:"https://th.bing.com/th/id/R.03b0da4d247f1bfea79b2d6d529f3b7f?rik=TKw7ogeinIc%2fSA&pid=ImgRaw&r=0"
    }
  ])
  const [entry, setEntry]= useState({})


  const changeHandler = event => {
    const value = event.target.value
    const property = event.target.name
    setEntry({...entry, [property]:value})
  }

  const saveHandler = () => {
    setBlogEntries([...blogEntries, entry])
  }

  return (
    <>
      <div className="App">
            <h1>{title}</h1>
              
          <div className="main-wrapper">
            <div className="form-wrapper">
              <form action="">
                <div className="form-group">
                    <label htmlFor="">Titulo</label>
                    <input type="text" name="entryTitle" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Imagen</label>
                    <input type="text" name="picture" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Content</label>
                    <input type="text" name="content" onChange={changeHandler}/>
                </div>
                <button type="button"  onClick={saveHandler}>Guardar</button>
              </form>
            </div>
            <div className="entries-wraper"> 
              {
                blogEntries.map( (entry, index) => <EntryCard entryData = { entry } key ={index}/>)
              }
            </div>
          </div>
           
        </div>
       
    </>
  )
}

export default App

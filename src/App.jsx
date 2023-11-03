 
import { useEffect, useState } from "react"
import { EntryCard } from "./Components/EntryCard"

import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom"

import Home from "./pages/Home";
import Create from "./pages/Create";
//import firebase from 'firebase/app';
import firebase from "./lib/firebase";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
   } from 'reactstrap';
import Detail from "./pages/Detail";


function App() {
  const [title, setTitle] = useState("Hola")
  /*const [blogEntries, setBlogEntries] = useState([
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

  const [entry, setEntry]= useState({})*/

  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => setIsOpen(!isOpen)

  /*const changeHandler = event => {
    const value = event.target.value
    const property = event.target.name
    setEntry({...entry, [property]:value})
  }

  const saveHandler = () => {
    setBlogEntries([...blogEntries, entry])
  }*/

  useEffect(() => {
    console.log("componente cargando")
    const  database = firebase.database()
    const entriesRef = database.ref('/entries')
    entriesRef.on('value', snapshot => {
    console.log(snapshot)
    console.log(snapshot.val())
    })
  })

  return (
    <>
     <div className="App">
      <Router>
       <Navbar color="dark" light expand="md">
          <NavbarBrand className="nombre-app" href="/">Myblog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <Link className="home-link" to="/"> 
                  <NavLink className="home-link">Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link  className="crear"  to="/create"> 
                  <NavLink className="crear">Crear Post</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/favoritos"> 
                  <NavLink ></NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/create" element={<Create/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/favoritos" element={<h1>Favoritos</h1>}/>

          <Route path="/detail/:id" element={<Detail/>}/> 
        </Routes>
      </Router>

      </div>
       
    </>
  )
}

/**
 * 
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
 */

export default App

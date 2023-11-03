
 import { useEffect, useState,  useRef } from "react"
import { FormGroup,Col, Form, Label,Input, Button } from "reactstrap"
import firebase from "../../lib/firebase"


const Create = () => {
  const [entryData, setEntryData] = useState({})
  const [file,setFile]=useState(null)
  const database = firebase.database()
  const entriesRef = database.ref('/entries')
  const storageRef = firebase.storage().ref()

   
 
  useEffect( () => {
    console.log("modificando el estado")
    
  },[entryData])

  const changeHandler = event => {
    event.preventDefault()
    const property = event.target.name
    const value = event.target.value
    console.log(property,value)
    setEntryData({...entryData,[property]:value})
    console.log(entryData)

    //value={entryData:''}
    //
    //setInputValue(event.target.value);

  }

  const fileHandler = event => {
    console.log(event.target)
    console.log(event.target.files)
    const file = event.target.files[0]
    console.log(file)
    setFile(file)
  }

  const saveEntry = ( event) => {
    console.log(entryData)
    let uploadTask= storageRef.child(`/pictures/${file.name}`).put(file)
    uploadTask.on('state_changed', snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`subiendo: ${progress}%`)
        switch(snapshot.state){
          case firebase.storage.TaskState.PAUSED:
            console.log('se pauso la carga')
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('subiendo')
            break;
        }
    }, error => {
      console.log(error)
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
        console.log('file aviable at' , downloadURL)
        entriesRef.push({...entryData, picture:downloadURL})
        console.log(downloadURL)
      })
    })

    // 
     
    event.preventDefault()
     
    //entriesRef.push(entryData)
  }


    

  return (
    <>
    <div className="entries-wraper"> 
      <Col  xs="12">
         <h1 className="titulo-create">Create</h1>
         <Form   action="" className="bg-dark text-white border rounded my-3 p-3"> 
             <FormGroup>
                <Label htmlFor="">Titulo</Label>
                <Input    type="text" name="title"  onChange={changeHandler}/>
             </FormGroup>
             <FormGroup>
                <Label htmlFor="">Contenido</Label>
                <Input type="text" name="content" onChange={changeHandler}/>
             </FormGroup>
              
             <FormGroup>
                <Label htmlFor="">File</Label>
                <Input  type="file" name="picture" onChange={fileHandler} />
             </FormGroup>
             <Button    type="button" color="light" className="mt-3" onClick={saveEntry} >Guardar</Button>
         </Form>
      </Col>
      </div>
    </>
  )
}

/**
 * <FormGroup>
                <Label htmlFor="">Imagen</Label>
                <Input type="text" name="picture" onChange={changeHandler}/>
             </FormGroup>
 * 
 */

             /*
  useEffect(() => {
    console.log("componente montado")
    entriesRef.on('value', snapshot => {
    console.log(snapshot.val())
    })
  },[])*/


export default Create
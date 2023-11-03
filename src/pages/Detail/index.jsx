
 import { useEffect, useState } from "react"
import { Col,Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap"
import { useParams } from "react-router-dom"
import firebase from "../../lib/firebase"

const Detail = () => {
  const  [entryData,setEntryData]= useState({})
  const {id}= useParams()
  const database = firebase.database()
  const entriesRef = database.ref('/entries')

   useEffect(() =>{
      database.ref(`/entries/${id}`).on('value', snapshot =>{
        console.log(snapshot.val())
        setEntryData(snapshot.val())
      })
   },[])
   const {title,picture,content}=entryData
  return (
    <div className="entries-wraper">
         <Col xs="12"> 
                <Card className="card-detail" >
                      <CardImg top  className="img-datail " src={picture} alt="Card image cap" />
                      <CardBody>
                          <CardTitle className="titulo"><strong>{title}</strong></CardTitle>
               
                          <CardText className="contenido">{content}</CardText>
                           
                      </CardBody>
                  </Card>
          </Col>
    </div>
  )
}

export default Detail
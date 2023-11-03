import { useEffect, useState } from "react"
import firebase from "../../lib/firebase"
import { Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from "reactstrap"
import { Link, } from "react-router-dom"

 


const Home = () => {
  const [entriesList, setEntriesList] = useState({})

  const database = firebase.database()
  const entriesRef = database.ref('/entries')

  useEffect(() =>{
    entriesRef.on('value', snapshot => {
      console.log(snapshot.val())
      setEntriesList(snapshot.val())
      })
  },[])

  return (
    <>
       
       
        <Row className="entries-wraper">
        <h1 className="home">Home</h1>
          {
            Object.keys(entriesList).map(key => {
              const entryData = entriesList[key]
              const {title,picture,content} = entryData
              return( 
                <Col className="blog-entry2" xs="12" md="3" key={key}> 
                    <Card >
                      <CardImg className="img" top width="100%" src={picture} alt="Card image cap" />
                      <CardBody>
                          <CardTitle className="titulo"> <strong>{title} </strong></CardTitle>
                          <CardText className="contenido">{content.length > 35
                              ? `${content.slice(0,35)}...`
                              : content
                          }</CardText>

                          <Link to={/*"/detail/"+{key}*/`/detail/${key}`}>
                            <Button>ver detalle</Button>
                          </Link>
                           
                      </CardBody>
                  </Card>
                </Col>
              )
            })
          }
           
        </Row>
     
    </>
     
  )
}

export default Home
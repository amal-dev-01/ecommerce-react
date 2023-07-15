import React from 'react'
import NavbarMain from './Navbar'
import './Homestyle.css'
import { Image, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Admin from './Admin';


const Home = () => {

  const navMen = useNavigate()



  return (
    <div>
      {/* navbar */}
    <header className=' sticky-top'><NavbarMain/></header>
     
      <div className="image-container ">
      <Image style={{height: "100vh"}} src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"/>
        <div className='text-overlay' ><p>Love the Planet<br /> we walk on<br /></p><Button className='cls-button'>SHOP MEN</Button><Button className='cls-button'>SHOP WOMEN</Button></div>
      </div>
    


      <div className='div-m-2'>
        <Card >
          <div className="d-flex">
            <div className="w-50">
              <Card.Img src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=1060&t=st=1689237048~exp=1689237648~hmac=a9f4ede187023d875ea788ae3ced82d552c1f039b5cdbf73f47848acd70f4483" alt="Card image" className="card-image1" />
            </div>
            <div className="w-50 p-3">
              
            </div>
          </div>
        </Card>
      </div>


      <div>

      </div>
      {/* categories*/}
      <div className='catetory-div'>
        <div className='row' style={{ flexWrap: 'wrap'  }}>
          <div className='row'>
            <Card style={{ width: '25rem', margin: '0 33px',padding:"2vh" }} className='card-with-hover' onClick={()=>navMen('/Men')}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-length-portrait-joyful-happy-man-jumping_171337-10300.jpg?size=626&ext=jpg&ga=GA1.1.41839848.1688626108&semt=ais" fluid />
              <Card.Body>
                <Card.Title>Men's Fashion</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem', margin: '0 33px',padding:"2vh"  }} className='card-with-hover' onClick={()=>navMen('/Women')}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/young-beautiful-woman-jumping_23-2148883637.jpg?w=360" />
              <Card.Body>
                <Card.Title>women,s Fashion</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem', margin: '0 33px' ,padding:"2vh"  }} className='card-with-hover'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/full-length-portrait-serious-young-man-athlete_171337-7947.jpg?size=626&ext=jpg&ga=GA1.1.41839848.1688626108&semt=ais" />
              <Card.Body>
                <Card.Title>Sports</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div><Footer/></div>
      

    </div>


  )
}

export default Home
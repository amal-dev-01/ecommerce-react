import React from 'react'
import NavbarMain from './Navbar'
import './Homestyle.css'
import {  Row,Col,Button ,Container} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useContext } from 'react';
import { Mycontext } from './Context';




const Home = () => {
  const navMen = useNavigate()
  const { addproduct} = useContext(Mycontext);
  const filteredProducts = addproduct.filter(
    (product) => product.id%2==0
  );
  const passid=(e)=>{
    const id=e.target.id
    navMen(`/Showproduct/${id}`)
  }





  return (
    <div>
      {/* navbar */}
    <header className=' sticky-top'><NavbarMain/></header>
     
    <Container fluid className="vh-100 d-flex align-items-center bg" >
      <Row className="justify-content-center">
        <Col lg={6} className="d-flex justify-content-center">
          <div className="image-container d-flex align-items-center">
            <img src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png" alt="Shoes" className="img-fluid" />
          </div>
        </Col>
        <Col lg={7}>
          <div className="text-overlay text-center text-lg-start">
            <p>Love the Planet<br />we walk on</p>
            <div className="button-container">
              <Button className='cls-button'onClick={()=>navMen('/Men')}>SHOP MEN</Button>
              <Button className='cls-button' onClick={()=>navMen('/Women')} >SHOP WOMEN</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

      <div className='div-m-2'>
        <Card>
              <Card.Img src="https://cms-static.asics.com/media-libraries/96475/file.ob.jpg?20230712122102" alt="Card image" className="card-image1" height={200} />
        </Card>
      </div>
 
      <div className='catetory-div'>
        <div className='row' style={{ flexWrap: 'wrap'  }}>
          <div className='row' style={{padding:"5vw"}}>
            <Card style={{ width: '25rem', margin: '0 10px',padding:"2vh" }} className='card-with-hover' onClick={()=>navMen('/Men')}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=1060&t=st=1689573478~exp=1689574078~hmac=046340669b71110d03b678152b38379f498f1b32670228fa6be50f588b968f1a" fluid />
              <Card.Body>
                <Card.Title>Men's Fashion</Card.Title>
               
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem', margin: '0 10px',padding:"2vh"  }} className='card-with-hover' onClick={()=>navMen('/Women')}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/trendy-young-woman-jumping-pink-background-full-length-view-carefree-female-model-denim-outfit_197531-13674.jpg?size=626&ext=jpg&ga=GA1.1.41839848.1688626108&semt=ais" />
              <Card.Body>
                <Card.Title>Women's Fashion</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem', margin: '0 10px' ,padding:"2vh"  }} className='card-with-hover' onClick={()=>navMen('/Sports')}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrat-caucasian-professional-male-athlete-runner-training-isolated-black_155003-42226.jpg?w=1060&t=st=1689596195~exp=1689596795~hmac=60f0a4e7525811bbe632d5fc120b1b565cb51e89173a14678541c6bb35e0a6aa" />
              <Card.Body>
                <Card.Title>Sports</Card.Title>
             
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


  
     <div className='div-m-2'>
        <Card>
              <Card.Img src="https://cdn.media.amplience.net/i/scvl/20230712_hero_top_desktop?&$heroFullDesktop$" alt="Card image" className="card-image1" />
        </Card>
      </div>


      <div>
      <Container fluid className="my-5"  >
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card>
              <div className="d-flex justify-content-between p-3" >
                {/* <p className="lead mb-0">Today's Combo Offer</p> */}
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">Shoe</p>
                </div>
              </div>
              <Card.Img
                src={product.src}
                variant="top"
                alt="shoe"
                id={product.id}
                onClick={passid}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="small">
                
                  </p>
                  <p className="small text-danger">
                    <s>{product.prize}</s>
                  </p>
                </div>
  
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{product.name}</h5>
                  <h5 className="text-dark mb-0">{product.offerPize}</h5>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Brands: <span className="fw-bold">{product.brand}</span>
                  </p>
                </div>
                {/* <Button variant="primary" id={product.id} onClick={Addtocart}>
                  Add To Cart
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>

     
      <div><Footer/></div>
      

    </div>


  )
}

export default Home
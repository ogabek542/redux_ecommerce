import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import "../styles/home.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import Services from '../services/Services'

// Import Image 
import heroImage from "../assets/images/hero-img.png"

const Home = () => {

  const year = new Date().getFullYear();  

  return <Helmet title={"Home"}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending product in {year}
              </p>
              <h2>Make Your Interior More Minimalist & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse sapiente veniam temporibus excepturi facilis nobis optio illum officiis architecto?</p>
            </div>
            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="shop" className='buy__link'>SHOP NOW</Link></motion.button>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__image">
              <img src={heroImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
  </Helmet>
}

export default Home 

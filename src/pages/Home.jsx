import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";


// Import Image
import heroImage from "../assets/images/hero-img.png";
import counterImage from "../assets/images/counter-timer-img.png"

const Home = () => {
  // const [data, setData] = useState(products);

  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);
  const [mobileProducts,setMobileProducts] = useState([]);
  const [wirelessProducts,setWirelessProducts] = useState([]);
  const [popularProducts,setPopularProducts] = useState([]);


  const year = new Date().getFullYear();

  useEffect(() => {

    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  esse sapiente veniam temporibus excepturi facilis nobis optio
                  illum officiis architecto?
                </p>
              </div>
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                <Link to="shop" className="buy__link">
                  SHOP NOW
                </Link>
              </motion.button>
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
      <section className="trending__production">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top__content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
                <Clock/>  
                <button className="buy__btn store_btn">
                <Link to="/shop" className="link__style">Visit Store</Link>
                </button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImage} alt="counter_image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row className="mobile__container__div">
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
              <ProductsList data={mobileProducts}/>
              <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>
      <section className="popular__category">
      <Container>
          <Row className="mobile__container__div">
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Cateory</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

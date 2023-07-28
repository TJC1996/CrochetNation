import React from 'react'
import BannerImage from "../AssetsLanding/mom2.png";
import { FiArrowRight } from "react-icons/fi";
import './Home.css'
import AboutBackgroundImage from "../AssetsLanding/ocean.avif";
import { Link } from 'react-router-dom';
import Hat from "../AssetsLanding/hat.png";
import Order from "../AssetsLanding/order.png";
import Delivery from "../AssetsLanding/delivery.png";


  const workInfoData = [
    {
      image: Hat,
      title: "Shop",
      text: "Pick a hat available from our shop and proceed to checkout.",
    },
    {
      image: Order,
      title: "Custom Order",
      text: "Go over to Contact Us and send us a message with your custom order.",
    },
    {
      image: Delivery,
      title: "Delivery",
      text: "Please anticipate a creation period of approximately 2-4 weeks for each order.",
    },
  ];

const Home = () => {
  return (
    <div className='home-container'>
      {/* <Navbar/> */}
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} className="home-banner" alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Woman Owned Crochet Hat Shop
          </h1>
          <p className="primary-text">
            Welcome to our Store! We specialize in Crochet Hats. Everything is handmade with an artistic twist. Family run and owned!
          </p>
          <Link to="/shop">
          <button className="secondary-button">
          Shop Now <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <div className="about-section-container">
      <div className="about-background-image-container">
      <img src={AboutBackgroundImage} alt="" />

      </div>
      <div className="about-section-image-container">
        {/* <img src={Mom1} alt="" /> */}

      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
        Born in 2023, Inspired by Generations
        </h1>
        <p className="primary-text">
        Crochet Nation is an artisanal legacy, weaving beauty through crochet. Our origin lies in a love for hue and texture, instilled by our founder's colorist mother and skilled Czech seamstress grandmother.
        </p>
        
        <div className="about-buttons-container">
        <Link to="/about-us">
          <button className="secondary-button">
          Learn More{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>


    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Whether you prefer to specify your color scheme or make a selection from our website, rest assured that each piece you receive is uniquely crafted just for you. Please anticipate a creation period of approximately 2-4 weeks for each order.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} className="work-images" alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Home

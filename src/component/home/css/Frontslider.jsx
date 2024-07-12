import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/homepage.css';
import { NavLink } from "react-router-dom";

const Frontslider = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };

  return (
    <>
      <div className="front-section">
        <div className="container">
          <div className="row">
            {/* <img src="img/cloud.png" class="img-2" />
            <img src="img/cloud.png" class="img-3" /> */}
            <video loop muted src="../img/main-home.mp4" width="100%" height="100%" ref={videoEl}>
            </video>
            <div className="detail">
              <h2>front end</h2>

              <div className="slider">
                <Slider {...settings}>
                  <h3>developer</h3>
                  <h3>designer</h3>
                  <h3>ceative</h3>
                </Slider>
              </div>

              <div className="intro">
                <p>I've worked with over 200+ brands such as Rolex, Nike, Gucci & Adidas. Founder of Monocode & UI Developer at Arclight Music. Supercharge your brand into its best digital self.</p>

                <div className="btn">
                  <NavLink to="/contact">Get a <span>free</span> quote today!</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frontslider;
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/pexels-photo-by-anna-tarazevich@2x.png",
      title: "KitchenExplorerMalik",
      description1:
        "Hey there, I'm Malik! Join me on a culinary adventure, let's explore flavors, create delicious recipes, and unlock the wonders of the culinary world together.",
    },
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/mark@2x.png",
      title: "SavoryScienceMark",
      description1:
        "Welcome to the savory side of cooking! I'm Mark, your flavor and technique guide. Let's unravel culinary secrets and dive into food science!",
    },
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/filippoon@2x.png",
      title: "FilipPoon",
      description1:
        "I´m Filip, a foodfluencer from Youtube and TikTok. Happy to be a part of the Tastely Community, where future chefs are born!",
    },
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/pexels-photo-by-karolina-grabowska@2x.png",
      title: "WholesomeChefEmily",
      description1:
        "Hey, foodies! I'm Emily, join me on a journey of mindful eating and wholesome ingredients. Let's create a healthier version of ourselves through food!",
    },
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/pexels-photo-by-rdne-stock-project@2x.png",
      title: "GrillMasterCarlos",
      description1:
        "Fire up those grills with grill master Carlos! Join me as we sizzle through lots of BBQ recipes, from juicy steaks to smoky ribs.",
    },
    {
      heading: "Meet Our Creators",
      description:
        "Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe",
      image: "/public/pexels-photo-by-polina-tankilevitch@2x.png",
      title: "SweetToothMia",
      description1:
        "Calling all dessert lovers! I'm Mia, let's indulge in homemade treats and spread the joy of sweets!",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <div className="slides">
        <div className="slide">
          <h2>{slides[currentSlide].heading}</h2>
          <p>{slides[currentSlide].description}</p>
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          <div className="content">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description1}</p>
          </div>
        </div>
      </div>
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            className={`dot ${index === currentSlide ? "active" : ""}`}
            key={index}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

/* const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <a className="prev" href="#">
        &#10094;
      </a>
      <Slider {...settings}>
        <div className="slides">
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/pexels-photo-by-anna-tarazevich@2x.png" alt="Image 1" />
            <p>KitchenExplorerMalik</p>
            <p>
              Hey there, I'm Malik! Join me on a culinary adventure, let's explore flavors, create delicious recipes,
              and unlock the wonders of the culinary world together.
            </p>
          </div>
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/mark@2x.png" alt="Image 2" />
            <p>SavoryScienceMark</p>
            <p>
              Welcome to the savory side of cooking! I'm Mark, your flavor and technique guide. Let's unravel culinary
              secrets and dive into food science!
            </p>
          </div>
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/filippoon@2x.png" alt="Image 3" />
            <p>FilipPoon</p>
            <p>
              I´m Filip, a foodfluencer from Youtube and TikTok. Happy to be a part of the Tastely Community, where
              future chefs are born!
            </p>
          </div>
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/pexels-photo-by-karolina-grabowska@2x.png" alt="Image 4" />
            <p>WholesomeChefEmily</p>
            <p>
              Hey, foodies! I'm Emily, join me on a journey of mindful eating and wholesome ingredients. Let's create a
              healthier version of ourselves through food!
            </p>
          </div>
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/pexels-photo-by-rdne-stock-project@2x.png" alt="Image 5" />
            <p>GrillMasterCarlos</p>
            <p>
              Fire up those grills with grill master Carlos! Join me as we sizzle through lots of BBQ recipes, from
              juicy steaks to smoky ribs.
            </p>
          </div>
          <div className="slide">
            <h2>Meet the creators</h2>
            <p className="description">
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </p>
            <img src="/public/pexels-photo-by-polina-tankilevitch@2x.png" alt="Image 6" />
            <p>SweetToothMia</p>
            <p>Calling all dessert lovers! I'm Mia, let's indulge in homemade treats and spread the joy of sweets!</p>
          </div>
        </div>
      </Slider>
      <a className="next" href="#">
        &#10095;
      </a>

      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ImageCarousel; */

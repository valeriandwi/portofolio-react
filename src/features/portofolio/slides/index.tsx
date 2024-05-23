import React from "react";
import Slider from "react-slick";

const Slides: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>Slides</Slider>;
};

export default Slides;

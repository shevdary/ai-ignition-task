'use client'
import React from 'react';
import {Typography, Box, Avatar} from "@mui/material";
import Slider from "react-slick";

import SliderArrow from "./SliderArrow";
import {userData} from "../../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {handleFont} from "../../constants/helpers";

const CustomSlider = () => {
  const slider = React.useRef<any>(null);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={slider} {...settings} className="w-full">
        {userData.map(user => (
          <Box className="flex flex-col justify-center text-center" key={user.lastName}>
            <Avatar src={user.avatar} alt="image" className="h-[62px] w-[62px] mx-auto mb-4"/>
            <Typography className={handleFont('mb-2 text-[24px]', false)}>
              {user.firstName} {' '} {user.lastName}
            </Typography>
            <Typography
              className={handleFont("text-description px-6 md:px-[62px] text-sm md:text-medium")}
            >
              {user.description}
            </Typography>
          </Box>
        ))}
      </Slider>
      <div className="flex gap-x-[21px] mt-6 cursor-pointer">
        <SliderArrow className="cursor-pointer" onClick={() => slider?.current?.slickPrev()}/>
        <SliderArrow className="rotate-180 cursor-pointer" onClick={() => slider?.current?.slickNext()}/>
      </div>
    </>
  );
};

export default CustomSlider;

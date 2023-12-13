'use client'
import React from 'react';
import {Typography, Box, Avatar} from "@mui/material";
import Slider from "react-slick";

import SliderArrow from "./SliderArrow";
import {userData} from "../../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <Slider ref={slider} {...settings} className="w-full md:px-[62px]">
        {userData.map(user=>(
          <Box className="flex justify-center text-center">
            <Avatar src={user.avatar} alt="image" className="h-[62px] w-[62px] mx-auto mb-6"/>
            <Typography className='mb-4'>{user.firstName} {' '} {user.lastName}</Typography>
            <Typography className="text-description px-4 text-sm md:text-[18px]">{user.description}</Typography>
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

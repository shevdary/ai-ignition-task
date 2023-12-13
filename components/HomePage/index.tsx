import React from 'react';
import {Grid, Typography, Card, Box} from "@mui/material";

import FileLoader from "../FileLoader";
import Video from "../Video";
import CustomSlider from "../Slider";

import {handleFont} from "../../constants/helpers";

const HomePage = () => {
  return (
    <Box className="container mx-auto py-11 px-4 md:px-0">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card className='w-full h-auto min-h-[364px] flex items-center justify-center rounded-small'>
            <Video />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            className={
              'w-full h-auto min-h-[364px] flex items-center justify-center rounded-small relative overflow-hidden'
            }
            style={{
              background: 'linear-gradient(109deg, #DBB898 25.3%, #9DC1CE 82.65%)'
            }}
          >
            <FileLoader />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            className={
            'w-full h-auto min-h-[364px] py-[30px] flex flex-col items-center justify-center rounded-small w-full relative'
               }
            >
              <CustomSlider />
              </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            className='w-full h-auto min-h-[364px] flex items-center justify-center rounded-small'
            style={{
              background: 'linear-gradient(109deg, #C5DCE4 25.3%, #DBB898 82.65%)',
            }}>
            <Typography className={handleFont( "text-[40px]", false)}>
              Create CV with AI
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

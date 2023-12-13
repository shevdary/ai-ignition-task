'use client'
import dynamic from "next/dynamic";
import {Box} from "@mui/material";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import React from 'react';

const Video = () => (
  <Box className="w-full h-full">
    <ReactPlayer
      width="100%"
      height="365px"
      controls={false}
      config={{
        youtube: {
          playerVars: {controls: 0, showInfo: 0, modestbranding: 1},
        },
      }}
      url='https://www.youtube.com/watch?v=NSAOrGb9orM'
    />
  </Box>
);


export default Video;

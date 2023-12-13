'use client';
import React, { ChangeEvent, useState } from 'react';
import { Box, Typography } from "@mui/material";

import LoaderIcon from "./loaderIcon";
import { handleFont } from "../../constants/helpers";

const FileLoader = () => {
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0]);

  return (
    <Box className="h-full flex flex-col items-center justify-center">
      <LoaderIcon />
      <Typography className={handleFont("text-large", false)}>Upload CV</Typography>
      <Typography className="text-sm">( PDF or DOCX )</Typography>
      <input
        type="file"
        name="file"
        className="opacity-0 absolute h-full z-10"
        onChange={handleChange}
      />
      <Typography className="text-sm">{file?.name ? `Uploaded ${file.name}` : ''}</Typography>
    </Box>
  );
};

export default FileLoader;

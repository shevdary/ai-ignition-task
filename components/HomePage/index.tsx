import React from 'react';
import {Navigate} from "react-router-dom";

const HomePage = () => {
  if (!localStorage.getItem('isAuth')) {
    return <Navigate to="/sign-up" />
  }

  return (
    <div className="container">
      Home Page
    </div>
  );
};

export default HomePage;

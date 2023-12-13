import React from 'react';
import {PT_Serif} from 'next/font/google';
import className from 'classnames';

const serif = PT_Serif({weight: '400', subsets: ['latin']});

const Header = () => {
  return (
    <div className="bg-white">
      <span className={className(serif.className,"flex justify-center py-4 md:text-title")}>AI Ignition</span>
    </div>
  );
};

export default Header;


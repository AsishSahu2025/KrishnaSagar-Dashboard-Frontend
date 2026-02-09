import React from 'react';
import Img1 from '../assets/imgs/Kiit.png';
import img2 from '../assets/imgs/img2.png';
import logo from '../assets/imgs/amadeus_logo.jfif';

const Header = () => {
  return (
    <div className="w-full bg-white shadow-md px-2 py-2 flex items-center justify-between flex-wrap">
      <img
        src={img2}
        alt="Logo 2"
        className="h-16 sm:h-20 max-w-[65%]"
      />
      <img
        src={logo}
        alt="Logo 1"
        className="h-16 sm:h-26 max-w-[30%] me-6"
      />
    </div>
  );
};

export default Header;

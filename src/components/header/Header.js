import React from "react";
import Logo from "../../images/shared/logo.svg";
import { Link } from "react-router-dom";

const Menu = ({ to, number, title }) => (
  <Link to={to} className="flex items-center text-white gap-2">
    <p className="font-semibold">{number}</p>
    <p className="font-thin">{title}</p>
  </Link>
);
const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-20">
        <div className="flex items-center w-full">
          <img src={Logo} alt="" className="px-14" />
          <hr className="w-[850px] border-[#3F414D] absolute z-10 left-[160px]" />
          <div className="h-[120px] flex flex-1 gap-20 backdrop-blur-3xl justify-center absolute w-[1000px] right-0">
            <Menu to="/" number="0 0" title="HOME" />
            <Menu to="/des" number="0 1" title="DESTINATION" />
            <Menu number="0 2" title="CREW" />
            <Menu number="0 3" title="TECHNOLOGY" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

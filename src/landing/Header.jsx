import React from "react";
import MainLogo from "../assets/MainLogo.png";
import Profile_Image from "../assets/profile_Image.jpeg";

const Header = () => {
  return (
    <div className="flex w-screen items-center justify-between border-b-1">
      <div className="flex items-center gap-4">
        <img className="w-24 ml-16" src={MainLogo} alt="" />
        <span className="text-2xl md:text-4xl font-semibold">WhatBytes</span>
      </div>
      <div>
        <p className="border mx-8 p-2 flex gap-4 rounded-md border-neutral-400">
          <img className="w-8 rounded-full" src={Profile_Image} alt="" />
          <span>Rahil siddhique</span>
        </p>
      </div>
    </div>
  );
};

export default Header;

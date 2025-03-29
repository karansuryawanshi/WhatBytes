import React, { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import Profile_Image from "../assets/profile_Image.png";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="w-full h-24 mx-auto px-4 md:px-8 lg:px-16 border-b border-neutral-400">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-0 md:gap-4">
          <img className="w-16 md:w-18" src={MainLogo} alt="Logo" />
          <span className="text-xl md:text-3xl font-semibold">WhatBytes</span>
        </div>
        <div>
          <p className="border p-2 flex items-center gap-4 rounded-md border-neutral-400">
            <img
              className="w-8 h-8 rounded-full"
              src={Profile_Image}
              alt="Profile"
              onClick={() => {
                if (hidden == false) {
                  setHidden(true);
                } else {
                  setHidden(false);
                }
              }}
            />
            <span className="text-sm md:text-base hidden md:block">
              Rahil Siddhique
            </span>
          </p>
          {hidden && (
            <div className="flex flex-col items-center mt-2 border absolute bg-neutral-100 rounded-lg">
              <span className="text-xs hover:bg-blue-100 w-full px-2 py-1 rounded-t-lg">
                Profile
              </span>
              <span className="text-xs hover:bg-blue-100 px-2 py-1">
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

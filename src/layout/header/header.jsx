import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="w-[90%] m-auto">
      <header className="w-full h-20 flex items-center">
        <nav className="flex justify-between w-full items-center">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-[#242D52] text-3xl font-extrabold">manage</h1>
          </div>

          <div className="hidden md:flex list">
            <ul className="flex gap-6 text-[#242D52]">
              <li className="hover:text-[#F3603C]">Pricing</li>
              <li className="hover:text-[#F3603C]">Product</li>
              <li className="hover:text-[#F3603C]">About Us</li>
              <li className="hover:text-[#F3603C]">Careers</li>
              <li className="hover:text-[#F3603C]">Community</li>
            </ul>
          </div>

          <button className="w-[100px] h-[40px]  bg-[#F3603C] rounded-3xl text-white hidden md:flex items-center justify-center">
            Get Started
          </button>

          <div className="md:hidden">
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

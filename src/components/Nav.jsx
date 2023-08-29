import React, { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Starea pentru deschiderea pop-up-ului

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal font-medium text-xl text-slate-gray hover:text-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
       
        {/* Butonul pentru meniul mobil */}
        <div className='hidden max-lg:block' onClick={toggleMenu}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        
        {/* Fereastra modală pentru meniu */}
        {isMenuOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-blue-800 bg-opacity-75 flex items-center justify-center hidden max-lg:block' onClick={toggleMenu}>
            <ul className='text-white text-center font-weight: 800 text-2xl p-40 z-20'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='block py-4 hover:text-gray-300'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </nav>
    </header>
  );
};

export default Nav;
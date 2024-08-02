"use client";

import React, { useState } from 'react';
import icons from '../img/icon.svg';
import navData from './navData';
import Image from 'next/image';
import { CiMenuBurger } from "react-icons/ci";
import './Navbar.css';


const langList = [
  { name: 'Uzbek', key: 'uz' },
  { name: 'English', key: 'en' },
  { name: 'Russian', key: 'ru' }
  
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState('en'); // Default language

  const changeLanguage = (key:any) => {
    setLang(key);
    setLangOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container w-4/5 mx-auto flex items-center justify-between py-4">
        <div className="nav_img">
          <Image src={icons} alt="icon"   />
        </div>
        <ul className="hidden lg:flex gap-12">
          {navData.map((item, index) => (
            <li className="nav_list" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className='h-10 hidden lg:inline-block'>
            <div onClick={() => setLangOpen(!langOpen)} className={`bg-white w-[100px] flex items-end justify-center text-sm border rounded-2xl relative py-2 cursor-pointer overflow-hidden duration-200 transition-[height] ${langOpen ? 'h-[90px]' : 'h-10'}`}>
              <svg className={`absolute top-2.5 left-3 duration-200 scale-90 ${langOpen ? 'rotate-180' : ''}`} width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 16.92 6ZM10 2.04c.83 1.2 1.48 2.53 1.91 3.96H8.09C8.52 4.57 9.17 3.24 10 2.04ZM2.26 12C2.1 11.36 2 10.69 2 10s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H2.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 3.08 14Zm2.95-8H3.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 6.03 6ZM10 17.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM12.34 12H7.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM14.36 12c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z" fill="#8C8C8C"></path></svg>
              <svg className={`absolute top-2.5 right-3 duration-200 ${langOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M11.91 6.967 9 9.877l-2.91-2.91a.747.747 0 1 0-1.057 1.058l3.442 3.442a.747.747 0 0 0 1.058 0l3.442-3.442a.747.747 0 0 0 0-1.058.763.763 0 0 0-1.065 0Z" fill="#8C8C8C"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
              <div className='absolute top-[34px] space-y-1'>
                {langList.map((el, index) => (
                  <button key={index} className={lang === el.key ? 'hidden' : 'block'} onClick={() => changeLanguage(el.key)}>{el.name}</button>
                ))}
              </div>
              <span className='bg-white absolute top-2.5 left-10 capitalize'>{lang}</span>
            </div>
          </div>
        </div>
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CiMenuBurger />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-md">
          <ul className="flex flex-col gap-4 py-4">
            {navData.map((item, index) => (
              <li className="nav_list" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

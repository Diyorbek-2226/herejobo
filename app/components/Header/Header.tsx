import React from 'react';
import { Button } from '../Content/button/button';
import Image from 'next/image';
import rasm from '../img/apacha.svg';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <>
      <div className="container mx-auto w-4/5">
        <div className="header_title flex items-center justify-between">
          <div className="header_left">
            <div>
              <h1 className="header_title_item">Dunyo sizni</h1>
              <h1 className="header_title_item">Kutmoqda</h1>
            </div>
            <Button />
          </div>
          <div className="header_right mt-20">
            <Image alt="Travel image" className="rasm_lar" src={rasm} />
          </div>
        </div>
      </div>
      <div className="header_slider">
        <div className="container mx-auto w-4/5">
          {/* <SliderComponent/> */}
        </div>
      </div>
    </>
  );
};

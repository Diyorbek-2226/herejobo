import React from 'react';
import './main.modules.css';
import Categorya from '../img/s1.svg';
import Categorya1 from '../img/s2.svg';
import Categorya2 from '../img/s3.svg';
import Categorya3 from '../img/s4.svg';
import Categorya4 from '../img/s5.svg';
import Categorya5 from '../img/s6.svg';
import Image from 'next/image';

export const Main = () => {
  return (
    <main className='Main mt-20'>
      <div className="container mx-auto w-4/5">
        <h1 className='main_title text-center'>Bizning Afzalliklarimiz</h1>
        <div className="Main_category flex flex-wrap justify-between items-center max-sm:h-full">
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya} alt='icons'/>
            <h2 className='main_component'>Individual</h2>
            <h2 className='main_component'>yondashuv</h2>
          </div>
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya1} alt='icons'/>
            <h2 className='main_component'>Tajriba va<br /> professionallik</h2>
          </div>
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya2} alt='icons'/>
            <h2 className='main_component'>Keng</h2>
            <h2 className='main_component'>va</h2>
            <h2 className='main_component'>tanlovli</h2>
          </div>
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya3} alt='icons'/>
            <h2 className='main_component'>Ishonchlilik<br /> va</h2>
            <h2 className='main_component'>xavfsizlik</h2>
          </div>
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya4} alt='icons'/>
            <h2 className='main_component'>Raqobatbardosh</h2>
            <h2 className='main_component'>narxlar</h2>
          </div>
          <div className="Main_border flex flex-col items-center min-small:w-1/2 min-lg:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
            <Image className='my-4' src={Categorya5} alt='icons'/>
            <h2 className='main_component'>24/7 qo'llab-<br /></h2>
            <h2 className='main_component'>quvvatlash</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

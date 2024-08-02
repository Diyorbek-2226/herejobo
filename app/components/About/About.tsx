import React from 'react';
import Image from 'next/image';
import Right from '../img/img.svg';
import './About.modules.css';

export const About = () => {
  return (
    <header>
      <div className="container mx-auto w-4/5">
        <h1 className="main_title text-center">Biz haqimizda</h1>
        <div className="titles flex flex-col lg:flex-row justify-between items-center">
          <div className="left w-full lg:w-1/2 items-center">
            <p className='my-4 paragraf'>
              Bizning kompaniyamiz 2024 yilda Toshkentda tashkil etilgan bo'lib, jadal rivojlanib, dunyo bo'ylab noyob turlar va sayohatlar taklif etmoqda. 
              Biz unutilmas taassurotlar yaratish va mijozlarimizga yangi madaniyatlar, tarixlar va tabiat go'zalliklarini kashf etish imkoniyatini berishdan faxrlanamiz.
            </p>
            <p className='my-4 paragraf'>
              Biz - o'z ishiga bag'ishlangan, yosh va dinamik mutaxassislar jamoasimiz. Gidlarimiz va tashkilotchilarimiz har bir sayohatni mijozlarning barcha istaklari va afzalliklarini hisobga olgan holda diqqat bilan rejalashtiradilar.
            </p>
            <p className="my-4 paragraf">
              Sayohat haqiqiy sarguzashtga aylanishi uchun eng yaxshi yo'nalishlarni taklif qilishga intilamiz. Tashkil etilganimizdan beri biz yuqori sifatli xizmat va har bir sayohatchiga individual yondashuv tufayli mijozlarimizning ishonchini qozondik.
            </p>
          </div>
          <div className="right w-full lg:w-1/2 mt-8 text-center lg:mt-0">
            <Image src={Right} alt='qizcha' className="mx-auto"/>
          </div>
        </div>
      </div>
    </header>
  );
}

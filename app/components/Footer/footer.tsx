"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Chat from '../img/chat.svg';
import './Footer.css';
import Phone from  '../img/phone.svg'
import location from '../img/location.svg'
import Facebook from '../img/feesbook.svg'
import { BsInstagram, BsTelegram, BsWhatsapp, BsFacebook } from 'react-icons/bs';
import Link from 'next/link';


export const Footer = () => {
    const [phoneNumber, setPhoneNumber] = useState('+998');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d]/g, ''); // Only allow numbers
        if (value.startsWith('998')) {
            value = '+' + value;
        } else {
            value = '+998' + value.slice(3); // Retain +998
        }
        setPhoneNumber(value);
    };

    return (
        <footer>
            <div className="container mx-auto w-4/5">
                <div className="title_comnet flex items-center justify-between">
                    <div className="footer_left">
                        <p className="text w-full">
                            Biz har doim sizning savollaringiz va takliflaringizga ochiqmiz. <br />
                            Biz bilan qulay usulda bog'laning, va bizning jamoamiz sizga imkon <br />
                            qadar tezroq javob beradi.
                        </p>
                        <span className="flex items-center gap-8">
                            <input
                                className="Input my-4"
                                type="tel"
                                value={phoneNumber}
                                onChange={handleInputChange}
                                maxLength={13} // Ensure it does not exceed 13 characters (including +998)
                            />
                            <button className='footer_btn'>Menga qo'ng'iroq qiling</button>
                        </span>
                    </div>
                    <div className="footer_right h-full">
                        <Image className='crix' src={Chat} alt="Chat Icon" />
                    </div>
                </div>

            <ul className="list-contact flex items-center justify-between">
               <li className='my-12'>
              <span className='flex items-center gap-4'>
              <Image src={Phone} alt='call'/>
                <h2 className='contacts'>
                +998 77 273 00 17
                </h2>
              </span>
              <span className='flex items-center gap-4 py-5'>
<Link href={"https://www.facebook.com/"}> <BsFacebook size={28}/></Link>
<Link href={'https://www.instagram.com/'}><BsInstagram size={28}/></Link>
<Link href={"https://telegram.org/"}><BsTelegram size={28}/></Link>
<Link href={"https://web.whatsapp.com/"}><BsWhatsapp size={28}/></Link>
              </span>
               </li>
               <li>
                <span className='flex items-center'>
                    <Image src={location} alt='location'/>
                    <h2 className='forc_title'>Toshkent, O'zbekiston</h2>
                </span>
                <h2 className='forc_title ms-8'>Chilonzor 18/19 uy</h2>
               </li>
            </ul>
         <hr  className='w-full text-white'/>
         <h1 className='forc_title text-center pb-6 pt-6'>DarmonTravel 2024</h1>
            </div>
        </footer>
    );
};

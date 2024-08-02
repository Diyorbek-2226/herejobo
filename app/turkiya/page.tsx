import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import TurkiyaImg from  '../components/img/turkiya.svg'
import './turkiya.css'

const Turkiya = () => {
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto w-4/5">
          <div className="images_turkiya">
            <Image src={TurkiyaImg} alt='Turkiya' />
          </div>
          <div className="title_turkiya my-4">
<h1 className='text_item text-custom-blue'>Turkiya</h1>
<h2 className='text_children text-custom-blue'>Istanbul: Asrlar Kesisgan Abadiy Shahar</h2>
<p className="paragrif">
  
</p>
          </div>
        </div>
    </div>
  )
}

export default Turkiya

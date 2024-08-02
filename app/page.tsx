import { Header } from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import {Main }from './components/Main/Main'
import { About } from './components/About/About';
import { Footer } from './components/Footer/footer';

export default function Home() {
  return (
    <div>
      <Navbar/>
 <div>
 <Header/>
 <About/>
 <Main/>
 <Footer/>
 </div>
      
    </div>
  );
}

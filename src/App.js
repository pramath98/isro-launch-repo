import './App.css';
import { GiSpaceShuttle } from "react-icons/gi";
import { GiRocket } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";
import { GoZap } from "react-icons/go";
import AppHeader from './Branding/appHeader';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {

  //   window.addEventListener('scroll', scrollRotate)
  // }, []);
  // window.onscroll = function () {
  //   scrollRotate();
  // };
  function scrollRotate(event) {
    console.log(event);
    let image = document.getElementById("cyl");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  }

  return (
    <>
      <div className='wrapper' onScroll={scrollRotate}>
        <AppHeader />
        <header>
          <img className='background' src='/home-text-bg.png' />
          <div className='flex flex-col items-center justify-center h-screen'>
            <span className=' text-blue-950 text-center text-3xl font-normal'>What do you</span>
            <span className=' text-blue-950 text-center text-7xl font-extrabold'>want to</span>
            <span className=' text-blue-950 text-center text-3xl font-normal'>Know about?</span>
          </div>
        </header>
        <img id='cyl' className='cylinder' src='/home_element_cylinder.png' />
        <header style={{ backgroundColor: '#7ACCFF' }}>
          <div className='flex flex-col items-center justify-center h-screen'>
            <img className='isro-logo-bg-v1' src='/Vector.png' />
            <img className='isro-logo-bg-v' src='/Vector.png' />
            <img className='isro-logo-page-two' src='/isro-logo.png' />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

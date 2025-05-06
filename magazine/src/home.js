import react, { useState } from 'react';
import './home.css';

import page1 from './images/1.jpg';
import page2 from './images/2.jpg';
import page3 from './images/3.jpg';
import page4 from './images/4.jpg';
import page5 from './images/5.jpg';
import page6 from './images/6.jpg';
import page7 from './images/7.jpg';
import page8 from './images/8.jpg';
import page9 from './images/9.jpg';
import page10 from './images/10.jpg';
import page11 from './images/11.jpg';
import page12 from './images/12.jpg';
import page13 from './images/13.jpg';
import page14 from './images/14.jpg';
import page15 from './images/15.jpg';
import page16 from './images/16.jpg';
import page17 from './images/17.jpg';
import page18 from './images/18.jpg';
import page19 from './images/19.jpg';
import page20 from './images/20.jpg';
import page21 from './images/21.jpg';
import page22 from './images/22.jpg';
import page23 from './images/23.jpg';
import page24 from './images/24.jpg';

function Home() {
    const pages = [
        page1, page2, page3, page4, page5, page6, page7, page8,
        page9, page10, page11, page12, page13, page14, page15,
        page16, page17, page18, page19, page20, page21, page22,
        page23, page24
    ];

    let [currentPageIndex, setCurrentPageIndex]= useState(0);
    const currentLeftPage = pages[currentPageIndex];
    const currentRightPage = pages[currentPageIndex+1];


    const handleFlipFront=() =>{
        if (currentPageIndex!== (pages.length-2)) {
            setCurrentPageIndex(currentPageIndex + 2);
        }
    }

    const handleFlipBack=() =>{
        if (currentPageIndex!==0) {
            setCurrentPageIndex(currentPageIndex-2);
         }
    }
    
    return (
    <div className='landing-page'>
        <div className='intro'>
            <h1>Moi Magazine</h1>
        </div>

        <div className='magazine-container'>
            <button className='flip-back-btn' onClick={handleFlipBack}>Flip </button> //to flip pages back

            <div className='left-column'> // left column of magazine
                <img src={currentLeftPage} alt='Magazine Page' className='page'/>
            </div>

            <div className='right-column'> //right column of magazine
                <img src={currentRightPage} alt='Magazine Page' className='page'/>
            </div>

            <button className='flip-front-btn' onClick={handleFlipFront}> Flip </button> //to flip pages front

        </div>

    </div>
  );
}
export default Home;
import react, { lazy, useState } from 'react';
import './home.css';
import pages from './pages.js';

function Home() {

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
            <button className='flip-back-btn' onClick={handleFlipBack}>Flip </button> 

            <div className='left-column'> 
                <img src={currentLeftPage.image} loading="lazy" alt='Magazine Page' className='page'/>
            </div>

            <div className='right-column'> 
                <img src={currentRightPage.image} loading="lazy" alt='Magazine Page' className='page'/>
            </div>

            <button className='flip-front-btn' onClick={handleFlipFront}> Flip </button> 

        </div>

    </div>
  );
}
export default Home;
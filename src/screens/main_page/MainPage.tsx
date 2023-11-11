import React, {useEffect, useState } from 'react'
import './MainPage.css'
import 'font-awesome/css/font-awesome.min.css';

function MainPage() {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 800); // Adjust the width as needed for your mobile view breakpoint
        }

        // Add a listener for window resize
        window.addEventListener('resize', handleResize);

        // Call it initially
        handleResize();

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="MainPage">
      <div className="MainPage-Footer">
          <h4 className="MainPage-Footer-Text-Heading">Network for need</h4>
          <div className="MainPage-Footer-Search_bar-icon">
              <div className="MainPage-Footer-Search_bar-Icon-Container">
               <i  className="fa fa-search search-icon"></i>
                <input type="search" className="MainPage-Footer-Search_bar-Input" placeholder="Search for a need"/>
          </div>
      </div>
          <div className="MainPage-Footer-Button">
              <button className={`MainPage-Footer-Button-Need ${isMobileView ? 'mobile' : ''}`}>
              {isMobileView ? <span className="plus-icon">+</span> : 'Create a need'}
              </button>
          </div>
          <div className="MainPage-Profile-Logo">
              <img src="https://i.ibb.co/0jZ3Q0H/Logo.png" alt="Logo" className="MainPage-Footer-Logo"/>
          </div>
      </div>
    </div>
  )
}

export default MainPage
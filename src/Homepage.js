import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import ViewLandingPage from './components/mainlandingpage/mainlandingpage';
import foodImage from './images/Food-Packing.jpg';
import drugphoto from './images/drugphoto.jpg';
import './homepage.css';
//import Getfood from './Fooditems';
import Navbar from './homepagenavbar/navbar';
//import ViewLandingPage from './components/mainlandingpage/mainlandingpage';
import Footer from './Footer';
import shopGroceriesImage from './images/shopgroceries.jpg';



const Homepage =()=> {
     return(
           
      <div className='main'>
          <div className='navbarforlandingpage'>   <Navbar /></div>
     
        
            <div className='landingpage'>
                  <Link to='/fooditems'>
                  <img src={shopGroceriesImage}  className='food'/>
                  </Link> 
                  <Link to='/pharmacyitems'>
                  <img src={drugphoto}  className='phama'/>
                  </Link>
                 </div> 
             <div className='mainpagefooter'>
            
                  </div>   
                  <Footer/>  
          
      </div>
        
     )

}

export default Homepage;
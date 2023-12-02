import React from 'react'
import Images from '../../components/Images/Images';
import Reservation from '../../components/Reservation/Reservation';
import FoodItem from '../../components/FoodItem/FoodItem';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import AboutHeading from '../../components/AboutHeading/AboutHeading';

function AboutPage() {
  return (
    <>
        <main>
            <AboutBanner/>
            <AboutHeading/>
            <FoodItem/>
            <Reservation/>
            <Images/>
        </main> 
    </>
  )
}

export default AboutPage;

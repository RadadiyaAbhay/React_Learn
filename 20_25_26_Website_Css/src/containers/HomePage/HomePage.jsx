import React from 'react'
import Banner from '../../components/Banner/Banner';
import Destination from '../../components/Destination/Destination';
import Food from '../../components/Food/Food';
import Menu from '../../components/Menu/Menu';
import Images from '../../components/Images/Images';
import Reservation from '../../components/Reservation/Reservation';

function HomePage() {
  return (
    <>
        <main>
          <Banner/>
          <Destination/>
          <Food/>
          <Menu/>
          <Reservation/>
          <Images/>
        </main>
    </>
  )
}

export default HomePage;

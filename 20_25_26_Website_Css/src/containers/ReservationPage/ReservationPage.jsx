import React from 'react'
import Images from '../../components/Images/Images';
import Discover from '../../components/Discover/Discover'
import Destination from '../../components/Destination/Destination'
import ReservationBanner from '../../components/ReservationBanner/ReservationBanner';
import ReservationDesc from '../../components/ReservationDesc/ReservationDesc';
import ReservationImg from '../../components/ReservationImg/ReservationImg';

function ReservationPage() {
  return (
    <>
        <main>
            <ReservationBanner/>
            <ReservationDesc/>
            <ReservationImg/>
            <Destination/>
            <Discover/>
            <Images/>
        </main>
    </>
  )
}

export default ReservationPage;

import React from 'react'
import Images from '../../components/Images/Images';
import Reservation from '../../components/Reservation/Reservation';
import MenuBanner from '../../components/MenuBanner/MenuBanner';
import ImgDes1 from '../../components/ImgDes1/ImgDes1';
import ImgDes2 from '../../components/ImgDes2/ImgDes2';
import ImgDes3 from '../../components/ImgDes3/ImgDes3';
import MenuDesc from '../../components/MenuDesc/MenuDesc';

function OurMenusPage() {
  return (
    <>
        <main>
            <MenuBanner/>
            <ImgDes1/>
            <ImgDes2/>
            <ImgDes3/>
            <MenuDesc/>
            <Reservation/>
            <Images/>
        </main>
    </>
  )
}

export default OurMenusPage;

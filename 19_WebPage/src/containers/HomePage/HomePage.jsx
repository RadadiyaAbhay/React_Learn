import React from 'react'
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Heading/Heading";
import Service from "../../components/Service/Service";
import Greetings from '../../components/Greetings/Greetings';
import News from "../../components/News/News";

function HomePage() {
    let welm = ['Welcome to Techwind Cafe' , 'Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.']
    let news = ['Latest News' , 'Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.']
    let review = ['Customer Reviews' , 'Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.']
  return (
    <>
        <main>
            <Banner/>
            <Heading msg={welm}/>
            <Service/>
            <Greetings/>
            <Heading msg={news}/>
            <News/>
            <Heading msg={review}/>
        </main>
    </>
  )
}

export default HomePage


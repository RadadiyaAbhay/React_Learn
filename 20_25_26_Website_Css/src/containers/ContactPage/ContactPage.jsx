import React from 'react'
import Images from '../../components/Images/Images';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import Contact from '../../components/Contact/Contact';
import Map from '../../components/Map/Map';
import Form from '../../components/Form/Form';
import Discover from '../../components/Discover/Discover';

function ContactPage() {
  return (
    <>
        <main>
          <ContactBanner/>
          <Contact/>
          <Map/>
          <Form/>
          <Discover/>
          <Images/>
        </main>
    </>
  )
}

export default ContactPage;

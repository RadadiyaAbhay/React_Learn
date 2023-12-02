import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './containers/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from './containers/AboutPage/AboutPage';
import ContactPage from './containers/ContactPage/ContactPage';
import OurMenusPage from './containers/OurMenusPage/OurMenusPage';
import ReservationPage from './containers/ReservationPage/ReservationPage';
import Option from './components/Option/Option';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/ourMenus' element={<OurMenusPage/>}/>
      </Routes>
      <Option/>
      <Footer/>
    </>
  )
}

export default App

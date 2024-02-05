import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './containers/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import ProductsPage from './containers/ProductsPage/ProductsPage'
import NotFound from './components/NotFound/NotFound'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import ProductDetailsPage from './containers/ProductDetailsPage/ProductDetailsPage'
import { getProducts } from './services/actions/product.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from './services/actions/cart.action'

function App() {

  const { user } = useSelector(state => state.userReducer);
  const { isLogin } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
    if(isLogin){
      dispatch(getCart(user.uid))
    }
  } ,[isLogin])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productspage' element={<ProductsPage />} />
        <Route path='/productdetailspage' element={<ProductDetailsPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

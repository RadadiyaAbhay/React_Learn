import React, { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Collection from '../../components/Collection/Collection'
// import LatestProduct from '../../components/LatestProduct/LatestProduct'
import MostViewed from '../../components/MostViewed/MostViewed'
import { getProducts } from '../../services/actions/product.action'
import { useDispatch, useSelector } from 'react-redux'
import Achievement from '../../components/Achievement/Achievement'
import CategoryWiseProducts from '../../components/CategoryWiseProducts/CategoryWiseProducts'

function HomePage() {
  const dispatch = useDispatch();
  const { isLoading, err } = useSelector(state => state.productReducer);

  const category = ['T-shirt', 'Shirt', 'Hoodie', 'Trouser']
  useEffect(() => {
    console.log("Windows");
    window.scrollTo(0, 0);
  })
  if (isLoading) {
    return (
      <>
        <div className="bg-white flex items-center justify-center h-screen pb-12">
          <div className="loader"></div>
        </div >

      </>
    )
  } else {
    return (
      <>
        <Banner />
        <MostViewed />
        <Collection />
        <CategoryWiseProducts list={category} />
        <Achievement />
      </>
    )
  }
}

export default HomePage
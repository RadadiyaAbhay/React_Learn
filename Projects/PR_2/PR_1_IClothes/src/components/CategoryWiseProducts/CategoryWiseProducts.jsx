import { useDispatch, useSelector } from "react-redux"
import { BiSolidChevronsRight } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { singleGetProduct } from "../../services/actions/product.action";
import { BsHandbag } from "react-icons/bs";

import { useState } from "react";
import { setCart } from "../../services/actions/cart.action";

export default function CategoryWiseProducts({ list }) {
  const { products, isLoading, err } = useSelector(state => state.productReducer);
  const { user } = useSelector(state => state.userReducer);
  const { isLogin } = useSelector(state => state.userReducer);
  const { cartProduct } = useSelector(state => state.cartReducer);

  var count = 0
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleProduct = async (id) => {
    await dispatch(singleGetProduct(id));
    navigate('/productdetailspage')
  }
  const handleCart = (id) => {
    if (isLogin) {
      console.log(cartProduct);
      if (cartProduct.length == 0) {
        dispatch(setCart({ product: [id] }, user.uid))
      } else {
        dispatch(setCart({ product: [...cartProduct.product, id] }, user.uid))

      }
    } else {
      navigate('/signin')
    }
  }
  const handleRedirect = (i) => {
    navigate('/productspage', { state: i })
  }
    return (
      <div className="bg-white pb-12">
        {
          list.map((item) => {
            var count = 0
            return (<div key={item} className="mx-auto max-w-2xl px-4 pt-12 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8">
              <div className="flex items-end justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{item}s</h2>
                <a className="font-semibold text-md flex items-center point" onClick={() => { handleRedirect(item) }}>View More <BiSolidChevronsRight className="ms-1 text-xl font-gray-100" /></a>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product, index) => (
                  product.category == item && count < 4 ? (
                    <div key={product.id} className="point group relative addto">
                      <span className="hidden">{count++}</span>
                      <div className="aspect-h-1 relative aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  sm:h-80">
                        <img
                          src={product.thumbnail}
                          alt={product.category}
                          className="h-full group-hover:opacity-75 w-full object-cover border-2 rounded-md object-top lg:h-full lg:w-full"
                        />
                        <div onClick={() => { handleCart(product) }} className="bg-indigo-600 font-semibold text-white p-3 z-30 rounded-full m-3 bottom-0 addtocart end-0 absolute point hidden items-center justify-center"><BsHandbag className="fw-bold" /></div>

                      </div>
                      <div className="mt-4 flex flex-col" onClick={() => {
                        handleProduct(product.id)
                      }}>
                        <div>
                          <h3 className="text-sm text-gray-700 font-medium">

                            <span aria-hidden="true" className="absolute inset-0" />
                            <p className="truncate">
                              {product.name}
                            </p>

                          </h3>
                          <p className="mt-1 text-sm text-gray-500 font-bold">{product.color}</p>
                        </div>
                        <p className="text-xl font-medium text-gray-900">Rs.{product.price}</p>
                      </div>
                    </div>
                  ) : (<span className="hidden" key={product.id}></span>)
                )

                )}
              </div>
            </div>)
          })
        }

      </div>
    )
  
}

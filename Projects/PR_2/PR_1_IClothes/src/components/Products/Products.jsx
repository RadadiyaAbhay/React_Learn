import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { singleGetProduct } from "../../services/actions/product.action";

export default function Products({cate}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleProduct = async (id) => {
    await dispatch(singleGetProduct(id));
    navigate('/productdetailspage')
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-8 pt-2 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cate.map((product) =>
            <div  onClick={() => {
              handleProduct(product.id)
            }} key={product.id} href={product.href} className="group point">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-60 sm:h-80 md:h-72 lg:h-64">
                <img
                  src={product.thumbnail}
                  alt={product.category}
                  className="h-full w-full object-cover border-2 rounded-md object-top lg:h-full lg:w-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <p className="truncate">
                  {product.name}
                </p>
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

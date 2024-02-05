import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Products from '../../components/Products/Products'
import { getProducts } from '../../services/actions/product.action'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { singleGetProduct } from "../../services/actions/product.action";
import { filterDataCategory, filterDataColor } from '../../utilities/state'
import { data } from 'autoprefixer'


const sortOptions = [
  { name: 'Most Popular', href: 'popular', current: true },
  { name: 'Best Rating', href: 'rating', current: false },
  { name: 'Newest', href: 'newest', current: false },
  { name: 'Price: Low to High', href: 'prilh', current: false },
  { name: 'Price: High to Low', href: 'prihl', current: false },
]
const subCategories = [
  { name: 'New Arrival', href: 'New Arrival' },
  { name: 'T-shirt', href: 'T-shirt' },
  { name: 'Shirt', href: 'Shirt' },
  { name: 'Trouser', href: 'Trouser' },
  { name: 'Hoodie', href: 'Hoodie' },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsPage() {
  const { state } = useLocation();
  const receivedData = state;
  const { products } = useSelector(state => state.productReducer)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  let [filterProducts, setFilterProducts] = useState(products)

  const color = filterDataColor(products)

  let option = color.map((co) => {

    return { value: co, label: co, checked: false }

  })

  const category = filterDataCategory(products)

  let cateOption = category.map((co) => {

    return { value: co, label: co, checked: false }

  })
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: option,
    },
    {
      id: 'category',
      name: 'Category',
      options: cateOption,
    },
    {
      id: 'rating',
      name: 'Rating',
      options: [
        { value: '1', label: '1 Star', checked: false },
        { value: '2', label: '2 Star', checked: false },
        { value: '3', label: '3 Star', checked: false },
        { value: '4', label: '4 Star', checked: false },
        { value: '5', label: '5 Star', checked: false },
      ],
    },
  ]

  useEffect(() => {
    const filteredProducts = products.filter((pro) => {
      return state == pro.category || state == 'New Arrival'
    })
    setFilterProducts(filteredProducts);
  }, [state, products]);
  const handleColor = (id, da) => {
    let colorData

    switch (id) {
      case "color":
        colorData = products.filter((product) => {
          return product.color.includes(da)

        })
        break;
      case "category":
        colorData = products.filter((product) => {
          return product.category.includes(da)
        })
        break;
      case "rating":
        colorData = products.filter((product) => {
          return product.rating.includes(da)
        })
        break;
      default:
        colorData = products
        break;
    }
    setFilterProducts(colorData);

  }
  const handleRedirect = (i) => {
    // console.log(i);
    navigate('/productspage', { state: i })
  }
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // })
  const handleClick = (optionHref) => {
    let newProductsData;
    sortOptions.map((option) => {
      if (option.href == optionHref) {
        option.current = true
      } else {
        option.current = false
      }
    })
    switch (optionHref) {
      case 'prilh':
        newProductsData = filterProducts.slice().sort((product1, product2) => {
          return product1.price - product2.price;
        });
        break;

      case 'prihl':
        newProductsData = filterProducts.slice().sort((product1, product2) => {
          return product2.price - product1.price;
        });
        break;

      case 'rating':
        newProductsData = filterProducts.slice().sort((product1, product2) => {
          return product1.rating - product2.rating;
        });
        break;

      case 'popular':
        newProductsData = filterProducts.slice().sort((product1, product2) => {
          return product1.rating - product2.rating;
        });
        break;

      case 'newest':
        newProductsData = filterProducts.slice().sort((product1, product2) => {
          return product2.uin - product1.uin;
        });
        break;

      default:
        newProductsData = filterProducts; // Default to the current filterProducts order
        break;
    }

    setFilterProducts(newProductsData);
  };

  const handleProduct = async (id) => {
    await dispatch(singleGetProduct(id));
    navigate('/productdetailspage')
  }
  const { isLoading, err } = useSelector(state => state.productReducer);
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
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a onClick={() => { handleRedirect(category.href) }} className="block point px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        onChange={() => {
                                          handleColor(section.id, option.value)
                                        }}
                                        type="radio"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{receivedData}s</h5>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <p
                                onClick={() => { handleClick(option.href) }}
                                className={classNames(
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block point px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </p>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a onClick={() => { handleRedirect(category.href) }} className='point'>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    onChange={() => {
                                      handleColor(section.id , option.value)
                                    }}
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}

                <div className="lg:col-span-3">
                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 pb-8 pt-2 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">

                      <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                          filterProducts.length != 0 ? 
                          filterProducts.map((product) => {
                            return (
                              <div onClick={() => {
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
                            )
                          })
                          :(
                            <div>
                              <p className='text-xl font-bold '>No Products Found</p>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

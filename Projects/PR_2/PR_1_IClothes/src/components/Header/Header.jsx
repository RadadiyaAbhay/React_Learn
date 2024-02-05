import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOutAction } from '../../services/actions/user.action'
import { filterData } from '../../utilities/state'
import { setCart } from '../../services/actions/cart.action'
import { singleGetProduct } from '../../services/actions/product.action'


const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'shirts',
          name: 'Shirts',
          items: [
            { name: 'Classic Tees', href: '#' },
            { name: 'Oversized Tees', href: '#' },
            { name: 'Long Sleeves', href: '#' },
            { name: 'Crop Tees', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All Shirts', href: '#' },
          ],
        },
        {
          id: 'jumpers',
          name: 'Jumpers',
          items: [
            { name: 'Jumpers', href: '#' },
            { name: 'Crop Jumpers', href: '#' },
            { name: 'Hoodies', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All', href: '#' },
          ],
        },
        {
          id: 'kids',
          name: 'kids',
          items: [
            { name: 'Kids Tees', href: '#' },
            { name: 'Kids Jumpers', href: '#' },
            { name: 'Kids Hoodies', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All Kids', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'shirts',
          name: 'Shirts',
          items: [
            { name: 'Classic Tees', href: '#' },
            { name: 'Oversized Tees', href: '#' },
            { name: 'Long Sleeves', href: '#' },
            { name: 'Crop Tees', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All Shirts', href: '#' },
          ],
        },
        {
          id: 'jumpers',
          name: 'Jumpers',
          items: [
            { name: 'Jumpers', href: '#' },
            { name: 'Crop Jumpers', href: '#' },
            { name: 'Hoodies', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All', href: '#' },
          ],
        },
        {
          id: 'kids',
          name: 'kids',
          items: [
            { name: 'Kids Tees', href: '#' },
            { name: 'Kids Jumpers', href: '#' },
            { name: 'Kids Hoodies', href: '#' },
            { name: 'New Arrivals', href: '#' },
            { name: 'Shop All Kids', href: '#' },
          ],
        },
      ],
    },

  ],
  pages: [
    { name: 'Custom', href: '#' },
    { name: 'Sale', href: '#' },
  ],
}

const profileList = [
  { name: 'Your Account', href: '#' },
  { name: 'Your Orders', href: '#' },
  { name: 'Your Wishlist', href: '#' },
  { name: 'Your Addresses', href: '#' },
  { name: 'Payment Options', href: '#' },
  { name: 'Login & Security', href: '#' },
  { name: 'Sign Out', href: 'signout' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  let { isLogin, user } = useSelector(state => state.userReducer)
  const { cartProduct } = useSelector(state => state.cartReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  let total = 0;

  // profile
  const handleProfile = (profilehref) => {
    switch (profilehref) {
      case 'signout':
        setProfileOpen(false)
        dispatch(signOutAction())
        break;

      default:
        setProfileOpen(false)

        break;
    }
  }
  // Search
  let [searchData, setSearchData] = useState([])
  let [inputSearch, setInputSearch] = useState('');
  const { products } = useSelector(state => state.productReducer);
  const handleSearch = (e) => {
    setInputSearch(e.target.value);

    let sea = products.filter((product) => {
      return (product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) || (product.category.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    })
    setSearchData(sea)
  }

  const handleProduct = async (id) => {
    await dispatch(singleGetProduct(id));
    setSearchOpen(false)
    navigate('/productdetailspage')
  }
  // Cart

  let cartIds = [];
  if (isLogin) {
    cartIds = filterData();
  }
  let newCartData = []
  console.log(user);
  cartIds.map((id) => {
    let quantity = 0
    let product
    cartProduct.product.map((prod) => {
      if (id == prod.id) {
        if (quantity == 0) {
          product = prod;
        }
        quantity++
      }
    })
    newCartData = [...newCartData, { ...product, quantity: quantity }]

  })

  const removeCart = (id) => {
    let count = 0;
    let newCart = []
    cartProduct.product.map((cpro) => {
      if (cpro.id == id) {
        if (count == 0) {
          count++
        } else {
          newCart.push(cpro)
        }
      } else {
        newCart.push(cpro)
      }
    })
    dispatch(setCart({ product: newCart }, user.uid))
  }

  return (
    <>
      <div className="bg-white">
        {/* Cart */}
        <Transition.Root show={cartOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setCartOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setCartOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {newCartData.map((product) => {
                                  total += product.quantity * product.price
                                  return (<li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.thumbnail}
                                        alt={product.category}
                                        className="h-full w-full object-cover object-top"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product.href} >{product.name}</a>
                                          </h3>
                                          <p className="ml-4">Rs.{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty : {product.quantity}</p>

                                        <div className="flex">
                                          <button
                                            type="button" onClick={() => { removeCart(product.id) }}
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>Rs.{total}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{' '}
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setCartOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Search */}
        <Transition.Root show={searchOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setSearchOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between border rounded-lg px-3 py-2">
                            <input type='text' placeholder='Find anything...' value={inputSearch} onChange={handleSearch} className=' w-full focus:outline-none' />

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setSearchOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>


                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {searchData.map((product) => {
                                  total += product.quantity * product.price
                                  return (<li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.thumbnail}
                                        alt={product.category}
                                        className="h-full w-full object-cover object-top"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <p onClick={() => handleProduct(product.id)} className='point'>{product.name}</p>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

                          <div className=" flex justify-center text-center text-sm text-gray-500">
                            <p>
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setSearchOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Profile */}
        <Transition.Root show={profileOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setProfileOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between pb-4 border-b-2 border-black">
                            <div className="relative ml-0 mb-0 flex items-center">
                              <div className="relative mr-3 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                {
                                  isLogin ? 
                                  (<img
                                    className="h-8 w-8 rounded-full"
                                    src={user.imgUrl}
                                    alt=""
                                  />)
                                  :
                                  (<img
                                    className="h-8 w-8 rounded-full"
                                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                    alt=""
                                  />)
                                }
                                </div>
                                <Dialog.Title className="text-lg font-medium text-gray-900">Hello, {isLogin ? user.name : ("user")}</Dialog.Title>
                            </div>


                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setProfileOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">

                                {profileList.map((product ,index) => {
                                  return (
                                    <li key={index} className="flex py-4">

                                      <div className="ml-0 flex flex-1 flex-col">
                                        <div>
                                          <div onClick={() => handleProfile(product.href)} className="point flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <p>{product.name}</p>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

                          <div className=" flex justify-center text-center text-sm text-gray-500">
                            <p>
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setProfileOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                          <div className="grid grid-cols-2 gap-x-4">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                </div>
                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                  {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <NavLink to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                          {page.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  {
                    isLogin ? (<div className="relative ml-3 mb-3">
                      <button onClick={() => {
                        setProfileOpen(true)
                        setOpen(false)
                      }} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imgUrl}
                          alt=""
                        />
                      </button>
                    </div>) : (
                      <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        <div className="flow-root">
                          <NavLink to={'/signin'} className="-m-2 block p-2 font-medium text-gray-900">
                            Sign in
                          </NavLink>
                        </div>
                        <div className="flow-root">
                          <NavLink to={'/signup'} className="-m-2 block p-2 font-medium text-gray-900">
                            Create account
                          </NavLink>
                        </div>
                      </div>
                    )
                  }


                  <div className="border-t border-gray-200 px-4 py-6">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://www.svgrepo.com/show/405510/flag-for-flag-india.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">IND</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <NavLink to={'/'}>
                    <h3 className='text-black font1 font-bold text-3xl'>Clothes</h3>
                  </NavLink>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 -mb-px flex items-center border-b-2 focus:outline-none pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                <div className="relative bg-white z-10">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                          <div key={item.name} className="group relative text-base sm:text-sm">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                                              {item.name}
                                            </a>
                                            <p aria-hidden="true" className="mt-1">
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">


                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                      <img
                        src="https://www.svgrepo.com/show/405510/flag-for-flag-india.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-sm font-medium">IND</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>


                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <p onClick={() => setSearchOpen(true)} className="p-2 point text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </p>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-4">
                    <p onClick={() => setCartOpen(true)} className="group -m-2 point flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{isLogin ? cartProduct.product.length : 0}</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {
                      isLogin ? (
                        <>
                          <div className="relative ml-4">
                            <button onClick={() => setProfileOpen(true)} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none ring-1 ring-black">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-7 w-7 rounded-full"
                                src={user.imgUrl}
                                alt=""
                              />
                            </button>
                          </div>
                        </>

                      ) : (
                        <>
                          <div className="ml-4 flow-root lg:ml-4">
                            <NavLink to={"/signin"} className="group -m-2 point flex items-center p-2">
                              <UserIcon
                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />

                            </NavLink>
                          </div>
                          {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> */}
                          {/* <NavLink to={'/signup'} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                            Create account
                          </NavLink> */}
                        </>
                      )
                    }

                  </div>

                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

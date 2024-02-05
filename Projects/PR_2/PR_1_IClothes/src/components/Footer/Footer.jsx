function Footer() {
  const category = {
    id: 'women',
    name: 'Women',
    featured: [
      // {
      //   name: 'New Arrivals',
      //   href: '#',
      //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
      //   imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      // },
      // {
      //   name: 'Basic Tees',
      //   href: '#',
      //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      //   imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      // },
    ],
    sections: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: [
          { name: 'Tops', href: '#' },
          { name: 'Dresses', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'T-Shirts', href: '#' },
          { name: 'Jackets', href: '#' },
          { name: 'Activewear', href: '#' },
        ],
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: [
          { name: 'Watches', href: '#' },
          { name: 'Wallets', href: '#' },
          { name: 'Bags', href: '#' },
          { name: 'Sunglasses', href: '#' },
          { name: 'Hats', href: '#' },
          { name: 'Belts', href: '#' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Full Nelson', href: '#' },
          { name: 'My Way', href: '#' },
          { name: 'Re-Arranged', href: '#' },
          { name: 'Counterfeit', href: '#' },
          { name: 'Significant Other', href: '#' },
        ],
      },
      {
        id: 'support',
        name: 'Support',
        items: [
          { name: 'Pricing', href: '#' },
          { name: 'Documentation', href: '#' },
          { name: 'Guides', href: '#' },
          { name: 'API Status', href: '#' },
        ],
      },
    ],
  }

  return (
    <>

      <div className="relative bg-white ">
        <div className="mx-auto max-w-7xl px-8 border-y">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-8 md:py-16">
            <div className="col-start-1 lg:col-start-2 grid grid-cols-1 gap-x-8">
              <div>
                <p className="font-bold text-lg text-gray-900">Subscribe to our newsletter</p>
                <p className="text-md font-normal mt-4 mb-5 hover:text-gray-800 sm:w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <input type="text" placeholder="Enter Your Email" className="border sm:w-60 border-gray-300 px-2  py-1 rounded-md" />
                <button className="bg-indigo-600 font-medium text-white py-1 text-md shadow px-3 rounded-md sm:mt-0 mt-2 sm:ms-2">Subscribe</button>
              </div>
            </div>
            <div className="row-start-1 grid sm:grid-cols-4 grid-cols-2 gap-x-8 gap-y-10 text-sm">
              {category.sections.map((section) => (
                <div key={section.name}>
                  <p id={`${section.name}-heading`} className="font-bold text-lg text-gray-900">
                    {section.name}
                  </p>
                  <ul
                    role="list"
                    aria-labelledby={`${section.name}-heading`}
                    className="mt-6 sm:space-y-4 space-y-3  sm:mt-4 sm:space-y-4"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flex">
                        <a href={item.href} className="text-md font-normal hover:text-gray-800">
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
        <div className="mx-auto max-w-7xl px-8 py-7">
          <p>© 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
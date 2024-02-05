import { useNavigate } from "react-router"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'T-shirt',
      description: 'Unique Design Shirts and T-shirts',
      imageSrc: 'https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-titlecards.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Trouser',
      description: 'Customize Jeans With us',
      imageSrc: 'https://cdn.gobankingrates.com/wp-content/uploads/2018/07/woman-with-clothes-to-give-away-iStock-832447866.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Hoodie',
      description: 'Designer Hoodie',
      imageSrc: 'https://img.freepik.com/free-photo/men-s-apparel-hoodie-rear-view_53876-97228.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=sph',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Collection() {
    const navigate = useNavigate()
    const handleRedirect = (i) =>{
      navigate('/productspage', { state: i })
    }
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a className="point" onClick={()=>{handleRedirect(callout.name)}}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
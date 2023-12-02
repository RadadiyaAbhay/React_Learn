import { useRef } from "react";

function Header() {

  let nav = ['LANDINGS', 'PAGES', 'PORTFOLIO', 'DOCS', 'CONTACT']
  let myref = useRef();  

  window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
      myref.current.className = 'pos-fix';
    } else {
      myref.current.className = 'pos-abs';
    }
  });


  return (
    <>
      <header className="pos-abs"  ref={myref}>
        <div className="container">
          <div className="row align-items-center py-4 ">
            <div className="col-1 d-xl-none"><i class="bi bi-list fs-5 text-white"></i></div>
            <div className="logo col-5 col-xl-2">
              <img src="https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Flogo-light.png&w=256&q=75" alt="logo" />
            </div>
            <nav className="col-8  d-xl-flex justify-content-center d-none">
              <ul className="d-flex mb-0">
                <li className="px-3 fw-bolder" style={{ fontSize: '13px' , letterSpacing : '1px'}}><a href="#" className="text-white font1">HOME</a></li>
                {
                  nav.map((e, index) => {
                    return (
                      <li key={index} className="px-3 fw-bolder" style={{ fontSize: '13px', letterSpacing : '1px' }}>
                        <a href="#" className="text-secondary font1">
                          {
                            e
                          }
                          <i className="bi bi-chevron-down ps-1"></i>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
            <div className="col-6 col-xl-2 d-flex justify-content-end">
              <a href="#" className="px-2 text-white"><i className="bi fs-5 bi-search"></i></a>
              <a href="#" className="px-2 text-white"><i className="bi fs-5 bi-gear"></i></a>
              <a href="#" className="px-2 text-white"><i className="bi fs-5 bi-person-circle"></i></a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header; 
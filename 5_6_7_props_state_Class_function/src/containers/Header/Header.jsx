import Heading from '../../components/Heading/Heading'
import List from '../../components/List/List'
import Button from '../../components/Button/Button'

function Header() {

  let ListArr = ["Home" , "About" , "Documation" , "Projects" , "Contact"];

  return (
    <>
    <header>
      <div className="container">
        <div className="row align-items-center">
          <Heading />
          <List menu={ListArr} name="Menu"/>
          <Button />
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;

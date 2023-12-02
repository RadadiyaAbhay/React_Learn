import './Header.css'
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

function Header() {

    const navArray = ["HOME", "SHOP", "PRODUCTS", "FEATURES", "PAGES", "BLOG"]
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <Logo />
                    <Nav menu={navArray} />
                    <Button />

                </div>
            </div>
        </header>
    )
}

export default Header;
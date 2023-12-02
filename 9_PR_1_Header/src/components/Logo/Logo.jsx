import './Logo.css'
import Logo1 from "../../assets/logo.png";

function Logo() {

    return (
        <>
            <div className='logo col-2'>
            <img src={Logo1} alt="logo" className='logoImg' />
            </div>
        </>
    )
}

export default Logo;
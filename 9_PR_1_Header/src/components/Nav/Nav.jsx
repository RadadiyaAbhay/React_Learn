import './Nav.css'

function Nav({ menu }) {
    console.log(menu);
    
    return (
        <>
            <div className='nav col-7'>
                <ul>
                    {
                        menu.map((m) => {
                            return (
                                <li>
                                    <a href="#">
                                    {m}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Nav;
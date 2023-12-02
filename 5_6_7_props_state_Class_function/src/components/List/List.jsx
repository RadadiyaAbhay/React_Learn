import './List.css';

const List = ({menu , name}) =>{

    return(
    <div className='col-8'>
        <ul className='align-items-center justify-content-start d-flex'>
            <li>
                {
                    name
                }
            </li>
        {
            menu.map((m) =>{
                return(<li>
                    {
                        m
                    }
                </li>)
            })
        }
        </ul>
    </div>
    )
}

export default List;
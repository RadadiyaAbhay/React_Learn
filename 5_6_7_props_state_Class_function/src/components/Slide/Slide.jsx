import React from 'react'
import './Slide.css'

class Slide extends React.Component{

    render(){
        return(
            <>
                <div className="container">
                    <div className="row align-items-center justify-content-between new">
                        <h1 className='fw'>
                            React
                        </h1>
                        <h1 className='fw'>
                            Native
                        </h1>
    
                    </div>
                </div>
            </>
        )
    }
}
export default Slide;
import React from 'react'

function Map() {
    return (
        <>
            <section className="pb-5 mb-5 ">
                <div >
                    <iframe style={{height:"80vh" , border:"0"}} className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340175038!2d-0.24168162129936244!3d51.52855824115511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1677167101964!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default Map

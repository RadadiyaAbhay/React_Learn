import React from 'react'
import I63 from '../../assets/63.png'
import I64 from '../../assets/64.png'
import I65 from '../../assets/65.png'
import I66 from '../../assets/66.png'
import I67 from '../../assets/67.png'
import I68 from '../../assets/68.png'

function FoodItem() {
    return (
        <>
            <section className="b21 position-relative">
                <div className="container border p-1">
                    <div className=" border p-5">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-xl-3 col-md-6 flex flex-column justify-content-center align-items-center text-center"><img src={I65} className="w-50" alt="32" /><h5 className="starters text-primary pt-2">Starters</h5><p className="text-white back">Baked fruit & spiced vanilla</p></div>
                            <div className="col-12 col-sm-12 col-xl-3 col-md-6  d-flex flex-column justify-content-center align-items-center text-center"><img src={I63} className="w-50" alt="32" /><h5 className="starters text-primary pt-2">Main Course</h5><p className="text-white back">Food with a New Passion</p></div>
                            <div className="col-12 col-sm-12 col-xl-3 col-md-6 d-flex flex-column justify-content-center align-items-center text-center"><img src={I64} className="w-50" alt="32" /><h5 className="starters text-primary pt-2">Salad</h5><p className="text-white back">Taste the Best that Surprise you</p></div>
                            <div className="col-12 col-sm-12 col-xl-3 col-md-6  d-flex flex-column justify-content-center align-items-center text-center"><img src={I66} className="w-50" alt="32" /><h5 className="starters text-primary pt-2">Sea Food</h5><p className="text-white back">Excellence taste in Every Bite</p></div>

                        </div>
                    </div>
                </div>
                <div className="position-absolute w-75 d-none d-xl-block col-xl-6" style={{top:"70%", left:"0%"}} >
                    <img src={I68} width="45%" alt="61" />
                </div>
                <div className="position-absolute d-flex justify-content-end col-xl-6 d-xl-block d-none" style={{top:"44%", left:"80%" , zIndex:"2"}}>
                    <img src={I67} width="50%" alt="62" />
                </div>
            </section>
        </>
    )
}

export default FoodItem

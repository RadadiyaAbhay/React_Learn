import React from 'react'

function Form() {
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-12 col-sm-12 col-lg-4 col px-5">
                            <h2 className="fw-bolder pt-3 pb-4">Get in touch</h2>
                            <p style={{lineHeight:"2em"}}>If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away. There is no reasonable question that our team can not answer.</p>
                            <p style={{lineHeight:"2em"}}>Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. </p>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-8 ps-5">
                            <form >
                                <div className="mb-2">
                                    <label for="exampleInputPassword1" className="form-label pt-3 fw-semibold">Your name</label>
                                    <input type="text" className="form-control border-white bg-dark text-white" style={{height:"60px"}} />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleInputEmail1" className="form-label pt-3 fw-semibold">Your email</label>
                                    <input type="email" className="form-control border-white bg-dark text-white" aria-describedby="emailHelp" style={{height:"60px"}} />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleInputEmail1" className="form-label pt-3 fw-semibold">Your message (optional)</label>
                                    <textarea className="form-control border-white bg-dark text-white" style={{height:"80px"}}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary bg-primary border py-3 px-4 fw-bolder mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form

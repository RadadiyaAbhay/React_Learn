function Heading({msg}) {

    return(
        <>
            <section className="welpadd">
                <div className="container">
                    <div className="row text-center justify-content-center ">
                        <h2 className="text-white  pb-3">
                            {msg[0]}
                        </h2>
                        <p className="col-lg-6 col-10 text-secondary ">{msg[1]}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Heading;
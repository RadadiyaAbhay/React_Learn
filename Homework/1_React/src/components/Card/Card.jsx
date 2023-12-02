import { useState } from "react";

function Card() {

    const [input , setInput] = useState({
        name: "",
        cardNumber: ""
    });

    function handleChange(e) {
        const name = e.target.name;
        setInput({...input , [name] : e.target.value})   
    }

    return (
        <>
            <section className="sec1">
                <div className="card ">
                <div className="card-face card-front">
                    <p style={{display: "flex" , justifyContent : "end" , fontSize: "25px"}}>
                        VENDEE BANK
                    </p>
                    <p>
                        
                        {
                        
                            input.cardNumber
                        
                        }
                    </p>
                    <p>
                        {input.name}
                    </p>
                </div>
                <div className="card-face card-back">
                    <p>
                        VENDEE BANK
                    </p>
                    <p>
                        1234 4567 7895
                    </p>
                    <p>
                        RADADIYA ABHAY
                    </p>
                </div>
                
                </div>
            </section>
            <section className="sec2">
            <div>
                    <form>
                        <label >Name : </label>
                        <input type="text" name="name" value={input.name} onChange={handleChange} />
                        <input type="text" name="cardNumber" value={input.cardNumber} onChange={handleChange} />
                    </form>
                </div>
            </section>



        </>
    )
}

export default Card;
import { useState } from "react";

function Comment() {
    const [comm, setComm] = useState({
        comment: ''
    });

    const [pcomm, setpComm] = useState([]);
    function handleChange(e) {
        setComm({ ...comm, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setpComm([...pcomm, comm]);
        setComm({
            comment: ''
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="comm">
                    <input type="text" name="comment" value={comm.comment} onChange={handleChange} placeholder="Comment here..." />
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                    </button>
                </div>
            </form>
            <div>
                <h3 className="coo">
                    Comments
                </h3>
                {
                    pcomm.map((d, index) => {
                        return (
                            <>
                                <div className="output thi" key={index}>
                                    <div className="im im1">
                                        
                                    </div>
                                    <div className="ki">
                                        <h5>React Developer</h5>
                                        <h6>{d.comment}</h6>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comment;
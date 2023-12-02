import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import I7 from "../../assets/7.jpg";
import I8 from "../../assets/8.jpg";
import I9 from "../../assets/9.jpg";
import I10 from "../../assets/10.jpg";
import I11 from "../../assets/11.jpg";
import I12 from "../../assets/12.jpg";
import I13 from "../../assets/13.jpg";
import I14 from "../../assets/14.jpg";
import I15 from "../../assets/15.jpg";
import I16 from "../../assets/16.jpg";
import I17 from "../../assets/17.jpg";
import I19 from "../../assets/19.jpg";
import I6 from "../../assets/6.jpg";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light"  onClick={handleShow} end>
      <i className="bi bi-gear"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
        <button type="button" className="btn btn-primary col-12 py-3 fw-bolder bg-success border-0">Purchase Theme $64 (1-Time)</button>
                    <h6 className="fw-bolder fw-5 pt-5 text-center pb-2">Ready to use Demos</h6>
                    <p className="text-center">Here are example of predefined demo sites that can be imported within one click.</p>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I16} alt="16" className="img-fluid rounded" /></div><div className="col-5"><img src={I17} alt="17" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I19} alt="19" className="img-fluid rounded" /></div><div className="col-5"><img src={I15} alt="15" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I14} alt="14" className="img-fluid rounded" /></div><div className="col-5"><img src={I13} alt="13" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I12} alt="12" className="img-fluid rounded" /></div><div className="col-5"><img src={I11} alt="11" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I10} alt="10" className="img-fluid rounded" /></div><div className="col-5"><img src={I9} alt="9" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I8} alt="8" className="img-fluid rounded" /></div><div className="col-5"><img src={I7} alt="7" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I6} alt="6" className="img-fluid rounded" /></div><div className="col-5"></div></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardNews({ ls }) {
  return (
    <>
      {
        ls.map((e) => {
          return (
            <>
              <Card className='col-lg-4 col-12 col-md-6 py-0 ps-2 pe-3 border-0 bodyColor '>
                <div className="col-12 border border-dark  mx-auto mb-4">

                  <Card.Img variant="top" src={e.src} />
                  <Card.Body className=' p-4'>
                    <Card.Title className='text-white'>{e.title}</Card.Title>
                    <Card.Text className='text-secondary'>
                    {e.des}
                    </Card.Text>
                    <a href="#" className='text-white fs-6 fw-semibold'>Read More <i className="bi bi-arrow-right"></i></a>
                  </Card.Body>
                </div>
              </Card>
            </>
          )
        })
      }
    </>

  );
}

export default CardNews;
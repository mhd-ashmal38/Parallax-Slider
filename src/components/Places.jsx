import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import img1 from '../assets/denali.jpg'
import img2 from '../assets/everest.jpg'
import img3 from '../assets/fuji.jpg'
import img4 from '../assets/matterhorn.jpg'
import img5 from '../assets/mousa.jpg'
import img6 from '../assets/rainier.jpg'


    function Places() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
    
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
    
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
    
                    }
                },
                {
                    breakpoint: 995,
                    settings: {
                        slidesToShow: 2,
    
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
    
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        

  return (
    <div className='pb-5'>
        <div className='text-center places pt-5 pb-4'>
                    <h1 className='fw-bolder'>Popular Mountains</h1>
                </div>
        <div className='container p-1 ' style={{alignItems:'center'}}>
                        <Slider {...settings}>

                            {/* card-1 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img1} />
                                    <Card.Body>
                                        <Card.Title>Mount Denali</Card.Title>
                                        <Card.Text>
                                        Alaska
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>

                            {/* card-2 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <Card.Title>Mount Everest</Card.Title>
                                        <Card.Text>
                                        Nepal
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>

                            {/* card-3 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Mount Fuji</Card.Title>
                                        <Card.Text>
                                        Japan
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>

                            {/* card-4 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img4} />
                                    <Card.Body>
                                        <Card.Title>Matterhorn</Card.Title>
                                        <Card.Text>
                                        Switzerland
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>

                            {/* card-5 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img5} />
                                    <Card.Body>
                                        <Card.Title>Jabal Mousa</Card.Title>
                                        <Card.Text>
                                        Egypt
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>

                            {/* card-6 */}
                            <div className='slider'>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src={img6} />
                                    <Card.Body>
                                        <Card.Title>Mount Rainier</Card.Title>
                                        <Card.Text>
                                        Washington
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    
                            </div>
                        </Slider>
                    </div>
                </div>
  )
}

export default Places
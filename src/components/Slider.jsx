import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import images from '../images'
import '../App.css'
import { Col, Row } from 'react-bootstrap';

function Slider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className='container-fluid'>

            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>

                    <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                            {images.map(image => {
                                return (
                                    <motion.div className='item'>
                                        <img src={image} alt="" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                </Col>
                <Col lg={2}></Col>

            </Row>

        </div>
    )
}

export default Slider
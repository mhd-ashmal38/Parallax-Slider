import React from 'react'
import img1 from '../assets/img1.jpg'
import { Col, Row } from 'react-bootstrap'

function Gallery() {
  return (
    <div>
        <Row>
            <h2 className='text-center'>Gallery</h2>
            <Col lg={6}>
                <img src={img1} alt="" />
            </Col>
            <Col lg={6}>
                <Row>
                    <Col lg={6}><img src={img1} alt="" /></Col>
                    <Col lg={6}><img src={img1} alt="" /></Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Gallery
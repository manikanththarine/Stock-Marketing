import React from 'react'
import imag from "../../accects/ad1.png"
import "./marketing.css"
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Rightsidbar = () => {
    return (
        <div>
            <div className='sidenav'>
                <div className='divrow'>
                    <Row className='row'>
                    <h6>Recommended For You</h6>

                        <hr></hr>
                        <br />
                        <Col>
                            PAYTM News
                            <br />
                            <span style={{ fontSize: "10px" }}>4 Feb 2024</span>
                        </Col>
                        <Col >
                            <img src={imag} >
                            </img>
                        </Col>
                        <br />

                        <hr></hr>
                        <Col>
                            Tata Motors share price.
                            <br />
                            <span style={{ fontSize: "10px" }}>4 Feb 2024</span>
                        </Col>
                        <Col >
                            <img src={imag} >
                            </img>
                        </Col>
                        <br />

                        <hr></hr>
                        <Col>
                            Tata Motors share price.
                            <br />
                            <span style={{ fontSize: "10px" }}>4 Feb 2024</span>
                        </Col>
                        <Col >
                            <img src={imag} >
                            </img>
                        </Col>
                        <br />

                        <hr></hr>
                        <Col>
                            Tata Motors share price.
                            <br />
                            <span style={{ fontSize: "10px" }}>4 Feb 2024</span>
                        </Col>
                        <Col >
                            <img src={imag} >
                            </img>
                        </Col>
                        <br />

                        <hr></hr>
                        <Col>
                            Tata Motors share price.
                            <br />
                            <span style={{ fontSize: "10px" }}>4 Feb 2024</span>
                        </Col>
                        <Col >
                            <img src={imag} >
                            </img>
                        </Col>
                        <br />

                        <hr></hr>

                    </Row>


                </div>
            </div></div>
    )
}

export default Rightsidbar
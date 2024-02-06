import React, { useEffect, useState } from 'react'
import "./marketing.css"
import moment from 'moment'
import { Col, Container, Nav, Row } from 'react-bootstrap';
const Leftsidebar = () => {
    const [date, setTime] = useState('')
    const [tops, setTops] = useState(false)
    const [topgain, setTopgain] = useState([
        {
            company: 'Tata Motors share price',
            price: "925.25",
            "gain": "5.47"

        },
        {
            company: 'Coal India',
            price: "440.25",
            "gain": "4.87"

        },
        {
            company: 'Sun Pharma',
            price: "1463.80",
            "gain": "3.33"

        },
        {
            company: 'Cipla',
            price: "1433.90",
            "gain": "2.96"

        },
        {
            "company": 'BPCL',
            "price": "574.75",
            "gain": "2.95"

        },
    ])
    const [toplosers, setToplosers] = useState([
        {
            company: 'UPL',
            price: "474.00",
            "loss": "-11.18"

        },
        {
            company: 'Bajaj Finance',
            price: "6608.20",
            "loss": "-3.51"

        },
        {
            company: 'Bharti Airtel',
            price: "1113.55",
            "loss": "-3.24"

        },
        {
            company: 'HDFC Life',
            price: "563.35",
            "loss": "-2.37"

        },
        {
            "company": 'Grasim',
            "price": "2089.75",
            "loss": "-2.32"

        },
    ])
    useEffect(() => {
        setTime(new Date)
    })
    const usetops = (e) => {
        setTops(e)
    }
    return (
        <div style={{ color: "black", marginLeft: "2%" }}>

            <div className='hea'>
                Gainers & Losers
                <br />
                <p>{moment(date, 'DD-MM-YYYY HH:mm:ss', true).format("DD-MM-YYYY HH:mm:ss A")}</p>
            </div>
            <div className='sets'> <span onClick={() => usetops("Top")} style={{color:"green"}}> TOP GAINERS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}} onClick={() => usetops("Los")}>TOP LOSERS</span> </div>
            {tops == "Top" ?
                <div className='divrow' style={{color:"green"}}>

                    <Row className='row'>
                        {topgain && topgain.map((data, i) => {
                            return <>
                                <hr></hr>

                                <Col>
                                    {data.company}
                                </Col>
                                <Col >
                                    {data.price}
                                
                                </Col>
                                <Col   sm="3">
                                    {data.gain}%
                                
                                </Col>

                            </>
                        })  }                  
                                <hr></hr>

                    </Row>


                </div> : <div className='divrow' style={{color:"red"}}>
                    <Row className='row'>

                        {toplosers && toplosers.map((data, i) => {
                            return <>
                                <hr></hr>

                                <Col>
                                    {data.company}
                                </Col>
                                <Col >
                                    {data.price}
                                
                                </Col>
                                <Col   sm="3">
                                    {data.loss}%
                                
                                </Col>

                            </>
                        })  } 
                        <hr></hr>
                    </Row>

                </div>}
            <br />


            <div className='heaa'>
                Active Stocks
                <br />
                <p>{moment(date, 'DD-MM-YYYY HH:mm:ss', true).format("DD-MM-YYYY HH:mm:ss A")}</p>
            </div>
            <div className='divrows'>
                <Row className='rows'>
                    <hr></hr>
                    <Col>
                        Tata Motors share price
                    </Col>
                    <Col >
                        939.50
                        6.91%
                    </Col>
                    <hr></hr>

                </Row>


            </div>
        </div>
    )
}

export default Leftsidebar
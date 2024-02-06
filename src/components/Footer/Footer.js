import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <span style={{color:"white"}}>Facebook</span>
                <FaInstagram className='icon' />
                <span style={{color:"white"}}>Instagram</span>
                <FaTwitter className='icon' />
                <span style={{color:"white"}}>Twitter</span>

            </div>
            <div >
                <div style={{ textAlign: "center",color:'white' }}>
                    <h3>About</h3>
                    <p>Company</p>

                </div>
                <div style={{ textAlign: "center" ,color:'white' }}>
                    <h3>Terms and Conditions</h3>
                    <p style={{ fontSize: "9px" }}>Copyright © 2023 Char Kaman Private Limited. All rights reserved.<br />
                        Unless otherwise indicated, all materials on these pages are copyrighted by Char Kaman Private Limited. All rights reserved. No part of these pages, either text or image may be used for any purpose.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
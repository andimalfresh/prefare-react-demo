import React from 'react'


const logo = require('./img/prefare_logo.svg')

const Navigation = () => {

    return (
        <div className="navigationContainer">
            <div className="logoContainer">
                <img src= {logo} alt='Prefare Logo' />                
            </div>
            <div className="navigationList">
                <ul>
                    <li>MEAL PLANS</li>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>LOGIN</li>
                    <li>SIGN UP</li>
                </ul>
            </div>
        </div>
    )
}


export default Navigation
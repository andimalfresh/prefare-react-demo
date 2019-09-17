import React from 'react'
import { Link } from 'react-router-dom'


const logo = require('./img/prefare_logo.svg')

const Navigation = () => {

    return (
        <div className="navigationContainer">
            <div className="logoContainer">
                <Link to='/'><img src= {logo} alt='Prefare Logo' /></Link>                
            </div>
            <div className="navigationList">
                <ul>
                    <li><Link to='/mealplans'>MEAL PLANS</Link></li>
                    <li><Link to='/aboutus'>ABOUT US</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to='/signup'>SIGN UP</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Navigation
import React from 'react'
import {Link} from 'gatsby'

const Header = () =>{
    return (
        <header>
        <h1>Muhammad Faisal</h1>
        <nav>
        <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to ="/blog">Blog Post</Link></li>
        <li><Link to ="/contact">Contact us</Link></li>
        <li><Link to ="/about">About</Link></li>
        </ul>
        </nav>
         </header>
    )
}
export default Header
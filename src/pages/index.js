import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () =>{
    return(
        
        <h1>HELLO!</h1>
        <h2>I am Software Developer living in beautiful pakistan!</h2>
        
        <p>Need a Developer  <Link to="/contact">Contact me.</Link></p>

    )
}
export default IndexPage
import React, { Component } from 'react';
import './appdesign/section.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a class="navbar-brand" href="#">Damoski2 cookings</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                 <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                   <ul className="navbar-nav m-auto">
                       <li class="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/" style={{textDecoration:'none'}}>Home<FontAwesomeIcon icon="home" /></Link>   
                       </li>
                       <li class="nav-item active">
                            <a className="nav-link text-white text-uppercase ml-5">favourites<FontAwesomeIcon icon="star" /></a>
                       </li>
                       <li class="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/about" style={{textDecoration:'none'}}>About{' '}<FontAwesomeIcon icon="info" /></Link>
                       </li>
                       <li class="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/contact us" style={{textDecoration:'none'}}>Contact us<FontAwesomeIcon icon="addressbook" /></Link>
                       </li>
                   </ul>

               </div>
           </nav>
       )
   }
}

const headerStyle={
    position:'absolute'
  }
export default Navbar















{/*<Link to="/" style={{textDecoration:'none'}}>Home</Link>                      
               <a>favourites</a>
               <Link to="/about" style={{textDecoration:'none'}}>About</Link>
<Link to="/contact us" style={{textDecoration:'none'}}>Contact us</Link>*/}
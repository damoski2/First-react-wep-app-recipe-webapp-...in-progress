import React, { Component } from 'react';
import './appdesign/section.css';
import Navbar from './Navbar';
import Footer from './appdesign/Footer';


 class About extends Component {
    render() {
        return (
            <React.Fragment>
                 <Navbar style={nav}/>
                 <div className="aboutbody">
                    <h1 style={head}>About</h1>
                    <p stye={body}>
                        This website is meant to guid an entice you in the latest and one of the best ways to cook and make rich and delicious popular foods<br/>Version :1.0.0 
                    </p>
                 </div>
                 <Footer />
            </React.Fragment> 
        )
    }
}
const head ={
    
}
const body={

}
const nav={
   marginBottom:'4em'
}
const headerStyle={
    position:'absolute',
  }
export default About
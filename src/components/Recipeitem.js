import React from 'react'
import PropTypes from 'prop-types';
import './appdesign/section.css';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Recipeitem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.recipe)
       return (
           <Link to={this.props.recipe.link}>
                <div className="thisweekfood" onLoad={this.props.componentDidMount}>
                    <div data-aos={'flip-up'} className="col-md-6 col-sm-4">
                        <img src={this.props.recipe.image}></img>
                        <p>{this.props.recipe.description}</p>
                    </div>
                </div>
           </Link>
       )
   }
}

Recipeitem.propTypes ={
    recipe:PropTypes.object.isRequired
}

const foodItem={
    height:'400px',
    width:'350px',
    boxShadow:'2px 2px 9px 3px',
    cursor:'pointer'
}

const setpara={
    width:'500px',
    color:'#f00',
    fontSize:'30px',
    position:'relative',
    top:'-7em',
    left:'17em'
}

export default Recipeitem
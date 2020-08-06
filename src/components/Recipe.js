import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Recipeitem from './Recipeitem';



class Recipe extends Component {
    render() {
        return this.props.recipes.map((recipe)=>(
        <Recipeitem key={recipe.id} recipe={recipe} componentDidMount={this.props.componentDidMount} />
        ));
        
    }
}


Recipe.propTypes ={
    recipes:PropTypes.array.isRequired
}

export default Recipe

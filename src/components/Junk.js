import React, {Component,componentDidMount,useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from './Navbar';
import './appdesign/section.css';

import './appdesign/FontawesomeIcons/FontawesomeIcons';
import Footer from  './appdesign/Footer';

import Chickenwings from './appdesign/junk/chickenwings.jpg';
import Hotdog from './appdesign/junk/hotdog.jpg';
import Pizza from './appdesign/junk/pizza.jpg';
import Tacos from './appdesign/junk/Tacos.jpg';
import Burger from './appdesign/junk/burger.jpg';
 
import Aos from 'aos';
import 'aos/dist/aos.css';

class Junk extends Component{
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }

    state={
        junkfood : [
            {
                id:1,
                name:'Chickenwings',
                description:'',
                image: Chickenwings,
                style:'chickenwings',
                steps:{
                    one:'In a small bowl mix together the flour, paprika, cayenne pepper and salt. Place chicken wings in a large nonporous glass dish or bowl and sprinkle flour mixture over them until they are evenly coated. Cover dish or bowl and refrigerate for 60 to 90 minutes.',
                    two:'Heat oil in a deep fryer to 375 degrees F (190 degrees C). The oil should be just enough to cover wings entirely, an inch or so deep. Combine the butter, hot sauce, pepper and garlic powder in a small saucepan over low heat. Stir together and heat until butter is melted and mixture is well blended. Remove from heat and reserve for serving.',
                    three:'Fry coated wings in hot oil for 10 to 15 minutes, or until parts of wings begin to turn brown.',
                    four:'Remove from heat, place wings in serving bowl, add hot sauce mixture and stir together. Serve.',
                    five:'Serve hot and crispy'
                },
                ingredients:[{data1:'½ cup Wheat flour, white, all-purpose, enriched, bleached'}
                ,{data1:'¼ teaspoon Spices, paprika'}
                ,{data1:'1/2 teaspoon salt'}
                ,{data1:'10 Chicken, broilers or fryers, wing, meat and skin, raw'}
                ,{data1:'¼ teaspoon Salt, table'}
                ,{data1:'10 Chicken, broilers or fryers, wing, meat and skin, raw'}
                ,{data1:'1 quart oil for frying'}
                ,{data1:'¼ cup Butter, with salt'}
                ,{data1:'¼ cup Sauce, ready-to-serve, pepper or hot'}
                ,{data1:'1 dash Spices, pepper, black'}
                ,{data1:'1 dash Spices, garlic powder'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'1hr',
                difficulty:'Low diff'
            },
            {
                id:2,
                name:'Hotdog',
                description:'',
                image: Hotdog,
                style:'hotdog',
                steps:{
                    one:'In a food processor, puree the onion, garlic, coriander, marjoram, mace, mustard seed, and paprika. Add the pepper, egg white, sugar, salt, and milk and combine well.',
                    two:'In a large bowl, combine the pureed seasonings with the meat and mix with your hands. Wet your hands with cold water to prevent the mixture from sticking to them.',
                    three:'Rinse the casing under cool running water to remove the salt. Place it in a bowl of cool water and soak it for 30 minutes.',
                    four:'Put the casing in a bowl of water and add a splash of white vinegar. (A tablespoon of vinegar per cup of water is sufficient.) The vinegar softens the casing and makes it more transparent, which in turn makes the hot dog look nicer. Leave the casing in the water and vinegar solution until you are ready to use it. Rinse it well and drain before stuffing.',
                    five:'Place the ​franks in a bowl of ice water and chill. Remove, pat dry, and refrigerate. You can refrigerate them for 1 week or freeze them for future use.'
                },
                ingredients:[{data1:'1/4 cup very finely minced onion'}
                ,{data1:'1 small clove garlic (finely chopped)'}
                ,{data1:'1 teaspoon finely ground coriander'}
                ,{data1:'1/2​ teaspoon ground mustard seed'}
                ,{data1:'1 pound lean pork (cubed)'}
                ,{data1:'4 feet sheep casings, or small hog casings (about 1 1/2-inch diameter)'}
                ,{data1:'1 egg white'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'20mins',
                difficulty:'Low diff'
            },
            {
                id:3,
                name:'Pizza',
                description:'',
                image: Pizza,
                style:'pizza',
                steps:{
                    one:'Add the flour, salt, sugar, and olive oil, and using the mixing paddle attachment, mix on low speed for a minute. Then replace the mixing paddle with the dough hook attachment.',
                    two:'Spread a thin layer of olive oil over the inside of a large bowl. Place the pizza dough in the bowl and turn it around so that it gets coated with the oil.',
                    three:'Place a pizza stone on a rack in the lower third of your oven. Preheat the oven to 475°F (245°C) for at least 30 minutes, preferably an hour. If you don\'t have a pizza stone, you can use a pizza pan or a thick baking sheet; you need something that will not warp at high temperatures.',
                    four:'Use your fingertips to press down and make dents along the surface of the dough to prevent bubbling. Brush the top of the dough with olive oil (to prevent it from getting soggy from the toppings). Let rest another 10-15 minutes',
                    five:' Bake pizza in the 475°F (245°C) oven, one at a time, until the crust is browned and the cheese is golden, about 10-15 minutes. If you want, toward the end of the cooking time you can sprinkle on a little more cheese..'
                },
                ingredients:[{data1:'1 1/2 cups (355 ml) warm water (105°F-115°F)'}
                ,{data1:'1 package (2 1/4 teaspoons) of active dry yeast'}
                ,{data1:'3 3/4 cups (490 g) bread flour'}
                ,{data1:'2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)'}
                ,{data1:'2 teaspoons salt'}
                ,{data1:'Fresh soft mozzarella cheese, separated into small clumps'}
                ,{data1:'Fresh soft mozzarella cheese, separated into small clumps'}
                ,{data1:'Pepperoni, thinly sliced'}
                ,{data1:'Italian sausage, cooked ahead and crumbled'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'30mins',
                difficulty:'Mid diff'
            },
            {
                id:4,
                name:'Tacos',
                description:'',
                image: Tacos,
                style:'tacos',
                steps:{
                    one:'Cook beef in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain.',
                    two:'Stir salsa into beef. Heat to boiling, stirring constantly; reduce heat to medium-low. Cook 5 minutes, stirring occasionally',
                    three:' Pour beef mixture into large serving bowl.',
                    four:'Heat taco shells as directed on package',
                    five:'Serve taco shells with beef mixture, lettuce, tomato and cheese.'
                },
                ingredients:[{data1:'1 pound lean (at least 80%) ground beef'}
                ,{data1:'1cup Old El Paso™ Thick \'n Chunky salsa'}
                ,{data1:'10 Old El Paso™ taco shells'}
                ,{data1:'1/2 head lettuce, shredded'}
                ,{data1:'1 medium tomato, chopped (3/4 cup)'}
                ,{data1:'1 cup shredded Cheddar cheese (4 ounces)'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'4hrs',
                difficulty:'Mid-high diff'
            },
            {
                id:5,
                name:'Burger',
                description:'',
                image: Burger,
                style:'burger',
                steps:{
                    one:'In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.',
                    two:'Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grill.',
                    three:'Lay buns, cut side down, on grill and cook until lightly toasted, 30 seconds to 1 minute.',
                    four:'Spread mayonnaise and ketchup on bun bottoms. Add lettuce, tomato, burger, onion, and salt and pepper to taste.',
                    five:'Set bun tops in place'
                },
                ingredients:[{data1:'1 pound ground lean (7% fat) beef'}
                ,{data1:'1 large egg'}
                ,{data1:'1/2 cup minced onion'}
                ,{data1:'1/4 cup fine dried bread crumbs'}
                ,{data1:'1 tablespoon Worcestershire'}
                ,{data1:'1 or 2 cloves garlic, peeled and minced'}
                ,{data1:'About 1/2 teaspoon salt'}
                ,{data1:'About 1/4 teaspoon pepper'}
                ,{data1:'4 hamburger buns (4 in. wide), split'}
                ,{data1:'About 1/4 cup mayonnaise'}
                ,{data1:'About 1/4 cup ketchup'}
                ,{data1:'4 iceberg lettuce leaves, rinsed and crisped'}
                ,{data1:'1 firm-ripe tomato, cored and thinly sliced'}
                ,{data1:'4 thin slices red onion'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'5hrs',
                difficulty:'Mid diff'
            }
        ]
    }

    likeThumb=(id)=>{
        this.setState({junkfoods:this.state.junkfood.map((food)=>{
            if(food.id ==id){
                if(food.like==true){
                    food.like=false
                    food.color1 = 'white'
                    food.likeinfo=''
                }else{
                    food.like=true
                    food.color1='blue'
                    food.color2="white"
                    food.likeinfo='Liked'
                }
            }
            return food;
        })})
    }

    hateThumb=(id)=>{
        this.setState({junkfoods: this.state.junkfood.map((food)=>{
            if(food.id==id){
                if(food.dislike==true){
                    food.dislike=false
                    food.color2 ='white'
                    food.likeinfo=''
                }else{
                    food.dislike=true
                    food.color2="blue"
                    food.color1='white'
                    food.likeinfo='Disliked'
                }
            }
        })})
    }

    
    render(){
        return(
            <React.Fragment>
                 <Navbar />
                <div className="gallery">
                    <div className="inner">
                    <h1>Junk recipes</h1>
                    <div className="border"></div>
                        <div className="gallerysect">
                            {this.state.junkfood.map((food)=>{
                                return(
                                <a data-aos={'fade-in'} className="image"><img src={food.image} style={{width:'27vw',height:'37vh'}}></img><p>{food.name}</p></a>          
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.junkfood.map((food)=>{
                            return (
                                <div className="idividualfood">
                                        <img src={food.image}></img>
                                        <h1 style={headerStyle}>{food.name}</h1>
                                        <div className="extradesc">
                                            <div>
                                                <FontAwesomeIcon icon="clock" />{food.time}
                                                <FontAwesomeIcon icon="heart" style={{marginLeft:'20px'}} /><p>Healthy -{'  '}{food.difficulty}</p>
                                                <div id="bottomborder"> </div>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon="utensils" id="utensils" /> 
                                        <div className="ingreAndrecipe">
                                            <h3>Ingredients</h3>
                                                <ul>
                                                    {food.ingredients.map(ingre=>{
                                                        return(
                                                                <li>{ingre.data1}<hr></hr></li>
                                                                
                                                        )
                                                    })}
                                                </ul>      
                                            <div className="steps">
                                                <h1 className="procedures">Procedures</h1> 
                                                <div className="thumbsupdown">
                                                    <FontAwesomeIcon icon="thumbs-up" onClick={this.likeThumb.bind(this,food.id)} style={{color:food.color1}} />
                                                    <FontAwesomeIcon icon="thumbs-down" onClick={this.hateThumb.bind(this,food.id)} style={{marginLeft:'27px'}} style={{color:food.color2}} />
                                                    <span>{food.likeinfo}</span>
                                                </div>
                                                <div>
                                                    <h1>Step 1</h1>
                                                    <p>{food.steps.one}</p>
                                                </div>
                                                <div>
                                                    <h1>Step 2</h1>
                                                    <p>{food.steps.two}</p>
                                                </div>
                                                <div>
                                                    <h1>Step 3</h1>
                                                    <p>{food.steps.three}</p>
                                                </div>
                                                <div>
                                                    <h1>Step 4</h1>
                                                    <p>{food.steps.four}</p>
                                                </div>
                                                <div>
                                                    <h1>Step 5</h1>
                                                    <p>{food.steps.five}</p>
                                                </div>
                                            </div>
                                            <aside className=" aside ">
                                                fff
                                            </aside>          
                                        </div>   
                                </div>
                            )
                        })}
                    </div>
                    <div style={footer}>
                        <Footer/>
                    </div>
            </React.Fragment>
        )
    }
}

const imgstyle={
    height:'250px',
    width:'300px'
}


const headerStyle={
    position:'relative',
    top:'-10em',
    color:'#fa0',
    textAlign:'center'
}

const footer={
    position:'relative',
    bottom:'-20em',
    marginBottom:'0'
}

export default Junk
import React, { Component,componentDidMount,useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from './Navbar';
import './appdesign/section.css';
import './appdesign/FontawesomeIcons/FontawesomeIcons';
import Footer from  './appdesign/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Pasta from './appdesign/healthy/pasta.jpg';
import ChickenC from './appdesign/healthy/chicken_caseerole.jpg';
import MexicanBean from './appdesign/healthy/mexican_beansoup.jpg';
import PoachedEggs from './appdesign/healthy/Poached_eggs.jpg';
 
 class Healthy extends Component {

    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }

    state={
        healthyfood : [
            {
                id:1,
                name:'Pasta',
                description:'Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It\'s budget-friendly too, making it a great meal for the family ',
                image: Pasta,
                style:'pasta',
                steps:{
                    one:'Heat the oil in a non-stick pan over a medium-low heat. Add the onion along with a generous pinch of salt and fry for 10 mins, or until soft. Add the garlic and chilli, if using, and cook for a further minute.',
                    two:'Stir the tomatoes, anchovies, olives and capers into the onion, bring to a gentle simmer and cook, uncovered, for 15 mins',
                    three:'Season to taste.',
                    four:'Meanwhile, bring a large pan of salted water to the boil.',
                    five:'Cook the spaghetti following pack instructions, then drain and toss with the sauce and parsley.'
                },
                ingredients:[{data1:'3 tbsp olive oil'}
                ,{data1:'1 onion finely chopped'}
                ,{data1:'2 large garlic cloves, crushed'}
                ,{data1:'½ tsp chilli flakes (optional)'}
                ,{data1:'400g can chopped tomatoes'}
                ,{data1:'5 anchovy fillets, finely chopped'}
                ,{data1:'120g pitted black olives'}
                ,{data1:'2 tbsp capers drained'}
                ,{data1:'300g dried spaghetti'}
                ,{data1:'Half small bunched of parsely, fine chopped'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'35 mins',
                difficulty:'Low diff'
            },
            {
                id:2,
                name:'Chicken Carousel',
                description:'Treat the family to this wholesome chicken casserole that delivers comfort while being low-fat. And you can let a slow cooker do most of the work',
                image: ChickenC,
                style:'chickenc',
                steps:{
                    one:'Heat a knob of butter and ½ tbsp rapeseed or olive oil in a large frying pan, cook 1 finely chopped large onion for 8-10 mins until softened and starting to caramelise.Meanwhile, put 1 ½ tbsp flour and a little salt and pepper in a bowl and toss 650g boneless, skinless chicken thigh fillets in it. ',
                    two:'Add 3 crushed garlic cloves and the chicken to the pan and cook for 4-5 mins more until the chicken is starting to brown.',
                    three:'Transfer to your slow cooker, along with 400g halved baby new potatoes, 2 diced celery sticks, 2 diced carrots, 250g quartered mushrooms, 15g dried and soaked porcini mushrooms with the 50ml soaking liquid, 500ml chicken stock, 2 tsp Dijon mustard and 2 bay leaves.',
                    four:'Give it a good stir. Cook on Low for 7 hours or High for 4 hours.',
                    five:'Remove the bay leaves and serve with a little Dijon mustard on the side.'
                },
                ingredients:[{data1:'Knob of butter'}
                ,{data1:'½ tbsp rapeseed or olive oil'}
                ,{data1:'1 tbsp flour'}
                ,{data1:'650g boneless, skinless chicken thigh fillets'}
                ,{data1:'3 garlic cloves, crushed'}
                ,{data1:'400g baby new potatoes, halved'}
                ,{data1:'2 stickes celery diced'},
                {data1:'2 carrots diced'},
                {data1:'250g mushrooms, quartered'},
                {data1:'15g dried porcini mushroom, soaked in 50ml boiling water'},
                {data1:'500ml stock made with 2 very low salt chicken stock cubes (we used Kallo)'},
                {data1:'2 tsp Dijon mustard, plus extra to serve'},
                {data1:'2 bay leaves'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'7hrs',
                difficulty:'Low-mid diff'
            },
            {
                id:3,
                name:'Mexican Bean soup with guacamole',
                description:'This warming, spiced vegetarian soup packs in goodness and is filling too. The quick-to-assemble guacamole topping tastes as good as it looks',
                image: MexicanBean,
                style:'mexicanbean',
                steps:{
                    one:'Heat the oil in a medium pan, add the onion (reserving 1 tbsp to make the guacamole later) and pepper and fry, stirring frequently, for 10 mins.',
                    two:'Stir in the garlic and spices, then tip in the tomatoes and beans with their liquid, half a can of water and the bouillon powder. Simmer, covered, for 15 mins.',
                    three:'Meanwhile, peel and de-stone the avocado and tip into a bowl.',
                    four:'Add the remaining onion, coriander and lime juice with a little chilli (if using) and mash well.',
                    five:' Ladle the soup into two bowls, top with the guacamole and serve.'
                },
                ingredients:[{data1:'2 tsp rapeseed oil'}
                ,{data1:'1 large onion finely chopped'}
                ,{data1:'1 red pepper, cut into chunks'}
                ,{data1:'2 garlic cloves, chopped'}
                ,{data1:'2 tsp mild chilli powder'}
                ,{data1:'1 tsp ground coriander'}
                ,{data1:'1 tsp ground cumin'}
                ,{data1:'400g can chopped tomatoes'}
                ,{data1:'400g can black beans'},
                {data1:'1 tsp vegetable bouillon powder'},
                {data1:'handful chopped coriander'},
                {data1:'1 small avocado'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'30mins',
                difficulty:'Low diff'
            },
            {
                id:4,
                name:'PoachedEggs',
                description:'Keep yourself full until lunchtime with this healthy breakfast boost. Delicious avocado serves as a butter alternative and goes well with a runny poached egg',
                image: PoachedEggs,
                style:'poachedEggs',
                steps:{
                    one:'Cook beef in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain.',
                    two:'Stir salsa into beef. Heat to boiling, stirring constantly; reduce heat to medium-low. Cook 5 minutes, stirring occasionally',
                    three:' Pour beef mixture into large serving bowl.',
                    four:'Heat taco shells as directed on package',
                    five:'Serve taco shells with beef mixture, lettuce, tomato and cheese.'
                },
                ingredients:[{data1:'2 tomatoe halved'}
                ,{data1:'1 half tsp rapeseed oil'}
                ,{data1:'2 eggs'}
                ,{data1:'1 small ripe avocado'}
                ,{data1:'2 slices seeded wholemeal soda bread (see goes well with)'}
                ,{data1:'2 handful rocket'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'20 mins',
                difficulty:'Low diff'
            },
        ]
    }

    likeThumb=(id)=>{
        this.setState({healthyfoods:this.state.healthyfood.map((food)=>{
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
        this.setState({healthyfoods: this.state.healthyfood.map((food)=>{
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

     render() {
         return (
            <React.Fragment>
                 <Navbar />
                <div className="gallery">
                    <div className="inner">
                    <h1>Healthy recipes</h1>
                    <div className="border"></div>
                        <div className="gallerysect">
                            {this.state.healthyfood.map((food)=>{
                                return(
                                <a data-aos={'fade-in'} className="image"><img src={food.image} style={{width:'27vw',height:'37vh'}}></img><p>{food.name}</p></a>          
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.healthyfood.map((food)=>{
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


 export default Healthy
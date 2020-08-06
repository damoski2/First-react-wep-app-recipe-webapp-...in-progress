import React, {Component,componentDidMount,useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from './Navbar';
import './appdesign/section.css';

import './appdesign/FontawesomeIcons/FontawesomeIcons';
import Footer from  './appdesign/Footer';

import Chickensalad from './appdesign/asian/Chickensalad.jpg';
import Ramen from './appdesign/asian/Ramen.jpg';
import Momos from './appdesign/asian/Momos.jpg';
import Sushi from './appdesign/asian/Sushi.jpg';
import Udon from './appdesign/asian/Udon.jpg';

 
import Aos from 'aos';
import 'aos/dist/aos.css';

class Asian extends Component{
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }

    state={
        asianfood : [
            {
                id:1,
                name:'Sushi',
                description:'',
                image: Sushi,
                style:'sushi',
                steps:{
                    one:'Wash 180 gm of rice at least 10 times to get the water to be clear.',
                    two:'Put the rice along with equal amount of water eg 1 cup rice and 1 cup water (cold) in a deep pot with a transparent cover if possible. Turn on full heat. Put the lid on the pot and leave until the rice starts to boil.',
                    three:'Now turn of the heat and let the rice steam for 15 to 20 mins.',
                    four:'Put the rice in a deep bowl and mix with salt sugar and vinegar. Mix with a wooden spatula as if you are slicing the rice rather than mixing it in a circular motion. Keep fanning the rice if possible till cool.',
                    five:'Serve hot and steamy'
                },
                ingredients:[{data1:'180 gm of sushi rice'}
                ,{data1:'2 tsp castor sugar'}
                ,{data1:'1/2 teaspoon salt'}
                ,{data1:'45 ml vinegar'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:''
            },
            {
                id:2,
                name:'Momos',
                description:'',
                image: Momos,
                style:'momos',
                steps:{
                    one:'making outer cover of dim sum',
                    two:'making outer cover of dim sum',
                    three:'shaping the dim sum',
                    four:'steaming the dim sum',
                    five:'Serve hot and steamy'
                },
                ingredients:[{data1:'dough'},{data1:'120 gms refined flour'},{data1:'1/4 tsp baking powder'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:''
            },
            {
                id:3,
                name:'Udon',
                description:'',
                image: Udon,
                style:'udon',
                steps:{
                    one:'Heat oil in a wok.',
                    two:'Toss noodles in the wok and add crushed black pepper',
                    three:'Add green, yellow and red capsicum along with mock duck',
                    four:'Add fresh bean sprouts',
                    five:'Serve in a noodle bowl and garnish with a coriander leaf.'
                },
                ingredients:[{data1:'200 gms udon noodles'}
                ,{data1:'20 gms red onion'}
                ,{data1:'10 gms green capsicum'}
                ,{data1:'10 gms red capsicum'}
                ,{data1:'10 gms yellow capsicum'}
                ,{data1:'60 gms bean sprouts'}
                ,{data1:'5 gms spring onion'}
                ,{data1:'40 gms mock duck'}
                ,{data1:'2 gms black pepper'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:''
            },
            {
                id:4,
                name:'Chickensalad',
                description:'',
                image: Chickensalad,
                style:'chickensalad',
                steps:{
                    one:'In a mixing bowl, whisk all the ingredients for the dressing, until smooth',
                    two:'Cut the chicken in long strips',
                    three:'Toss the greens with almonds, sesame seeds, and half of the chicken',
                    four:'Top it with the rest of the chicken and asparagus',
                    five:'Cover it up with the dressing before servin'
                },
                ingredients:[{data1:'1 chicken breast, grilled'}
                ,{data1:'1 cup rucola leaves/mixed greens (Rucola leaves are commonly known as Rocket leaves)'}
                ,{data1:'1 tsp almond slivers, blanched'}
                ,{data1:'1 tsp sesame seeds, roasted'}
                ,{data1:'1/2 cup asparagus, blanched'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:''
            },
            {
                id:5,
                name:'Ramen',
                description:'',
                image: Ramen,
                style:'ramen',
                steps:{
                    one:'In a mixing bowl, whisk all the ingredients for the dressing, until smooth.',
                    two:'Cut the chicken in long strips',
                    three:'Toss the greens with almonds, sesame seeds, and half of the chicken.',
                    four:'Top it with the rest of the chicken and asparagus.',
                    five:'Cover it up with the dressing before serving'
                },
                ingredients:[{data1:'1 chicken breast, grilled'}
                ,{data1:'1 cup rucola leaves/mixed greens (Rucola leaves are commonly known as Rocket leaves)'}
                ,{data1:'1 tsp almond slivers, blanched'}
                ,{data1:'1 tsp sesame seeds, roasted'}
                ,{data1:'1/2 cup asparagus, blanched'}]
            }
        ]
    }

    likeThumb=(id)=>{
        this.setState({asianfoods:this.state.asianfood.map((food)=>{
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
        this.setState({asianfoods: this.state.asianfood.map((food)=>{
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
                    <h1>Asian recipes</h1>
                    <div className="border"></div>
                        <div className="gallerysect">
                            {this.state.asianfood.map((food)=>{
                                return(
                                <a data-aos={'fade-in'} className="image"><img src={food.image} style={{width:'27vw',height:'37vh'}}></img><p>{food.name}</p></a>          
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.asianfood.map((food)=>{
                            return (
                                <div className="idividualfood">
                                        <img src={food.image}></img>
                                        <h1 style={headerStyle}>{food.name}</h1>
                                        <div className="extradesc">
                                            <div>
                                                <FontAwesomeIcon icon="clock" />2hrs
                                                <FontAwesomeIcon icon="heart" style={{marginLeft:'20px'}} /><p>Easy</p>
                                                <div id="bottomborder"> </div>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon="utensils" style={iconStyle} /> 
                                        <div className="ingreAndrecipe">
                                            <h3>Ingredients</h3>
                                                <ul>
                                                    {food.ingredients.map(ingre=>{
                                                        return(
                                                                <li>{ingre.data1}<hr style={horizontalrule}></hr></li>
                                                                
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


const iconStyle={
    position:'relative',
    top:'0em',
    left:'36em',
    color:'#f00'
}

const headerStyle={
    position:'relative',
    top:'-10em',
    color:'#fa0',
    textAlign:'center'
}

const footer={
    position:'relative',
    bottom:'-120em',
    marginBottom:'0'
}

const horizontalrule ={
    width:'200px',
    marginLeft:'36em'
}
export default Asian
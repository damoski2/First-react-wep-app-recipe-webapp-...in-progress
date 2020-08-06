import React, {Component,componentDidMount,useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from './Navbar';
import './appdesign/section.css';
import ofada from './appdesign/african/ofada.jpg';
import efo from './appdesign/african/efo.jpg';
import pepper from './appdesign/african/pepper.jpg';
import moimoi from './appdesign/african/moimoi.jpg';
import './appdesign/FontawesomeIcons/FontawesomeIcons';
import Footer from  './appdesign/Footer';



import Aos from 'aos';
import 'aos/dist/aos.css';

 class African extends Component {

    componentDidMount(){
        Aos.init({
            duration:2000
        });
    }

    state={
        africanfood:[
            {
                id:1,
                name:'Efo and Pounded yam',
                description:'',
                image:efo,
                style:'efo',
                steps:{
                    one:'Pound the yam',
                    two:'boil and cook the vegetables',
                    three:'add all ingredient to the soup while still cooking',
                    four:'Serve while still very hot..XD',
                },
                ingredients:[{data1:'data'},{data1:'data'},{data1:'data'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'2hrs 30mins',
                difficulty:'High diff'
            },
            {
                id:2,
                name:'ofada Rice',
                description:'',
                image:ofada,
                style:'ofada',
                steps:{
                    one:'Perboil slightly unwashed rice',
                    two:'cook stew aside and add ingredient to the stew',
                    three:'cook the rice again with all neccessary ingredients',
                    four:'serve food while still very hot...heehee',
                },
                ingredients:[{data1:'data'},{data1:'data'},{data1:'data'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'1hr 30mins',
                difficulty:'Mid-high diff'
            },
            {
                id:3,
                name:'Pepper soup',
                description:'',
                image:pepper,
                style:'pepper',
                steps:{
                    one:'Cook the soup ingredients',
                    two:'add the ingredients to the already cooking soup',
                    three:'add assorted fishes and meats',
                    four:'Serve while still very hot....lmao',
                },
                ingredients:[{data1:'data'},{data1:'data'},{data1:'data'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'3hr 40mins',
                difficulty:'Mid-high diff'
            },
            {
                id:4,
                name:'Moimoi and Pap',
                description:'',
                image:moimoi,
                style:'moi',
                steps:{
                    one:'Boil,stir and make the pap',
                    two:'Wash the beans and grand it to make up the moi moi',
                    three:'Serve the moi moi, with traditional leaf',
                    four:'Also serve the pap hot',
                },
                ingredients:[{data1:'data'},{data1:'data'},{data1:'data'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'3hr 15mins',
                difficulty:'High diff'
            }
        ]
    } 

    likeThumb=(id)=>{
        this.setState({africanfoods:this.state.africanfood.map((food)=>{
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
        this.setState({africanfoods: this.state.africanfood.map((food)=>{
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
                    <h1>African recipes</h1>
                    <div className="border"></div>
                        <div className="gallerysect">
                            {this.state.africanfood.map((food)=>{
                                return(
                                <a data-aos={'fade-in'} className="image"><img src={food.image} style={{width:'27vw',height:'37vh'}}></img><p>{food.name}</p></a>          
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.africanfood.map((food)=>{
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
    bottom:'-20em',
    marginBottom:'0'
}

export default African
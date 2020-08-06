import React, {Component,componentDidMount,useState} from 'react';
import ReactDOM from 'react-dom';
import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from 'responsive-react';

import {FontAwesomeIcons} from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';
import Navbar from './components/Navbar';
import Header from './components/appdesign/Header';
import Footer from './components/appdesign/Footer';
import About from './components/About';
import Foodsection from './components/Foodsection';
import African from './components/African';
import Asian from './components/Asian';
import Junk from './components/Junk';
import Vegan from './components/Vegan';
import Healthy from './components/Healthy';


import Aos from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './components/appdesign/section.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import logo from './images/logo.jpg';
import logo2 from './images/logo2.jpg';
import logo3 from './images/logo3.jpg';


import pizza from './images/pizza.jpg';
import burger from './images/burger.jpg';
import pasta from './images/pasta.jpg';


import african from './components/appdesign/foodsection/african.jpg';
import junk from './components/appdesign/foodsection/junk.jpg';
import healthy from './components/appdesign/foodsection/healthy.jpg';
import asian from './components/appdesign/foodsection/asian.jpg';
import vegan from './components/appdesign/foodsection/vegan.jpg';
import Contactus from './components/Contactus';


const photos=[
  {
      name:'photo 1',
      url:logo,
      head:'Delicious Delight',
      info:'We believe the act of eating is a great thing and should be enjoyed,try catching up on our latest recipes for amazing food you"ll love'
  },
  {
      name:'photo2',
      url:logo2,
      head:'Up to Date recipes',
      info:'What good is a delight meal when the appropriate recipe is not available!..browser through ur favourite meal to see their respective recipes available to you'
  },
  {
      name:'photo3',
      url:logo3,
      head:'Feedback',
      info:'If you like this website you can contact us and send us your feedback on what you want to see next'
  }
]

const sections=[
  {
      id:1,
      name:'African',
      image:african,
      details:'Traditionally, the various cuisines of Africa use a combination of locally available fruits such as, cereal grains and vegetables, as well as milk and meat products,[1][2] and do not usually have food imported. In some parts of the continent, the traditional diet features an abundance of milk, curd and whey products',
      link:"/african"
    },
  {
      id:2,
      name:'Junk',
      image:junk,
      details:'It taste chewy and crisp, with marinara sauce and cheese. However you mostly taste the marinara and the crispy chewiness of the dough then the cheese. Its all about the textures combining with the flavour of the sauce to give you a umami effect. It really depends on what pizza you get though.',
      link:"/junk"
    },
 {
     id:3,
     name:'Asian',
     image:asian,
     details:' If you eat sushi at one of those Chinese all you can eat chains, there are good chances that you’re eating junk. And raw fish can be dangerous for your health too. If you do manage to find a great sushi restaurant then it’s delicious, light and healthy. Best enjoyed in Japan!',
     link:"/asian" 
    },
 {
     id:4,
     name:'Vegan',
     image:vegan,
     details:'The subtle flavor of a good red leaf lettuce is no more bland than the subtle flavor of, say, sliced turkey breast. I’ve never heard a person argue that they would never eat turkey because of its subtle flavor. I just add mustard to turkey: and I add dressing to salad.',
     link:"/vegan" 
    },
 {
     id:5,
     name:'Healthy',
     image:healthy,
     details:'The idea of healthy eating never sounds appealing because it conjures up images of plain steamed vegetables or a bowl of bland tasting salad. ... Healthy food can also taste good. You can satiate your palate with healthy food, if you use the right ingredients and cook it smartly.',
     link:"/healthy" 
    }
]


  
class App extends React.Component {
  
  componentDidMount() {
    // or simply just AOS.init();
    Aos.init({
      // initialise with other settings
      duration : 2900
    });
  }
  state = {
    recipes: [
      {
        id:1,
        details:"aaaaaaaaaaaaaaaasshodshf;iodsfuos;fsdio;fsdio.lfjsd;foiwjoe;fuoiwejf;of;usdo9ifjsd;ofusdoifh.nd;ofiywehfio;wejf9yhweiofjeo;fweio;fjwerofuweoifjwepofj;wej9fiweprofjr;iofnwefjwe;9fjweioj",
        image:pizza,
        name:'pizza',
        description:'Click to read and check the recipe of pizza',
        aos:'fade-right',
        link:'/junk'
      },
      {
        id:2,
        details:"aaaaaaaaaaaaaaaasshodshf;iodsfuos;fsdio;fsdio.lfjsd;foiwjoe;fuoiwejf;of;usdo9ifjsd;ofusdoifh.nd;ofiywehfio;wejf9yhweiofjeo;fweio;fjwerofuweoifjwepofj;wej9fiweprofjr;iofnwefjwe;9fjweioj",
        image:burger,
        name:'burger',
        description:'Click to read and check the recipe of burger',
        aos:'fade-left',
        link:'/junk'
      },
      {
        id:3,
        details:"aaaaaaaaaaaaaaaasshodshf;iodsfuos;fsdio;fsdio.lfjsd;foiwjoe;fuoiwejf;of;usdo9ifjsd;ofusdoifh.nd;ofiywehfio;wejf9yhweiofjeo;fweio;fjwerofuweoifjwepofj;wej9fiweprofjr;iofnwefjwe;9fjweioj",
        image:pasta,
        name:'pasta',
        description:'Click to read and check the recipe of pasta',
        aos:'fade-right',
        link:'/healthy'
      }
    ]
  }

 constructor(props) {
  super(props);
 }

 render() {
  const settings ={
    dots:true,
    fade:true,
    infinite:true,
    speed: 500,
    slidestoShow:1,
    arrows:false,
    slidesToScroll:1,
    className:'slides',
    autoplay:true
}

  const settings2 ={
    dots:true,
    fade:true,
    infinite:true,
    speed: 500,
    slidestoShow:1,
    arrows:false,
    slidesToScroll:1,
  }
   return (
     <Router>
        <div className="App">
            <Route exact path="/" render={props=>(
            <React.Fragment>
                  <Slider {...settings} >
                {photos.map(photo=>{
                  return(
                    <div>
                      <Navbar />
                      <img style={imgStyle} src={photo.url}></img>
                      <div  className="carousel">
                        <h1 style={carouselhead}>{photo.head}</h1>
                        <p style={carouselText}>{photo.info}</p>
                        <input
                        type="submit"
                        value="See foods"
                        style={buttonStyle}
                        ></input>
                      </div>
                      
                    </div>
                  )
                })}
              </Slider>
              <h1 style={bodyHead}>This week Food</h1>
              <Recipe componentDidMount={this.componentDidMount} recipes ={this.state.recipes} logos ={this.state.extimg} style={{marginTop:'10em'}} />
              <hr></hr>
              <h1>Food Sections</h1>
              <Container>
              <Row>
                {sections.map(section=>{
 
                 return(
                   <Col md={4} sm={6}>
                   <Link to={section.link} style={{ textDecoration:'none'}}>
                    <Card  data-aos={"fade-top"} style={{marginTop:'30px'}}>
                    <Card.Img variant="top" src={section.image} />
                    <Card.Body>
                    <Card.Title style={{color:'#000'}}>{section.name}</Card.Title>
                    <Card.Text>
                     {section.details}
                    </Card.Text>
                    
                    </Card.Body>
                    </Card>
                </Link>
                </Col>
                  )
                })}
                </Row>
                 </Container>
              <Footer />
            </React.Fragment>
          )}/>
           <Route path="/about" component={About} />
           <Route path="/contact us" component={Contactus} />
           <Route path="/foods" component={Foodsection} />
           <Route path="/african" component={African} />
           <Route path="/asian" component={Asian}/>
           <Route path="/junk" component={Junk}></Route>
           <Route path="/vegan" component={Vegan}></Route>
           <Route path="/healthy" component={Healthy}></Route> 
        </div>
   </Router>
   ); 
 }
}

const imgStyle={
   width:'100vw',
   height:'70vh',
   padding:'0',
   margin:'0'
}

const carouselhead={
  fontSize:'50px',
  fontFamily:'sans-serif',
  color:'#000',
  fontWeight:'Bolder'
}
const carouselText={
  color:'#fff',
  fontSize:'20px',
  marginLeft:'40px'
}
const headerStyle={
  position:'absolute',
}
 
const buttonStyle={
  marginLeft:'40px',
  backgroundColor:'#a6ed',
  borderStyle:'none',
  padding:'1px 3px',
  fontFamily:'roboto-condensced',
  fontSize:'18px',
  borderRadius:'10%',
  color:'#fff'
}
const bodyHead={
  textAlign:'center',
  margin:'2em 0 0 0',
  color:'#f00',
  textDecoration:'underline'
}

const cardstyle={
  display:'inline-flex',
  width:'30%',
  margin:'20px 20px',
  height:'100%'
}
export default App;



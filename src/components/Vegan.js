import React, { Component,componentDidMount,useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navbar from './Navbar';
import './appdesign/section.css';
import './appdesign/FontawesomeIcons/FontawesomeIcons';
import Footer from  './appdesign/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Pie from './appdesign/vegan/vegan_pie.jpg';
import Vpizza from './appdesign/vegan/vegan_pizza.jpg';
import Satay from './appdesign/vegan/satay.jpg';
import Brownies from './appdesign/vegan/brownies.jpg';
import Beetroot from './appdesign/vegan/beetroot.jpg';


 
 class Vegan extends Component {

    componentDidMount(){
        Aos.init({
            duration:2000
        });
    }
    
    state={
        veganfood:[
            {
                id:1,
                name:'Vegan pie',
                description:'',
                image:Pie,
                style:'pie',
                steps:{
                    one:'First, make the filling. Heat oven to 220C/200C fan/gas 7. Mix together 1½ tbsp oil with the cumin, cinnamon and vinegar, and rub the mixture all over the beetroot. Put the beetroot into a small roasting tin, season well, then cover with foil and roast for 20 mins.',
                    two:'Meanwhile, toss the celeriac with 2½ tbsp oil, the thyme, garlic and some seasoning in a second roasting tin. Separate out the slices so they cook evenly, then cover the tin in foil. In a third roasting tin, mix the sweet potato with the remaining oil, the smoked paprika and some seasoning, and cover with foil. Once the beets have cooked for 20 mins, add the celeriac and sweet potato to the oven alongside them, and roast all the veg for 40 mins further or until tender. Remove the thyme sprigs, squeeze the garlic cloves out of their skins and mash them in with the celeriac, then leave all the veg to cool. All the veg can be cooked the day before and kept in the fridge.',
                    three:'For the pastry, boil the kettle and use some coconut oil to grease a deep 20cm springform cake tin. Pour the flour into a bowl and add 1 tsp salt. Mix the coconut oil with 200ml boiling water, stir until melted (put it in the microwave if need be), then pour into the flour and mix with a wooden spoon to form a dough. Working as quickly as you can (it’s best to roll the pastry when it’s warm), cut off a ¼ of the dough and set aside under a tea towel. Roll out the rest to 0.5cm thick, then use it to line the cake tin, pressing the dough into the corners and leaving any excess pastry overhanging the sides. Don’t worry if the pastry breaks – it’s very forgiving, so you can patch it up as you go. Heat oven to 200C/180C fan/gas 6.',
                    four:'Now build the pie. Cover the base with chard leaves, then scatter over the semolina (which will absorb the beet juices), press in the beetroot, and season. Add another layer of chard, followed by the sweet potato, and season. Add a final layer of chard leaves, then top with the celeriac and season again.Roll out the pastry you set aside to a thickness of 0.5cm to use as the lid. Put the lid on top of the pie and, using a fork, press together the overhanging pastry to create a crimped edge. Make a steam hole, then brush the top with a little almond milk mixed with a spoonful of oil (this will help to colour the pastry).',
                    five:' Bake in the centre of the oven for 45 mins until the pastry is a deep golden brown. Leave to cool for 15 mins, then remove from the tin and serve in the middle of the table. Will keep for up to three days in the fridge (the pie is also delicious cold).'
                },
                ingredients:[{data1:'80 ml olive oil'},
                {data1:'2 tsp ground cumin'},
                {data1:'1 tbsp vegan red wine vinegar (we used Aspall)'},
                {data1:'3 beetroots (about 400g), peeled and sliced into rounds about ½ cm thick'},
                {data1:'4 thyme sprigs, leaves picked'},
                {data1:'4 fat unpeeled garlic cloves'},
                {data1:'250g Swiss chard leaves only (save the stalks to add to soups, stews and risottos)'},
                {data1:'150g coconut oil, plus extra for the tin,almond milk, for brushing'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'3hrs',
                difficulty:'High diff'
            },
            {
                id:2,
                name:'Vegan pizza',
                description:'Vegans needn\'t miss out on pizza Margherita. Our recipe combines the classic flavours of this Italian comfort food using plant-based substitutes',
                image:Vpizza,
                style:'v_pizza',
                steps:{
                    one:'Put the flour, yeast and sugar in a large bowl. Measure 150ml of cold water and 150ml boiling water into a jug and mix them together – this will mean your water is a good temperature for the yeast. Add the oil and 1 tsp salt to the warm water then pour it over the flour. Stir well with a spoon then start to knead the mixture together in the bowl until it forms a soft and slightly sticky dough. If it’s too dry add a splash of cold water.',
                    two:'Dust a little flour on the work surface and knead the dough for 10 mins. Put it back in the mixing bowl and cover with cling film greased with a few drops of olive oil. Leave to rise in a warm place for 1 hr or until doubled in size.',
                    three:'Heat oven to 220C/200C/gas 9 and put a baking sheet or pizza stone on the top shelf to heat up. Once the dough has risen, knock it back by punching it a couple of times with your fist then kneading it again on a floured surface. It should be springy and a lot less sticky. Set aside while you prepare the sauce.Put all the ingredients for the tomato sauce together in a bowl, season with salt, pepper and a pinch of sugar if you like and mix well. Set aside until needed.',
                    four:'Divide the dough into 2 or 4 pieces (depending on whether you want to make large or small pizzas), shape into balls and flatten each piece out as thin as you can get it with a rolling pin or using your hands. Make sure the dough is well dusted with flour to stop it sticking. Dust another baking sheet with flour then put a pizza base on top – spread 4-5 tbsp of the tomato sauce on top and add some sliced tomatoes and grated vegan cheese. ',
                    five:'Drizzle with a little olive oil and bake in the oven on top of your preheated baking tray for 10-12 mins or until the base is puffed up and the vegan cheese has melted and is bubbling and golden in patches.'
                },
                ingredients:[{data1:'500g strong white bread flour, plus extra for dusting'}
                ,{data1:'1 tsp dried yeast'},
                {data1:'1 tsp caster sugar'},
                {data1:'100ml passata'},
                {data1:'1 garlic clove, crushed'},
                {data1:'200g vegan mozzarella-style cheese, grated'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'30mins',
                difficulty:'Low diff'
            },
            {
                id:3,
                name:'Satay sweet Potato curry',
                description:'Cook this tasty vegan curry for an exotic yet easy family dinner. With spinach and sweet potato, it boasts two of your five-a-day and it’s under 400 calories',
                image:Satay,
                style:'satay',
                steps:{
                    one:'Melt 1 tbsp coconut oil in a saucepan over a medium heat and soften 1 chopped onion for 5 mins. Add 2 grated garlic cloves and a grated thumb-sized piece of ginger, and cook for 1 min until fragrant.',
                    two:'Stir in 3 tbsp Thai red curry paste, 1 tbsp smooth peanut butter and 500g sweet potato, peeled and cut into chunks, then add 400ml coconut milk and 200ml water.',
                    three:'Bring to the boil, turn down the heat and simmer, uncovered, for 25-30 mins or until the sweet potato is soft.',
                    four:'Stir through 200g spinach and the juice of 1 lime, and season well. ',
                    five:'Serve with cooked rice, and if you want some crunch, sprinkle over a few dry roasted peanuts.'
                },
                ingredients:[{data1:'1 tbsp coconut oil'},
                {data1:'Chopped onion'},
                {data1:'garlic cloves, grated'},
                {data1:'tbsp Thai red curry paste (check the label to make sure it’s vegetarian/ vegan)'},
                {data1:'500g sweet potato, peeled and cut into chunks'},
                {data1:'400ml can coconut milk'},
                {data1:'1 lime juiced'},
                {data1:'cooked rice, to serve(optional)'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'1hr ',
                difficulty:'Low diff'
            },
            {
                id:4,
                name:'Vegan Brownies',
                description:'Try these soft, squidgy brownies, without the dairy or eggs. They\'re perfect for vegans and people following a dairy-free diet and taste utterly divine',
                image:Brownies,
                style:'v_brownies',
                steps:{
                    one:'Heat oven to 170C/150C fan/gas 3½. Grease and line a 20cm square tin with baking parchment. Combine the flaxseed with 6 tbsp water and set aside for at least 5 mins.',
                    two:'In a saucepan, melt 120g chocolate, the coffee and margarine with 60ml water on a low heat. Allow to cool slightly.',
                    three:'Put the flour, almonds, cocoa, baking powder and ¼ tsp salt in a bowl and stir to remove any lumps. Using a hand whisk, mix the sugar into the melted chocolate mixture, and beat well until smooth and glossy, ensuring all the sugar is well dissolved. Stir in the flaxseed mixture, vanilla extract and remaining chocolate, then the flour mixture. Spoon into the prepared tin. ',
                    four:'Bake for 35-45 mins until a skewer inserted in the middle comes out clean with moist crumbs.',
                    five:' Allow to cool in the tin completely, then cut into squares. Store in an airtight container and eat within three days.'
                },
                ingredients:[{data1:'2 tbsp ground flaxseed'},
                {data1:'200g dark chocolate'},
                {data1:'data'},
                {data1:'half tsp coffee granules'},
                {data1:'80g vegan margarine, plus extra for greasing'},
                {data1:'125g self-raising flour'},
                {data1:'70g ground almonds'},
                {data1:'50g cocoa powder'},
                {data1:'1 quarter baking powder'},
                {data1:'250g golden caster sugar'},
                {data1:'1 half tsp vanilla extract'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'55 mins',
                difficulty:'Low-mid diff'
            },
            {
                id:5,
                name:'Beetroot & red onion tatin',
                description:'Bake our vegan tart for a showstopper at a dinner party. The bold red of beetroot against the green salad also makes it ideal for a meat-free Christmas Day',
                image:Beetroot,
                style:'beetroot',
                steps:{
                        one:'Heat oven to 200C/180C fan/gas 6. In a bowl, toss the beetroot and onion in 2 tbsp of the oil, the vinegar and sugar. Add the star anise and season well. Heat the rest of the oil in a large, ovenproof non-stick frying pan, then nestle in the veg so that they cover the surface of the pan. Cover with foil and cook in the oven for 45 mins.',
                        two:'On a well-floured surface, roll the pastry to a thickness of 0.5cm and cut out a circle the same size as your frying pan. Carefully take the pan out of the oven, remove the foil and wiggle the beets and onion around in the pan to make a compact layer',
                        three:'Put the pastry on top, tucking it in all around the edges, then return the pan to the oven and bake for 35 mins or until the pastry has puffed up and is a deep golden brown.',
                        four:'Slide a palate knife around the edge of the tart, then put a plate on top of the pastry, serving side down. Flip the pan over to turn the tart out onto the plate – be careful not to burn yourself with the handle. ',
                        five:'Top with the orange zest and a sprinkle of sea salt, then serve with a peppery salad on the side.'
                    },
                ingredients:[{data1:'400g beetroot, cut into wedges'}
                ,{data1:'1 red onions, cut into wedges'},
                {data1:'2 tbsp rice wine vinegar'},
                {data1:'2 tbsp soft brown sugar'},
                {data1:'2 star anise'},
                {data1:'500g block puff pastry (we used vegan Jus-Rol)'},
                {data1:'peppery green salad, to serve'}],
                like:false,
                dislike:false,
                color1:'white',
                color2:'white',
                likeinfo:'',
                time:'1hr 30mins',
                difficulty:'Mid diff'
            }
        ]
    } 

    likeThumb=(id)=>{
        this.setState({veganfoods:this.state.veganfood.map((food)=>{
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
        this.setState({veganfoods: this.state.veganfood.map((food)=>{
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
               <h1>Vegan recipes</h1>
               <div className="border"></div>
                   <div className="gallerysect">
                       {this.state.veganfood.map((food)=>{
                           return(
                           <a data-aos={'fade-in'} className="image"><img src={food.image} style={{width:'27vw',height:'37vh'}}></img><p>{food.name}</p></a>          
                           )
                       })}
                   </div>
               </div>
           </div>
           <div>
               {this.state.veganfood.map((food)=>{
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


 export default Vegan
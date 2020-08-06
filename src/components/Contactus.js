import React, { Component } from 'react'
import Navbar from './Navbar';
import './appdesign/section.css';
import contactimg from './appdesign/contactimg2.jpg';


 class Contactus extends Component {
    render() {
        return (
            <React.Fragment>
                {/*To be done tommorrow 5-07-2020 */}
                <Navbar />
                <section>
                    <div className="container">
                        <div className="contactus">
                            <h1>Contact us</h1>
                            <p>Feel free to contact us to give feed back to our team on better improvements</p>
                        </div>
                        <div className="contactform light">
                            <h3>Reach out to Us</h3>
                            <form>
                                <div>
                                
                                    <input type="text" placeholder="Name"></input>
                                </div> 
                                <div>
                                    
                                    <input type="email" placeholder="Email"></input>
                                </div> 
                                <div>
                                    
                                    <input type="phone" placeholder="Phone-no"></input>
                                </div>
                                <label id="E_P">Preferred method of communication</label> 
                                <div className="method_of_contact">
                                    <div>
                                        <label for="email">E-mail</label>
                                        <input id="email" type="radio" value="E-mail"></input>
                                        <label for="phone">Phone</label>
                                        <input id="phone" type="radio" value="Phone"></input>
                                    </div>
                                </div> 
                                <div>
                                    
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <input type="submit" value="submit"></input>
                                </div> 
                            </form>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contactus
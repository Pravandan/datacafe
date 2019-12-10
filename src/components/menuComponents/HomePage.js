import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row, Col} from 'antd';

//import LandingPageImage from '../../static/images/landingPageCharts.jpg';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Row type="flex">
                
                    <Col md={{span:7,offset:4}} xs={{span:8,offset:2}} className="text-banner">

                        <Row className="intro-text-banner">
                            <span>
                                <b>
                                    Cooking up <span className="rotating-text-banner"> Recipes </span> to 
                                    understand <br/> 
                                    Data

                                    <br/>

                                    <hr className="dashed-line"/>
                                    
                                </b>
                            </span>
                        </Row>

                        <Row>
                            <span className="little-explanation-text-banner">

                                We try to convey what the data holds beneath those numbers
                                just like a simple story for you.
                        
                            </span>
                        </Row>
                        
                    </Col>
        
        
                    <Col md={{span:4,offset:0}} xs={{span:8,offset:2}} className="landing-page-image">
                        <img src={"../../static/images/landingPageCharts.jpg"} className="landing-page-image"/>
                    </Col>
        
        
                </Row>

                <Row type="flex" className="push-right-small">

                    <Col md={{span:6,offset:2}} xs={{span:24,offset:0}} className="leading-stories">

                        <Row className="leading-stories-intro-picture">

                            <img src={"../../static/images/ola_fare.jpg"} className="leading-stories-intro-picture"/>
                            

                        </Row>


                        <Row className="leading-stories-intro-text">
                            <br/>

                            <span className="leading-stories-intro-text-headline"> 
                                <b>Does the time of the day affects the price of the ride ?</b>
                            </span>

                            <br/><br/>
                            We will try to look at how the price of the ride from the 
                            same place to the airport varies throughout the day. 
                        </Row>

                        

                    </Col>

                    <Col md={{span:6,offset:1}} xs={{span:16,offset:4}} className="leading-stories">

                        <Row className="leading-stories-intro-picture">

                            <img src={"../../static/images/fmcg.jpg"} className="leading-stories-intro-picture"/>
                            

                        </Row>


                        <Row className="leading-stories-intro-text">
                            <br/>

                            <span className="leading-stories-intro-text-headline"> 
                                <b>The Great Indian Consumption Story, is it changing ?</b>
                            </span>

                            <br/><br/>
                            We will try to look at how the price of the ride from the 
                            same place to the airport varies throughout the day. 
                        </Row>

                    </Col>

                    <Col md={{span:6,offset:1}} xs={{span:16,offset:4}} className="leading-stories">

                        <Row className="leading-stories-intro-picture">

                            <img src={"../../static/images/lpg.jpg"} className="leading-stories-intro-picture"/>
                            
                        </Row>


                        <Row className="leading-stories-intro-text">
                            <br/>

                            <span className="leading-stories-intro-text-headline"> 
                                <b>Various government schemes, which has impacted the most ?</b>
                            </span>

                            <br/><br/>
                            We will try to look at how the price of the ride from the 
                            same place to the airport varies throughout the day. 
                        </Row>

                    </Col>

                </Row>
                <br/><br/>
                <br/><br/>
                <br/><br/>


                <Row>
                    <Col md={{span:8,offset:8}} className="more_to_come_text">
                        Look out for this space, <br/>
                        for more interesting stories
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomePage;
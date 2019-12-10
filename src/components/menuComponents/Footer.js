import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row, Col, Icon} from 'antd';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Row className="footer-container">
                
                    <br/>
                    <br/>

                    <Row type="flex">
                        <Col md={{span:4,offset:7}} className="footer-main-intro-text right-align">
                            <img src={"../../static/images/chai.png"} className="chai-icon"/>
                        </Col>
                        <Col md={{span:4,offset:0}} className="footer-main-intro-text push-down-medium">
                            Doing it all on <br/> a cup of
                            Chai
                        </Col>
                    </Row>

                    <br/>
                    <br/>
                    
                    <Row type="flex">
                        <Col md={{span:20,offset:2}} className="brand-name-sub-heading push-down-medium center-align">
                            <i> --- </i>
                            Built with 
                            <Icon type="heart" className="heart-icon"/> 
                            and respect for data, &nbsp;&nbsp; 
                            India 2019
                            <i> --- </i>
                        </Col>
                    </Row>

                    <br/>
                    <br/>
                </Row>
            </div>
        )
    }
}

export default Footer;
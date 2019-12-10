import React from 'react'
import {NavLink} from 'react-router-dom'

import {Row, Col} from 'antd';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Row type="flex">
                
                    <Col md={{span:4,offset:5}} xs={{span:8,offset:2}} className="main-title-container">
                        <span>
                            <b>
                                Data Cafe
                            </b>
                        </span>
                    </Col>
        
        
                    <Col md={{span:2,offset:4}} xs={{span:2,offset:2}} className="menu-items">
                        <span>
                            <NavLink activeClassName="is-active" className="on-hover-color" to="/" exact={true}>
                                Stories
                            </NavLink>
                        </span>
                    </Col>
        
                    <Col md={{span:2,offset:0}} xs={{span:2,offset:2}} className="menu-items">
                        <span className="">
                            <NavLink activeClassName="is-active" className="on-hover-color" to="/" exact={true}>
                                Team
                            </NavLink>
                        </span>
                    </Col>
        
                    <Col md={{span:2,offset:0}} xs={{span:2,offset:2}} className="menu-items pull-left-small">
                        <span className="">
                            <NavLink activeClassName="is-active" className="on-hover-color" to="/" exact={true}>
                                Contact
                            </NavLink>
                        </span>
                    </Col>
        
                </Row>
            </div>
        )
    }
}

export default Header;
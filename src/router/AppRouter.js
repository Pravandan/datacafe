import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/menuComponents/HomePage';
import Stories from '../components/menuComponents/Stories';
import Footer from '../components/menuComponents/Footer';
import ExpensifyDashboardComponent from '../components/ExpenseDashboardPage';
import ContactComponent from '../components/ContactComponent';
import EditComponent from '../components/EditComponent';
import HelpComponent from '../components/HelpComponent';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/stories" component={Stories} exact={true}/>
            </Switch>
            
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter
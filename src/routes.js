import React from 'react'
import {Switch, Route} from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import About from './components/about/About';
import Work_projects from './components/work_projects/Work_projects';
import Resume from './components/resume/Resume';

export default (
    <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/about' component={About}/>
        <Route path='/work' component={Work_projects}/>
        <Route path='/resume' component={Resume}/>
    </Switch>
);

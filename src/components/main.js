import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/resume" component={Resume}/>
    <Redirect to ="/"/> {/*renders Landing page if  non-existence pathh */}

    </Switch>
)

 export default Main;
import React,{Component} from 'react';
import './App.css';
import {Layout,Navigation,Header,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="PORTFOLIO" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="PORTFOLIO">
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

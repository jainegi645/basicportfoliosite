import React,{Component} from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardText,CardActions,CardMenu,Button,CardTitle,IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state ={activeTab:0}; 
    }

toggleCategoriees() {
    if(this.state.activeTab ===0){
        return(
           <div className="projects-grid" >
            <Card shadow={5} style={{minWidth: '450', marginLeft:'20px',marginTop:'20px'}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://reactjs.org/logo-og.png) center / cover'}}>React Projects #1</CardTitle>
            <CardText>
            loremLorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/> 
            </CardMenu>
            </Card>

            
            <Card shadow={5} style={{minWidth: '450', marginLeft:'20px',marginTop:'20px'}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://reactjs.org/logo-og.png) center / cover'}}>React Projects #1</CardTitle>
            <CardText>
            loremLorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/> 
            </CardMenu>
            </Card>

          
            <Card shadow={5} style={{minWidth: '450', marginLeft:'20px',marginTop:'20px'}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://reactjs.org/logo-og.png) center / cover'}}>React Projects #1</CardTitle>
            <CardText>
            loremLorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/> 
            </CardMenu>
            </Card>
            </div>
        )
    }else if(this.state.activeTab === 1) {
        return(
            <div><h1>this is html/css</h1></div>
        )
    }else if(this.state.actAiveTab === 2) {
        return(
            <div><h1>this is DJANGO</h1></div>
        )
    }
}
    
    render(){
        return(
            <div className = "category-tabs">
            <Tabs activeTab={this.state.avtiveTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
            <Tab> REACT</Tab>
            <Tab> HTML/CSS</Tab>
            <Tab> DJANGO</Tab>
             </Tabs>
            <section className="projects-grid">
            <Grid >
            <cell col={12}>
            <div className="content"> {this.toggleCategoriees()}</div>
            </cell>
            </Grid>
         
            </section>
            </div>
        )
    }
}
export default Projects;
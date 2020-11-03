import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width:'100%',margin: 'auto'}}>
            <Grid className="Landing-grid">
            <Cell col={12}>
            <img src="data:image/png;base64,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"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
            <h1>Full stack web developer</h1>

            <hr/>
            <p>
            HTML/CSS | BOOTSTRAP | REACT | MySQL
            </p>
            <div className="social-links">
            {/*linkdin */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>

             {/*github */}
             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i class="fa fa-github-square" aria-hidden="true"></i>
             </a>

              {/*linkdin */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-youtube-square" aria-hidden="true"></i>
            </a>

            </div>
            </div>
           

            </Cell>
            </Grid>
                    
            </div>
        )
    }
}
export default LandingPage;
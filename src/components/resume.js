import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="data:image/jpeg;base64,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"
                            alt="avatar"
                            style={{height:'200px'}}
                            />

            </div>
            <h2 style={{paddingTop:'2em'}}>JAI NEGI</h2>
            <h3 style={{color:'grey'}}>Web Developer</h3>
            <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
            <p>
            loremLorem ipsum dolor sit amet,
                           consectetur adipiscing elit.
                           Mauris sagittis pellentesque lacus eleifend lacinia
                           loremLorem ipsum dolor sit amet,
                           consectetur adipiscing elit.
                           Mauris sagittis pellentesque lacus eleifend lacinia
            
            </p>
            <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
            <h5>Adress</h5>
            <p>I HAcker way Menlo park,987654321</p>
            <h5>Email</h5>
            <p>someone@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
            
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2002}
                    endYear={2010}
                    schoolName="my university"
                    schoolDescription="loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia
                    loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia"
                    />

                    <Education
                    startYear={2011}
                    endYear={2017}
                    schoolName="my 2nd university"
                    schoolDescription="loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia
                    loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia"
                    />
                    <hr style={{borderTop:'3px solid red'}}/>
                    <h2>Experience</h2>
                    <Experience
                    startYear={2020}
                    endYear={2023}
                    jobName="first-job"
                    jobDescription="loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia
                    loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia"
                    />

                    <Experience
                    startYear={2023}
                    endYear={2025}
                    jobName="second-job"
                    jobDescription="loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia
                    loremLorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia"
                    />
                    <hr style={{borderTop:'3px solid red'}}/>
                    <h2>SKills</h2>
                    <Skills
                    skill="HTML/CSS"
                    progress={80}
                    />
                    <Skills
                    skill="React"
                    progress={25}
                    />
                    <Skills
                    skill="Python"
                    progress={80}
                    />
                    <Skills
                    skill="Django"
                    progress={80}
                    />
                   

                    
                        
                    
                    
                    </Cell>
                </Grid>
            </div>


        )
    }
}
export default Resume;
import React from "react";



function About() {


    return (
        <div>
            <div className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
                <h4><b>About Me</b></h4>
                <img src="assets/images/profile.jpg" alt="Me" className="w3-image w3-padding-32" width="600" height="650" />
                <div className="w3-content w3-justify" style="max-width:600px">
                    <h4>My Name</h4>
                    <p>Full-stack developer with a background in Biology
                      working towards gaining an increased amount of knowledge and skill within the ever expanding
                      world of programming. Fully certified as a Full-stack developer who completed the “MERN”
                      coursework, through Bootcamp Spot partnering with the University of Minnesota. I am driven
                      by a craving to gather more skills and learn more and more everyday. I have worked in the
                      past with other developers to create fully responsive websites that provide features that
                      were requested and applying as much personality to the page as possible.</p>
                    <p>mail: mrforesightii@gmail.com</p>
                    <p>tel: 651 361-0299</p>
                    </div>
                    <hr className="w3-opacity" />
                        <h4 className="w3-padding-16">Technical Skills</h4>
                        <p className="w3-wide">JavaScript</p>
                        <div className="w3-white">
                            <div className="w3-container w3-padding-small w3-center w3-grey" style="width:95%">95%</div>
                        </div>
                        <p className="w3-wide">Web Design</p>
                        <div className="w3-white">
                            <div className="w3-container w3-padding-small w3-center w3-grey" style="width:85%">85%</div>
                        </div>
                        <p className="w3-wide">Node.js</p>
                        <div className="w3-white">
                            <div className="w3-container w3-padding-small w3-center w3-grey" style="width:80%">80%</div>
                        </div>
                        <div>
                            <a href="assets/resume.pdf"><h4>Download Resume</h4></a>
                            <hr className="w3-opacity" />
                    </div>
                    </div>
                    </div>
                    );
                }
                
export default About;
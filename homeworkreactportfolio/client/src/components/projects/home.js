import React from "react";
import '../../style.css';


function Home() {

  return(
    <div>
  <header className="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
  <span className="w3-left w3-padding">ISSA ISSA</span>
  <a href="javascript:void(0)" className="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
</header>


<div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

 
<div className="w3-main" style="margin-left:300px">


  <div className="w3-hide-large" style="margin-top:83px"></div>
  

  <div className="w3-row">
    <div className="w3-half">
      <img src="assets/images/quiz.gif" style="width:100%" onclick="onClick(this)" alt="A gif of my quiz game I created" />
      <img src="assets/images/weather.PNG" style="width:100%" onclick="onClick(this)" alt="A weather app that reads todays weather and a 5 day forecast" />
      <img src="assets/images/pikachoose.PNG" style="width:100%" onclick="onClick(this)" alt="The starting page of my second project" />
    </div>
    
    <div className="w3-half">
      <img src="assets/images/global1.PNG" style="width:100%" onclick="onClick(this)" alt="My first project when opened" />
      <img src="assets/images/global2.PNG" style="width:100%" onclick="onClick(this)" alt="My first project when a food and beverage are selected" />
      <img src="assets/images/pikachoose2.PNG" style="width:100%" onclick="onClick(this)" alt="A different page of my second project" />
    </div>
  </div>

  
  <div id="modal01" className="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
    <span className="w3-button w3-black w3-xlarge w3-display-topright">×</span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image" />
      <p id="caption"></p>
    </div>
  </div>
  </div>

);
}

export default Home;
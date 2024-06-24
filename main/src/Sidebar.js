import React, { Component } from 'react'
import homeImage from './images/Home.png';
import aboutImage from './images/About.png';
import pagesImage from './images/Pages.png';
import portfolioImage from './images/Portfolio.png';
import questionImage from './images/Question.png';
import sendImage from './images/Send.png';



    
export default class Sidebar extends Component {
  render() {
    return (
      <section style={{backgroundColor:"blueviolet",marginTop:"50px",marginLeft:"30px",paddingBottom:"200px"}}>
        <h1 style={{paddingLeft:"50px",color:"white",paddingTop:"30px"}}>Bootstrap</h1>
        <h1 style={{paddingLeft:"50px",color:"white"}}>Sidebar</h1>
        <h1 style={{paddingLeft:"10px",color:"white",fontSize:"1.5em",paddingTop:"60px"}}>Dummy Heading</h1>
        <i className="fa-solid fa-house-chimney" style={{fontSize:"2em",color:"white",padding:"30px"}}></i>

        <section style={{display:"flex",marginTop:"0px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={homeImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>Home</h1>
        </section>

        <section style={{display:"flex",marginTop:"10px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={aboutImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>About</h1>
        </section>

        <section style={{display:"flex",marginTop:"10px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={pagesImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>Pages</h1>
        </section>

        <section style={{display:"flex",marginTop:"10px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={portfolioImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>Portfolio</h1>
        </section>

        <section style={{display:"flex",marginTop:"10px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={questionImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>FAQ</h1>
        </section>

        <section style={{display:"flex",marginTop:"10px",marginLeft:"20px",justifyContent:"left"}}>
            <img src={sendImage} style={{width:"40px",height:"40px"}}></img>
            <h1 style={{color:'white',marginLeft:"15px",fontSize:"2em"}}>Contact</h1>
        </section>

      </section>

      
    )
  }
}

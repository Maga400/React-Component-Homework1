import React, { Component } from 'react'
import strapImage from './images/ReactStrap.png';

export default class Template extends Component {
  render() {
    return (
      <section style={{backgroundColor:"white",borderRadius:"10px",marginTop:"10px",marginLeft:"10px",paddingTop:"30px",paddingBottom:"30px",paddingLeft:"10px",paddingRight:"10px"}}>
        <section style={{display:"flex",justifyContent:"start"}}>
            <img src={strapImage} style={{width:"400px",height:"400px"}}></img>
            <h1 style={{fontSize:"6.4em",marginTop:"120px",marginLeft:"10px"}}>reactstrap</h1>
        </section>
        <h1 style={{fontSize:"3em",marginTop:"0px",marginLeft:"10px",textAlign:"center"}}>Responsive Sidebar Template</h1>
        
      </section>
    )
  }
}

import React, { Component } from 'react'
import textLinemage from './images/TextLine.png';

export default class NavBar extends Component {
  render() {
    return (
      <section style={{backgroundColor:"white",marginTop:"30px",borderRadius:"10px",marginLeft:"10px",marginRight:"10px"}}>

        <section style={{display:"flex",justifyContent:"left"}}>
            <section style={{width:"50%"}}>
                <img src={textLinemage} style={{padding:"20px",width:"100px",height:"100px"}}></img>
            </section>

            <section style={{width:"50%",display:"flex",justifyContent:"right",paddingTop:"30px"}}>
                <h1 style={{fontSize:"1.5em",marginRight:"20px"}}>{this.props.texts.p1}</h1>
                <h1 style={{fontSize:"1.5em",marginRight:"20px"}}>{this.props.texts.p2}</h1>
                <h1 style={{fontSize:"1.5em",marginRight:"20px"}}>{this.props.texts.p3}</h1>
                <h1 style={{fontSize:"1.5em",marginRight:"20px"}}>{this.props.texts.p4}</h1>

            </section>

        </section>

      </section>
    )
  }
}

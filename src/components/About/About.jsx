import './About.css'
import React from 'react'
import { useState } from 'react'
function About(props){
    return(
        <>
        <div className="container" style={props.page}>
            <div className="box " style={props.style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sapiente perferendis libero aliquam ipsum necessitatibus distinctio laborum in non enim atque vel obcaecati ex labore provident vero doloremque expedita minus eos quas, dolorum a.
            </div>
            <div className="box" style={props.style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sapiente perferendis libero aliquam ipsum necessitatibus distinctio laborum in non enim atque vel obcaecati ex labore provident vero doloremque expedita minus eos quas, dolorum a.
            </div>
            <div className="box" style={props.style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sapiente perferendis libero aliquam ipsum necessitatibus distinctio laborum in non enim atque vel obcaecati ex labore provident vero doloremque expedita minus eos quas, dolorum a.
            </div>
        </div>
       
        </>
    )

}
export default About

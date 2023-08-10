import React,{useState} from "react"
import "./Textarea.css"
function Text(props){
    const [text,settext]=useState("Enter the text")
    function uppercase(){
        settext(text.toUpperCase())
    }
    function clear(){
        settext('')
    }
    const a = {
      fontSize:'30px',
      display: 'flex',
      justifyContent: 'center'
    }
    return(
        <>
     
        <h4 style={props.head} id='head'>TEXTAREA</h4>
        <div className ="textarea" style={props.cont}>
        <textarea style={props.main} value={text} onChange={(e)=>{settext(e.target.value)}}>
        
        </textarea>
        
        <div className="btn">
        <button className="btn1" onClick={uppercase} >
          Uppercase
        </button>
        <button className="btn1" onClick={clear} >
          Clear
        </button>
        </div>
        </div>
        <h3 style={a}> TEXT SUMMARY </h3>
        <div style={a}> {text.split(' ').filter((x)=>{return x.length!=0}).length} words and {text.length} letters</div>
        <h3 style={a}>PREVIEW</h3>
        <div style={a}>{text}</div>
       </>
        
    )
}
export default Text
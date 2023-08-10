import { useState } from 'react'
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Textarea from './components/Textarea/Textarea';
function App() {
  const [mode,setmode]=useState('dark')
  const [mystyle,setstyle]=useState({
    color:'black',
    backgroundColor:'light'
 })
 const [head,sethead]=useState({
  backgroundColor:'aqua',
  display:'flex',
  justifyContent:'center'
})
 const [cont,setcont]=useState({
  backgroundColor:'rgb(0, 255, 179)'
 })
 const [work,setwork]=useState({
  backgroundColor:'rgb(107, 240, 107)'
 })
 const [nav,setnav]=useState({
  backgroundColor:' rgb(112, 110, 241)'
 })
 const [body,setbody]=useState({
  backgroundColor:'rgb(109, 159, 252)'
 })
  const togglemode =()=>{
    
    if(mode=='light'){
      document.body.style.backgroundColor='rgb(183, 109, 252)'      
      setnav({
        backgroundColor:' rgb(112, 110, 241)'
      })
      setwork({
        backgroundColor:'rgb(107, 240, 107)',
        color:'black'
      })
      setcont({
        backgroundColor:'rgb(0, 255, 179)'
      })
      setnav({
        backgroundColor:'rgb(109, 159, 252)'
      })
      sethead({
        backgroundColor:'aqua',
        display:'flex',
        justifyContent:'center'
      })
      setstyle({
        color:'black',
        backgroundColor:'white'
     })
     setbody({
      backgroundColor:'rgb(109, 159, 252)',
    })
      setmode('dark')
    }
    if(mode =='dark'){
      document.body.style.backgroundColor='rgb(2, 20, 54)'
      setwork({
        backgroundColor:'rgb(63, 63, 63)',
        color:'white'
      })
      setnav({
        backgroundColor:'rgb(18, 18, 19)'
      })
      setstyle({
        color:'white',
        backgroundColor:'black'
    });
    setcont({
      backgroundColor:'rgb(27, 26, 27)',
    })
    setnav({
      backgroundColor: 'black',
      color:'white'
    })
    setbody({
        backgroundColor:'rgb(2, 20, 54)',
        color:'white'
      })
    sethead({
      backgroundColor:'rgb(2, 20, 54)',
      display:'flex',
      justifyContent:'center'
    })
      setmode('light');
    }
  }
  return(
    <div className='body' style={body}>
    <BrowserRouter>
   <Navbar title="WorkdKit" change = {togglemode} color={nav} mode={mode} />
    <Routes>
    <Route path='/wordkit' element={<Textarea cont={cont} style={mystyle}  main={work} head={head}/>}/>
      <Route path='/about' element={<About mode={mode} style={mystyle}  page={body}/>}/>
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App

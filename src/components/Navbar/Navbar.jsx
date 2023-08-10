import { Link } from "react-router-dom"
import "./Navbar.css"
function Nav(props){
  let a={
    float : 'right',
    listStyle : 'none'
  }
    return (
        <>
        
        <nav className="navbar" style={props.color}>
          <ul>
            <Link to={'/wordkit'}>
            <li>{props.title}</li>
            </Link>
            <Link to={'/about'}>
            <li>Info</li>
            </Link>
          </ul>
          <div className="search">
          <button  id="btn">Search</button>
          <input   id="search" placeholder="Search"/>
          <label className="switch">
  <input type="checkbox" onClick={props.change} />
  <span className="slider round"></span>
</label>
<li style={a}>Enable {props.mode} mode</li>
</div>
        </nav>
        </>
    )
}
export default Nav
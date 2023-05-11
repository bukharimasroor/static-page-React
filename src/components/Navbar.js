import React from "react"; 
import "../styles/style.css"
const Navbar=()=>{
return(
   <nav className="navbar">
    <h1>Syed Masroor</h1>
    <div className="links">
        <a href="#" className="Home">Home</a>
        <a href="#" className="Blog">Blog</a>
        <a href="#" className="Contact">contact</a>
        <a href="#" className="Projects">Projects</a>
    </div>
   </nav>
)
}
export default Navbar;
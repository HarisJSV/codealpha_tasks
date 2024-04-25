import React from "react";
import h from '/h.png';
function Nav(){
return <div className="cont"><div class="navbar">
  <img src={h} alt="" srcset="" className="h"/>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
</div>
</div>
}
export default Nav;
import React from 'react'
import IITMRP from '../Images/iitmlogo.png'
import CeetLog from "../Images/Ceet.png"

function Navbar() {
  return (
    <div>
      <div class="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: "100px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexGrow: 1 }}>
           {/* <Link to='/'></Link>  */}
      <img src={IITMRP} alt='iitmrp' style={{ width: "150px", height: "110px" }} />
      
          
          <h1 style={{ textAlign: "center", color: "black", flexGrow: 1 }}><b> Energy Management System</b></h1>
          <img src={CeetLog} alt='iitmrp' style={{ width: "100px", height: "50px",marginRight:"50px" }} />
          
        </div>
      </div>
      <hr style={{border:"1px solid black",marginLeft:"50px",marginRight:"50px"}}/>
    </div>
  )
}

export default Navbar

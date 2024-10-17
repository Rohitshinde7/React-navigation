import { useState } from "react";
import Navbar from "./Navbar";

function About(){
   const [data, setData] = useState();

  const handleClick = (event) => {
    event.preventDefault();

    if (event.target.value === "Maharashtra") {
      setData("Pune");
    } else {
      setData("Banglore");  
    }
}
    return (
        <div className="About-div" >
          <Navbar/>
          <div style={{color:"blue",height:"auto",width:"auto",marginLeft:"500px",marginTop:"20px", alignContent:"center", alignItems:"center"}}>
             <h2>About Component</h2>
             </div>
            <div>
            <div>
        <form onClick={handleClick}style={{height:"50%", width:"50%", marginLeft:"480px", marginTop:"20px"}}>
          <select style={{border:"50px", borderBlockColor:"red"}}>
            <option>Maharashtra</option>
            <option>Karnataka</option>
          </select>

          <select value={data}>
            <option>Pune</option>
            <option>Banglore</option>
          </select>
        </form>
      </div> 
            </div>
           

        </div>
    )
};

export default About;

import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Transportbtn = () => {
  const navigate = useNavigate();

  function updateAllData(){
    axios
    .get("http://localhost:3001/updateAllData")
    .then((response) => {
      console.log(response);
      alert(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
      
     <div className="tbgc">
        <button className="btn" onClick={()=>{
          navigate("/Aboutus");
        }}>Aboutus</button>

    
<button className="btn"
          onClick={() => {
            navigate("/Vehicles");
          }}
        >
          Vehicles
        </button>

       
        <button className="btn"
          onClick={() => {
            navigate("/Report");
          }}
        >
          Reports
        </button>
        

        <button className="btn"
          onClick={() => {
            navigate("/Contacts");
          }}
        >
          Contacts
        </button>
 

 {/* <center><h1>XYZ PVT LTD</h1></center> */}

{/* <img className="imgE" src="https://wallpaperaccess.com/full/656670.jpg" width="1520" height="700" alt=""/> */}

</div>


        {/* <button className="btn" onClick={updateAllData}>Update Records</button> */}

        {/* <img className="imgE" src="https://tse4.mm.bing.net/th?id=OIP.6IoR9dyxrCKArBErYA6LRAHaEv&pid=Api&P=0&h=180" width="1700" height="800" alt=""/> */}
      

    </>
  );
};

export default Transportbtn;

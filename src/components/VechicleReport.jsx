import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Vlist from "../components/Vlist";

const VechicleReport  = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
//   var yearnings  = 0;
//   var mearnings = 0;



  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData2")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);

  return (
    <>
      <center>
        <h3 className="he">
          This is Vehicles Report of XYZ PVT Ltd
        </h3>
        <button className="btn"
          onClick={() => {
            navigate("/VaddData");
          }}
        >
          Add Data
        </button>
      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div>id</div>
          <div> vname </div>
          <div> vnumber </div>
          <div> model </div>
          <div> ipremium </div>
          <div>aservicecharg</div>
          <div>emission</div>
          
        </div>
        {employeeData.map((vehicle) => {

           {/* mearnings =mearnings + vehicle.mearnings;
          yearnings = yearnings + vehicle.mearnings * 12; */}
          {/* yearnings = mearnings * 12; */}
       

          return (
            <Vlist
              key={vehicle.id}
              id={vehicle.id}
              vname={vehicle.vname}
              vnumber={vehicle.vnumber}
              model={vehicle.model}
              ipremium={vehicle.ipremium}
             aservicecharg = {vehicle.aservicecharg}
             emission = {vehicle.emission}
            />
          );
        })}
        <div>
      
        </div>
      </div>
      <button className="btn"
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
    </>
  );
};

export default VechicleReport ;







// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const EmployeReport = () => {
//     const navigate = useNavigate();
//   return (
//     <>
//     <div>EmployeReport</div>

//     <button
//         onClick={() => {
//             navigate("/");
//         }}
//         >GO BACK</button>
//     </>
//   )
//  }

// export default EmployeReport
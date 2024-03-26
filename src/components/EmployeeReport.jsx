import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmpList from "../components/EmpList";

const EmployeeReport  = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
//   var yearnings  = 0;
//   var mearnings = 0;



  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData1")
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
          This is Emplloyee Report of XYZ PVT Ltd
        </h3>
        <button className="btn"
          onClick={() => {
            navigate("/EmpaddData");
          }}
        >
          Add Data
        </button>
      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div>id</div>
          <div> en </div>
          <div> ename </div>
          <div> mearnings </div>
          <div>yearnings</div>
          <div>type</div>
          
        </div>
        {employeeData.map((employee) => {

           {/* mearnings =mearnings + employee.mearnings;
          yearnings = yearnings + employee.mearnings * 12; */}
          {/* yearnings = mearnings * 12; */}
       

          return (
            <EmpList
              key={employee.id}
              id={employee.id}
              en={employee.en}
              ename={employee.ename}
              mearnings={employee.mearnings}
              yearnings={employee.yearnings}
             type = {employee.type}
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

export default EmployeeReport ;







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
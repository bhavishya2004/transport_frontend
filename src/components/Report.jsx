import React from 'react'
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const navigate = useNavigate();
  return (
    <>

<button className="btn"
          onClick={() => {
            navigate("/Transport");
          }}
        >
          TurnOver
        </button>

    

       

        <button className="btn"
          onClick={() => {
            navigate("/EmployeeReport");
          }}
        >
         EmployeReport
        </button>

        <button className="btn"
          onClick={() => {
            navigate("/VechicleReport");
          }}
        >
         VechicleReport
        </button>

    

        <button className="btn"
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>

{/* <img className="imgE" src="https://wallpaperaccess.com/full/656670.jpg" width="1520" height="700" alt=""/> */}

        
    </>
  )
}

export default Report
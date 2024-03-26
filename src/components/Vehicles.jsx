import React from 'react'
import { useNavigate } from 'react-router-dom'

const Vehicles = () => {
    const navigate = useNavigate();
  return (
    <>
    <center>
          <h1>Vehicles</h1>
          </center>
          <img src="https://tse2.mm.bing.net/th?id=OIP.Jxs1Wi8nHq-JCnnhFdfRJgHaFx&pid=Api&P=0&h=180" />
            <button className="btn" onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
      
    </>
  )
}

export default Vehicles
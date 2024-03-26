import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Vlist = (props) => {
  const navigate = useNavigate()
    const {id,vname,vnumber,model,ipremium,aservicecharg,emission} = props;
  
   
      const handleDelete=()=>{
        
         try {
             axios.post("http://localhost:3001/delete2",{id})
             .then((res)=>{console.log(res)})
             .catch((err)=>{console.log(err)});
 
         } catch (error) {
            console.log(error) 
         }
     }



  return (
    <div className='employeeData'>
        <div>{id}</div>
        <div>{vname}</div>
        <div> {vnumber} </div>
        <div> {model} </div>
        <div> {ipremium} </div>
        <div>{aservicecharg}</div>
        <div>{emission}</div>
     
      
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => {navigate(`/Vupdate2/${id}`)}}>Update</button>
    </div>
  );
}

export default Vlist;
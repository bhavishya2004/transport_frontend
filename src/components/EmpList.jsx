import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmpList = (props) => {
  const navigate = useNavigate()
    const {id,en,ename,mearnings,yearnings,type} = props;
  
   
      const handleDelete=()=>{
        
         try {
             axios.post("http://localhost:3001/delete1",{id})
             .then((res)=>{console.log(res)})
             .catch((err)=>{console.log(err)});
 
         } catch (error) {
            console.log(error) 
         }
     }



  return (
    <div className='employeeData'>
        <div>{id}</div>
        <div>{en}</div>
        <div> {ename} </div>
        <div> {mearnings} </div>
        <div> {yearnings} </div>
        <div>{type}</div>
     
      
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => {navigate(`/EmpUpdate/${id}`)}}>Update</button>
    </div>
  );
}

export default EmpList;
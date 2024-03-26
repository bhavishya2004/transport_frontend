import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const List = (props) => {
  const navigate = useNavigate()
    const {id,v_no,vname,kmwith_dr,with_dr_rent,withdr_total,kmwithout_dr,withoutdr_rent,withoutdr_total,v_total} = props;
     

    //  const mtotalsalary = 0
    //  const ytotalsalary = 0
    //  const total = e_yearly_salary+e_monthly_salary;
   



      const handleDelete=()=>{
        
         try {
             axios.post("http://localhost:3001/delete",{id})
             .then((res)=>{console.log(res)})
             .catch((err)=>{console.log(err)});
 
         } catch (error) {
            console.log(error) 
         }
     }



  return (
    <div className='employeeData'>
         <div id='id'>{id}</div>
          <div id='pn'> {v_no} </div>
          <div>{vname }</div>
          <div> {kmwith_dr} </div>
          <div> {with_dr_rent} </div>
          <div>{withdr_total}</div>
          <div> {kmwithout_dr} </div>
          <div> {withoutdr_rent} </div>
          <div>{withoutdr_total}</div>
          <div> {v_total }</div>
          

        
      
        <button  onClick={handleDelete}>Delete</button>
        <button  onClick={() => {navigate(`/Update/${id}`)}}>Update</button>
    </div>
  );
}

export default List

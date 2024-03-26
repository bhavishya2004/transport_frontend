import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddData = () => {
    const navigate = useNavigate()
    const [v_no,setv_no] = useState("")
    const [vname,setvname] = useState("")
    const [kmwith_dr,setkmwith_dr] = useState("")
    const [with_dr_rent,setwith_dr_rent] = useState("")
    const [kmwithout_dr,setkmwithout_dr] = useState("")
    const [withoutdr_rent,setwithoutdr_rent] = useState("")
    const [v_total,setv_total] = useState("")

   

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addEmployee", {v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total})
.then(
  (response) => {
   console.log(response.data);
   navigate('/Transport')
    }
  )
.catch(
  (error) => {
    console.log(error);
  }
  )

}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='v_no' name='v_no' value={v_no} onChange={(e)=>{setv_no(e.target.value)}} required />
            <input type='text' placeholder='vname' name='vname' value={vname} onChange={(e)=>{setvname(e.target.value)}} required />
            <input type='number' placeholder='kmwith_dr' name='kmwith_dr' value={kmwith_dr} onChange={(e)=>{setkmwith_dr(e.target.value)}} required />
            <input type='number' placeholder='with_dr_rent' name='with_dr_rent' value={with_dr_rent} onChange={(e)=>{setwith_dr_rent(e.target.value)}} required />
            <input type='number' placeholder='kmwithout_dr' name='kmwithout_dr' value={kmwithout_dr} onChange={(e)=>{setkmwithout_dr(e.target.value)}} required />
            <input type='number' placeholder='withoutdr_rent' name='withoutdr_rent' value={withoutdr_rent} onChange={(e)=>{setwithoutdr_rent(e.target.value)}} required />
            {/* <input type='number' placeholder='v_total' name='v_total' value={v_total} onChange={(e)=>{setv_total(e.target.value)}} required /> */}
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default AddData;

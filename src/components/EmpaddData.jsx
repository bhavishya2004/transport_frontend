
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmpaddData = () => {
    const navigate = useNavigate()
    const [en,setEn] = useState("")
    const [ename,setName] = useState("")
    const [mearnings,setMearnings] = useState("")
    const [yearnings,setYearnings] = useState("")
    const [type,setType] = useState("")
  

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addEmployee1", {en,ename,mearnings,yearnings,type})
.then(
  (response) => {
   console.log(response.data);
   navigate('/EmployeeReport')
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
            
            <input type='text' placeholder='Entre En' name='en' value={en} onChange={(e)=>{setEn(e.target.value)}} required />
            <input type='text' placeholder='Ename' name='ename' value={ename} onChange={(e)=>{setName(e.target.value)}} required />
            <input type='number' placeholder='mearnings' name='mearnings' value={mearnings} onChange={(e)=>{setMearnings(e.target.value)}} required />
            <input type='text' placeholder='type' name='type' value={type} onChange={(e)=>{setType(e.target.value)}} required />
            
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default EmpaddData;
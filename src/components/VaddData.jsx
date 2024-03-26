
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//{vname,vnumber,model,ipremium,aservicecharg,emission}
const VaddData = () => {
    const navigate = useNavigate()
    const [vname,setVname] = useState("")
    const [vnumber,setVnumber] = useState("")
    const [model,setModel] = useState("")
    const [ipremium,setIpremium] = useState("")
    const [aservicecharg,setAservicecharg] = useState("")
    const [emission,setEmission] = useState("")
  

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addEmployee2", {vname,vnumber,model,ipremium,aservicecharg,emission})
.then(
  (response) => {
   console.log(response.data);
   navigate('/VechicleReport')
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
            
            <input type='text' placeholder='Entre vname' name='vname' value={vname} onChange={(e)=>{setVname(e.target.value)}} required />
            <input type='text' placeholder='vnumber' name='vnumber' value={vnumber} onChange={(e)=>{setVnumber(e.target.value)}} required />
            <input type='number' placeholder='model' name='model' value={model} onChange={(e)=>{setModel(e.target.value)}} required />
            <input type='text' placeholder='ipremium' name='ipremium' value={ipremium} onChange={(e)=>{setIpremium(e.target.value)}} required />
            <input type='text' placeholder='aservicecharg' name='aservicecharg' value={aservicecharg} onChange={(e)=>{setAservicecharg(e.target.value)}} required />
            <input type='text' placeholder='emission' name='emission' value={emission} onChange={(e)=>{setEmission(e.target.value)}} required />
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default VaddData;
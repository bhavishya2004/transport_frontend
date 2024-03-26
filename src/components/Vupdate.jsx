import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Vupdate = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [vname,setVname] = useState("")
    const [vnumber,setVnumber] = useState("")
    const [model,setModel] = useState("")
    const [ipremium,setIpremium] = useState("")
    const [aservicecharg,setAservicecharg] = useState("")
    const [emission,setEmission] = useState("")

    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData2", {id})
            .then(res => {
                setVname(res.data.vname);
                setVnumber(res.data.vnumber);
                setModel(res.data.model);
                setIpremium(res.data.ipremium);
                setAservicecharg(res.data.aservicecharg);
                setEmission(res.data.emission);

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Update2", {id,vname,vnumber,model,ipremium,aservicecharg,emission})
                .then((response) => {
                    console.log(response);
                    navigate("/VechicleReport")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

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

export default Vupdate
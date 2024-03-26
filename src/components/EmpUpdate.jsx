import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EmpUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [en,setEn] = useState("")
    const [ename,setName] = useState("")
    const [mearnings,setMearnings] = useState("")
    const [yearnings,setYearnings] = useState("")
    const [type,setType] = useState("")

    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData1", {id})
            .then(res => {
                setEn(res.data.en);
                setName(res.data.ename);
                setMearnings(res.data.mearnings);
                setYearnings(res.data.yearnings);
                setType(res.data.type);

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Update1", {id,en,en,ename,mearnings,yearnings,type})
                .then((response) => {
                    console.log(response);
                    navigate("/")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
           
            <input type='text' placeholder='Entre En' name='en' value={en} onChange={(e)=>{setEn(e.target.value)}} required />
            <input type='text' placeholder='Ename' name='ename' value={ename} onChange={(e)=>{setName(e.target.value)}} required />
            <input type='number' placeholder='mearnings' name='mearnings' value={mearnings} onChange={(e)=>{setMearnings(e.target.value)}} required />
            <input type='text' placeholder='type' name='type' value={type} onChange={(e)=>{setType(e.target.value)}} required />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default EmpUpdate
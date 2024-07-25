import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function Update() {
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");

    let navigate=useNavigate();
    
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("Name"));
        setPassword(localStorage.getItem("pswd"));
    },[]);

    const updatedetails=(e)=>{
      e.preventDefault();
        console.log(id,name,password);
        axios.put(`https://6673d96f75872d0e0a93fa5a.mockapi.io/Crud/${id}`,{Name:name,pswd:password,})
        .then((res)=>{alert("Successfully Updated");navigate("/read");})
        .catch((err)=>console.log(err.message));
    }
  return (
    <>
    <h3 className='center text-light text-center bg-success'>Update your Details Here</h3>
    <form action="" className='mx-auto w-50' onSubmit={updatedetails}>
        <label>ID</label>
        <input type='text' className='form-control' value={id} readOnly disabled/>
        <label>Name</label>
        <input type='text' className='form-control anime'value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>Password</label>
        <input type='text' className='form-control anime'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' className='btn btn-primary my-lg-2'>Update</button>
    </form>
    
    </>
  )
}

export default Update
import React, { useState } from 'react';
import{useNavigate} from"react-router-dom";
import axios from "axios";



function Create() {

    const [username,setUsername]=useState("Akhil");
    const [password,setPassword]=useState("Boda");
    let redirect=useNavigate();
    const sendata=(e)=>{    
            e.preventDefault();
            console.log(username,password);
            axios.post("https://6673d96f75872d0e0a93fa5a.mockapi.io/Crud",{Name:username,pswd:password,}).then((res)=>{ alert("Hey Successfully Created");redirect("/read")}).catch((err)=>{console.error(err.message);});
            
        };
    
  return (  
    <>
    <h2 className='mx-auto p-2 text-center text-light bg-success'>TODO APPLICATION</h2>
    <form action='' className='w-50 m-auto py-5' onSubmit={sendata} >

        <label>Username</label>
        <input type='text' className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label>Password</label>
        <input type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' className='btn btn-primary  my-lg-2'>Signin</button>





    </form>
    

    
    </>
  )
}

export default Create
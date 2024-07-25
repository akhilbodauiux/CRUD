import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

function Read() {
  const [record,setRecord]=useState([]);
 useEffect(()=>{
  axios.get("https://6673d96f75872d0e0a93fa5a.mockapi.io/Crud")
  .then((res)=>{
    console.log(res.data);
    setRecord(res.data);
  })
 },[]);
 let Backpage=useNavigate();
 const Back=()=>
  {Backpage("/")};

 const Updaterecord=(id,Name,pswd)=>{
  console.log(id,Name,pswd);
  localStorage.setItem("id",id);
  localStorage.setItem("Name",Name);
  localStorage.setItem("pswd",pswd);
 };
 const Deleterecord=(unique)=>{
  console.log(unique,"deleted");
 if(window.confirm("r u sure u want to delete?")) 
  {
    axios.delete(`https://6673d96f75872d0e0a93fa5a.mockapi.io/Crud/${unique}`)
  .then((res)=>{ alert("Successfully deleted");
    window.location.reload();
  })
  .catch((err)=>console.log(err.message));
  }
  

 };

    
  
  return (
    <>
    <h3 className='text-center bg-success '>Account Details</h3>
    <button className='btn  btn-primary mx-auto my-lg-2 px-5 'style={{display:"flex",justifyContent:"flex-end"}} onClick={Back}>Back</button>
    
    
    <table className='table table-bordered text-center border  w-75 mx-auto'>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>PASSWORD</th>
      </tr>
      {record.map((item)=>{
      return(
        <>
        <tr>
          <td>{item.id}</td>
          <td>{item.Name}</td>
          <td>{item.pswd}</td>
          <td><Link to="/update"> <button className='btn btn-success bg-success'
          onClick={()=>{
            Updaterecord(item.id,item.Name,item.pswd)
          }
          }>Update</button></Link></td>
          <td><button className='btn btn-danger bg-danger' onClick={()=>Deleterecord(item.id)}>Delete</button></td>

          
        </tr>

        
        
        
        </>
      )
    })

           
      
      }







    </table>
    
    
    
    
    
    </>
  )
}

export default Read
import { Button } from 'bootstrap';
import React from 'react';
import {Link} from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import "../App.css";
import { toast } from 'react-toastify';

const Home = () => {

const contact = useSelector((state)=> state);
const dispatch = useDispatch();

const deleteContact = (id) =>{
    dispatch({type:"DELETE",payload : id  })
    toast.success("Succesfully deleted");
}

  return (
    <div className='home'>
    <p className='h1p'>Riot table of Flank III</p>
        <div className='home-table '>
            <table className='tables'>
                <thead className='text-white bg-dark table-head'>
                    <tr>
                        <th className='table-th' scope='col'>S-No.</th>
                        <th className='table-th' scope='col'>Name</th>
                        <th className='table-th' scope='col'>Email</th>
                        <th className='table-th' scope='col'>Number</th>
                        <th className='table-th' scope='col'>Main Agent</th>
                        <th className='table-th' scope='col'>Riot Name</th>
                        <th className='table-th' scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((contact, id)=>(
                            <tr key={id}>
                                <td className='td'>{id+1}</td>
                                <td ><p>{contact.name}</p></td>
                                <td> <p>{contact.email}</p></td>
                                <td ><p>{contact.number}</p></td>
                                <td><p style={{justifyContent:"center" , display:"flex"}}>{contact.agent}</p></td>
                                <td><p>{contact.riot}</p></td>
                                <td style={{display: "flex", justifyContent: "space-evenly" , padding:"5px 0px"}}>
                                    <Link to={`/edit/${contact.id}`} className='btn btn-outline-primary' >Edit</Link>
                                    <button className="btn btn-outline-danger" onClick={()=>deleteContact(contact.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className='addButton'>
            <Link to="/add" className='btn btn-outline-dark'>Join us</Link>  
        </div>
        <h5 style={{color:"red"}}>Note : No responsiveness is added , Only for PC :)</h5>
    </div>
  )
}

export default Home;
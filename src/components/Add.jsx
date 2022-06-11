import React, {  useState } from 'react';
import { toast } from 'react-toastify';
import "../App.css";
import { useSelector , useDispatch } from 'react-redux';
import {useNavigate , Link} from "react-router-dom"

const Add = () => {

    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state);
    const navigate = useNavigate();
    // const history = useHistory()

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [agent , setAgent] = useState("");
    const [riot , setRiot] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        const checkEmail = contacts.find((contact) => contact.email === email && email);
        const checkNumber = contacts.find((contact) => contact.number === parseInt(number) );

        if(!email || !number || !name){
            toast.warning("Please fill all the fields");
        }

        if(checkEmail){
            toast.error("This email is used");
        }
        if(checkNumber){
            toast.error("This number is used");
        }
        // navigate("/")

        if(email && number && agent && name && riot){
        const data={
            id:contacts[contacts.length -1].id +1,
            name,
            email,
            number,
            agent,
            riot
        }

        dispatch({type:"ADD_TO_CONTACT" , payload:data});
        toast.success("student added");
        navigate("/");
    }
    else{
        toast.error("All fields need to fill")
    }
    } 
    
    
  return (
    <div className='add'>
        <div className='addheader'>
            Fill to Join the Table
        </div>
        <div className='col-md-6 shadow mx-auto my-10'>
        <form onSubmit={handleSubmit}>
        <div className="form-group margin">
                <input type="text" className="form-control" placeholder="name" aria-label="name" 
                value={name} onChange={e=>setName(e.target.value)} />
            </div>

            <div className="form-group margin">
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" 
                value={email} onChange={e=>setEmail(e.target.value)} />
            </div>

             <div className="form-group margin">
                <input type="number" className="form-control" placeholder="Phone number" aria-label="number" 
                value={number} onChange={e=>setNumber(e.target.value)} />
            </div>
            <div className="form-group margin">
                <input type="text" className="form-control" placeholder="Main Agent Name" aria-label="agent" 
                value={agent} onChange={e=>setAgent(e.target.value)} />
             </div>
             <div className="form-group margin">
                <input type="text" className="form-control" placeholder="Riot Name" aria-label="riot" 
                value={riot} onChange={e=>setRiot(e.target.value)} />
             </div>
             <div className='.edit-btn'>
             <div className="form-group margin">
                <input type="submit" className="btn btn-outline-dark" value="Add Me" />
             </div>
             <div className="form-group margin">
                <Link to="/" className='go-back' >Go back</Link>
             </div>
             </div>
        </form>
        </div>
    </div>
  )
}

export default Add
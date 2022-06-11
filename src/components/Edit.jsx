import React , {useState , useEffect} from 'react';
import "../App.css";
import {Link , useParams} from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';

const Edit = () => {
    const {id} = useParams();

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [agent , setAgent] = useState("");
    const [riot , setRiot] = useState("");

    const contacts = useSelector((state)=> state);

    const currentContact = contacts.find(contact => contact.id === parseInt(id));

useEffect(()=>{
if(currentContact){
    setName(currentContact.name);
    setEmail(currentContact.email);
    setNumber(currentContact.number);
    setAgent(currentContact.agent);
    setRiot(currentContact.riot);
}
} , currentContact )



const dispatch = useDispatch();
const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
    const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) );

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

    const data={
        id:parseInt(id),
        name,
        email,
        number,
        agent,
        riot
    }

    dispatch({type:"UPDATE_CONTACT" , payload:data});
    toast.success("student updated added");
    navigate("/");
} 


  return (
    <div className='add'>
    {
        currentContact ? (<>
  
        <div className='addheader'>
            Edit to Contact with Id_{id}
        </div>
        <div className='col-md-6 shadow mx-auto my-10'>
        <form onSubmit={handleSubmit}>
        <div className="form-group margin">
                <input type="text" className="form-control" placeholder="name" aria-label="name" 
                value={name} onChange={e=>setName(e.target.value)}/>
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
             <div className='edit-btn'>
             <div className="form-group margin">
                <input type="submit" className="btn btn-outline-dark" value="UPDATE student" />
             </div>
             
             <Link to="/" style={{ height: "6vh" , marginTop: "16px" , marginRight:"20px"}} className='btn btn-outline-danger'>Cancel</Link>
             </div> 
        </form>
        </div> </>) : (<><h1> Edit to Contact {id} not found</h1></>) }
    </div>
  )
}

export default Edit
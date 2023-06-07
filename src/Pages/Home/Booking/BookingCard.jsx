import React from 'react'; 
import "./BookingCard.css"
import { Button } from 'react-bootstrap';
import { removeFromDb } from '../../../Utilites/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { FaTrashAlt } from "react-icons/fa";

const BookingCard = ({movie,cart,setCart}) => { 
    const img=movie.show?.image.original 
    const mov=movie.show

    const removeItem=(item)=>{ 
        const newcart=[...cart,item]; 
        setCart(newcart); 
        removeFromDb(item.id) 
        toast("Delete Successfully !")
       }
    return (
        <div className='Movie-Card p-2 d-flex justify-content-between my-5 rounded-3  align-items-center' style={{height:"120px",backgroundColor:"#2b2a2a"}}>
            <img className='rounded-3' style={{height:"100px",width:"70px"}} src={img} alt="" /> 
            <h3 className='ps-3 text-white'>Movie: {mov?.name}</h3> 
            <ToastContainer></ToastContainer>
            <div>
            <Button style={{backgroundColor:"red",border:"none"}} onClick={()=>removeItem(mov)}><FaTrashAlt></FaTrashAlt></Button> 
            </div>
        </div>
    );
};

export default BookingCard;
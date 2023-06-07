import React from "react";
import { Button } from "react-bootstrap"; 
import "./MovieCard.css"
import { Link} from 'react-router-dom';

const MovieCard = ({movie}) => { 
   const img=movie.image.original
   const id=movie.id
  return (
    <div className="col-4 mt-4">
      <div class="card" style={{width:"250px",height:"400px"}}>
        <img src={img} style={{height:"100%"}} class="card-img-top" alt="..." />
     <Button className="view-btn border-0 rounded-1 mx-auto" style={{backgroundColor:"white",color:"black",marginTop:"-70px",width:"70%"}}>
     <Link style={{textDecoration:"none",fontWeight:"semibold"}} to={`/moviedetails/${id}`}>
        View Details
     </Link>
        </Button>
     </div>
    </div>
  );
};

export default MovieCard;

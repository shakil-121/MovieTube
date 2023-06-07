import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa"; 
import Modal from 'react-bootstrap/Modal';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const selectedId = useParams();
  const ID = selectedId.id;
  // console.log(ID);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  // console.log(movies);
  const movie = movies.find((mov) => mov.show.id == ID);
  const mov = movie?.show;
  console.log(mov); 


//   for this part for craete modal  
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div
        className="d-flex my-5"
        style={{ height: "400px", width: "100%", border: "2px #000" }}
      >
        <img src={mov?.image.original} alt="" />
        <div className="ps-4">
          <h1>{mov?.name}</h1>
          <p>Premiered: {mov?.premiered}</p>
          <p>LAnguage: {mov?.language}</p>
          <p>Details: {mov?.summary}</p>

          {/* modal for ticket booking  */}
          <>
            <Button variant="danger" onClick={handleShow}>
              <FaRegBookmark></FaRegBookmark> Book Ticket
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Ticket Booking</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               <div>
               <h3>Movie Name : {mov?.name}</h3> 
                <p>Premiered :{mov?.premiered}</p>
                <p>Language :{mov?.language}</p>
                <p>Rating :{mov?.rating.average}</p>
               </div>
               <div>
                <img className="img-fluid" src={mov?.image.original} alt="" />
               </div>
                

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Book Now
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </Container>
  );
};

export default MovieDetails;

import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaRegBookmark, FaCalendar, FaClock } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "./MovieDetails.css";
import { addToDb } from "../../../Utilites/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // for local storage
  const [cart, setCart] = useState([]);

  const addToLocal = (job) => {
    const newcart = [...cart, job];
    setCart(newcart);
    addToDb(job.id);
    toast("Booking Successfully");
  };

  return (
    <div className="MovDetails">
      <Container>
        <div
          className="d-md-flex py-3"
          style={{ height: "400px", width: "100%", border: "2px #000" }}
        >
          <img
            className="rounded-2"
            style={{ height: "100%" }}
            src={mov?.image.original}
            alt=""
          />
          <div className="ps-4 pt-5 text-white">
            <h1>{mov?.name}</h1>
            <div className="d-flex">
              <p>
                <FaCalendar style={{ color: "red" }}></FaCalendar> Premiered:{" "}
                {mov?.premiered}
              </p>
              <p className="ps-4">Language: {mov?.language}</p>
              <p className="ps-4">
                {" "}
                <FaClock style={{ color: "red" }}></FaClock>{" "}
                {mov?.averageRuntime}min
              </p>
            </div>
            <p>Details: {mov?.summary}</p>

            {/* modal for ticket booking  */}
            <>
              <Button
                style={{ backgroundColor: "red", border: "none" }}
                onClick={handleShow}
              >
                <FaRegBookmark></FaRegBookmark> Book Ticket
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Ticket Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <h3>Movie Name : {mov?.name}</h3>
                    <p>
                      <FaCalendar style={{ color: "red" }}></FaCalendar>{" "}
                      Premiered :{mov?.premiered}
                    </p>
                    <p>Language :{mov?.language}</p>
                    <p>Rating :{mov?.rating.average}</p>
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src={mov?.image.original}
                      alt=""
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    onClick={() => addToLocal(mov)}
                    style={{ backgroundColor: "red", border: "none" }}
                  >
                    Book Now
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </Container>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MovieDetails;

import React from "react";
import img from "../../assets/banner/services_img02.jpg"; 
import "./Download.css" 
import { FaPhotoVideo , FaVideo} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Download = () => {
  return (
    <div className="download-Section py-5 bg-white">
      <div className="md-d-flex container justify-content-between" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="2000"
     data-aos-duration="2000">
      <div>
        <p style={{color:"red"}}>ONLINE STREAMING</p>
        <h1>Download Your Shows <br /> <span style={{color:"red"}}>Watch Offline.</span></h1> 

        <div className="d-flex align-items-center mt-4">
         <FaPhotoVideo style={{height:"50px",width:"50px",border:"2px"}}></FaPhotoVideo> 
          <div className="ps-4">
            <h4>Enjoy on Your TV.</h4>
            <p>Lorem ipsum dolor sit amet, consecetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
         <FaVideo style={{height:"50px",width:"50px",border:"2px"}}></FaVideo> 
          <div className="ps-4">
            <h4>Watch Everywhere.</h4>
            <p>Lorem ipsum dolor sit amet, consecetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        
      </div>
      <div>
        <img style={{width:"98%"}} src={img} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Download;

import React from "react";
import logo from "../assets/logo2.png";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div style={{ height: "220px", backgroundColor: "black",fontFamily:"roboto" }}>
      <Container>
        <img src={logo} style={{ height: "120px" }} alt="" />
        <h6 className="ps-3 text-white">
          This is a best online movie <br /> watching site .
        </h6>
        <p className="text-center text-white py-2">
          Copyright©{" "}
          <a className="text-white" href="https://www.linkedin.com/in/md-shahadat-shakil/">
            SHAHADAT HOSSAIN
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;

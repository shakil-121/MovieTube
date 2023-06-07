import React from "react";
import logo from "../assets/logo2.png";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div style={{ height: "200px", backgroundColor: "black",fontFamily:"roboto" }}>
      <Container>
        <img src={logo} style={{ height: "120px" }} alt="" />
        <h5 className="ps-3 text-white">
          This is a best online movie <br /> watching site .
        </h5>
        <p className="text-center text-white">
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

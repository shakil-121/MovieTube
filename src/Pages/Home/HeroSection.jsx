import React from "react";
import "./HeroSection.css";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const handleType = () => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="banner" style={{ height: "80vh" }}>
      <div className="overlay">
        <div style={{paddingTop:"200px"}} className="d-flex justify-content-center  align-items-center">
          <h1
            className="fw-bold"
            style={{ color: "white", margin: "auto 0", fontWeight: "normal" }}
          >
            Watch Your Favorite{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Hollywood Movie",
                  "Bollywood Movie",
                  "TV Shows",
                  "and",
                  "More",
                ]}
                loop={100}
                cursor
                cursorStyle="..."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
        <div style={{width:'30%'}} class="input-group mb-3 mx-auto pt-5">
          <input
            type="text"
            class="form-control"
            placeholder="Type your favorite one"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

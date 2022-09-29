import React from "react";
import "./styles.css";
import homeImage from "../../../assets/images/dev.svg";

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff}>
      <div className="container">
        <div className="row">
          <div id="intro-section" className="col">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <p
                    
                    style={{ color: "#64ffda" }}
                    >Hi, my name</p>
                    <h3
                      className="fw-bold"
                      style={{ color: "#ccd6f6",fontSize:"60px" }}
                    >
                      Muhammed Muzammil K
                    </h3>
                    <h6
                    className="display-8"
                    style={{ color: "#8892b0",fontSize:"20px" }}
                    >
                      Full-Stack Web Developer
                    </h6>
                    <a className="btn"
                    style={{
                       color: "#64ffda",
                       border:"1px solid #64ffda",
                       borderRadius:"4px",
                       padding:"1.25rem 1.75rem",
                       fontSize:"16px",
                       fontFamily:'"SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"',
                       lineHeight:1,
                       cursor:"pointer",
                       transition:"all 0.25s cubic-bezier(0.645,0.045,0.355,1);",
                       marginTop: "50px",
                       textDecoration:"None"
                      
                      
                      }}
                    >check out my works!</a>
                    {/* <hr className=" my-4 text-light" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-inline">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4 mt-3 ms-5 text-center dev-img">
                    <img
                      className="img-fluid mt-3 ms-5 "
                      src={homeImage}
                      alt="home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;

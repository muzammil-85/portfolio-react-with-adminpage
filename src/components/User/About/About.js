import React,{ useEffect } from "react";
import "./About.css";
import { useSelector, useDispatch } from "react-redux";
import { getAbout } from "../../../actions/aboutAction";

const About = ({ reff }) => {
  const abouts = useSelector((state) => state.abouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  const about = abouts.map((res) => {
   
    return(
      <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={res.image} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              {res.description}
            </p>
          </div>
        </div>
    )
  });

  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        {about}
      </div>
    </section>
  );
};

export default About;

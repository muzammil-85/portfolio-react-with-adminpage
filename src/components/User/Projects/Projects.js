import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    console.log(proj.url);
    const tech = proj.technologies.map((res) =>{
      return(
        <p style={{ fontSize: "12px" }}> {proj.name}</p>
      )})
    return ( 
      <div
        key={proj.id}
        className="col-lg-4 col-12 mb-lg-0 mb-4 mt-lg-5 py-3 shadow-lg bg-white rounded"
      >
        <div className="view overlay rounded z-depth-1">
          <ModalImage
            small={proj.images[0].images}
            large={proj.images[0].images}
            alt={proj.title}
          />
        </div>
        <div className="card-body pb-0">
          <h4 className="font-weight-bold ">{proj.title}</h4>
          <p className="grey-text">{proj.description}</p>
          <p
            className=" fw-bold"
            style={{
              fontSize: "14px",
              color: "#55107E",
              display: "inline",
            }}
          >
            Technologies:
          </p>
          {tech}
          {proj.url && (
            <a
              className="btn btn-primary btn-sm shadow-none mb-0"
              target="_blank"
              rel="noreferrer"
              href={proj.url}
            >
              <i className="fa fa-clone left"></i> View project code
            </a>
          )}
        </div>
      </div>
    );
    
  });

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-5">Projects</h2>

        <div className="row text-center d-inline-flex">{project}</div>
      </div>
    </section>
  );
};

export default Projects;

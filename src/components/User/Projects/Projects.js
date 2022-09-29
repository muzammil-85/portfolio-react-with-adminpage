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
      console.log(res);
      return(
        <p style={{ fontSize: "12px",display:"inline" }}> {res.name}</p>
      )})
    return ( 
      <div
        key={proj.id}
        className="col-lg-4 col-12 mb-lg-0 mb-4 mt-lg-5 py-3 shadow-lg rounded"
        style={{backgroundColor: "#112240",marginRight:"20px"}}
      >
        <div className="view overlay rounded z-depth-1">
          <ModalImage
            small={proj.images[0].images}
            large={proj.images[0].images}
            alt={proj.title}
          />
        </div>
        <div className="card-body pb-0">
          <h4 className="font-weight-bold " style={{
              
              color: "#64ffda",
              display: "inline",
            }}>{proj.title}</h4>
          <p className="grey-text">{proj.description}</p>
          <p
            
            style={{
              fontSize: "10px",
              color: "#64ffda",
              display: "inline",
            }}
          >
            Technologies:
          </p>
          {tech}
          {proj.url && (
            <div className="card-footer">
            <a
              className="btn btn-sm shadow-none"
              target="_blank"
              rel="noreferrer"
              href={proj.url}
              style={{
                bottom:0,
                
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
                textDecoration:"None",
                display:"block",
                

                
               
               }}
            >
              <i className="fas fa-clone" 
              ></i> View project code
            </a></div>
          )}
        </div>
      </div>
    );
    
  });

  return (
    <section
      id="projects"
      ref={reff}
      className="card text-center py-5"
      style={{ backgroundColor: "#0a192f"}}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-5" style={{color:"#ccd6f6"}}>Projects</h2>

        <div className="row text-center d-inline-flex" style={{color:"#8892b0"}}>{project}</div>
      </div>
    </section>
  );
};

export default Projects;

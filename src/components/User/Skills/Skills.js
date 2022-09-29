import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";

const Skills = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const colors = {
    bar: "#3498db",
    title: {
      text: "#ccd6f6",
      background: "#2980b9",
    },
  };
  const skill = skills.map((res) => {
    console.log(res);
    return(
      <div key={res.id} className="d-inline" style={{ color: "#ccd6f6" }}>
                
                <ul style={{display: "inline"}}>
                  <li style={{listStyleType: "none",display:"inline-block"}}>
                      <i class={res.clas} style={{ color: "#64ffda",fontSize:"40px"}}></i><br />
                      <label style={{ color: "#8892b0",display:"block"}}>{res.name}</label>
                  </li>
                </ul>
                
                
      </div>
      );
  });
  
  return (
    <div ref={reff} className="pt-0 pb-5" style={{ backgroundColor: "#0a192f" }}>
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-4" style={{color:"#ccd6f6"}}>
          Skills
        </h2>
        {skill}
      </div>
    </div>
  );
};

export default Skills;

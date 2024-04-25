import React from "react";
function Pro(props){
  const projectsData = [
    {
      title: "Project 1",
      description: "This is the first project description.",
      imageUrl: "/project1.jpg"
    },
    {
      title: "Project 2",
      description: "This is the second project description.",
      imageUrl: "/project2.jpg"
    }
  ];
    return <div className="pro">
    <div className="img">
      <h2>{props.name}</h2>
      <img src={props.img} alt="" srcset="" />
    </div>
    <div className="proinfo">
      <h4>{props.h1}</h4>
      <h3>{props.h2}</h3>
      <div className="probox">
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
    </div>
    </div>
  </div>
}
export default Pro;
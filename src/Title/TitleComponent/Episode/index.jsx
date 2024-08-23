import React from "react";
import "./index.css";
function Episode(props) { 
  return (
    <div>
      <li className="episode">
        <figure>
          <span className="episode-thumbnail-gradient"></span>
          <img
            className="episode-thumbnail-image"
            lazy-src={props.img}
            alt=""            
          />
        </figure>
        <div className="season-metadata flex">
          <h3 className="episode-title">{props.number}.{props.name}</h3>
          <span className="episode-runtime">{props.runtime}</span>
        </div>
        <p className="episode-synopsis">
          {props.synopsis}
        </p>
      </li>
    </div>
  );
}

export default Episode;

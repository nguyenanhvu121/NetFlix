import React from "react";
import Episode from "../Episode";
import "./index.css";
function Season(props) { 
  const api = props.api;  
  return (
    <div>
      {api.map((result) => (
        <div id={result.id} key={result.id} className={`season season-active`}>
          <div className="season-metadata">
            <div className="season-release-year">
              Năm phát hành: {result.yOB}
            </div>
            <p className="season-synopsis">{result.sysnopsis}</p>
          </div>
          <ol className="episodes-thumbnail">
            {result.listEpisode.map((result) => (
              <Episode
                number={result.id}
                key={result.id}
                img={result.img}
                name={result.title}
                runtime={result.runtime}
                synopsis={result.synopsis}
              />
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Season;

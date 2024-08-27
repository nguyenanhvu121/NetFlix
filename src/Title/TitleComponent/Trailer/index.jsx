import React, { useEffect, useState } from "react";
import "./index.css";
import play from "./image/play.png";
import pause from "./image/pause.png";
import Watch from "../WatchTrailer";
function Trailer(props) {
  let data = props.data;
  const [title, setTitle] = useState();
  const [poster, setPoster] = useState();
  const [video, setVideo] = useState();  
  let myTimeOut;
  let loadAround;
  const handleClick = (result) => {
    loadAround = document.querySelector(".load-arround");
    const buttonPlay = document.querySelector(".timeLine-buttonPlay");
    const watch = document.querySelector(".watch"); ;    
    watch.classList.toggle("none");
    buttonPlay.src = pause;
    buttonPlay.classList.add("pause");
    loadAround.classList.toggle("none");
    setTitle(result.trailerSeason);
    setPoster(result.trailerPoster);
    setVideo(result.trailerVideo);
    const myTimeOut = setTimeout(() => {
      document.querySelector(".watch-poster-video").play();
      document.querySelector(".timeLine").classList.remove("none");
      document.querySelector(".watch-grene-text").classList.add("hideGenre");
    }, 2000);
  };
  useEffect(() => {    
    const timeFunc = () => {
      clearTimeout(myTimeOut);
      if (!document.querySelector(".timeLine").classList.contains("none")) {
        document.querySelector(".timeLine").classList.add("none");
      }
      if (!loadAround.classList.contains("none")) {
        loadAround.classList.toggle("none");
      }
    };
    document.querySelector(".dark-watch").addEventListener("click", () => {
      timeFunc();
    });
    document.querySelector(".close-watch").addEventListener("click", () => {
      timeFunc();
    });
  }, []);
  return (
    <div className="">
      <div className="flex">
        {data.map((result) => (
          <div key={result.id} onClick={() =>{handleClick(result)}} className="trailer">
            <img
              style={{ height: "150px", backgroundColor: "rgb(62, 60, 60)" }}
              lazy-src={result.trailerPoster}
              alt=""
            />
            <div className="trailer-title">
              <span>{result.trailerSeason}</span>
            </div>
            <span className="trailer-button flex">
              <img src={play} alt="" />
            </span>
          </div>
        ))}
      </div>
      <Watch grene={props.genre} video={video} title={title} poster={poster} />
    </div>
  );
}

export default Trailer;

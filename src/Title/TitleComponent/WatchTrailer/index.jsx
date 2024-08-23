import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import play from "./image/play.png";
import pause from "./image/pause.png";
import list from "./image/list.png";
import speaker from "./image/speaker.png";
import fullScreen from "./image/fullScreen.png";
import close from "./image/close.png";
import mute from "./image/mute.png";
import exitFullscreen from "./image/exitFullscreen.png";
function Watch(props) {
  const [videoLength, setVideoLength] = useState(0);
  const [minFm, setMinFm] = useState(0);
  const [seFm, setSeFm] = useState(0);
  const [checkVoid, setCheckVoid] = useState(1);
  const [iconFullscreen, setIconFullscreen] = useState(fullScreen);
  const [checkPause, setCheckPause] = useState(false);
  let videoWatch;
  let buttonPlay;
  let watch;
  useEffect(() => {
    videoWatch = document.querySelector(".watch-poster-video");
    buttonPlay = document.querySelector(".timeLine-buttonPlay");
  });
  const handleBlock = () => {
    document.querySelector(".watch").classList.toggle("none");
    videoWatch.load();
  };
  const handlePlay = () => {
    if (buttonPlay.classList.contains("pause")) {
      videoWatch.pause();
      buttonPlay.classList.remove("pause");
      buttonPlay.src = play;
      document.querySelector(".load-pause").classList.replace("none", "flex");
      document.querySelector(".load-play").classList.replace("flex", "none");
    } else {
      buttonPlay.classList.add("pause");
      buttonPlay.src = pause;
      videoWatch.play();
      document.querySelector(".load-play").classList.replace("none", "flex");
      document.querySelector(".load-pause").classList.replace("flex", "none");
    }
  };
  const handleInput = (event) => {
    videoWatch.volume = event.target.value;
    if (event.target.value == 0) {
      document.querySelector(".button-speaker-icon").src = mute;
      document.querySelector(".watch-poster-video").muted = true;
    } else {
      document.querySelector(".button-speaker-icon").src = speaker;
      document.querySelector(".watch-poster-video").muted = false;
    }
    setCheckVoid(event.target.value);
  };
  const handleVoid = (event) => {
    if (!event.target.classList.contains("muted")) {
      videoWatch.muted = true;
      event.target.classList.add("muted");
      event.target.src = mute;
      document.querySelector(".speaker-range").value = 0;
    } else {
      videoWatch.muted = false;
      event.target.classList.remove("muted");
      event.target.src = speaker;
      document.querySelector(".speaker-range").value = checkVoid;
    }
  };
  console.log(watch);
  return (
    <div>
      {
        <div className={`watch none`}>
          <div onClick={handleBlock} className="dark-watch"></div>
          <div className="watch-main">
            <div className="watch-title flex">
              <h2>{props.title}</h2>
              <div onClick={handleBlock} className="close-watch">
                <img style={{ width: "20px" }} src={close} alt="" />
              </div>
            </div>
            <div>
              <div onClick={handlePlay} className="watch-poster">
                <video
                  onTimeUpdate={(event) => {
                    document.querySelector(".range").value =
                      event.target.currentTime;
                    setMinFm(
                      Math.floor((videoLength - event.target.currentTime) / 60)
                    );
                    if ((videoLength - event.target.currentTime) % 60 > 10) {
                      setSeFm(
                        Math.floor(
                          (videoLength - event.target.currentTime) % 60
                        )
                      );
                    } else {
                      setSeFm(
                        `0${Math.floor(
                          (videoLength - event.target.currentTime) % 60
                        )}`
                      );
                    }
                  }}
                  onPlay={() => {                    
                    document.querySelector(".load-arround").classList.add("none");
                    setVideoLength(videoWatch.duration);
                    document.addEventListener("keypress", (e) => {
                      if (e.key === "f") {
                        document
                          .querySelector(".watch-main")
                          .classList.add("screen");
                        document
                          .querySelector(".watch-title")
                          .classList.add("none");
                        document.querySelector(".watch-grene").style.top = "5%";
                        document
                          .querySelector(".key-screen")
                          .classList.remove("fullscreen");
                        setIconFullscreen(exitFullscreen);
                      }
                    });                    
                  }}
                  poster={props.poster}
                  className="watch-poster-video"
                  style={{ width: "100%" }}
                  onEnded={(event) => {
                    event.target.load();
                    document.querySelector(".timeLine").classList.add("none");
                    document
                      .querySelector(".watch-grene-text")
                      .classList.remove("hideGenre");
                  }}
                  src={props.video}
                  min="0"
                  max="100"
                ></video>
                <div className="loadmentor load-arround none">
                  <div className="load"></div>
                </div>
                <div className="watch-grene">
                  <span className="watch-grene-text">
                    Xếp Hạng {props.grene}{" "}
                  </span>
                </div>
                <div className="loadmentor load-active load-play none">
                  <img src={play} alt="" />
                </div>
                <div className="loadmentor load-active load-pause none">
                  <img src={pause} alt="" />
                </div>
              </div>
              <div className="timeLine none">
                <div className="timeline-main none">
                  <div className="timeLine-range flex">
                    <input
                      type="range"
                      name=""
                      id=""
                      defaultValue={0}
                      min={0}
                      max={videoLength}
                      className="range"
                      onChange={(event) => {
                        videoWatch.currentTime = event.target.value;
                      }}
                    />
                    <span>
                      {minFm}:{seFm}
                    </span>
                  </div>
                  <div className="timeLine-list-button flex">
                    <div className="timeLine-button flex">
                      <div onClick={handlePlay} className="">
                        <img
                          className="timeLine-buttonPlay pause"
                          src={pause}
                          alt=""
                        />
                      </div>
                      <div className="timeLine-buttonSpeaker">
                        <img
                          onClick={(event) => handleVoid(event)}
                          className="button-speaker-icon"
                          src={speaker}
                          alt=""
                        />
                        <div className="setvoid">
                          <input
                            onChange={(event) => handleInput(event)}
                            className="speaker-range"
                            step={0.1}
                            defaultValue={1}
                            min={0}
                            max={1}
                            type="range"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="timeLine-button flex">
                      <div className="timeLine-buttonList">
                        <img src={list} alt="" />
                      </div>
                      <div
                        onClick={(event) => {
                          if (event.target.classList.contains("fullscreen")) {
                            document
                              .querySelector(".watch-main")
                              .classList.add("screen");                          
                            document
                              .querySelector(".watch-title")
                              .classList.add("none");
                            document.querySelector(".watch-grene").style.top =
                              "5%";
                            event.target.classList.remove("fullscreen");
                            setIconFullscreen(exitFullscreen);
                            document.addEventListener("keydown", (e) => {
                              if (e.key === "Escape") {
                                document
                                .querySelector(".watch-main")
                                  .classList.remove("screen");
                                event.target.classList.add("fullscreen");
                                document
                                  .querySelector(".watch-title")
                                  .classList.remove("none");
                                document.querySelector(
                                  ".watch-grene"
                                ).style.top = "15%";
                                setIconFullscreen(fullScreen);                                
                              }
                            });
                          } else {                                                      
                            document
                              .querySelector(".watch-main")
                              .classList.remove("screen");
                            event.target.classList.add("fullscreen");
                            document
                              .querySelector(".watch-title")
                              .classList.remove("none");
                            document.querySelector(".watch-grene").style.top =
                              "15%";
                            setIconFullscreen(fullScreen);
                          }
                        }}
                        className="timeLine-buttonFullScreen"
                      >
                        <img
                          className="key-screen fullscreen"
                          src={iconFullscreen}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Watch;

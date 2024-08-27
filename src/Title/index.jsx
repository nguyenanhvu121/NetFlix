import React, { useEffect, useState } from "react";
import "./index.css";
import Season from "./TitleComponent/Season";
import Trailer from "./TitleComponent/Trailer";
import Button from "./TitleComponent/Button";
import logo from "./TitleComponent/image/logo.png";
import { useNavigate } from "react-router-dom";
function Title(props) {
  const fakeApi = props.api;
  let data;
  fakeApi.map((result) => {
    data = result;
  });
  const loadImg = (img) => {
    const url = img.getAttribute("lazy-src");
    img.setAttribute("src", url);
    img.style.height = "unset";
  };
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      var lazyImgs = document.querySelectorAll("[lazy-src");
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImg(entry.target);
          }
        });
      });
      lazyImgs.forEach((img) => {
        observer.observe(img);
      });      
    }
    document
      .getElementById("1")
      .classList.replace("season-active", "season-inactive");
    const info = document.querySelector(".info");
    const logo = document.querySelector(".title-logo");
    info.addEventListener("scroll", () => {
      if (info.scrollTop > 10) {
        logo.classList.add("none");
      } else {
        logo.classList.remove("none");
      }
    });  
  }, []);
  const handleSelect = (event) => {
    const season = document.querySelectorAll(".season");
    season.forEach((element) => {
      element.classList.replace("season-inactive", "season-active");
    });
    document
      .getElementById(event.target.value)
      .classList.replace("season-active", "season-inactive");
  };
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/");
  };
  const handleDark = () => {
    document.querySelector(".infoTitle").classList.toggle("none");
    document.querySelector("body").classList.toggle("body");
    document.querySelector(".videoPoster").play();
  };
  return (
    <div>
      <div onClick={handleProducts} className="title-logo">
        <img src={logo} alt="" />
      </div>
      <div onClick={handleDark}
        style={{ cursor: "pointer" }}
        className="infoDark"
      ></div>
      <div
        style={{
          width: props.width,
          height: props.height,
          top: props.top,
          left: props.left,
          position: props.position,
          animation: props.animation,
        }}
        className="info"
      >
        <div className="infoPoster">
          <img src={props.icon} alt="" />
          <span className="info-poster-thumnail"></span>
        </div>
        <div className={`prize flex ${data.title.award.check}`}>
          <p>{data.title.award.award}</p>
        </div>
        {data.trailer.length > 0 && (
          <div className="video-info">
            <div
              style={{ marginLeft: "4%" }}
              className="infoContentHeader flex"
            >
              <h1
                style={{
                  borderRight: "solid 1px",
                  paddingRight: "10px",
                  marginRight: "15px",
                }}
              >
                Video
              </h1>{" "}
              <h2>{data.title.nameFilm}</h2>
            </div>
            <div className="video-info-list flex">
              <Trailer
                genre={data.title.ar}
                func={() => {}}
                data={data.trailer}
              />
            </div>
          </div>
        )}
        <div style={{ top: "20%" }} className="title">
          <img width={"45%"} src={props.title} alt="" />
          <div className={`${props.hideButton}`}>
            <div
              style={{
                width: "210px",
                justifyContent: "space-between",
                marginTop: "1%",
                position: "relative",
                zIndex: "0",
              }}
              className="flex"
            >
              <Button
                text="Play"
                icon={props.iconButtonPlay}
                width="100px"
                height="30px"
                sizeIcon="13px"
                color="rgba(0,0,0)"
                fontWeight="600"
                fontSize="15px"
                border="none"
                borderRadius="2px"
              />
              <Button
                class="button-icon plus"
                func={props.func}
                text="My list"
                position="relative"
                zIndex="-1"
                icon={props.iconMyList}
                width="100px"
                height="30px"
                sizeIcon="13px"
                backgroundColor="rgba(255,255,255,0.1)"
                color="rgba(255,255,255)"
                fontWeight="600"
                fontSize="15px"
                border="none"
                borderRadius="2px"
              />
            </div>
          </div>
          <div className="info-title">
            <h2>{data.title.nameFilm}</h2>
          </div>
          <ul className="flex" style={{ alignItems: "end" }}>
            <li className="yob">
              <span>{data.title.yob}</span>
            </li>
            <li className="ageLimit">
              <span>{data.title.ar}</span>
            </li>
            <li>{data.title.countSeason}</li>
            <li className="genre">
              <span>{data.title.genre}</span>
            </li>
          </ul>
          <p className="des">{data.title.describe}</p>
          <div className="cast">
            <span>Diễn viên chính: </span> {data.title.cast}
            Hiro
          </div>
          <div className="author">
            <span>Tác giả: </span>
            {data.title.author}
          </div>
        </div>
        <div className="titleFilm none">
          <div className="titleFilm-img">
            <img width={"200px"} src={props.title} alt="" />
          </div>
          <div className="titleFilm-button flex">
            <div style={{ marginTop: "1%" }} className="button flex"></div>
          </div>
        </div>
        <div className="infoContent" style={{ marginLeft: "4%" }}>
          <div className="infoContentHeader flex">
            <h1
              style={{
                borderRight: "solid 1px",
                paddingRight: "10px",
                marginRight: "15px",
              }}
            >
              Tập
            </h1>{" "}
            <h2>{data.title.nameFilm}</h2>
          </div>
          {data.listSeason.length > 1 && (
            <div className="info-content-select">
              <select
                onChange={(event) => handleSelect(event)}
                name="season"
                id="season"
              >
                {data.listSeason.map((result) => (
                  <option key={result.id} value={result.id}>
                    {result.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="season-list-container">
            <div className="season-list-container-season">
              <Season api={data.list} />
            </div>
          </div>
        </div>
        <div className="info-cast-film">
          <h1>Tìm hiểu thêm</h1>
          <div className="info-cast-film-main">
            <div>
              <h4>Xem ngoại tuyến</h4>
              <span>Tải xuống và xem mọi nơi</span>
            </div>
            <div className="info-genre">
              <h4>Thể loại</h4>
              {data.infoMoveFilm.genre.map((result) => (
                <span key={result.id}>{result.name}</span>
              ))}
            </div>
            <div>
              <h4>Chương trình này thuộc thể loại...</h4>
              <span>{data.infoMoveFilm.genreShow}</span>
            </div>
            <div className="introduction-to">
              <h4>giới thiệu về</h4>
              <span>
                Xem nội dung hậu trường và tìm hiểu tại <a>Tudum.com</a>
              </span>
            </div>
            <div className="but-actor">
              <h4>Dàn diễn viên</h4>
              <div className="">
                {data.infoMoveFilm.listCast.map((result) => (
                  <span key={result.id}>{result.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="similar-content">
          <h1>Nội dung tương tự</h1>
          <div className="similar-content-list">
            {data.similarContent.map((result) => (
              <a key={result.id} href={result.link}>
                <img lazy-src={result.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;

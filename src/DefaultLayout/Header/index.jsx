import React, { useEffect } from "react";
import logo from "./HeaderComponent/Image/logo.png";
import "./index.css";
import Search from "./HeaderComponent/Search/index";
import down from "./HeaderComponent/Image/down.png";
import Notification from "./HeaderComponent/Notification";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const handleGoProducts = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const handleGoProductx = () => {
    navigate("/PhimTruyenHinh");
    window.scrollTo(0, 0);
  };
  const handleGoProductFilm = () => {
    navigate("/Phim");
    window.scrollTo(0, 0);
  };
  const handleGoProducty = () => {
    navigate("/Moi&Phobien");
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const listChild = document.querySelectorAll(".item-list-list-item-child");
    listChild.forEach((element) => {
      element.addEventListener("mouseover", () => {
        document.querySelector(".icon-list").classList.remove("rotate");
      });
    });
  });
  return (
    <div>
      <div className="header flex">
        <div onClick={handleGoProducts} className="logo">
          <img className="icon" src={logo} alt="" />
        </div>
        <div className="navBar flex">
          <ul className="navBarList flex">
            <li onClick={handleGoProducts} className="navItem itemLeft navTag">
              Trang chủ
            </li>
            <li
              onClick={handleGoProductFilm}
              className="navItem itemLeft navTag"
            >
              Phim
            </li>
            <li onClick={handleGoProductx} className="navItem itemLeft navTag">
              Phim T.Hình
            </li>
            <li
              onClick={() => {
                alert("Đang cập nhật");
              }}
              className="navItem itemLeft navTag"
            >
              Danh sách của tôi
            </li>
            <li onClick={handleGoProducty} className="navItem itemLeft navTag">
              Mới & Phổ biến
            </li>
            <li className="navItem itemLeft navTag itemList flex">
              <div
                onMouseOut={() => {
                  document
                    .querySelector(".item-list-list-item")
                    .classList.add("none");
                  document
                    .querySelector(".icon-list")
                    .classList.remove("rotate");
                }}
                onMouseOver={() => {
                  document
                    .querySelector(".item-list-list-item")
                    .classList.remove("none");
                  document.querySelector(".icon-list").classList.add("rotate");
                }}
                className="item-list-header"
              >
                <span>Danh Sách</span>
                <img
                  className="icon-list"
                  style={{ width: "10px", marginLeft: "10px" }}
                  src={down}
                  alt=""
                />
              </div>
              <div className="item-list-list-item none">
                <ul>
                  <li
                    className="item-list-list-item-child"
                    onMouseOver={handleGoProducts}
                  >
                    Trang chủ
                  </li>
                  <li
                    className="item-list-list-item-child"
                    onMouseOver={handleGoProductFilm}
                  >
                    Phim
                  </li>
                  <li
                    className="item-list-list-item-child"
                    onMouseOver={handleGoProductx}
                  >
                    Phim T.Hình
                  </li>
                  <li className="item-list-list-item-child">
                    Danh sách của tôi
                  </li>
                  <li
                    onMouseOver={handleGoProducty}
                    className="item-list-list-item-child"
                  >
                    Mới & phổ biến
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="navBarList flex">
            <li className="navItem">
              <Search />
            </li>
            <li className="navItem navTag navChildren">Trẻ em</li>
            <li className="navItem notifi">
              <Notification />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

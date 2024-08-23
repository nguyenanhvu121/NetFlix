import { useEffect, useState } from "react";
import logo from "./image/logo.png";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";
import twitter from "./image/twitter.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const handleProduct = () =>{
    navigate('/')
  }
  const fakeApi = [
    {
      All: [
        {
          id: 1,
          name: "Unstable",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABe1CQiQlsVMpuDERKeDckssZCXXxvEF8TuN86Q8qFEFAFvQjhGUmLoWXnNMeVbjJxhZ7NMg1rNegHFs8kHUu7O7RL4Uamh36VPTHXCAXl_lnVVKyOf-9KMD8UR2H7dzEQN2PkA.jpg?r=5fc",
          date: "8/1/2024",
          link: "",
        },
        {
          id: 2,
          name: "A Good Girl's Guide to Murder",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVZlGzARffdSBHDgShN4qZG_ShHPhIuKPCm07FLZQ6BuG28Tuhn7dOErXmNhmysrM3XEOIY71ZURagV4Jc1th-DwufsLfgMnkWJ2qLxqKtl5qP7_ODk2u-rimiOgrck2C6lvbA.jpg?r=8bf",
          date: "8/1/2024",
          link: "",
        },
      ],
      Film: [
        {
          id: 1,
          name: "Borderless Fog",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRndQMPtfQreEkal6MvwU48UNuNZKBx8B5GTu7_G7Se09GgqP7UJ-wPC0a9F0CENWYpu80mPEACRJyRRwhLagGdPZR2rGYqEG-UbhINhxuC1gs2l04jIHU7fvfBaH9oEhVyUrQ.jpg?r=88c",
          date: "8/1/2024",
          link: "",
        },
        {
          id: 2,
          name: "Saving Bikini Bottom: The Sandy Cheeks Movie",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABaiwpQFd4I0op2eoLpUWN3nxYzUS0IkckUGMASRHrH8CAdmVFRny-Xz0mZoJQwxXeNnrihsV6d9jP9A5gsNLnau81VDvfyAbzq6xpLvJQKEsSNBrRQVh_29Ic9_eUmovGypdmA.jpg?r=577",
          date: "8/2/2024",
          link: "",
        },
      ],
      Series: [
        {
          id: 1,
          name: "Unstable",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABe1CQiQlsVMpuDERKeDckssZCXXxvEF8TuN86Q8qFEFAFvQjhGUmLoWXnNMeVbjJxhZ7NMg1rNegHFs8kHUu7O7RL4Uamh36VPTHXCAXl_lnVVKyOf-9KMD8UR2H7dzEQN2PkA.jpg?r=5fc",
          date: "8/1/2024",
          link: "",
        },
        {
          id: 2,
          name: "A Good Girl's Guide to Murder",
          poster:
            "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVZlGzARffdSBHDgShN4qZG_ShHPhIuKPCm07FLZQ6BuG28Tuhn7dOErXmNhmysrM3XEOIY71ZURagV4Jc1th-DwufsLfgMnkWJ2qLxqKtl5qP7_ODk2u-rimiOgrck2C6lvbA.jpg?r=8bf",
          date: "8/1/2024",
          link: "",
        },
      ],
      Game: [
        {
          id: 1,
          name: "Black Myth WoKong",
          poster:
            "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png",
          date: "20/8/2024",
          link: "",
        },
      ],
    },
  ];
  let dataMain;
  fakeApi.map((result) => {
    dataMain = result;
  });
  const [data, setData] = useState(dataMain.All);  
  useEffect(() => {
    const item = document.querySelectorAll(".new-header-item");
    item.forEach((element) => {
      element.addEventListener("click", () => {
        item.forEach((element) => {
          element.classList.remove("new-header-handle");
          element.firstElementChild.style.color = "#f72e38";
        });
        element.classList.add("new-header-handle");
        element.firstElementChild.style.color = "rgb(255,255,255)";
      });
    });
  });
  return (
    <div>
      <div className="new-main show">
        <div onClick={handleProduct} className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="new-title">
          <h1>Mới trên Netflix</h1>
        </div>
        <div className="new-content">
          <div className="new-main-header">
            <ul className="flex">
              <li onClick={() =>{setData(dataMain.All)}} className="new-header-item new-header-handle">
                <h3>All</h3>
              </li>
              <li onClick={() =>{setData(dataMain.Film)}} className="new-header-item">
                <h3>Film</h3>
              </li>
              <li onClick={() =>{setData(dataMain.Series)}} className="new-header-item">
                <h3>Series</h3>
              </li>
              <li className="new-header-item">
                <h3>Specials</h3>
              </li>
              <li onClick={() =>{setData(dataMain.Game)}} className="new-header-item">
                <h3>Games</h3>
              </li>
            </ul>
          </div>
          <div className="new-content-main">
            {data.map((result) => (
              <div key={result.id} className="new-content-item">
                <div className="new-content-poster">
                  <img src={result.poster} alt="" />
                </div>
                <div className="new-content-info none">
                  <h3 className="new-info-name">{result.name}</h3>
                  <span>{result.date}</span>
                  <h2>Watch on Netflix ➔</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="new-footer">
          <div className="head-footer flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="contact">
            <ul className="flex">
              <li>
                  <img src={twitter} alt="" />
              </li>
              <li className="insta">
                <img src={instagram} alt="" />
              </li>
              <li>
                  <img src={facebook} alt="" />
              </li>
            </ul>
          </div>
          </div>
          <div className="bottom-footer">
            <ul className="flex">
              <li>Careers</li>
              <li>Help Center</li>
              <li>Nexflix.com</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>© 2024 NexFlix</li>
            </ul>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

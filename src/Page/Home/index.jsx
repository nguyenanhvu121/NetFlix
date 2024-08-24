import React, { useEffect, useRef, useState } from "react";
import play from "../Image/play.png";
import plus from "../Image/plus.png";
import check from "../Image/check.png";
import mute from "../Image/mute.png";
import speaker from "../Image/speaker.png";
import reload from "../Image/reload.png";
import "./index.css";
import Button from "../PageComponent/Button";
import Content from "../ContentFilm";
import Header from "../../DefaultLayout/Header";
import video from "./Trailer/trailer.mp4";
import Footer from "../../DefaultLayout/Footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const posterRef = useRef();
  const videoRef = useRef();
  const titleRef = useRef();
  const describeRef = useRef();
  const iconMutedRef = useRef();
  const volunmRef = useRef();
  const volunmRefChild = useRef();  
  // let iconCheck = "muted";
  // const getTagClassList = (element, classA, classB) => {
  //   element.current.classList.replace(classA, classB);
  // };
  // const getClassToggle = (nameTag, nameToggle) => {
  //   nameTag.current.classList.toggle(nameToggle);
  // };
  // const getTagAdd = (nameTag, classAdd) => {
  //   nameTag.current.classList.add(classAdd);
  // };
  // let myTimeOut;
  // const timeLoad = () => {
  //   myTimeOut = setTimeout(() => {
  //     getClassToggle(posterRef, "none");
  //     getTagAdd(posterRef, "hide");
  //     getTagAdd(videoRef, "show");
  //     getClassToggle(videoRef, "none");
  //     getClassToggle(volunmRef, "none");
  //     videoRef.current.play();
  //     if (!!timeLoad) {
  //       clearTimeout(timeLoad);
  //     }    
  //     if (document.querySelector("body").offsetWidth > 900) {
  //       document.querySelector(".title-main-block").classList.add("zoomIn");
  //       document.querySelector(".describe-film").classList.add("hide");
  //     }
  //   }, 2000);
  // };
  // const volunmTP = (check, classNameTag, classReplace, iconCheck) => {
  //   videoRef.current.muted = check;
  //   getTagClassList(volunmRefChild, classNameTag, classReplace);
  //   iconMutedRef.current.src = iconCheck;
  // };
  // const volunm = (key) => {
  //   if (key.classList.contains("muted")) {
  //     volunmTP(false, "muted", "speaker", speaker);
  //     iconCheck = "speaker";
  //   } else if (key.classList.contains("speaker")) {
  //     volunmTP(true, "speaker", "muted", mute);
  //     iconCheck = "muted";
  //   } else if (key.classList.contains("reload")) {
  //     getTagClassList(posterRef, "show", "hide");
  //     getTagClassList(videoRef, "hide", "show");
  //     getClassToggle(videoRef, "none");
  //     getClassToggle(posterRef, "none");
  //     videoRef.current.play();
  //     if (iconCheck == "muted") {
  //       volunmTP(true, "reload", "muted", mute);
  //     } else {
  //       volunmTP(false, "reload", "speaker", speaker);
  //     }
  //   }
  // };
  const navigate = useNavigate();
  const handleTitle = (link) => {
    navigate(`/title/${link}`);
    // clearTimeout(myTimeOut);
    window.scrollTo(0,0);
  };
  const handleMylist = () => {
    const buttonIcon = document.querySelectorAll(".button-icon");
    buttonIcon.forEach((element) => {
      if (element.classList.contains("plus")) {
        element.classList.toggle("plus");
        element.firstChild.src = check;
      } else {
        element.firstChild.src = plus;
        element.classList.toggle("plus");
      }
    });
  };
  // const handleVideoEnd = () => {
  //   getClassToggle(videoRef, "none");
  //   getClassToggle(posterRef, "none");
  //   getTagClassList(videoRef, "show", "hide");
  //   getTagClassList(posterRef, "hide", "show");
  //   volunmRefChild.current.classList.replace(iconCheck, "reload");
  //   iconMutedRef.current.src = reload;
  //   if (
  //     document.querySelector(".title-main-block").classList.contains("zoomIn")
  //   ) {
  //     document
  //       .querySelector(".title-main-block")
  //       .classList.replace("zoomIn", "zoomOut");
  //     document
  //       .querySelector(".describe-film")
  //       .classList.replace("hide", "show");
  //   }
  // };
  let data;
  const api = [
    {
      id: "009",
      title:
        "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbHEEK-o3mZvlHsUcOAjB9y0kS5cd2cIdLpbI6L6-H027Ai84vogYym6IPOODjLz57br1Jx3TsM3-crbM15IDxWYyC_z7XCIiGuLYYhyRP45HgODf9mscXbxvYOrzzWyBG0CUn0hKuLfiAF3vr_-4B3PlkbYSMlrrFzKC_qqqCz_l14kRfOE5Q.png?r=33d",
      nameFilm: "Bóng ma Anh Quốc",
      describe:
        "Một băng đảng khét tiếng ở Birmingham, Anh vào năm 1919, được cầm đầu bởi Tommy Shelby, một trùm tội phạm hung dữ quyết tâm thăng tiến trong thế giới bất chấp mọi giá.",
      trending: {
        stt: "1",
        describe: "Top 1 trong tháng này",
      },
      poster:
        "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfiqv2Th67pFLpn6jzARZGNhBFTtaTfd4i5KPN1-WoxqDUerVqy4i7Yw_hRk146SO2KGIjra0RIIuHbv8oZ0m9LV5YZItZygejeC.jpg?r=15c",
      video: video,
      content: [
        {
          id: "1",
          nameGenreFilm: "Phim hành động",
          ListFilm: [
            {
              id: "1",
              link: "title/001",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUSmKKEJfrWvyZVEigRPzIuTZoDzgwndL1Jz76p4psMp4vVm4V-h4W0g6pFlArw2QRFYjtY8qakoF1p_3ejzWpuVVmMZjjWRvQxC-t0W-l5XgKWvZuF1M-RgpnjNtMi4BG3gpA.jpg?r=7aa",
            },
            {
              id: "2",
              link: "title/002",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5pNucsNhunag_-L0Kz-7tWy6fkvLKOmaY1WdTIOWN7PPu0mby34YEd8sxfxRCB7CNrY6o7cGoWNMmaUpFB3XOIdiNUz9WPL7siOEH62_sS8zmNnv1whRky9cl_mKZX6OOclw.jpg?r=c45",
            },
            {
              id: "3",
              link: "title/003",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZu6KWg6gh8u5dpz8RTpW143n1aZlmBX5IQpL_1dksjfY4iJXvjdJUaaHh64gUHOz006ugujSqMF_PouP0FufrM-H7qsqM7rxRAgOc2ezOkL5o4rCMsG1xPBVcfcRL-TnD_EWA.jpg?r=4c2",
            },
            {
              id: "4",
              link: "title/005",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRE7Sx10IqpC_AoLoSNQalNOAthiEZ9HiMiKBH8I04wBu44fAdTOLb1GzvBd81F9cRCUDDhJOgVJgL86sZ-Xrf8R5DqkGIFcJjaJD4OcqCg9VBGNhiZT1_UOUHhnU3XG5siXtg.jpg?r=686",
            },
            {
              id: "5",
              link: "title/004",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUJmRrR1WxFkLAl458ROHhXrEP7PbwVoeFSgHOBR_vJHUyK-gZJOMA5oOLl6g6IToqXrr5YBdJfMLY5ZSXvpHfQobsHOC3Jhs-qzOyPGAm90sUWmgI3R4X_vQRjkPASO7PS-6w.jpg?r=aa0",
            },
            {
              id: "6",
              link: "title/006",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdhBUnilnpcdPyJA15gil37EDV91HrOYV8GJJnb518z7YCaQiQxNJ5IjBJy7FBTBcx5sN7gtC66CZFpN7pVgvjkHs-7cY1L9nSXe.jpg?r=bad",
            },
            {
              id: "7",
              link: "title/007",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6f1RUUtdZ3v4wlqrohtKcimoIx7ogJWc_KARMSN3D_kWsH7gaFPoWb5CMvHRjCWNqZtUHXwvC2nDMfvVPdM5Gp0iCsrMJ8qUZe.jpg?r=4fa",
            },
            {
              id: "8",
              link: "title/009",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABStnkmN6TOqxFeB1Il4N0ERj7jLQehRq06yeSf76Nd943GEO5EK88NZ6PK1pcgx3mGwoTW8Vpl0viWhz0IiI6QVIfbTCbh05poK_CjbMA3Y5yHCRLMqiOPIz3Yg9YbNYzNb1qA.jpg?r=e89",
            },
          ],
        },
        {
          id: 2,
          nameGenreFilm: " Phim kinh dị",
          ListFilm: [
            {
              id: "9",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXe5OEjep2aDbtuxB2Vw5NleTo4rbeT01YkZg_2K26qeqYOPwfxQFma3AaHnVOp12LwYkm7DuPa9KUvZAknXWvvmE2T0q_hp9iqqO4XAkYEgHS0JH4hI3IfnGSOc84H8j_XT.jpg?r=6d5",
            },
            {
              id: "10",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVJ6dnDw4P-oYYpJEQp1VL80cRvEhdVw5iAH9EMHvnf1txSNHqq_MOR61Uv8uA54o7ZsufRMZ-yH74sb4zHaS1P4GaGFAUlqM4s.jpg?r=5df",
            },
            {
              id: "11",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdBdh2Owu9AUVE3y90smtdRDP6scfotzBbDauVfOoO1IzEBEHacdkVyA446fEb2USkYm-LoTKYgPBWQDxSBh16GousPwBFfSO0rTDIjYfCK-QtL3f_CMij88yLYoj03dP7zuhnnrjO3iIHHz4U57fjlEeAaHJ901LbpCJ4gfoTpmt9VGFG-qj4fBFd0PxRs.jpg?r=27d",
            },
            {
              id: "12",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTo8z3SDte9taNlbRcZ5T7UE30po4BZYMG4lNG3HpVG59Pqk4k3In5uMn-jXgPRUCGW9hBsT-8nmdFRG5h1pGGa_O_l3kVKCO43LdYoOc2FGIAg5R0zdgTGmt3qvqHoxmadi.jpg?r=8c7",
            },
            {
              id: "13",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcUfbIgOVhi37JyI83H8GeohSwo5tWjxGTO13MqRdAzV5L9fL-q3vZ_7c3MRCF43fRN-ZYLmz3K9Hih59QHnjQwNegb3Tc0rwTkecOW7aQzWHUk5wTryVGMVlY-qKXGvTw2y.jpg?r=a75",
            },
            {
              id: "14",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaNG6ojwso0FxycBlBZoY1-OAlMnyYMvWFPPZQZSJ6MNakD3nU5h7pv3oBNsUd6GHggBnYZM7NsrvbnsHHE4D4dveONAGBvnAzLymAM5zisGmMfGq9vuYklkInILI-vj0fOr.jpg?r=e39",
            },
            {
              id: "15",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ-aG3dIndJ_1gLJbExmClPh3ErC875OulnUanwL8RNy-j2pS0THDEfHqSa-FyoO6g0EIxmnCmL5bz232zcBb4aOhxOnCK3f7zA.jpg?r=a8e",
            },
            {
              id: "16",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSguv8vA8v1poM-agAnaoWeJyrxydcuDCyPJuQ4Q6eYqOSVzDm-McITVt6SHhSldMnKdLPchPIwD5z8iMJznvRs-KwAks_6FsLhvnIBrcehkrO62wmlTEYepwF8O_vhjd1Nt.jpg?r=5eb",
            },
          ],
        },
        {
          id: 3,
          nameGenreFilm: "Chương trình truyền hình khoa học viễn tưởng",
          ListFilm: [
            {
              id: "17",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSOdlBd5heNo6_L9aypGa8sEh28JixG3qC3D4vPm9lRtD65ebwjEdpHPFqIr_VhUFWK-2a6v7sZBS8Z-TRI1M_8APu-0jRAV4WU-UkLBC54tErgbUpPZOpXloeb2QexcAlj-.jpg?r=f2f",
            },
            {
              id: "18",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABddhukSjOq29e68mG7Z8iUC_o_FZvJC9JM_W9qbiEqWsWkD0nN1eZyczskTaFf-KD16YnuUgW3u6mQOBDI1vYKDsv5tEs2y0A6turwwJzakvRkBzHu5n8v-I6PLNhPKxRe-r.jpg?r=177",
            },
            {
              id: "19",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXPNMSciH0gcz0wspE3GG9857mJq9ajjLUpB-4skCx3qCHTlVXkXbUCz-NWZssqpecJr9W-sr_sjFkyc6VOaoYBBDuMA5Zh3M6TmWzJGW5q8G8TTRpQfCNQreBnF3HGkzjzZ.jpg?r=64f",
            },
            {
              id: "20",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVV5neLUMcLBGo_gOq0j-keg9Cx7uhzsFeVfjWpkLPvpYB-MhBmdh8u-SCQf_-cuvSHVWoEwWe7lMT5R68ATb0SuBScWEHAcocXcMIx8w4xZpICElDaB0K7bUUF2db9KArR-.jpg?r=603",
            },
            {
              id: "21",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABchXvQuSO9woW9VsmnblJQZjdl6Nf1pFTHZCDb3_qYQbGRvqnutomcjG9PZbOE7jvcKO2f1CzQNIeEARIaT1B-QhduaS6L-cs44.jpg?r=8da",
            },
            {
              id: "22",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaxxYrDVCYrDGCzuIINV7giWYXM88JspCg_8N2gv1u0VTKLk6N0j6tgLEC76HX474G5KvL-QZVqBle9L2_tteFjnxfaUE9SCD9UPV8PIDsGAH_cVDXLETujFqIte3mJu9phw.jpg?r=a1a",
            },
            {
              id: "23",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUkHIrtQIrYnzgWjXRxTHprgZkHJqMCt-jnmPFwoNf0GQIXJBxAgBEwo3O49OxWDguDScTa25bMbG7xtPVUn9vj7F934-FnxaSQvSz5Qbo8Z7-EiYp0G8QvFXk4gAkatoUkc.jpg?r=b9a",
            },
            {
              id: "24",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABddgJcDq1MJYSjgmIYg3tBCRQ5cMg3km3iAyEI_NY9Pk0Hqf6K_Frfq9FVTCTWWxDP8bb052Uh0Dpd0tUXcT_gfop-ke4RDs7mQFBL5bUuHYlT7A44qFVifpuvAEWdOf2deZ.jpg?r=72c",
            },
          ],
        },
        {
          id: 4,
          nameGenreFilm: "Phim truyền hình chính kịch",
          ListFilm: [
            {
              id: "25",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ15r4KZfZOJ34ibm726mvqtXcvXwBXOU8-Bb9w_LYuVQXyrdE76nCX8R1qQJZ9p6E4bZjeDsT3WftAv0vuM8WFydbMOskxwvM0.jpg?r=314",
            },
            {
              id: "26",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW9VexJI8YX5RwvWfKGIqClC_YjJKA54pjvt2rf-ra0o8QfA4ihLYOs4j9MFen9Ic4yFmHk3Ji8XM2Mp74EQeEujjQIJLRt8fvd8MRpT9aus5VUTAC2dTFX1HfUUSBUXFh0P.jpg?r=1b3",
            },
            {
              id: "27",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTqd8S8loxuZuMqzudioHY5hMqUUahBtDr5pC8mrwJdrhauV3lBh0jlUvCs2qIK2BKc2XeBYisMo_Zkg88iph50tusZKj2rg2kB-9eqYWlNLwkH2gUxyqNcse2yxy2WZBWJz.jpg?r=b6a",
            },
            {
              id: "28",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVllWV9Ur2wqARZ9iuUcX1A6kzmbHsQemLF81B4y75TO0r0HlJIzmdV2-S5qErclYORdlD5aaqgR6xEX3s5iEe498fVR3YAcc2s.jpg?r=a44",
            },
            {
              id: "29",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaz9-1lQoGRygsmJWJ7Re1N7dGx-KGeM_O7GHSAGlP9br0_GNL_a9YXWNw9RbWU5GQHYOJSJrQyNQrswVbG_IWixoKk8sd2hJKg.jpg?r=f7c",
            },
            {
              id: "30",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYESLpV9l_WyLElYu6IK6z03BeQDIKK-o9qOf2B-x0akz6Z_TP0xkNhNNgLKztVB33Z1mBmkBNiejnWv6J_76bPNh23N0LXLKoPDBXBujwrwgXPwhAggtNBuyQgxE8iwIuXh.jpg?r=b7c",
            },
            {
              id: "31",
              link: "",
              poster:
                "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbA999KJFRQ463p-ZV72t1Ym4OvR56lgVOGVT5sHzRJ2cDByenYkJoUxKDVrJSthFc-hL7sWahomvkwvygTxNuL09Q2wC4SoNEXt9A7lI8IWNBlKMRyj1LSxUZ2Gd3QDwq05.jpg?r=c50",
            },
          ],
        },
      ],
    },
  ];
  api.map((result) => {
    data = result;
  });
  useEffect(() => {        
    // if(document.querySelector('body').offsetWidth > 500){
    //   timeLoad();
    // }else{
    //   clearTimeout(timeLoad());
    // }
    const item = document.querySelectorAll(".navItem");
    const contentItem = document.querySelectorAll(".content-item");
    const clear = (item) => {
      item.forEach((element) => {
        element.addEventListener("click", () => {
          clearTimeout(myTimeOut);
        });
      });
    };
    clear(item);
    clear(contentItem);
  });
  return (
    <>
      <Header />
      <div className="container show">
        <div className="main">
          <div className="darkmain">
            <div className="poster">
              <img
                ref={posterRef}
                src={data.poster}
                alt=""
                className="img-poster"
              />
              <video
                onEnded={handleVideoEnd}
                ref={videoRef}
                className="none videoPoster"
                autoPlay
                muted
                id="videoPoster"
                src={data.video}
              ></video>
              <span className="poster-thubnail"></span>
            </div>
            <div className="title">
              <div
                style={{ cursor: "pointer" }}
                ref={titleRef}
                className="titleMain"
              >
                <div className="title-main-block">
                  <img
                    onClick={() => {
                      handleTitle(data.id);
                    }}
                    src={data.title}
                    alt=""
                  />
                  {data.trending.describe !== "" && (
                    <div className="flex trending">
                      <span>#1</span>
                      <p>Top 1 Thịnh Hành</p>
                    </div>
                  )}
                  <div ref={describeRef} className="describe">
                    <h1>{data.nameFilm}</h1>
                    <p className="describe-film">{data.describe}</p>
                  </div>
                </div>
                <div
                  style={{
                    width: "210px",
                    justifyContent: "space-between",
                    marginTop: "1%",
                    position: "relative",
                    zIndex: "0",
                    marginTop: "7%",
                  }}
                  className="flex"
                >
                  <Button
                    func={() => {
                      handleTitle(data.id);
                    }}
                    text="Play"
                    icon={play}
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
                    func={handleMylist}
                    text="My list"
                    position="relative"
                    zIndex="-1"
                    icon={plus}
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
            </div>
          </div>
          <div className="infoTitle none">
            <div></div>
          </div>
          <div className="volunm none" ref={volunmRef}>
            <div
              onClick={(event) => {
                volunm(event.target);
              }}
              className="btnvolunm muted flex"
              ref={volunmRefChild}
            >
              <img ref={iconMutedRef} className="muted" src={mute} alt="" />
            </div>
          </div>
        </div>
        <div style={{ margin: "0 4% 5% 4%" }} className="info-phone none">
          <div className="thumnail-phone">
            <img
              width={"80%"}
              style={{ marginBottom: "7%", marginTop: "5%" }}
              src={data.title}
              alt=""
            />
          </div>
          <div className="button-phone flex">
            <Button
              func={() => {
                handleTitle(data.id);
              }}
              text="Play"
              icon={play}
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
              func={handleMylist}
              text="My list"
              position="relative"
              zIndex="-1"
              icon={plus}
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
        <div className="k">
          <Content data={data.content} width="93%" margin="0% 4% 4% 4%" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

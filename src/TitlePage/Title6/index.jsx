import React from "react";
import Title from "../../Title";
import { Link } from "react-router-dom";
function index() {
  const fakeApi = [
    {
      title: {
        title:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O54…5SHUSmBE2EzSa9GdNbXS1Ow61achFp5mSeVNyYA.png?r=185",
        nameFilm: "Công tố viên quân sự Do Bae Man",
        yob: "2022",
        ar: "18+",
        countSeason: "1 Mùa",
        genre: "Chính kịch",
        describe:
          "Khao khát quyền lực và giàu sang, vị công tố viên quân sự nhận ra kế hoạch của mình bị xáo trộn vì một lính mới kiên cường đang ấp ủ kế hoạch riêng.",
        cast: "Ahn Bo Hyun, Cho Bo Ah, Oh Yeon Su",
        author: "Jin Chang Gyu, Yoon Hyun Ho",
        award: {
          award: "",
          check: "none",
        },
      },
      listSeason: [
        {
          id: 1,
          title: "Mùa 1",
          nameOption: "Mùa-1",
        }       
      ],
      list: [
        {
          id: 1,
          yOB: "2022",
          sysnopsis:
            "Khao khát quyền lực và giàu sang, vị công tố viên quân sự nhận ra kế hoạch của mình bị xáo trộn vì một lính mới kiên cường đang ấp ủ kế hoạch riêng.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ6WWqReBzIced0ewqKwlRUbGQHJecQ81gw5-l65_UDWcyREZNSlBzjIJwR2idAmETn8remJR-v-bYWW5VQwMrb8D2i-V2N7av_mIBqmKxDatoNR8Eyzv0jH.jpg?r=6f8",
              title: "Tập 1",
              synopsis:
                "Sau khi bị từ chối bởi mọi công ty luật mà anh ứng tuyển, Do Bae Man nhận được một lời đề nghị mà anh không thể từ chối. Cha Wu In bắt đầu công việc mới.",
              runtime: "65ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSTlFixPfvQshrbBrgiK05aMh7c0RpGJpkh4FkvL4-vqzqPr7WtSn2YSjv_FkQW0GftHqVbxpeVyKPtDQj18jQn3loyOCscndV2YuozoY1kIYtsJZB3TApgY.jpg?r=668",
              title: "Tập 2",
              synopsis:
                "Một người nổi tiếng mất tích. No Tae Nam thử thách khả năng của Bae Man. Wu In giao chứng cứ quan trọng cho Han Se Na.",
              runtime: "63ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb5Ff3vdA3wUt3nxkmHMFmj1Ez7G14bltnqWaguJbjGlyA7ntEOrcQHY_dsqLcbpTtgZgSMezNlVbvTLN3ApZbUSxrEAM078roUhGME5SfYGM99QuKBIf4Y7.jpg?r=506",
              title: "Tập 3",
              synopsis:
                "No Hwa Yeong được thăng chức. Bae Man tự giao cho mình một vụ cuối trước khi hoàn thành nghĩa vụ tại ngũ. Wu In gặp một người bạn cũ.",
              runtime: "69ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWT55fSX9ZsMVvjuFcrtpO0gK2ItZfDDYCrwz_KYYD4Aa9xtGV84tG_qu7lLOBrTcZoILjpPfUdr1lYSxhraVGhCfjBEAsL-ksSnKaWwMJ3pFj0xD6RZO9BJ.jpg?r=674",
              title: "Tập 4",
              synopsis:
                "Bae Man khôi phục một ký ức bị kìm nén. Tae Nam bị bắt giam. Yong Mun Gu cho anh một lối thoát.",
              runtime: "62ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcUn5Wim1aJAZQnDDgJPj2uvu5SMMB9ovhNW3B8eJ8a9eq2LNXWLcfGaMkDGWLWTSpfR8MXxTBVVdh7bp0Do4hB-SEZOWr_lCSgq4ThFMvPsgDzrOsjzpx10.jpg?r=51f",
              title: "Tập 5",
              synopsis:
                "Wu In đề nghị lập liên minh. Với tư cách là luật sư của một hãng luật lớn, Bae Man gặp thân chủ đầu tiên. Vụ kiện của Tae Nam được đưa ra tòa.",
              runtime: "46ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYhAvo7b8wv_jcOJMMTBGaxtkkMjkobP3w9ibnfoPUdOCrfdBqRQXxTb1sXtQgDa4fFyK1isaBzvuM5oyj2w962Wpm5gJ9mlrfH2Ks4imMOkV0StIbZOUUhe.jpg?r=ab5",
              title: "Tập 6",
              synopsis:
                "Tae Nam gánh chịu hậu quả của phiên tòa. Hwa Yeong đề nghị Bae Man chứng minh giá trị của mình, trong khi Wu In đặt câu hỏi về lòng trung thành của anh.",
              runtime: "66ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVhvyU1kf19CK6UIPBgmyKed7zohr9z8pMp86b-z5tit9u1kwCT7Sdst14xLEPOtzZzR6Hmr7Hanym_SmQHZQtEzSg2v-Tz9BIe6AOFiHpOOOSwtjI9xAUyp.jpg?r=98c",
              title: "Tập 7",
              synopsis:
                "Wu In chia rẽ Hwa Yeong và Lee Jae Shik. Bae Man nói chuyện với Ahn Su Ho. Có cuộc tấn công xảy ra ở một sự kiện ký tặng sách.",
              runtime: "67ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRhbSQAUAxhipHkbGSMFRny996YDh5wZiuzvzGvuYmb4QK9GUBXgYbdMwWLhLHj535-idqvpbZb4CsSjB4uZawbsjnH8ieHOyk-jdLpjBJvvcphT5crgd1m5.jpg?r=710",
              title: "Tập 8",
              synopsis:
                "Wu In đánh giá lại trường hợp của Won Gi Chun. Bae Man bám theo một nhân viên y tế. Kim Han Yong lên tiếng. Su Ho giữ kẻ thù ở cạnh mình.",
              runtime: "64ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXxfspTxmo2lYK1TESX2BaNStGkPozBEk-c_3t_1nzl_35koH3G1aqrtFgjezBmjEroyDvLjH_KbmnKM98ZVczekPWZArUyAP2gpEDFEplZ16NWk-4dr0EJg.jpg?r=2ef",
              title: "Tập 9",
              synopsis:
                "Mun Gu cảnh báo Hwa Yeong phải cẩn thận với Wu In. Bae Man tổ chức họp báo. Won Gi Chun đe dọa một nhân chứng.",
              runtime: "68ph",
            },
            {
              id: 10,
              number: "10",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFqCUaQRZzlPJearQczPQROmJw1sQXyDb2YSJFxvvG_LOZUANtHqGOgJsY2D2mTkp9z8JSKlcga2Mk84AWi5K0VIXp2Ol_1gi7wZNzGaYvHAk_5xOf8foTg.jpg?r=467",
              title: "Tập 10",
              synopsis:
                "Bae Man và Wu In có nhật ký của Gi Chun và nhắm đến mục tiêu tiếp theo. Một vụ bê bối khiến Kang’s Solution rúng động.",
              runtime: "70ph",
            },
            {
              id: 11,
              number: "11",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd92aWBJbd5o71g6_FQ6kXlAG2CHlsJRqIpsAdjN-ymDxImc9DrhaSy1SoBTibCeZXQ06tBJgFmNCCtJ2Y_jpJc5Rapc0snalfgS8jJCPonfTWEZ9cJeCQHa.jpg?r=9bb",
              title: "Tập 11",
              synopsis:
                "Bae Man và Wu In biết về những bí mật bị chôn vùi khi bố mẹ họ bị sát hại. Hong Mu Seop bị cáo buộc có những hành vi sai trái.",
              runtime: "64ph",
            },
            {
              id: 12,
              number: "12",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdKJrH1LU6TFhAaRMWVwqJzd8r08454y11Ded0pxQWwvE17ZKekaI26GFpmho8CGL4D3_lt1Gv685aHgxny7-Ta8p6QgXTdnaQ9Iab5XqUzGSpofbebGZGgU.jpg?r=f7b",
              title: "Tập 12",
              synopsis:
                "Trung sĩ Shin hé lộ toàn bộ quá trình điều trị mà anh phải chịu đựng. Bae Man ra tòa dù biết anh sẽ gặp bất lợi. Tae Nam phát hiện ra mình bị lừa.",
              runtime: "70ph",
            },
            {
              id: 13,
              number: "13",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbjHVK4XdZJa9ECG-1B_PUT95zUHHUu_UzO4M0S391yjwz0NddhxBXYzL3ag8TTzH86bCCpnESc1WisJLwYR8D5gHSLafi_35KAzD5sLBsGIQopt0UGPIBgo.jpg?r=679",
              title: "Tập 13",
              synopsis:
                "Mun Gu tìm ổ cứng của Ha Jun. Hwa Yeong viết lại câu chuyện trong vụ án của Mu Seop. Bae Man nhận được tin báo về các tập tin X của hội kín.",
              runtime: "69ph",
            },
            {
              id: 14,
              number: "14",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdMwW9-XSm7c1_QqaoAIAzuxcKqwpUJG22r2DOwt_VxPjD2PeVeTRCpkFb55krdd4pj3-0X1tWpXFx26XuJGbZlOBGM-nl862p4vOX-a_eMgipEqbZ8pkgKN.jpg?r=903",
              title: "Tập 14",
              synopsis:
                "Hwa Yeong bịt miệng con trai mình. Wu In cố gắng làm cho Pyeon Sang Ho chịu nói chuyện. Mun Gu có được một thỏa thuận với Bộ Quốc phòng.",
              runtime: "63ph",
            },
            {
              id: 15,
              number: "15",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSD6ZDp42i40z8bnsHo6j90N-Re0TfNxUOWH_rIj0F-PZeZhh7QIDHxZRTcheXB_hyljcW7s1vKV86Q_4wqNb1IVKdrFkIGDaYeNMfpLE7S8sM5woL68PPhP.jpg?r=657",
              title: "Tập 14",
              synopsis:
                "Tae Nam biết được mẹ anh sẽ làm đến mức nào để bảo vệ chính mình. Wu In cố gắng khiến Yang Jong Suk đổi ý. Hwa Yeong ra lệnh giết người.",
              runtime: "66ph",
            },
            {
              id: 16,
              number: "16",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABast-XhJ6VZTvKKpOhVZrpLiIE6w0k50o-7N0boa771iukYPB3y3dTGhCB3gFDxIiuEjiIpSIRshxgtgtRfeN-2m95tGMoqEbFRsg0BC8ogg90H649pjrHm3.jpg?r=884",
              title: "Tập 16",
              synopsis:
                "Mun Gu lẩn trốn. Bae Man có được chứng cứ buộc tội. Hwa Yeong và Hội yêu nước đối mặt với phán quyết.",
              runtime: "66ph",
            },
          ],
        },
      ],
      infoMoveFilm: {
        genre: [
          { id: 1, name: "Phim truyền hình chính kịch" },
          { id: 2, name: "Chương trình truyền hình về phòng xử án" },
          { id: 3, name: "Hàn Quốc", },
          { id: 4, name: "Phim truyền hình hành động & phiêu lưu", },
        ],
        genreShow: "Lý thú",
        listCast: [
          { id: 1, name: "Ahn Bo Hyun" },
          { id: 2, name: "Cho Bo Ah" },
          { id: 3, name: "Oh Yeon Su" },
          { id: 4, name: "Kim Young Min" },
          { id: 5, name: "Kim Woo Seok" },
          { id: 6, name: "Kang Young Suk" },
          { id: 7, name: "Park Jin Woo" },
          { id: 8, name: "Kang Mal Geum" },
          { id: 9, name: "Ko Gun Han" },
        ],
      },
      similarContent: [
        {
          id: 1,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYQwctSqFWU4mLmS5RBS2PZb_Pd5NbcS6KtxNdqdSUx3HMNxU5TVuWTWadtD6WtpgMFOywFHUigfMBrF_gdHDeQ1YhFfqGaX-hwne8_GpXRQbR7fxjV46byVY3pzefUmnj4CKA.jpg?r=0cf",
          link: "/title/title2",
        },
        {
          id: 2,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVwNhYpWVy0Ghr0rfIoFsZY17zsTs45yujs0saO7vgo8mai2k_G_LIuQht7LxVW5lCkBxCmGAe9MhNgEx5mt9vp6aoyeCLeuMw63qnqecE6bDrvGE9UEBWRARvlFLbXPTQEXNQ.jpg?r=92d",
          link: "",
        },
        {
          id: 3,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf-23iPbwGmmHAm3dPiPlUCo-wyA0oFjcsOj0vAgZyalcwPHgV4BtJdUnkncHfpe9zK7dWou8o62TZYPFMWLRXA4cDWxykJZAP9an_Ke4-dluIEjQNUo0yRYcIBDcB98z4unyg.jpg?r=62e",
          link: "",
        },
        {
          id: 4,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRaVuFzYnvNRA7_LUandwetcutUw1fREuHE0ncL7lhU5pOoO4fIeK7fuD-LACkBkgEgQI1drcQoVi6MbTpBBl_Zy4DZZ4YUnCxLh.jpg?r=e10",
          link: "",
        },
        {
          id: 5,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcuLFdv1YKZ2XCw44VjqhHfM5Sfow4Fv3Ej34Bz_LEiBgktV8FVNvokGrwFGFcPih07U5ndAQWaZhor5HZPROemmwL_7ay4hbaStE3ewABJ6vhcd1fdjaf2j3BfuRcC4GMylpw.jpg?r=e79",
          link: "",
        },
        {
          id: 6,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX3GD6c4AUtVxgML53Zq7PtSXS-rGm9FXRFN-CY27VuBqEvJFSvoQnyfRmHGsjISzICL8lLYUedDuZdAJoThCzzSpzzai1tthHDC.jpg?r=88a",
          link: "",
        },
        {
          id: 7,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRE7Sx10IqpC_AoLoSNQalNOAthiEZ9HiMiKBH8I04wBu44fAdTOLb1GzvBd81F9cRCUDDhJOgVJgL86sZ-Xrf8R5DqkGIFcJjaJD4OcqCg9VBGNhiZT1_UOUHhnU3XG5siXtg.jpg?r=686",
          link: "",
        },
        {
          id: 8,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXJxbbctFFvzFs0tcXD4_vj48wBcJ_QaNm8hPXfe19PgvV0ThlbuLaicDE9vVXFVD-kpLaSoTZkp7ZECf7bemlxeNLKeQR9dQzc5qSIUW5Eee2mq_hHpBNW2-kIeOJSRtJ0gNg.jpg?r=1dc",
          link: "",
        },
        {
          id: 9,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ8aNbPpSPWosInAQ7bFmPrZKZN47oAPNOsxFxZvQ9qV-vX2If_JzsyusHG_FumC1cy0XnZGiu7dSAnKUjRRcw3QGByusXXeQOk1Jo2NpkSDVcmvNqh73GiCKeFqa86R8JVLDw.jpg?r=a6a",
          link: "",
        },
        {
          id: 10,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXEf5UAqTL5MwGE1uRgEfoudfuzQLVWhVwM1GQd2wXQc1UQ4BIgBKF0SxokchR8TsvTghrZav6VB7vwd8SVWhu7WSO6QtVleCQ4PQ9Jdj-rIrOopOq_ZDW-zGaYG4g409t88-A.jpg?r=028",
          link: "",
        },
        {
          id: 11,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT64ZIm7PE9cRKao8zazKn4_tAMpQIVBwujrjokATY4Ym-DGlYM_mIyb-lN5mCyPHBSyFpixM05gRts6qt9hfrtir3E61LzlzJxT2WcaKdFE-Rjk_054uKE2y7g08NEezG-68w.jpg?r=638",
          link: "",
        },
        {
          id: 12,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZcMMg30TutrdD9ZM7QjrvPJTdsGs0Q3j3sGpXNnPJN-nliOs9V10Sny7kjYxstr0bFXwEQ8AudIMk0X9pnv6oijp2Vh3n42A_Md.jpg?r=9fe",
          link: "",
        },
      ],
      trailer: [
        
      ],
    },
  ];
  return (
    <div>
      <Title
        api={fakeApi}
        topTitle="200px"
        title="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYiHvLvvYR_3rzJMSk-KcjpGcF4arjm1S5STpG21q3KgtpijyIZJQ6hDChrG39anF18Mqk6JMgw6bcKxa-CMEnJH1OgCsOVw36si-cKPSzmo.png?r=56d"
        position="fixed"
        width="100%"
        height="100%"
        icon="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABempTIBruJMSkHZcRgtcCcVXhN0gkzHbUi7-JzkjqTU_zisNASCEywuc6ur_uRCTz8EGO6yCrf2kd_vPOpZjrUNOSMOVxWT0obyE.jpg?r=6d4"
        hideButton="none"
      />
    </div>
  );
}

export default index;

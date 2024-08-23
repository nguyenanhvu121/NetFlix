import React from "react";
import Title from "../../Title";
import { Link } from "react-router-dom";
function index() {
  const fakeApi = [
    {
      title: {
        title:
          "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O54…5SHUSmBE2EzSa9GdNbXS1Ow61achFp5mSeVNyYA.png?r=185",
        nameFilm: "Hậu duệ mặt trời",
        yob: "2016",
        ar: "16+",
        countSeason: "1 Mùa",
        genre: "Chính kịch",
        describe:
          "Tình cờ gặp ở bệnh viện, một binh sĩ sôi nổi phải lòng vị bác sĩ phẫu thuật tài năng. Mâu thuẫn về triết lý sống chia tách họ, nhưng số phận lại có sắp đặt khác.",
        cast: "Song Joong Ki, Song Hye Kyo, Jin Goo",
        author: "Jin Chang Gyu, Yoon Hyun Ho",
        award: {
          award: `Nhờ loạt phim này, các ngôi sao hạng A là Song Joong Ki và Song Hye Kyo bắt đầu được gọi là "Cặp đôi Song Song". `,
          check: "",
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
          yOB: "2016",
          sysnopsis:
            "Bản tính tiên phong khiến đại úy Yoo Si Jin nhập viện. Tại đó, anh gặp và phải lòng bác sĩ Kang Mo Yeon. Nhưng rắc rối nảy sinh khi anh phải làm nhiệm vụ.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRfWCodrRDWmEQZwVcvn3ZGSpe-W1QOk1SUPLOSusrfcCkhgH9YkTr6DoS4PnV0YNoMTuh1BA9pMVEVS0KRQGYo3kNnHW6UGX8ep7oeZ34nwKeIhCzh-EzBo.jpg?r=7fb",
              title: "Tập 1",
              synopsis:
                "Khi đang đi nghỉ sau một chiến dịch quân sự nhạy cảm, binh sĩ Si Jin cảm nhận được mối liên hệ với Mo Yeon – vị bác sĩ phẫu thuật xinh đẹp có ý chí mạnh mẽ.",
              runtime: "60ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZgj-FsO969eHEMeERQXwSLfLiP_AlxvfGvTvz22rUtcDouO2hzY9NWjTsI48I22lOewKlJJQoy3FcKfr-XfDQArdhRQfKFGyKHJELPGqotUv64H6i4rIX3C.jpg?r=441",
              title: "Tập 2",
              synopsis:
                "Si Jin và Dae Young tham gia một chiến dịch nguy hiểm ở Afghanistan, còn Mo Yeon hỗ trợ phẫu thuật. Sau đó, Si Jin và Mo Yeon đi xem phim.",
              runtime: "60ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVZ26Ot8PUimaAdiEZmMS2pleM27uEVpwK0XOWXV6bIBEeF3Iy_dQnrs1ggz23RUJpQgpGiFDUICA9bYG3QwiSnNwz3K_AFgVC5kLZSf3rPJK4ZxL8pv4a38.jpg?r=56c",
              title: "Tập 3",
              synopsis:
                "Si Jin và đội Alpha nhập hội cùng Mo Yeon và các bác sĩ ở Uruk. Trong khi đó, Myung Ju không thích cách mà bố mình – Tư lệnh Yoon – đối xử với Dae Young.",
              runtime: "69ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRXN-RSdnsHflwR4z6aAujR0loJVWretoYSYzW_V0sTw0rlwOqCc7RBv43mKIB6WOPVJK5BCzgqKThVsz0ITggchvATlZL7xNHZUvt40oZL6rOiMeuyGSXqf.jpg?r=cfb",
              title: "Tập 4",
              synopsis:
                "Căng thẳng bùng nổ vì một người đàn ông hấp hối khi Mo Yeon khẳng định cô có thể cứu sống bệnh nhân này. Trong khi đó, Dae Young và Myung Ju đoàn tụ tại sân bay.",
              runtime: "60ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeJLozoThRoe_o2QHt9ExUE-L0t_smycoZcu1o3aFrUaVTL132SxJkApeANK9x-3a2_aRNg0TLo_tHbjld_lvsRbza7KZuSmQpiOEFpiqf8oxHk-MmpiUQ1r.jpg?r=06a",
              title: "Tập 5",
              synopsis:
                "Sau khi cùng nhau chia sẻ một khoảnh khắc, Mo Yeon không biết nên nghĩ gì về mối quan hệ của cô và Si Jin. Sau đó, Si Jin nhận được một cuộc gọi đầy hoảng loạn.",
              runtime: "60ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdY1NYljGjNkHnBJxz5x3mDtPJgFYnDbLHVVyrHzmcJB81MoMOfb14GNVt7mKS-t4zTeSRS0sCBmopP2Pw5dyNgk8iU1Z-OlaeFZ1Ar4mlZkjjHX4NVVKFpP.jpg?r=ee4",
              title: "Tập 6",
              synopsis:
                "Sau một trận động đất mạnh ở Uruk, đất nước này rơi vào hỗn loạn. Đội ngũ y tế và các binh sĩ nỗ lực tìm kiếm những người sống sót.",
              runtime: "59ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZY9LMyZ4UMEu-XZvt03PL_CEGwOc9X8uKIf8lhqrOG97y1C5FtzF24qPRY7F0l_cW-U74MdT9O9cyXkCoCB_oE1a8cKoYl4A7FPqijX9gQry7lff-OCLBfc.jpg?r=3c4",
              title: "Tập 7",
              synopsis:
                "Với hậu quả của trận động đất, Si Jin và Mo Yeon phải đưa ra những quyết định đau lòng. Cả hai đều quyết tâm cứu được càng nhiều người càng tốt.",
              runtime: "59ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABedmg_4LqwrsV4_UZbo0kn3pgesudaZUBx4pOXaib5kTRDuAY0iTNcwhFBC3lCMDthIrd3tcfIKot81TNR43m6r30Y3DJ2NQpy7zPkXJmZyehQsGlliI8WYf.jpg?r=6ee",
              title: "Tập 8",
              synopsis:
                "Khi xảy ra dư chấn, Mo Yeon tận mắt chứng kiến công việc của Si Jin có thể nguy hiểm đến mức nào. Sau đó, một tin nhắn điện thoại cũ vô tình được phát đi.",
              runtime: "60ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXheG87sOFoMuNoFd4x4o1bdcLqkpJa2yCxBYP9juH3SW6nrgljL2YKOcpPJCnkF9zYmSh2krgK3B2JUS9mwc-FA_7EePu8cZu2GCZ0wCeuz_NFVmXnktOrA.jpg?r=a7d",
              title: "Tập 9",
              synopsis:
                "Mo Yeon thấy xấu hổ sau màn tỏ tình ngoài ý muốn của mình, nhưng Si Jin không định bỏ qua. Trong khi đó, một vị khách khiến mọi người lo lắng.",
              runtime: "60ph",
            },
            {
              id: 10,
              number: "10",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXheG87sOFoMuNoFd4x4o1bdcLqkpJa2yCxBYP9juH3SW6nrgljL2YKOcpPJCnkF9zYmSh2krgK3B2JUS9mwc-FA_7EePu8cZu2GCZ0wCeuz_NFVmXnktOrA.jpg?r=a7d",
              title: "Tập 10",
              synopsis:
                `Dae Young mất bình tĩnh sau khi nhìn thấy một kẻ thù cũ, Mo Yeon ăn tối "trong bóng tối" cùng Si Jin, và có một gói hàng lạ thường từ quê nhà gửi đến.`,
              runtime: "60ph",
            },
            {
              id: 11,
              number: "11",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRgMFya4P91qeL0IGKHZ6-2WLwz-1taf1eggMuWoXycW5_8QDyeeglRLXLHXRLlhYgo-t4QS4iv3QxgzLuv0D7yPG6_AYiQYCV0-Ys2g6gn3tTWTUOzsVVVW.jpg?r=0f7",
              title: "Tập 11",
              synopsis:
                "Trong khi Dae Young và Myung Ju vẫn bị cách ly, các thành viên còn lại của đội chiến đấu với bệnh dịch. Trong khi đó, xe tải tiếp tế thuốc chữa bệnh bỗng mất tích.",
              runtime: "60ph",
            },
            {
              id: 12,
              number: "12",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQK-_B7fIqWCaRxIrTjvKUTCXn-1Oe4zfj8UP2hWnKnzxZYB8eJtQh42V2bnwlr7sFj9ck6jc0Y05yMZXZja0q55_h_Mh6VQlx_-80Z6lcHoWaMsfo-Hbc2d.jpg?r=961",
              title: "Tập 12",
              synopsis:
                "Dae Young có dự cảm xấu về nhiệm vụ đơn độc của Si Jin vào hang ổ của Argus. Mo Yeon tự hỏi liệu cô có thể ứng phó với công việc bí mật của Si Jin hay không.",
              runtime: "59ph",
            },
            {
              id: 13,
              number: "13",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQYs_chwnwTm8BTmW6-QfVcQDZq0U7x2JvnfjtGI6Bpvhm76xa99-jDW6Dx9OvVdbZKiV61f6rVjR8IBwdwf-fZZax0W77NW2CxNBQ5KMUPjtdStMQ75AKNd.jpg?r=6ba",
              title: "Tập 13",
              synopsis:
                "Đội ngũ y tế trở lại cuộc sống bình thường, nhưng có điều không ổn. Trong khi đó, Mo Yeon có nước đi táo bạo trong sự nghiệp và Dae Young đối mặt với lựa chọn khó khăn.",
              runtime: "59ph",
            },
            {
              id: 14,
              number: "14",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT5Ysf-GAEdd5MErV70sdC9m09HXcK8aYw8-KI5SBIEEt9NKjFduGtO5NnyqUL7CFFB6M3qCJdDYbpeE7iyKeSd1jhYv8VJKonLzjp2RMt2TgLNJKCuyGhSZ.jpg?r=eee",
              title: "Tập 14",
              synopsis:
                "Sau khi một bệnh nhân được gấp rút đưa đến bệnh viện, Mo Yeon choáng váng khi biết ai là người cần chữa. Trong khi đó, một thẻ nhớ tiết lộ thông tin bất ngờ.",
              runtime: "58ph",
            },
            {
              id: 15,
              number: "15",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT0N-JzSz4lkuTS3zzSTdAnv57bzJfHJkIenC7tlUMWALpzfVQ1J_KWvJNTz5p-UYNj6thSjHzfnKHdfYbpcIFjRcDh8ecUKTdm7FAOr0QSN3IN6O9Ctdyoh.jpg?r=e76",
              title: "Tập 14",
              synopsis:
                "Si Jin và Mo Yeon dành khoảng thời gian đáng có bên nhau. Dae Young và Myung Ju tiếp tục gặp vấn đề về việc truyền đạt. Tin tức tàn khốc ập đến.",
              runtime: "60ph",
            },
            {
              id: 16,
              number: "16",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWt-YsbF0uODKTMkPzGGYpoxgKzTy6dBIM1z5URFGMHURCl8x0HpzupbSBlJsrg4TQx2Whbs0g1osiHDE22DpxiPLLLNzZg-3_Vidz0sFt_YaSQTkPtz3ET3.jpg?r=0bc",
              title: "Tập 16",
              synopsis:
                "Mo Yeon và Myung Ju học được rằng không phải mọi chuyện đều như vẻ ngoài. Trong khi đó, một màn thăng chức dẫn đến vụ ăn mừng và một chuyến đi khơi dậy đam mê cũ.",
              runtime: "66ph",
            },
          ],
        },
      ],
      infoMoveFilm: {
        genre: [
          { id: 1, name: "Phim truyền hình chính kịch lãng mạn" },
          { id: 2, name: "Chương trình truyền hình Chính Kịch" },
          { id: 3, name: "Hàn Quốc", },          
        ],
        genreShow: "Cưng muốn xỉu, Lý thú",
        listCast: [
          { id: 1, name: "Song Joong Ki" },
          { id: 2, name: "Song Hye Kyo" },
          { id: 3, name: "Jin Goo" },
          { id: 4, name: "Kim Ji Won" },
          { id: 5, name: "Kang Shin Il" },
          { id: 6, name: "Kim Byong Chul" },
          { id: 7, name: "Park Hoon" },
          { id: 8, name: "Kim Min Seok" },          
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
        title="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABShJUomGV7dj5gY2jo_xE_A8Xm0X_HrqMCB9umDLjUr_fhaQcYrqS3X2lRoXK6LW2GqAOOWSfri8c5zPNMnTrgyltPkdlSCr9NTMS61Ab2QP.png?r=bbc"
        position="fixed"
        width="100%"
        height="100%"
        icon="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaG2h1UxBbJoF_p9hEt6u32EDQUyf3aKuv-1dBrckcYPIY2kCPDX0kxEzl3WRKvEQNzsu1i_u6rSEAtawL3fbTHYqT-QyQ9k_Rmq.jpg?r=73c"
        hideButton="none"
      />
    </div>
  );
}

export default index;

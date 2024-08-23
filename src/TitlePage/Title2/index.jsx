import React from "react";
import Title from "../../Title";
import title from "./Title/title02.png";
import season5 from "./Trailer/season5.mp4"
function index() {
  const api = [
    {
      title: {
        title: title,
        nameFilm: "Trò chơi con mực",
        yob: "2021",
        ar: "18+",
        countSeason: "1 Mùa",
        genre: "Giật gân",
        describe:
          "Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.",
        cast: "Lee Jung Jae, Park Hae Soo, Wi Ha Jun",
        author: "Hwang Dong Hyuk",
        award: {
          award: "Một phép thử tàn bạo về đạo đức và nhân tính. Diễn viên chính: Lee Jung Jae (Phụ tá), Park Hae Soo (Đời sống ngục tù).",
          check: ""
        }
      },
      listSeason: [
        {
          id: 1,
          title: "phần 1",
          nameOption: "Phần 1",
        },
      ],
      list: [
        {
          id: 1,
          yOB: "2021",
          sysnopsis:
            "Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcgVURx2aVqBO-ahF6pNsqh6XLdN2zWXsjt7bPe0ndT4lLfoTynn8eOSHT4o5ERPRNaTuI9sEhEmjlkmS_enUWuYT54etS_Z2c9axK2q_rwm5ubHY9x5TwTG.jpg?r=e86",
              title: "Đèn đỏ, Đèn xanh",
              synopsis:
                "Mong dễ dàng hốt được tiền, Gi Hun bần cùng và tuyệt vọng đồng ý tham gia vào trò chơi bí ẩn. Không lâu sau vòng đầu tiên, nỗi kinh hoàng không tưởng bắt đầu lộ diện.",
              runtime: "61ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdkTxh49-uTZ6CQMb5ly-nTgu3d9vk9Ij9q2xjseCAjgo1d4SKUWwVXZD_RB9UH2ltggxNm0YylvOCjXNtSSorfBp9KJaTuz-a-cLkg6WWc93obVJzN33G9b.jpg?r=f56",
              title: "Địa ngục",
              synopsis:
                "Không thể quyết định nên đi tiếp hay dừng cuộc chơi, cả nhóm đã biểu quyết. Thế nhưng, đời thật có lẽ cũng ác nghiệt không khác gì trò chơi.",
              runtime: "64ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbARELvP6isNm5sHcvW4fgQyaff64BK9DcyIVRNotr8sm01spljhJBew99EMuYev1E58_2vbSa3xfxKCxrh3EdUupRyCUcwwXIUGVaqL__WvlMWR2hDqbG9N.jpg?r=72b",
              title: "Người đàn ông cầm ô",
              synopsis:
                "Một số người chơi đi tiếp vào vòng trong – nơi ẩn giấu phần thưởng ngọt ngào và rủi ro chí tử – với lợi thế bí mật. Cùng lúc đó, Jun Ho lẻn vào trong.",
              runtime: "55ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfULc6d4fbnWvJ3kp8idjBKtpmLkQG26rHgkPoZn7-YnjblZ94GTR-tL9a7A9cOKh90kjTmC58U_QABJpNj5irSClb1iQAQEKVqh9evgb9NUfgYshfAj0T3m.jpg?r=090",
              title: "Bất chấp nỗi sợ, quyết không thay lòng",
              synopsis:
                "Những người chơi bắt tay hợp tác, nhưng khi khu kí túc tắt đèn, sẽ không một ai được an toàn. Trò chơi thứ ba buộc nhóm của Gi Hun phải tư duy chiến lược.",
              runtime: "56ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABayNMtg7c4dQ8I1vSbye_mXDsE8er_YuwdkmVnQ2WLcGPRSLyd9_ZyL8o9EEJT_1R2gZXc6kz_HkkHp4O4442H3Pfnqi8vHJPISMWcXgPfyh9PB8MQptrg6g.jpg?r=b94",
              title: "Thế giới công bằng",
              synopsis:
                "Gi Hun và các thành viên trong nhóm thay phiên nhau canh gác suốt đêm. Bọn đeo mặt nạ gặp rắc rối với các đồng phạm của chúng.",
              runtime: "53ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYeAqA0G2uvoQS8qN2q-FS4pV3qFLEoKhtIU9ppSsPSqswtxaWcmt89kyA8-yteGYzicIkp0c3FrCV_oR4zurvcx3D-7Q8c204XLhUnqbj6xectZY8uTS0Yo.jpg?r=900",
              title: "Gganbu",
              synopsis:
                "Người chơi bắt cặp trong trò chơi thứ tư. Gi Hun vật lộn với tình huống khó xử về đạo đức, Sang Woo chọn cách tự bảo vệ và Sae Byeok chia sẻ câu chuyện chưa kể của mình.",
              runtime: "63ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYFD63meHAceg_zjRpkx1u86sr9FEGPJNWBQloq5Ywbex4JU1dfwtyi7SWrpftaYZr3JxLtGdSuxfXRA6XnJYvP1u1WUS9fQjsX2uV-_iRmJeTSl0QQt7P84.jpg?r=fc0",
              title: "VIP",
              synopsis:
                "Chỉ huy đeo mặt nạ chào đón khách VIP đến cơ sở để xem cận cảnh cuộc chơi. Trong trò chơi thứ năm, một số người chơi sụp đổ trước áp lực.",
              runtime: "59ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRtEUf0r5ZlEO9TBKpla-ViSRU4flRZsFDpb_UZlZTyodClVp636EfLg0ZF1he4IDTY4e8LbvyWGakt9Kz3e-0GrMaaLyfm9U0TJKt5Vi6LVjAmgwOyfm3l4.jpg?r=63c",
              title: "Thủ lĩnh",
              synopsis:
                "Tới vòng cuối, sự ghê sợ và nghi kỵ đã hằn sâu giữa những người vào chung kết. Jun Ho bỏ trốn, quyết tâm vạch trần những bí mật bẩn thỉu của trò chơi.",
              runtime: "33ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYuDBORiZZ6UTJ-SNSjZObcUQ5zAv3bp2ii2id7yAODy90wk4Tjp4ah-rAESVX0N-0zk0uofP4jB8W8BXPLfDujwvLhNC2CDiBWtNX5ynvWQjy7h_8cha8Gt.jpg?r=c60",
              title: "Một ngày may mắn",
              synopsis:
                "Vòng cuối mang đến một thử thách ác độc khác – nhưng lần này, kết cục chỉ phụ thuộc vào một người chơi. Tác giả của trò chơi cũng lộ diện.",
              runtime: "56ph",
            },
          ],
        },
      ],
      infoMoveFilm: {
        genre: [
          {
            id: 1,
            name: "Phim truyền hình chính kịch, ",
          },
          {
            id: 2,
            name: "Hàn Quốc, ",
          },
          {
            id: 3,
            name: "Phim truyền hình giật gân",
          },
        ],
        genreShow: "Bạo lực, Kịch tính",
        listCast: [
          {
            id: 1,
            name: "Lee Jung Jae",
          },
          {
            id: 2,
            name: "Park Hae Soo",
          },
          {
            id: 3,
            name: "Wi Ha Jun",
          },
          {
            id: 4,
            name: "Oh Young Soo",
          },
          {
            id: 5,
            name: "Jung Ho Yeon",
          },
          {
            id: 6,
            name: "Heo Sung Tae",
          },
          {
            id: 7,
            name: "Kim Joo Ryoung",
          },
          {
            id: 8,
            name: "Tripathi Anupam",
          },
          {
            id: 9,
            name: "You Seong Joo",
          },
          {
            id: 10,
            name: "Lee You Mi",
          },
        ],
    },
    similarContent: [
      {
        id: 1,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABenSkliD28lo6Ysco_3Wa2N_bYnDr8L8EW7t_FlS_KXlXV90D2mj11u-d3ZgOYbKUXVgPKRSWFivLcofu9lNI4XKkezXOArDWxl_dGuJRA5zfJorqkIjwHOeTvjPBtPcXL9xeg.jpg?r=1b8",
        link: "",
      },
      {
        id: 2,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWACK4q1Ebbb8XwuJyymbYuM5AwxJdC5hkoucMbA_tOt0fPGIli0iwNUUsfDyzEqU6BAp6FfGc3CxpsaeOyHBWu-LmPihbrKodI1-3c_6VgSi-gbIAaG1sLg3RGE2c0WqenLMg.jpg?r=11b",
        link: "",
      },
      {
        id: 3,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWI15gXeXfTGJkSJ8GvN4c77qV9wexiw1Ag9gnlVu5cR0f-o-ixZSRHWd8u7JZO1cw6zrdcyMQcw4f08YbBTSv8p5wGzcy7pUuzklfCjpbZ86h0qLGUPxlgOrdDD0nlulb9gDg.jpg?r=281",
        link: "",
      },
      {
        id: 4,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRsxqD9r_bxSD45ry6vXszZ0tW96Nbug6tDJGRjZYKBhNkk0hKYiY5aBJyCWDzz-0ry_F-cVW_svKZEzCLNP8Lmq_OurMavpUB72y9Zr3TaDKHMSvU8Nb_ZfUzIYwiPwI2vHLQ.jpg?r=e0a",
        link: "",
      },
      {
        id: 5,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5pNucsNhunag_-L0Kz-7tWy6fkvLKOmaY1WdTIOWN7PPu0mby34YEd8sxfxRCB7CNrY6o7cGoWNMmaUpFB3XOIdiNUz9WPL7siOEH62_sS8zmNnv1whRky9cl_mKZX6OOclw.jpg?r=c45",
        link: "",
      },
      {
        id: 6,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZu6KWg6gh8u5dpz8RTpW143n1aZlmBX5IQpL_1dksjfY4iJXvjdJUaaHh64gUHOz006ugujSqMF_PouP0FufrM-H7qsqM7rxRAgOc2ezOkL5o4rCMsG1xPBVcfcRL-TnD_EWA.jpg?r=4c2",
        link: "",
      },
      {
        id: 7,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWmlkMPwpR40mYxo6alX2EJckNV9xqn9ZnDyEySuU9kpONfu6V8LH4gw1Sxgz5AEdoK1O5bSFR9QqES0sQ30NSW3jBhS57QJQWzRVv06wMf21YYHuQ5VSTR1cTz2VsyEAfdmZw.jpg?r=1d0",
        link: "",
      },
      {
        id: 8,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVBULvh35PisEcwqYfM-7-Rh7k2mwSSjGgg-U8tCbVBY8RA3bkEaPp-SRBbtDpaDH9Owl1bZqNSX04nVzjXXD9F_sEAj51fDjK-uBjD13P9kcKrDc_Sx2u-hIQfzA95yczaPxIG_Kh6kMQVfcoHMUq8XGx7OAIpqjVIjGLWXeVr72lq5rhHh7MOKIRBBrdQXY6sd2cx3A3j-KylcBp8Dqp2ZnWEvJCnI95gwrVMb9r9gJwxGL5BLnyJ4cpl-gHbVDYcXLnTt_1Q6_Yshp1seQPOz0WDOIQs2JhDNA0UTD_S-hWBk2qhe.jpg?r=d52",
        link: "",
      },
      {
        id: 9,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYKBA9jRlDBuoRPJm_STF2hM7HwFusuXQ7ewwTwj4EEr6Ix2o322kRz96JV4PdvkduVGmeZ6bPAIvOjgZlWk-t5fohUZGCULl1mq.jpg?r=55a",
        link: "",
      },
      {
        id: 10,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQND6LR-ZOwJkAKFrSQgPnWMzytIUxihHgLegXkWiMlGIs6WSQC2KTZkwhkqL271U7EdvVf__BGZi9yUGdEkQeA1Vcm02UXCARqPojfYuYRKltiuCCrXinV6DKjrkiHZuwqp3w.jpg?r=4f8",
        link: "",
      },
      {
        id: 11,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbjne_dkh2Zlr_rZI1yHQhj-t0U20YKijTSSgaMUlB-R5k1nq9Mtyp64jBZyoZJF8EZNw6HL9ZWaCOuAxDTg9ylMEO82JEHrYxXRE9dPFqsjPCLyoZ-oNs15kFu5AN-04Q9Ivw.jpg?r=f24",
        link: "",
      },
      {
        id: 12,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeQwCr6V3Cyb-vEXNmdIPUyxAAKMTk87N0TME1nI8LsvqZe8STfOaPaxuYNycwaQcmgtyvSyzBPUKtmq2DRWJcBRfKAQTSyeprINq_MidBMmjuNgo7RaNEOqokSLn6KgHT0_DA.jpg?r=09f",
        link: "",
      },
    ],
    trailer : [
        {
            id : 1,
            trailerPoster: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSR85-9MR_S0ACAolwynGuT_3aPwRb8ouGUj1xG7A_1h7OUgq5teCw5Dqgodd-HqwT-LLedwGi-87yS0cbadBhZTXaZgF6q03vqBD60yDnY5VnuJ1gnyAYf-QQ.jpg?r=3c0",
            trailerVideo: season5,
            trailerSeason: "Mùa 1 (Teaser 1): Trò chơi con mực",                  
        },
        {
            id : 2,
            trailerPoster: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTQid__T2hU_no7hZ3pk9C-BeU4XZOUTziLD8-IyNdITKMUhU0VeGml4z5RCzLQTDot8hVcwC0ytTJYvZvj2elPVQ1jHk2ZuOMH6XFSeE96VNuw_V_RAJVkq2A.jpg?r=337",
            trailerVideo: season5,
            trailerSeason: "Mùa 1 (Teaser 2): Trò chơi con mực",                  
        },
        {
            id : 3,
            trailerPoster: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSIlZ3Yd-GnQA7SlSavJChE1xsT119yNldHS7x1r2exssbiivwZgoW9CVEZLrdYhk7RsOHMj9I8BvDGzlj6krz4Kh9QOMbFUWVmbcxORCezlm18cVLpPzFzcNQ.jpg?r=d17",
            trailerVideo: season5,
            trailerSeason: "Mùa 1 (Trailer 2): Trò chơi con mực",                  
        },
        {
            id : 4,
            trailerPoster: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ-GA2mreOqGF4zgY8LxwkThzU0-59-MMrQNP5EMdMUZzOByoDB0quE2bQgNaxwQd4yQel-HTTjK_wmeUIEbCKP8zNGEpamJAkcamcQlH7EvUSRNGJtuAOMXiw.jpg?r=8de",
            trailerVideo: season5,
            trailerSeason: "Mùa 1 (Trailer): Trò chơi con mực",                  
        }                        
    ]
    },
  ];
  return (
    <div>
      <Title
        api={api}
        topTitle="200px"
        title={title}
        position="fixed"
        width="100%"
        height="100%"
        icon="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW2vHT_kRiIFO3spVWZwdWkXcxqJNrqkwN9mRw8q-yiY0hi3ho64Ce5nh3QXG4F5oaEZUDNYCWK8y-aKlaUMEsTmOd3mOZwIfvEQ.jpg?r=0b1"
        hideButton="none"
      />
    </div>
  );
}

export default index;

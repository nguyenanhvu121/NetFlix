import React from "react";
import Title from "../../Title";
import teaser1 from "./Trailer/teaser1.mp4"
import teaser2 from "./Trailer/teaser2.mp4"
import trailer1 from "./Trailer/trailer1.mp4"
import trailer1Part2 from "./Trailer/trailer1_part2.mp4"
import trailer2 from "./Trailer/trailer2.mp4"
function index() {
  const api = [
    {
      title: {
        title: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZ30-JMrw9uTMDgrGJVlY5xT-t-ioq43EVuXE118xnyXCpzdHYpWVnYgQ7W73h_jTcau9GtzH3qhqpli4p_nDhRF8gkpUxP8pkdMxMIAYC6ZP6PFLrJmKSaYL6iQ9McQPSIfzAVUW-0jmPaKT3dzVLAsnBxE-KbcHtKi5ymwJxkF5lH6JdDvOQ.png?r=081",
        nameFilm: "Phi vụ triệu đô: Hàn Quốc",
        yob: "2022",
        ar: "18+",
        countSeason: "1 Mùa",
        genre: "Giật gân",
        describe:
          "Khi băng cướp kiểm soát xưởng in tiền của Hàn Quốc thống nhất và các con tin bị mắc kẹt bên trong, cảnh sát phải ngăn chặn bọn chúng và kẻ chủ mưu mờ ám đứng sau tất cả.",
        cast: "Yoo Ji Tae, Kim Yun Jin, Park Hae Soo",
        author: "Kim Hong Sun, Ryu Yong Jae, Kim Hwan Chae, Choe Sung Jun",
        award: {
          award: `"Phi vụ  triệu đô" phiên bản làm lại của Hàn Quốc có dàn diễn viên chính gồm Yoo Ji Tae, Kim Yunjin và Park Hae Soo`,
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
          yOB: "2022",
          sysnopsis:
            "Khi băng cướp kiểm soát xưởng in tiền của Hàn Quốc thống nhất và các con tin bị mắc kẹt bên trong, cảnh sát phải ngăn chặn bọn chúng và kẻ chủ mưu mờ ám đứng sau tất cả.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVln4OJ35E84ZW1N6xgqwhPN1EC0pVywozmkPHM1Ix_K3t2_Y0LfK4W6Tz8fsBF-BTMZ4bRAUk05TjcgU42nn70azkItmluhvZrjBxfJeOuQIoIHz2uudmyy.jpg?r=0e5",
              title: "Tập 1",
              synopsis:
                "Được Giáo Sư chiêu mộ cho một công việc có quy mô chưa từng có, tám tên trộm xông vào Sở Đúc tiền Thống nhất. Cảnh sát thành lập một đội đặc nhiệm.",
              runtime: "78ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaBwCpuvnqUcmXVouFWixDGVLrii4JWRq9L9PztC3Obi9Gq8F73MT18_KtjopAtDLjoCOiF4Me7oMz2NTUQbjO4QyKLcbDuIKKVmoJ8g_nIEhYyrIIfHguZf.jpg?r=a5c",
              title: "Tập 2",
              synopsis:
                "Seon Woo Jin chờ băng trộm sẩy chân. Kế hoạch trốn thoát xoay quanh việc lấy lại chiếc đồng hồ thông minh bị cất giấu khiến Yoon Mi Seon gặp nguy hiểm.",
              runtime: "74ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeRexqpUGFZooMX8Vy4ycY696Gv0KRWHgK1_5uRvjNGU766hvNud2SbcGxyMax2TFMIJXhMyW4dVP3TQgYVwqjotMbh6-pLeRKnsyzgetBO-2JpeHozgvFbW.jpg?r=cdb",
              title: "Tập 3",
              synopsis:
                "Tiếng súng khiến Sở Đúc tiền rúng động. Mối bất đồng giữa những tên trộm đạt đến tầm cao mới khi một số người trong số họ tin rằng một ranh giới đã bị phá vỡ.",
              runtime: "68ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUb4WzkK4TXjHDHIvZuoOi1uZscW4SOiDtFOpeo_FTseBm2NlYWtz4Wk0G6aretlvSeswqGfXUMymoyISzPsZS-pIohcvBWRTXkJ2sYng35tNBR0yqWhhXZb.jpg?r=71e",
              title: "Tập 4",
              synopsis:
                "Tìm cách biến một thảm họa tiềm ẩn thành cơ hội, Woo Jin tạo áp lực để Giáo Sư cho phép nhân viên y tế vào Sở Đúc tiền.",
              runtime: "74ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTZm-BfHjEKg9prtSYOWsaawkGwvyKqMkHrcfGsRKl_fddTkO6F5oxtROaBkGljlXbgW523AZOwig8PV4oaqhJ--XhnOFVJEaSXZuVUYR_ZzK-PTLTlG3hwd.jpg?r=55a",
              title: "Tập 5",
              synopsis:
                "Cha Moo Hyuk gấp rút thực hiện kế hoạch riêng. Một phát hiện quan trọng bên phía của Woo Jin có nguy cơ làm đảo lộn chiến lược của Giáo Sư.",
              runtime: "64ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfm8sSWBu4tngvh7TwyFqoxWXQyz3vtkpx89Dv4tzP1mXIHtKRUy9syhypSN3sH9eo8ZVAG5ZvaH4jb4Yz0ov7KW9NloRUZ4dhJ-BNzNhSPaMyhjjkGfRcL2.jpg?r=7e3",
              title: "Tập 6",
              synopsis:
                "Khi những người bên ngoài Sở Đúc tiền hoảng loạn, Woo Jin đề nghị cô vào trong cùng một người quay phim để băng trộm có thể cho công chúng thấy các con tin vẫn an toàn.",
              runtime: "64ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYdT52OK3EbIqpfEzJM7CYbyHzCCHWCYXueQcY6D_fZzrPot8WFg3jzof-4HYVSVD4dsEHvq5lNGyi-JNPaAO9nqlA_N-5fUOX3RySMm0YdpO5-h2hbsHDB4.jpg?r=55c",
              title: "Tập 7",
              synopsis:
                "Woo Jin thay đổi chiến thuật sau khi tìm ra lý do thực sự của vụ cướp. Cùng lời hứa táo bạo, Kim Sang Man đưa ra một đề nghị với băng trộm.",
              runtime: "71ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABehu2Qe807jSCNgdvK8ku3DMVe0MbkW8wSTmM9raQjlk6TqHzolxt26EDBTTNCNvehtUd2QNYBQUT0DsknCeS4uW9_KEvxC4RYUJaKu2ee0ByDintRnJ_0Qg.jpg?r=130",
              title: "Tập 8",
              synopsis:
                "Các con tin bắt đầu thực hiện kế hoạch trốn thoát trong khi Park Chul Woo gọi viện trợ. Cố gắng trở thành người đầu tiên rời Sở Đúc tiền, nỗ lực của Cho Young Min phản tác dụng.",
              runtime: "68ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRru_ox7_2bUu8jK0eLADBPPQ_KMJdYESJDisJzM7Um4-ZS4QU_466zBlEWf_cWRHUlblBWD5-tTRA3tG_jVApLzfYlBDppd2gaR97o7vXW18Ipiq4oV7bvZ.jpg?r=1d9",
              title: "Tập 9",
              synopsis:
                "Cảnh sát thẩm vấn một tên trộm. Sang Man can thiệp để kiểm soát cuộc đàm phán con tin. Một nhiệm vụ giải cứu diễn ra để đưa một đứa trẻ đến nơi an toàn.",
              runtime: "68ph",
            },
            {
              id: 10,
              number: "10",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcKHQeq2zCoYDlHQuGIir8RErO-AkF9QjnVE3wxmDbSlqE-aifwVNYP6-P82lDfU43RWIOaTFO2G3gE40FJozzeyUFFU8Li03F9vNVoF4NfyuUGBuLVF8MOc.jpg?r=2d7",
              title: "Tập 10",
              synopsis:
                "Băng trộm cho con tin lựa chọn giữa tiền và tự do. Sau khi biết về cuộc tình của con trai, Moscow hé lộ quá khứ của mình.",
              runtime: "71ph",
            },
            {
              id: 11,
              number: "11",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcy9F8N1Y5N7RRYIVGWZUCQXX4zqne8rOoTIwD0KhnhiyyMXLLYc1f3gZAgvd3AKC6eJUG4020oJk2e9q_l3oVVED8JgncE7dU9LbYqMZUu7dLzif84suP2m.jpg?r=508",
              title: "Tập 11",
              synopsis:
                "Một tình huống y tế khẩn cấp khiến băng trộm bất an trong khi phải đẩy nhanh kế hoạch. Woo Jin dụ Giáo Sư đến một bệnh viện gần đó.",
              runtime: "68ph",
            },
            {
              id: 12,
              number: "12",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVc-PNmKTuX28xr61lKV9H-rsi5SLZunm-O1CYz_qlP7taweEs3VIdiNYaPEWDqqSWMdEiLqYJsB-k8jBW3LkYlnSNbTu3ZrfF3GBkXvT6TFqV9HRge7Yn7b.jpg?r=447",
              title: "Tập 12",
              synopsis:
                "Cảnh sát áp sát băng trộm khi chúng đang chuẩn bị vận chuyển tiền ra khỏi Sở Đúc tiền. Cuộc biểu tình quyết liệt buộc Sang Man phải áp dụng biện pháp cứng rắn.",
              runtime: "68ph",
            },
          ],
        },
      ],
      infoMoveFilm: {
        genre: [
          {
            id: 1,
            name: "Hàn Quốc ",
          },
          {
            id: 2,
            name: "Chương trình truyền hình tội phạm ",
          },
          {
            id: 3,
            name: "Phim truyền hình giật gân",
          },
        ],
        genreShow: "Kịch tính, Lý thú",
        listCast: [
          {
            id: 1,
            name: "Yoo Ji Tae",
          },
          {
            id: 2,
            name: "Kim Yun Jin",
          },
          {
            id: 3,
            name: "Park Hae Soo",
          },
          {
            id: 4,
            name: "Jun Jong Seo",
          },
          {
            id: 5,
            name: "Le Won Jong",
          },
          {
            id: 6,
            name: "Park Myung-hoon",
          },
          {
            id: 7,
            name: "Kim Seung O",
          },
          {
            id: 8,
            name: "Kim Ji Hun",
          },
          {
            id: 9,
            name: "Jang Yoon Ju",
          },
          {
            id: 10,
            name: "Lee Joobeen",
          },
          {
            id: 11,
            name: "Lee Hyun Woo",
          },
          {
            id: 12,
            name: "Kim Ji Hoon",
          },
          {
            id: 13,
            name: "Lee Kyu Ho",
          },
          {
            id: 14,
            name: "Lim Ji Yeon",
          },
        ],
    },
    similarContent: [
      {
        id: 1,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUSmKKEJfrWvyZVEigRPzIuTZoDzgwndL1Jz76p4psMp4vVm4V-h4W0g6pFlArw2QRFYjtY8qakoF1p_3ejzWpuVVmMZjjWRvQxC-t0W-l5XgKWvZuF1M-RgpnjNtMi4BG3gpA.jpg?r=7aa",
        link: "title1",
      },
      {
        id: 2,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUJmRrR1WxFkLAl458ROHhXrEP7PbwVoeFSgHOBR_vJHUyK-gZJOMA5oOLl6g6IToqXrr5YBdJfMLY5ZSXvpHfQobsHOC3Jhs-qzOyPGAm90sUWmgI3R4X_vQRjkPASO7PS-6w.jpg?r=aa0",
        link: "title4",
      },
      {
        id: 3,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZu6KWg6gh8u5dpz8RTpW143n1aZlmBX5IQpL_1dksjfY4iJXvjdJUaaHh64gUHOz006ugujSqMF_PouP0FufrM-H7qsqM7rxRAgOc2ezOkL5o4rCMsG1xPBVcfcRL-TnD_EWA.jpg?r=4c2",
        link: "title3",
      },
      {
        id: 4,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRsxqD9r_bxSD45ry6vXszZ0tW96Nbug6tDJGRjZYKBhNkk0hKYiY5aBJyCWDzz-0ry_F-cVW_svKZEzCLNP8Lmq_OurMavpUB72y9Zr3TaDKHMSvU8Nb_ZfUzIYwiPwI2vHLQ.jpg?r=e0a",
        link: "",
      },
      {
        id: 5,
        img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5pNucsNhunag_-L0Kz-7tWy6fkvLKOmaY1WdTIOWN7PPu0mby34YEd8sxfxRCB7CNrY6o7cGoWNMmaUpFB3XOIdiNUz9WPL7siOEH62_sS8zmNnv1whRky9cl_mKZX6OOclw.jpg?r=c45",
        link: "title2",
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
            trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc3noW6K2KAnZ2EFLg46nwxiYQ7z4r0KDUuwu6QKvWfqFPJfuuDBkQR-9aSB2qcCFYeoUYLenH_fnR6BES61w4oP8im9OWBcHI3WJj9R-3Q5uDhOxAk42r_Ccw.jpg?r=b1e",
            trailerVideo: trailer2,
            trailerSeason: "Trailer phần 2: Phi vụ triệu đô: Hàn Quốc",                  
        },
        {
            id : 2,
            trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABScvaAxT6atmQW-syehgVpyqjEE0ehQ1zlpt-1VGawMQr-VSuJfNyg3qp8eKTIobg3kT29MhwiZXDsxAAiunzgL-4LEXTau80EPDoafo_Ap7Ior6GWxTWiAbCQ.jpg?r=3e7",
            trailerVideo: teaser2,
            trailerSeason: "Teaser phần 2: Phi vụ triệu đô: Hàn Quốc",                  
        },
        {
            id : 3,
            trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR9h1zx5hVPOhma-kbjTDgpwST7llO_6ZppCjigqoKEqMd5IbWHl10-V2YSZeD-div9aSW8s1UkMVJnbkXI06dNTnXRBoMJLhHVFIuj5d7cmg4T6_fLqvMCxOA.jpg?r=008",
            trailerVideo: trailer1,
            trailerSeason: "Trailer phần 1 - Phi vụ triệu đô: Hàn Quốc",                  
        },
        {
            id : 4,
            trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYgWNjvJHioh5yytr4geK6xV__wAROT2D6ynGUlXLXaMpV75A5wzvCtcwsmbW42NHATzNm8pzL0A16fDMDYLLKA-Yj-iaKvT0gqyuW-qEQ-IegSqHhgE_9qa1Q.jpg?r=e3e",
            trailerVideo: trailer1Part2,
            trailerSeason: "Trailer 2 phần 1 - Phi vụ triệu đô: Hàn Quốc",                  
        },
        {
          id : 5,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXMqxpDLI3CLlf0UZMNWjW0Tv4XreULQ-jQB4YSVDSBV0v7rzchc-b0Fs_sx6XBVjN0And-Qg4XHhKHVfqj270GN9gyeS7Rl8ofr0I9kE1EXpa-o9Wm71qsDmw.jpg?r=e29",
          trailerVideo: teaser1,
          trailerSeason: "Teaser phần 1: Phi vụ triệu đô: Hàn Quốc",                  
      }                          
    ]
    },
  ];
  return (
    <div>
      <Title
        api={api}
        topTitle="200px"
        title="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZ30-JMrw9uTMDgrGJVlY5xT-t-ioq43EVuXE118xnyXCpzdHYpWVnYgQ7W73h_jTcau9GtzH3qhqpli4p_nDhRF8gkpUxP8pkdMxMIAYC6ZP6PFLrJmKSaYL6iQ9McQPSIfzAVUW-0jmPaKT3dzVLAsnBxE-KbcHtKi5ymwJxkF5lH6JdDvOQ.png?r=081"
        position="fixed"
        width="100%"
        height="100%"
        icon="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWGx0smyKD2wu3zcUalUKSRlS8U4o6yePd3Z08hG_ynNijJbl3l1MDYwXKqJ4nFTd3JCmoJsX27bCS0_fJoA9QUocMrDKjjFLaSz.jpg?r=b23"
        hideButton="none"
      />
    </div>
  );
}

export default index;

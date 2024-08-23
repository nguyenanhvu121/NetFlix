import React from 'react'
import Title from '../../Title'
import title from './titleMoneyHeist.png'
import { Link } from 'react-router-dom';
import season5 from './VideoTrailer/season5.mp4'
import season4Recap from './VideoTrailer/season4_recap.mp4'
import season4Trailer from './VideoTrailer/season4_recap.mp4'
import season3Recap from './VideoTrailer/season3_recap.mp4'
import season3Trailer from './VideoTrailer/season3_trailer.mp4'
import season2 from './VideoTrailer/season2.mp4'
import season3_recap from './VideoTrailer/season2_recap.mp4'
import season1 from './VideoTrailer/season1.mp4'
import season5_volunm2_teaser from './VideoTrailer/season5_volunm2_teaser.mp4'
function index() {  
  const fakeApi = [
    {
      title : 
      {
        title : "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O54…5SHUSmBE2EzSa9GdNbXS1Ow61achFp5mSeVNyYA.png?r=185",
        nameFilm : "Thế giới không lối thoát ",
        yob : "2020",
        ar : "18+",
        countSeason : "2 Mùa",
        genre : "Giật gân",
        describe : "Một game thủ lông bông cùng hai người bạn nhận ra họ đã lọt vào thế giới Tokyo song song, nơi họ buộc phải thi đấu trong một loạt trò chơi tàn bạo để tồn tại.",
        cast : "Yamazaki Kento, Tsuchiya Tao, Murakami Nijiro",
        author: "Álex Pina",
        award: {
          award: "Phim đoạt Giải thưởng Hàn lâm sáng tạo châu Á ở hạng mục Đạo diễn, Quay phim, Hình ảnh và Kỹ xảo đặc biệt xuất sắc nhất.",
          check: ""
        }
      },       
      listSeason : [
        {
          id: 1,
          title: "Mùa 1",
          nameOption: "Phần-1",
        },
        {
          id: 2,
          title: "Mùa 2",
          nameOption: "Phần-2",
        }
      ],
      list : [
        {      
          id: 1,
          yOB: "2020",
          sysnopsis:
            "Một game thủ lông bông cùng hai người bạn nhận ra họ đã lọt vào thế giới Tokyo song song, nơi họ buộc phải thi đấu trong một loạt trò chơi tàn bạo để tồn tại.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVtm-VioPBSfed8WpPC6k5nfQ_ntr0Ac6TiAfeLYRs9s2ow2gbhA3diK2SfRSdKfKt-V1I0H41ap8JLj2hpJpBS4lUY_Wa7ZNMaDAbP99dmjsr4ky-C3URcs.jpg?r=ce1",
              title: "Tập 1",
              synopsis:
                "Arisu và bạn bè chạy vào một nhà tắm công cộng để trốn cảnh sát. Nhưng khi họ trở ra, đường phố Tokyo đột nhiên vắng tanh.",
              runtime: "49ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTB5oTULTbKAQAabf0pd9F9UYlp5sd64mQGNcGfvqSIiurkoi8hz-ubxJJ_zPNCWY943paOwMP4ofYu9qkz47nxg5RQ6QKXUcCtEG9wY0lTU36xzxUO_Zzar.jpg?r=b82",
              title: "Tập 2",
              synopsis:
                "Bỏ lại Chota bị thương, Arisu và Karube ra ngoài để kiếm thêm kinh nghiệm. Họ đến một khu căn hộ rộng lớn, nơi trò chơi Rượt Đuổi chết người đang chờ sẵn.",
              runtime: "51ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUUxtsFfnvSn6ytZV12BjYro3wUYklKJCNYGRpaDqmj7N85sigW286wVWy-SpsJNyycN2l8yjTJ20ZJ7Orak1mb45m5nNilEkGYPKWKHGmzf1PV8pydqtnyP.jpg?r=3fb",
              title: "Tập 3",
              synopsis:
                "Khi visa của Chota và Shibuki đã cận kề ngày hết hạn, bộ tứ bước vào một khu vườn bách thảo rộng lớn ở Shinjuku. Tại đó, họ tham gia một trò chơi phản bội đầy tàn nhẫn.",
              runtime: "43ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdSmxq-UqbXz6AgtN22Vm8xb42z331Uq6Yr0fy1qnGUKgY_X-h_JCZPSOG3mrpa6ZR0-zfgouFdNbq37UZFFMWRTi1F-WSksfmpkb7DZVRleB9rnxvcCoo3N.jpg?r=8d4",
              title: "Tập 4",
              synopsis:
                "Arisu ngập trong cảm giác tội lỗi và chuẩn bị bỏ cuộc, nhưng Usagi cố thuyết phục anh tiếp tục. Tiếp đó là trò chơi sức bền trên đường cao tốc dưới lòng đất.",
              runtime: "53ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABadx82pNyPTvmZeuLkwjAx9vl5r56BXw0gyz2EZWO-5Vu1edV46uk-gUHLxu0cAsGzJbD6WH_wypIUydBwNc8WY5O2Gvzf1SOJbLOY_RYepgZjnTOXV2YzPs.jpg?r=7dd",
              title: "Tập 5",
              synopsis:
                "Sau khi Arisu và Usagi tìm được đường đến Bãi Biển, vua của nơi được gọi là địa đàng này buộc họ phải giúp thu thập những lá bài còn lại.",
              runtime: "44ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe0SGBbVRHHdZjnfyF6G-x7yzPN0tIrXRhTkEjpSEYZggFa4PngIPy-Zbb228NWyOgkUUJ3Gq2VTG-Nr_9Dt1soSDvHUqM5EC7-_PvtkfV03JaIDVWfddCfH.jpg?r=b81",
              title: "Tập 6",
              synopsis:
                "Chishiya nhờ Arisu và Usagi giúp mình thay đổi tình hình. Một sự kiện không lường trước làm đảo lộn cán cân quyền lực mong manh của Bãi Biển.",
              runtime: "45ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbVu2V8s7dTPZzQ5kbj3EicXBQKz00egzqKjL--H4rnfxB0EaV-4KIBfHamPW7jwHBLKoJtCymhszqM3h2AsfJsH_LnBQ8TEnpr5nyZnjCuGVOeP_M_kqyzx.jpg?r=6b2",
              title: "Tập 7",
              synopsis:
                "Từng là nơi ẩn náu an toàn, Bãi Biển giờ là đấu trường cho giai đoạn tiếp theo. Ở đó, màn Săn Phù Thủy hùng tráng khiến tất cả đối đầu lẫn nhau trong trận chiến thù địch.",
              runtime: "49ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY9QKBGX3rY_z42SuJwMoYgxUhjxiCVVsq7qKxwDc-CByz8MLfPEwnUw53soElvG57JOIVmWkVPgUVHFdg7qwDDsRxVz-JUBtmjL_cJTNFBJx8-cD2tt2yVt.jpg?r=ea1",
              title: "Tập 8",
              synopsis:
                "Căng thẳng bên trong khu nghỉ dưỡng lên đến đỉnh điểm. Khi thời gian của trò chơi gần về 0, nhóm sống sót sau cuộc tấn công dữ dội phải đối mặt với tương lai bất định.",
              runtime: "45ph",
            }
          ],
        },
        {
          id: 2,
          yOB: "2022",
          sysnopsis:
            "Các trò chơi thêm chết chóc, thế giới này thêm điên rồ và tàn nhẫn. Liệu Arisu có thể trở về thế giới thực – và liệu điều đó có xứng đáng sau tất cả những gì anh đánh mất?",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTxJthDeg155GULNaIlXRphZLbaJ8zW3ldGmY80UbqUGD5jVsI9XAaCdeejqaphwtzz9i0UM_IYsernIRHODAWEsiJPe8hsTlc6fpO4rC6ic7nMDrcACgLFY.jpg?r=946",
              title: "Tập 1",
              synopsis:
                "K Tép lộ diện một cách đầy ấn tượng, cuối cùng trò chơi cũng bắt đầu. Mọi việc diễn ra suôn sẻ, khiến Arisu vô cùng bất ngờ.",
              runtime: "44ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABef4PT6rlLPk5Z7qotGkHQ8IY_NVTb9cBEhxy2BF1_L-9ARJkfdClFuq33JwNCCPX3TOYvrvPocNygHMjBcBL1B06iJ9tf4K2i86WTw0b19-Co4gCbN-Iyjs.jpg?r=a08",
              title: "Tập 2",
              synopsis:
                "Trò chơi chỉ còn lại vài phút, kết quả của mỗi đội dường như đã ấn định. Arisu tiếp cận Kyuma, đề nghị được bắt tay anh chàng.",
              runtime: "43ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeAMJ63Lrq3VC3QfJn1sB-PzjyDAGVUw2BmTlTVhpp4BG3VcD7x686UM5D5Orv8JaF-r0V0z6KqWX845Yw62nw1VEi9qYLNrggqpCNen7UKGImCgkxNsA6Bw.jpg?r=445",
              title: "Tập 3",
              synopsis:
                `Trò chơi chỉ còn lại vài phút, kết quả của mỗi đội dường như đã ấn định. Arisu tiếp cận Kyuma, đề nghị được bắt tay anh chàng.`,
              runtime: "45ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc128PqiwMYkg04pDfWLfLK-gJu7HXWY23pnC2T23MWsaGIdAIQkvKostHwTnqeazzTfBZ8-pEEaM6g_p-PuLBuqb7PTk9wPX7bhDQDHJAskKmNnIbnobsf0.jpg?r=fbb",
              title: "Tập 4",
              synopsis:
                `Aguni chỉ có một mục tiêu duy nhất trong đầu: tìm và giết K Bích. Anh nhập hội cùng Arisu và một học sinh trung học quyết đoán tên là Heiya Akane.`,
              runtime: "52ph",
            },            
            {
              id: 5,
              number: "5",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRhZJ9w6QhlqROt9oBVeoap7bjfpZCBlVOXuzefGZWDO4mvN_yrdm1MIOJOZYfWDFSuleHifXX71qO52XxFwAWeeNmNUf14xZFD7h4xMyCOgdd-Zklx90pTu.jpg?r=190",
              title: "Tập 5",
              synopsis:
                `Arturo cố gắng lập một kế hoạch trốn thoát khác. Trong cuộc trò chuyện với Salva, Raquel đã phát hiện ra chi tiết nhỏ khiến cô không khỏi băn khoăn.`,
              runtime: "44ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXyPsv3dZSPrgh6HGSxjOECIKWcjzUYYy8IWkfksWTtUENHYo_Qv3gDJJwrdouequlay_jjV3g_c0CQn5EqO2MNVqDSF65ia47ZUMMrRFyg4vGinPwAI3NOP.jpg?r=bf4",
              title: "Tập 6",
              synopsis:
                `Giữa ngã tư Shibuya cây cối um tùm, Niragi thách thức Arisu và Chishiya chơi một trò chơi. Nhưng rồi K Bích xuất hiện.`,
              runtime: "47ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ8FGkT47sdWO2Y90M63YQcMVvn8OIkB9DweQkx7tymQ5DZ5a8UQ8t1ODcIvFiucfKGCOUVcCDnndHohDGVhMWP-3kuMbjWOSP7Dm6z5yLUzFGa9UHxzgkfA.jpg?r=85d",
              title: "Tập 7",
              synopsis:
                `Giữa ngã tư Shibuya cây cối um tùm, Niragi thách thức Arisu và Chishiya chơi một trò chơi. Nhưng rồi K Bích xuất hiện.`,
              runtime: "45ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd3KYICc6rsRJOLuXcdaTxGN37n8ryrIy6r0250S61_TLKpm87G7TCawhwVDdeRwps_Kuo-fbfwc87-4nBv-nhXtCSwlJBPY1iviI5HTL1U-oQCZ1yeKcAWz.jpg?r=794",
              title: "Tập 8",
              synopsis:
                `Trong trò chơi cuối cùng, người chơi sẽ phải vượt qua ba hiệp bóng vồ. Nhưng trước khi họ có thể tiến xa, Q Cơ mời họ ngồi xuống uống trà.`,
              runtime: "50ph",
            },            
          ],
        },                    
      ] , 
      infoMoveFilm :{
        genre: [
          {id : 1,
           name : 'Nhật'
          },
          {id : 2,
            name : 'Chương trình Khoa học viễn tưởng'
           },
           {id : 3,
            name : 'Phim truyền hình hành động & phiêu lưu'
           },
           {id : 4,
            name : 'Phim truyền hình giật gân'
           },
           {id : 5,
            name : 'Phim truyền hình chuyển thể từ truyện tranh'
           },
        ],
        genreShow : "Đen tối, Kịch tính",
        listCast : [
          {id: 1,
           name : "Yamazaki Kento"
          },
          {id: 2,
            name : "Tsuchiya Tao"
           },
           {id: 3,
            name : "Murakami Nijiro"
           },
           {id: 4,
            name : "Morinaga Yuki"
           },
           {id: 5,
            name : "Machida Keita"
           },
           {id: 6,
            name : "Miyoshi Ayaka"
           },
           {id: 7,
            name : "Sakurada Dori"
           },
           {id: 8,
            name : "Asahina Aya"
           },
           {id: 9,
            name : "Yanagi Shuntaro"
           },
           {id: 10,
            name : "Watanabe Yutaro"
           },
           {id: 11,
            name : "Misaki Ayame"
           },
           {id: 12,
            name : "Yoshida Mizuki"
           },
           {id: 13,
            name : "Abe Tsuyoshi"
           },
           {id: 14,
            name : "Kaneko Nobuaki"
           },
           {id: 15,
            name : "Aoyagi Sho"
           },
           {id: 16,
            name : "Naka Riisa"
           },
           {id: 17,
            name : "Tsunematsu Yuri"
           },
           {id: 18,
            name : "Isomura Hayato"
           },
           {id: 19,
            name : "Inowaki Kai"
           },
           {id: 20,
            name : "Maiguma Katsuya"
           },
           {id: 21,
            name : "Sato Honami"
           },
           
        ]
      },
      similarContent : [
        {
          id: 1,
          img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5pNucsNhunag_-L0Kz-7tWy6fkvLKOmaY1WdTIOWN7PPu0mby34YEd8sxfxRCB7CNrY6o7cGoWNMmaUpFB3XOIdiNUz9WPL7siOEH62_sS8zmNnv1whRky9cl_mKZX6OOclw.jpg?r=c45",
          link: "/title/title2"          
        },{
          id: 2,
          img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABac_f4gBN2BGFrObNPXXeL-fYXpFIJ9yIK6YzXjFFCWcRMjydm_q8hpJNRIEywsArUqk3j1OhHVQTt9g-lbUuybDeGqdVigWgujgfF6t3-KiD9W-larVfxELc48Bs1Y2tVLBGA.jpg?r=450",
          link: ""          
        },
        {
          id: 3,
          img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXz3QuKqQkWl2TUGiP4OoOfXUFWanG9GJxgtM330qWSSSDA8lPii0g-Itbxw1Pqu7e-RWoqw_y2ePjMKso5xxaaETUE_sTpzgaOuFLDXXNhC1h2ErCMEz0pOceQakvz5gH60PQ.jpg?r=5fa",
          link: ""          
        },
        {
          id: 4,
          img: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcYlwi3Pv3p93w1QUJX7jVN-0YE_yj-9KLIApxj0LlrsPYk-1fZCvo4j-_25pAc4bXxRfdFuFigxKHXPOHqYFnaOlb_h5qL1DWQhG6NQyNiVJLDsWldphvehqo9-wxjsi-Sp3g.jpg?r=0dc",
          link: ""          
        }
      ],
      trailer : [
        {
          id : 1,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYqWcUkQ_bBD1bK5NK63gNaH6JhUC3hl0XGxsq-D4Crt9mVKzdx_U_eJBLz9uZEqXTDUL9x0Lcmc06MlnM5nZzESm_VZL9ziuv1qYmAuwiMU_t2p1IyPb9eW5Q.jpg?r=498",
          trailerVideo: season5,
          trailerSeason: "Mùa 2 (Teaser): Thế giới không lối thoát",                  
        },
        {
          id : 2,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTW0_WQc1JowuOBWQ3CEerys090kI_z1yAPPnRE6vv_TIkGwQjz2x7eg08avCQEpsL7MIiBGmRvGiMzTZhP83PfHK998zn9500tozvBnEDwVKY-38I880y044g.jpg?r=d1f",
          trailerVideo: season4Recap,
          trailerSeason: "Mùa 2 (Teaser 2): Thế giới không lối thoát",        
        },
        {
          id : 3,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZXUG8d9mQ0HW-2d1bvmUh13xu0R0JaL34V2QXaZlhDJy3DCL1H_-3dCvaO8UyAuaSmsf_-GwGyAINYourZAAv4ILCFMZkTyU-cZ7hND84k1xJpsNzhXMXxP7Q.jpg?r=a83 ",
          trailerVideo: season4Trailer,
          trailerSeason: "Mùa 2 (Teaser 3): Thế giới không lối thoát",        
        },
        {
          id : 4,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYomWUN4glHqGhFpyjr--dtg1CdP3guFFqFKzRr5RIgngkMmoBrWfFhvd-HS0Qv-Ul9_Zz52rpWQT6JjH2W1acbu4Xv-xX1Bo32FmP70GCjxf3VHx3M4pUGMWg.jpg?r=50e",
          trailerVideo: season3Recap,
          trailerSeason: "Mùa 2 (Trailer 2): Thế giới không lối thoát",        
        },
        {
          id : 5,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb0bLopOVq7Wqj8oeiYxbRPvm3nYs6QCjVZIKjaBCX3H7NPZsdOs5AYz2kYh_JJo5tzekaSshBq7kh2U6dsb5NCtjpKo1f620xbMAMprgnZrS_k-R0K3Umoyqg.jpg?r=683",
          trailerVideo: season3Trailer,
          trailerSeason: "Mùa 2 (Trailer): Thế giới không lối thoát",        
        },
        {
          id : 6,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS9WQp8osSI704vYMvLAIED8h1Q9_n9m6tE7PARE_anz_fGKESh-aoK0WAYO8yg7fUSplAcrw64AQws9qHvDWWuAeGY-LT5sCUw7rp31YW8CZ7rvUxJdC0BfvQ.jpg?r=b70",
          trailerVideo: season3Recap,
          trailerSeason: "Mùa 1 (Teaser): Thế giới không lối thoát",        
        },
        {
          id : 7,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXFmhTG5Zbf1GzOlWzNLwbem9ooqnpwNLXui-RNy9fHQpsNCVTnOwTkCsnxIh6b5FxFymv5SrRld2qdMb1pA2pqQZw_MTEWScDzgTd_Mp35u2DuWnbUgbmLG6A.jpg?r=b9e",
          trailerVideo: season2,
          trailerSeason: "Mùa 1 (Trailer 2): Thế giới không lối thoát",        
        },
        {
          id : 8,
          trailerPoster: "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWHAESsuG9MxHEOf-QBUI-V-ieKTCSygjcOan2_alRROHGoKwZmBb0qejZdvunOq2PM0RNwWNIZDjYhaxERG9dAix-Ip99LgPaJ0wauRrWCIwjgjk4eqprIaVA.jpg?r=ae1",
          trailerVideo: season1,
          trailerSeason: "Mùa 1 (Trailer): Thế giới không lối thoát",        
        },       
      ]                      
    }    
  ];
  return (
    <div>
        <Title 
        api = {fakeApi} 
        topTitle = "200px" 
        title = "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUTV46F9eV93oPWv86Qcafm5nZcjWPQq_6fklsbi2s4fUvqjjLPTOZR7-rlzAY_hUnY4u3mC04NNEdXQo9pFvWF1aHjsgAk9Ce-36roINd6ycxMXdXPeXWrlL2aVDFl0fQ3AjNFNwFmaWk1TJH0S_MnveinMZ83WBR5f_Wy3BYJYrjXoo-Ma-g.png?r=6e1" 
        position = "fixed" 
        width = "100%" 
        height = "100%" 
        icon = "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWUzW3_xm--0qw9smQkATKLuMhp5Jh4x8XnWZLQg9S8Agn3FsWK9yhOB7o78r9FruafmFOt2PxFk2Zwa2PdDngxoxB9Kg8c7msSJ.jpg?r=54f" 
        hideButton = "none"/>
    </div>
  )
}

export default index
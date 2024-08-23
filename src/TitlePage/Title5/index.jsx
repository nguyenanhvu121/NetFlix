import React from 'react'
import Title from '../../Title'
import { Link } from 'react-router-dom';
import trailer2 from './VideoTrailer/trailer2.mp4'
import teaser1 from './VideoTrailer/teaser1.mp4'
import teaser2 from './VideoTrailer/teaser2.mp4'
function index() {  
  const fakeApi = [
    {
      title : 
      {
        title : "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O54…5SHUSmBE2EzSa9GdNbXS1Ow61achFp5mSeVNyYA.png?r=185",
        nameFilm : "Truy bắt lính đào ngũ",
        yob : "2021",
        ar : "16+",
        countSeason : "2 Mùa",
        genre : "Chính kịch",
        describe : "Nhiệm vụ truy bắt lính đào ngũ của một binh nhì trẻ tiết lộ thực tế đau đớn mà mỗi người nhập ngũ phải chịu đựng trong thời gian đi nghĩa vụ bắt buộc.",
        cast : "Jung Hae In, Koo Kyo Hwan, Kim Sung Kyun",
        author: "Han Jun Hae, Kim Bo Tong",
        award: {
          award: "Tác phẩm táo bạo chuyển thể từ webtoon này dựa trên chính trải nghiệm của tác giả. Diễn viên chính: Jung Hae In",
          check: ""
        }
      },       
      listSeason : [
        {
          id: 1,
          title: "Mùa 1",
          nameOption: "Mùa-1",
        },
        {
          id: 2,
          title: "Mùa 2",
          nameOption: "Mùa-2",
        }
      ],
      list : [
        {      
          id: 1,
          yOB: "2021",
          sysnopsis:
            "Nhiệm vụ truy bắt lính đào ngũ của một binh nhì trẻ tiết lộ thực tế đau đớn mà mỗi người nhập ngũ phải chịu đựng trong thời gian đi nghĩa vụ bắt buộc.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYAQZKTeCd_l1sNJxRkzn8z7zQIb5ngDgR0qbb90IrtkwZWiPxC3IDezkpgGfhakf9ILp6HPAMJt21u3QAXk1hdp1gBJkLDbdIzs14qCaRSjEDnTsukzTX8J.jpg?r=4a4",
              title: "Người đàn ông cầm hoa",
              synopsis:
                "Đôi mắt tinh anh đã giúp An Jun Ho có một chân trong đội Truy bắt lính đào ngũ. Thế nhưng, nhiệm vụ đầu tiên của anh với Park Sung Woo lại không như anh tưởng.",
              runtime: "50ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY5NWrB5nSuZ10O3rhbU0Eu2v3l5ffZWzySCdqDPCCrrWncLhw7FxGe1hA4LTHFK5ekyJk1DnGYOPTNqzGb0guVUkW1QbSrqgOWsRSpGXG8Jt0xTjcwDTqCP.jpg?r=ebf",
              title: "Mơ mộng",
              synopsis:
                "Xuất viện, Han Ho Yeol trở lại căn cứ và bắt tay với Jun Ho để tìm kiếm người lính được trông thấy lần cuối tại ga tàu điện ngầm.",
              runtime: "51ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr0o8wlxhn09ms-xiOMC2cZfeN1_-0-OlaAoC3K_AxsjuhDC7oAFyZLCBIbbhKLovEM7OofjSWuqeqcTnO8cbJcxrcGo2j8bc5mJid4oWq_hzSPrudH8w0T.jpg?r=628",
              title: "Người phụ nữ đó",
              synopsis:
                "Jun Ho và Ho Yeol hỗ trợ một nhiệm vụ dù đang trong kì nghỉ. Để thu thập thông tin, cả hai nằm vùng và kết bạn với bạn gái của một người lính đào ngũ.",
              runtime: "56ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYAFhuSVthp_mBtFMWUdvnIoJNdUz3xhVpdS8pSZ1GDYKZ60EJE48wlaqMZR1gZOmRp2WykYViVGzk91veQsj-Uvw3DbttwC_qUDvp1wCwc1qAKf1gJoq_iG.jpg?r=f71",
              title: "Bài toán Monty Hall",
              synopsis:
                "Bị dồn ép liên tục khiến tính cách ấm áp một thời của Cho Suk Bong thay đổi. Trước trách nhiệm chồng chất, một người lính nhảy rào trốn khỏi doanh trại giữa đêm khuya.",
              runtime: "52ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcvF-sw2SdZnxeYLBOtDIa840oFu8EV542IigzzdXyfvJirCuzVfjQB-9QbEv1AGLO18scNWzTu92Da966LaC8BEW3rDyzAgrRxDqlVTS7lD85uTvOTcCsV6.jpg?r=c49",
              title: "Chó nghiệp vụ",
              synopsis:
                "Suk Bong suy sụp và mất kiểm soát. Trong lúc điều tra, bộ đôi D.P. biết được những việc xảy ra vào ngày Hwang Jang Soo xuất ngũ.",
              runtime: "46ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQKX2ed8Rfy8Qnu-uEuYWXNdv5hoK55UV3OcG5s911nkouiS6kM0FSa2aTq9lqqpROkXA7DSVEfsQazw7YIosWIs0z2jlBt5y8UV72bvhtVZ9QzvImthUx33.jpg?r=491",
              title: "Người ngoài cuộc",
              synopsis:
                "Khi cuộc rượt đuổi lính đào ngũ trở thành cuộc săn lùng tên tội phạm đang ở bên ngoài, Jun Ho và Ho Yeol lao đi tìm trước khi anh ta bị lực lượng có vũ trang hạ gục.",
              runtime: "45ph",
            }
          ],
        },
        {
          id: 2,
          yOB: "2023",
          sysnopsis:
            "Sau thảm kịch kinh hoàng khiến cuộc sống của họ đảo lộn, Jun Ho và Ho Yeol trở lại để tóm thêm lính đào ngũ nhưng rồi phải đối mặt với hiểm nguy không ngờ tới.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcBHlaomEyspPMLYCftNxiJxAV1Oacn_O_7CN3wfINj0C1oWqAaFGkhQhoIGraw8o7WCX91Odh-dNoV_Ezjo-BAZv0P0Nr4P3UuGnOtV-vLrgqw1NA7PjWX6.jpg?r=f15",
              title: "Mùa mưa",
              synopsis:
                "Jun Ho điều chỉnh lại cuộc sống sau bi kịch. Park Beom Gu cảm thấy áp lực khi phải che đậy những sự việc gần đây. Một cuộc tấn công bất ngờ khiến quân đội chấn động.",
              runtime: "41ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSTEq7KOx27SakCSpoc67mi8RVTBwWnxLzEF3wVu2-zG-_ibEVlpuV9UMHxvCCaSHxwR5iwFhwDWy1fUSVDOWdJ2q4ODgXJtg4YhYgXW7Wkf2VgjaSAEYV-k.jpg?r=df9",
              title: "Chơi bẩn",
              synopsis:
                "Seo Eun giăng bẫy để bắt Kim Ru Ri trong khi anh này công khai động cơ của mình. Jun Ho và Ho Yeol cố gắng ngăn chặn sự việc ngày càng leo thang.",
              runtime: "52ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYTCQ0UTIttnU7b_bhjT_27MmHSNxbmpCsTleztew3Z0iOzDhxjbVfDYlKkJ-VKTdhmshOd-llMcKovb-MrVDwx45Q7E20bqgktOgDPGDaUDdBhWv3vqXkRa.jpg?r=fb3",
              title: "Hạ màn",
              synopsis:
                `Jun Ho và Ho Yeol nhận được lời khen ngợi bất ngờ từ quân đội. Sau đó, họ bắt đầu truy bắt một quân nhân đào ngũ bị bắt nạt không ngừng vì khác biệt.`,
              runtime: "57ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ6eoGGKtXUhG_20Jx4FuR3Apma_xvfw5hD_65fJSMh9tD7UA7wk8GN-X6YIR1MZ4xb8Qq-vSKVMcnd8Ehp3i8m1_xbV2wkmHhJp5JzxKm_3IT_tcUIEOX7X.jpg?r=7ce",
              title: "Hài cốt cháy rụi",
              synopsis:
                `Lim Ji Seop và Beom Gu nhận ra rằng cuộc điều tra về cái chết của quân nhân không như vẻ ngoài. Chính phủ phải đối mặt với cáo buộc chỉ trích.`,
              runtime: "56ph",
            },                       
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaqXPwu--75XbtFH9PTEyHapXEh1vf2A4ibF82a3NVgNL_lH2_Jraon_jXBo8UDcI8fKcFrFV5ZQavbE6646IyvR1ySOMdtHi9DWZEijFnMzsaMWsGmWGrQY.jpg?r=a00",
              title: "An jun Ho",
              synopsis:
                `Jun Ho phát hiện ra quy mô che giấu bí mật của quân đội và đưa ra một quyết định quan trọng. Oh Min U theo đuổi một bằng chứng quan trọng để ngăn việc nó bị phát tán.`,
              runtime: "48ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaZJpuy1EzMoFDwExSPR5jFTUKakWiej1GdLyPdwiiWcHhCew3vatPcQ_KPrAOHKSam_uFODwZIbSxY-gjkdIZFHckL0EOPtl1Wzb9Q0AwAttqQdRGQeqU1x.jpg?r=a8a",
              title: "Ngày mai",
              synopsis:
                `Ho Yeol thỏa thuận giúp đỡ Jun Ho, người đang phải đối mặt với những hậu quả khắc nghiệt. Trong quá trình đấu tranh đòi công lý, phiên tòa kiện chính phủ có bước ngoặt bất ngờ.`,
              runtime: "64ph",
            }
          ],
        }
      ] , 
      infoMoveFilm :{
        genre: [
          {id : 1,
           name : 'Phim truyền hình chính kịch, Hàn Quốc'
          },
          {id : 2,
            name : 'Phim chính kịch Hàn Quốc chuyển thể từ webtoon'
          },
         {
          id : 3, 
          name : 'Phim truyền hình chính kịch vấn đề xã hội'
         }
        ],
        genreShow : "Gai góc, Đen tối",
        listCast : [
          {id: 1,
           name : "Jung Hae In"
          },
          {id: 2,
            name : "Koo Kyo Hwan"
           },
           {id: 3,
            name : "Kim Sung Kyun"
           },
           {id: 4,
            name : "Son Suk Ku"
           },
           {id: 5,
            name : "Ji Jin Hee"
           },
           {id: 6,
            name : "Kim Ji Hyun"
           }
        ]
      },
      similarContent : [
        {
          id: 1,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYQwctSqFWU4mLmS5RBS2PZb_Pd5NbcS6KtxNdqdSUx3HMNxU5TVuWTWadtD6WtpgMFOywFHUigfMBrF_gdHDeQ1YhFfqGaX-hwne8_GpXRQbR7fxjV46byVY3pzefUmnj4CKA.jpg?r=0cf",
          link: "/title/title2"          
        },{
          id: 2,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVwNhYpWVy0Ghr0rfIoFsZY17zsTs45yujs0saO7vgo8mai2k_G_LIuQht7LxVW5lCkBxCmGAe9MhNgEx5mt9vp6aoyeCLeuMw63qnqecE6bDrvGE9UEBWRARvlFLbXPTQEXNQ.jpg?r=92d",
          link: ""          
        },
        {
          id: 3,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf-23iPbwGmmHAm3dPiPlUCo-wyA0oFjcsOj0vAgZyalcwPHgV4BtJdUnkncHfpe9zK7dWou8o62TZYPFMWLRXA4cDWxykJZAP9an_Ke4-dluIEjQNUo0yRYcIBDcB98z4unyg.jpg?r=62e",
          link: ""          
        },
        {
          id: 4,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRaVuFzYnvNRA7_LUandwetcutUw1fREuHE0ncL7lhU5pOoO4fIeK7fuD-LACkBkgEgQI1drcQoVi6MbTpBBl_Zy4DZZ4YUnCxLh.jpg?r=e10",
          link: ""          
        },
        {
          id: 5,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcuLFdv1YKZ2XCw44VjqhHfM5Sfow4Fv3Ej34Bz_LEiBgktV8FVNvokGrwFGFcPih07U5ndAQWaZhor5HZPROemmwL_7ay4hbaStE3ewABJ6vhcd1fdjaf2j3BfuRcC4GMylpw.jpg?r=e79",
          link: ""          
        },
        {
          id: 6,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX3GD6c4AUtVxgML53Zq7PtSXS-rGm9FXRFN-CY27VuBqEvJFSvoQnyfRmHGsjISzICL8lLYUedDuZdAJoThCzzSpzzai1tthHDC.jpg?r=88a",
          link: ""          
        },
        {
          id: 7,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRE7Sx10IqpC_AoLoSNQalNOAthiEZ9HiMiKBH8I04wBu44fAdTOLb1GzvBd81F9cRCUDDhJOgVJgL86sZ-Xrf8R5DqkGIFcJjaJD4OcqCg9VBGNhiZT1_UOUHhnU3XG5siXtg.jpg?r=686",
          link: ""          
        },
        {
          id: 8,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXJxbbctFFvzFs0tcXD4_vj48wBcJ_QaNm8hPXfe19PgvV0ThlbuLaicDE9vVXFVD-kpLaSoTZkp7ZECf7bemlxeNLKeQR9dQzc5qSIUW5Eee2mq_hHpBNW2-kIeOJSRtJ0gNg.jpg?r=1dc",
          link: ""          
        },
        {
          id: 9,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ8aNbPpSPWosInAQ7bFmPrZKZN47oAPNOsxFxZvQ9qV-vX2If_JzsyusHG_FumC1cy0XnZGiu7dSAnKUjRRcw3QGByusXXeQOk1Jo2NpkSDVcmvNqh73GiCKeFqa86R8JVLDw.jpg?r=a6a",
          link: ""          
        },
        {
          id: 10,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXEf5UAqTL5MwGE1uRgEfoudfuzQLVWhVwM1GQd2wXQc1UQ4BIgBKF0SxokchR8TsvTghrZav6VB7vwd8SVWhu7WSO6QtVleCQ4PQ9Jdj-rIrOopOq_ZDW-zGaYG4g409t88-A.jpg?r=028",
          link: ""          
        },
        {
          id: 11,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT64ZIm7PE9cRKao8zazKn4_tAMpQIVBwujrjokATY4Ym-DGlYM_mIyb-lN5mCyPHBSyFpixM05gRts6qt9hfrtir3E61LzlzJxT2WcaKdFE-Rjk_054uKE2y7g08NEezG-68w.jpg?r=638",
          link: ""          
        },
        {
          id: 12,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZcMMg30TutrdD9ZM7QjrvPJTdsGs0Q3j3sGpXNnPJN-nliOs9V10Sny7kjYxstr0bFXwEQ8AudIMk0X9pnv6oijp2Vh3n42A_Md.jpg?r=9fe",
          link: ""          
        }
      ],
      trailer : [
        {
          id : 1,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYlyQqex1by4rV-E2f5xlOcqeefulhy3J8mOtq_Bx78XkSS0WYigv7Tw4z6aEzp2RccpT70trmjvWnIRDyoacoJZIanTO9IXfWTGk1Tx99uvxYPBE1eqslJllw.jpg?r=5e2",
          trailerVideo: trailer2,
          trailerSeason: "Mùa 2 (Teaser): Truy bắt lính đào ngũ",                  
        },
        {
          id : 2,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXAYeYI3alqiV46qzweew5uS_Xm8j1EjFPk6CqhN0dLsf6bzUaYHMVt_9XdzaZA0gjMUL_WzB8DNLVwQefCfyjUtWhSjsum9bK0WdDe6DsjFHfBhaVjmBNaEnA.jpg?r=928",
          trailerVideo: trailer2,
          trailerSeason: "Mùa 2 (Teaser): Truy bắt lính đào ngũ",        
        },
        {
          id : 3,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW8DTFWTEyi4CKdky8lufcLIm89vW_YO2cztjvCNlG-0ghIk2X3H3mJiTyeTr8GNp7ybNDusqgoEAnoHjA6c0f9-97AffrQe0ZEF-xjKOPEQQ0RNoDeIAsetag.jpg?r=228",
          trailerVideo: teaser1,
          trailerSeason: "Mùa 2 (Trailer): Truy bắt lính đào ngũ",        
        },
        {
          id : 4,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfmGc0VioOR0wVIuBcRXhaXVRfbP9oErAUwySH_TDxJo7dWoe2mCTZE8hLB8L2O8DiYCG3gxz78Xu6rF-pglhPpH4yJvO30L8Nn6ODLuIIlg3Iti5lzsjEUAJA.jpg?r=624",
          trailerVideo: teaser2,
          trailerSeason: "Mùa 1 (Tóm tắt): Truy bắt lính đào ngũ",        
        },
        {
          id : 5,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX1Bg40fNn9-opd7E4IcicUjaUoJNG2V2K8Lw6T8zSx5-SC5lDgtWPsF4pldhu2Nv_8EMjMATdmTvoKmTv5uwBr5TciWLcgi7p9Pz60cJDSvSA4dQDTpNC89wQ.jpg?r=683",
          trailerVideo: teaser2,
          trailerSeason: "Mùa 1 (Teaser): Truy bắt lính đào ngũ",        
        },
        {
          id : 6,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQt4uadbyUVrZ3mrdTvAZA4l_Kt2FV9OVaVB47s36mlHv9ZJDt2Su3IKl8T5UTyz-r01Rj-dMPM4eCBQRT25rz2eeMWMXLXeE_8OMxyT1XDJVPFtuk9FoeJj-g.jpg?r=d64",
          trailerVideo: teaser2,
          trailerSeason: "Mùa 1 (Trailer): Truy bắt lính đào ngũ",        
        }       
      ]                      
    }    
  ];
  return (
    <div>
        <Title 
        api = {fakeApi} 
        topTitle = "200px" 
        title = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZRsvzcIJPUzTv3DnrSKAX788Ory9ecEr3QwkNIwcw2605K904_e2ZfWSvJT885cTFqzeDmGIodHZrYydd_WFaC4_N5a2j1rgSde6uiv4smv2FxRBoG1PVZWagkwMTjyb3anL1dofz3uKm1sUX9FA_p9pLU_VU7bYxxI9sB5RToH78tU1Cj2qg.png?r=956"
        position = "fixed" 
        width = "100%" 
        height = "100%" 
        icon = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcFMe-31S-XpDLrUQoO0yvUs_drb5pFQ5xcpdLy1D0Rd5oxMXCozisfeacdKSjdtR_jn-K4_mrjHHNjkX8iOnVUahoIaExZV2DfE.jpg?r=90a" 
        hideButton = "none"/>
    </div>
  )
}

export default index
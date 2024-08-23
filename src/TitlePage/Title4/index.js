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
        nameFilm : "Thánh ma túy",
        yob : "2022",
        ar : "18+",
        countSeason : "1 Mùa",
        genre : "Giật gân",
        describe : "Một doanh nhân bình thường tham gia nhiệm vụ mật của chính phủ để truy bắt trùm ma túy Hàn Quốc đang hoạt động ở Nam Mỹ. Phim dựa trên sự kiện có thật.",
        cast : "Ha Jung Woo, Hwang Jung Min, Park Hae Soo",
        author: "Yoon Jong Bin, Kwon Sung Hui",
        award: {
          award: "Loạt Phim giật gân đầy cuốn hút do Yoon Jong Bin đạo diễn, có Ha Jung Woo, Hwang Jung Min và Park Hae Soo thủ vai chính.",
          check: ""
        }
      },       
      listSeason : [
        {
          id: 1,
          title: "Mùa 1",
          nameOption: "Phần-1",
        },      
      ],
      list : [
        {      
          id: 1,
          yOB: "2022",
          sysnopsis:
            "Một doanh nhân bình thường tham gia nhiệm vụ mật của chính phủ để truy bắt trùm ma túy Hàn Quốc đang hoạt động ở Nam Mỹ. Phim dựa trên sự kiện có thật.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ6YsFNKi_Fn5M58tm7wdC2BLXCx1sa9N404TmwjPPJuXz8fq6Im4Ntkvu3nT9H-rbLUBUgiGif7d5HMrBi-F8lQEWixuJKS10tguCaj8aug45R-nYlGqsCE.jpg?r=8fe",
              title: "Tập 1",
              synopsis:
                "Kang In Gu đi xem nhà máy để thực hiện dự án kinh doanh mới tiềm năng, nhưng lại bị cuốn vào một cuộc chiến giành địa bàn. Một mục sư địa phương đề nghị giúp đỡ.",
              runtime: "63ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX6h5qLIy0PJMo9WfmG0uE-tsGAn63UlufdGQ0ORkV9LXSrAr7wzz8xW26BNpidd1GQj9cQoOG6sB-hCrPyHccoXiJyWcrm1ImETpq_av61-HWg9l2sCzpde.jpg?r=05b",
              title: "Tập 2",
              synopsis:
                "Bất đắc dĩ phải thuê luật sư, In Gu cân nhắc một thỏa thuận do một mật vụ đề xuất. Anh mở rộng tầm ảnh hưởng của mình trong tù, hi vọng lừa được một cựu vệ sĩ.",
              runtime: "63ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfQu1hTrkr_k5ZMxlRY4WUO4DhugY778D5YvDELoe5iiAUKLuyDLhm9OZMezAMYiDDFVsoFtqtCPFJtZZAijhi6hR2zLTd-BhxUlj-IxbX6yduxdaQhGJWus.jpg?r=992",
              title: "Tập 3",
              synopsis:
                "In Gu làm trung gian cho mối quan hệ hợp tác giữa Jeon Yohan và Goo Sang Man. Yohan tiến hành thẩm định trước khi cam kết giao dịch.",
              runtime: "68ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABds692L5_v6vNz-LHY9TE4cb1s9VGOLQwsGVAcKrVmk1TBZhoBYXev9qWHGlxnK7b38ZB1LXnK-v766iR6f55FkYCDfYROf_qrxx9mUHeg0fpN2tubSCrrGu.jpg?r=b4e",
              title: "Tập 4",
              synopsis:
                "Xung đột ở biên giới làm thay đổi các mối quan hệ thân thiết của Yohan. Sang Man đề xuất một tuyến đường khác đến Hàn Quốc.",
              runtime: "53ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaIAFrlaQsSDlWeKxUixQ7kZcgNla_YesWc4Ngybha770WLdoHzJB56TLzAa7ShChoha7LXI2hE0jAq1Sc2cam3E4b6Ee3KInpP_Wp2vKyI0UNs0OI4FMFvn.jpg?r=29c",
              title: "Tập 5",
              synopsis:
                "Không thuyết phục được Yohan chọn tuyến đường mới, In Gu ứng biến bằng cách đưa ra một giải pháp của riêng mình. David Julio Park chuẩn bị bàn giao.",
              runtime: "70ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbZnd9bHwao2lF4SeNNzz8QmV1ikhYWaJY-SjAmPAHAYWXy5Td6ve4EV2V6om3f-zuAog7NPsu8ZsxzbBVpmO-5MU0asktf19ZLFJsxjip1CwF4BynDlrN5p.jpg?r=d7a",
              title: "Tập 6",
              synopsis:
                "Yohan đưa ra quyết định bất ngờ vào phút chót nhằm đảm bảo an toàn cho In Gu. Lee Sang Jun đến sân bay khi cuộc càn quét đế chế của Yohan bắt đầu.",
              runtime: "65ph",
            }
          ],
        },                         
      ] , 
      infoMoveFilm :{
        genre: [
          {id : 1,
           name : 'Phim truyền hình chính kịch, Hàn Quốc'
          },
          {id : 2,
            name : 'Phim truyền hình hành động & phiêu lưu'
           },
           {id : 3,
            name : 'Chương trình truyền hình tội phạm'
           },
           {id : 4,
            name : 'Phim truyền hình giật gân'
           }
        ],
        genreShow : "Kịch tính",
        listCast : [
          {id: 1,
           name : "Ha jung Woo"
          },
          {id: 2,
            name : "Hwang Jung MIn"
           },
           {id: 3,
            name : "Park Hae Soo"
           },
           {id: 4,
            name : "Jo Woo Jin"
           },
           {id: 5,
            name : "Yoo Yeon Seok"
           },
           {id: 6,
            name : "Trương Chấn"
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
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX3eWTVcLH9gD4ky5HBqNKKOndZv-P8yhXNpXWglrK22FOmmO-SWy0kaHzIjdRI9qwEkWMcIQ7Ql3BwiP3nqqdLhn_ot_UqvQKMpMhRJcfwpoeFRklOz2khtgA.jpg?r=ba5",
          trailerVideo: trailer2,
          trailerSeason: "Mùa 1 (Trailer): Thánh ma túy",                  
        },
        {
          id : 2,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWyDnfwCVclAHLbVtOWPiv_ZMdPw4SgO2JJ1zsETGrgKIsEZtBuEBYBjGRpkqZMVF63BCVOfSrPtdLh8ezBh5XXBnY-x9O34gnIKb9oomNKJnNuVrcBDmK5tog.jpg?r=497",
          trailerVideo: trailer2,
          trailerSeason: "Mùa 1 (Trailer 2): Thánh ma túy",        
        },
        {
          id : 3,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSPgEAyKWVcG1zaV_itXttXg1iNFfopaX8U096sgU-xMQ7nkHvEAsStJsTBFktPLRBcgSIxXsZmlHhrHtAfLpXRoDbbQ4Q0jIhDAb1QRGIcZLb0Xx6zVuyzAJQ.jpg?r=540",
          trailerVideo: teaser1,
          trailerSeason: "Mùa 1 (Teaser): Thánh ma túy",        
        },
        {
          id : 4,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX0xVV8fCDkVKzpyLYwacGuaOWv1FPSI0eWj_S7J84p5e2uxrcq8Hh6tmIAZetI2Cbi9S8n8Zt_Xn8TAWN7KTu3gc5op_Ht2msdLrMwvKXuzHaWSyKivHCwziA.jpg?r=4a3",
          trailerVideo: teaser2,
          trailerSeason: "Mùa 1 (Teaser 2): Thánh ma túy",        
        }        
      ]                      
    }    
  ];
  return (
    <div>
        <Title 
        api = {fakeApi} 
        topTitle = "200px" 
        title = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVsRu6-KPPTObNrhhJpa-tY0vcP1m0b7AhITNFbAnL8Pu_GlMUrj3SRNBUTm68IUO-mBQkjGT5gupxxUXf3BNKm1GGp-Gxnvnw58CTzoOMD04e0hwa-Xcgc0K7Y_0M3rlpzxlgzbkvLgYw2nDuAbpUykVwfZFf2CmWPp7BPX2pSm5RVXAaq1cA.png?r=fe2"
        position = "fixed" 
        width = "100%" 
        height = "100%" 
        icon = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbCqZl-kMmG_MIHQ6wFjrPESCP023M3Ql1B3hlG6ZBv_oN8fjhpO5-Tj3cGxsfnNCC3zfXzuQfhQtCRKF5YAoQAvJdydYcZwTCgO.jpg?r=c6f" 
        hideButton = "none"/>
    </div>
  )
}

export default index
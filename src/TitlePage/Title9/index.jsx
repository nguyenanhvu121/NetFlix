import React from "react";
import Title from "../../Title";
import { Link } from "react-router-dom";
import season5 from "./VideoTrailer/season5.mp4";
import season4Recap from "./VideoTrailer/season4_recap.mp4";
import season4Trailer from "./VideoTrailer/season4_recap.mp4";
import season3Recap from "./VideoTrailer/season3_recap.mp4";
import season3Trailer from "./VideoTrailer/season3_trailer.mp4";
import season2 from "./VideoTrailer/season2.mp4";
import season3_recap from "./VideoTrailer/season2_recap.mp4";
import season1 from "./VideoTrailer/season1.mp4";
import season5_volunm2_teaser from "./VideoTrailer/season5_volunm2_teaser.mp4";
function index() {
  const fakeApi = [
    {
      title: {
        title:
          "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbHEEK-o3mZvlHsUcOAjB9y0kS5cd2cIdLpbI6L6-H027Ai84vogYym6IPOODjLz57br1Jx3TsM3-crbM15IDxWYyC_z7XCIiGuLYYhyRP45HgODf9mscXbxvYOrzzWyBG0CUn0hKuLfiAF3vr_-4B3PlkbYSMlrrFzKC_qqqCz_l14kRfOE5Q.png?r=33d",
        nameFilm: "Bóng ma Anh Quốc",
        yob: "2013",
        ar: "18+",
        countSeason: "6 Mùa",
        genre: "Chính kịch",
        describe:
          "Một băng đảng khét tiếng xuất hiện ở Birmingham, Anh Quốc năm 1919. Cầm đầu băng là Tommy Shelby, tên trùm tội phạm khét tiếng muốn nổi lên bằng mọi giá.",
        cast: "Cillian Murphy, Sam Neill, Helen McCrory",
        author: "Steven Knight",
        award: {
          award:
            "Giành giải BAFTA Phim truyền hình hay nhất. Cillian Murphy và Charlie Murphy giành giải IFTA cho Nam chính và Nữ phụ.",
          check: "",
        },
      },
      listSeason: [
        {
          id: 1,
          title: "Mùa 1",
          nameOption: "Mùa-1",
        },
        {
          id: 2,
          title: "Mùa 2",
          nameOption: "Mùa-2",
        },
        {
          id: 3,
          title: "Mùa 3",
          nameOption: "Mùa-3",
        },
        {
          id: 4,
          title: "Mùa 4",
          nameOption: "Mùa-4",
        },
        {
          id: 5,
          title: "Mùa 5",
          nameOption: "Mùa-4",
        },
        {
          id: 6,
          title: "Mùa 6",
          nameOption: "Mùa-6",
        },
      ],
      list: [
        {
          id: 1,
          yOB: "2013",
          sysnopsis:
            "Thám tử Chester Campbell từ Belfast đến Birmingham với nhiệm vụ xóa sổ các băng đảng đường phố bạo lực khỏi thành phố.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcTmnLi0XFKHu0XLByVqHMzXeWchS7Tj25R04m67DMSiA6gBRydPN4ZOE4qFMZYkT1Bflv3eDKh-0MtstAxYpVxV5fTrSvm0USajpM9xXjtDDeLWTw9n374I.jpg?r=c76",
              title: "Tập 1",
              synopsis:
                "Thủ lĩnh băng nhóm xã hội đen giàu tham vọng Thomas Shelby nhìn thấy cơ hội tiến thân nhờ một thùng súng bị mất tích",
              runtime: "57ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd69ZrAdPV3O_J2ZNH9Cnk2tH6UUfHz9IPfIvfFjvPzBurNtTAfGrlk4MuhmRKWIL50bWKRooQAHmPMdcfhgg6Jb7T05vb8li4LngaaTIL-D9tcpnNuPNges.jpg?r=c06",
              title: "Tập 2",
              synopsis:
                "Thomas dàn xếp kết quả cuộc đua ngựa – khiến một ông lớn địa phương nổi giận – và gây chiến với một gia đình Di-gan; Thanh tra Campbell tiến hành cuộc đột kích tàn khốc.",
              runtime: "58ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZUcbxChnZKvn0qb0IbDqgY-gg2zi1i9_Cp4OGlmZaxe7jeA_wQKtHLvlanT23EJFTFwDbr0yfLBaSabYKRfrmme9fL9Ei61-W1KqSKQkYksXeOJJYcg2pMj.jpg?r=b69",
              title: "Tập 3",
              synopsis:
                "Thomas vạch kế hoạch tiếp cận Billy Kimber tại cuộc đua ở Cheltenham và cân nhắc lời đề nghị từ những người ủng hộ IRA về việc mua chỗ súng anh lấy cắp .",
              runtime: "55ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX6eeukNNqd9tzVlTZp5DN3oiS8eTa4nyX9Z_V5Gx2J6CAiOZugr3KmVlJOfnxlrWuhuVuhC9YGfWlvvAAvg99CWeO91RGTR7WKbsjJ421FhUDAfhSQHgb6o.jpg?r=753",
              title: "Tập 4",
              synopsis:
                "Cuộc chiến với nhà Lee leo thang, Thomas nảy sinh nghi ngờ về hôn phu của em trai; Campbell gây áp lực để băng nhóm giao nộp súng.",
              runtime: "58ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQkgYboPOowk0wp8W8j0eU_MBUjv5KSA3XUCzeeCs-iT67FI8YfKWwLQuKiMLhMQQTYZ2Wdqg_ubl4kalGgKunsJlwCNZVEDt9l72AQNnCTbYvPZQkkxd6VV.jpg?r=a07",
              title: "Tập 5",
              synopsis:
                "Thomas thỏa thuận với một chỉ huy của IRA – người quyết tâm báo thù cho cái chết của em họ mình; Grace phải quyết định sẽ trung thành với Campbell hay Thomas.",
              runtime: "56ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS6uJKMlBOMzg0hjA22pXTNWkylUhkQ2oNSEX0CWeyECcn1Pzr482NwKAScSCrhPqMnxdWwaa6aDitP6rIIuZ3PxMQkQw6edho9HYM15BGGfDwwZLPxoopoV.jpg?r=e86",
              title: "Tập 6",
              synopsis:
                "Thomas chuẩn bị đá Billy Kimber khỏi vị trí nắm quyền, nhưng những bí mật gia đình mới hé lộ cùng nỗi ám ảnh của Campbell có thể khiến anh thất bại.",
              runtime: "54ph",
            },
          ],
        },
        {
          id: 2,
          yOB: "2014",
          sysnopsis:
            "Đó là những năm đầu của thập niên 1920, việc làm ăn đang phát đạt khi gã trùm tội phạm Tommy Shelby mở rộng hoạt động và dần lún sâu vào nguy hiểm.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZZ7vmM3hJZ-Pjq1f1ud61L54NWN1GSwqQ9RfV9hQMUgyLAQzBuYaGmA3ETYpQY8UTjHi3wRRhTAWHOy6y-s4Nz3DP_SmwNkraspXkC6HPl7_qz-91-zfgwR.jpg?r=f51",
              title: "Tập 1",
              synopsis:
                "Sau khi quán rượu Garrison của ông trùm tội phạm Tommy Shelby ở Birmingham bị đánh bom, hắn bị đe dọa và buộc phải ám sát một nhân vật đối nghịch người Ireland.",
              runtime: "59ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVQw_RDfMi68fnEGHCSaRp6q0sg6uyTUJfqiOdsVmo9-1gNtR6mrVG0OkDK4BOjE8EjM4h2Sw5pBmyvhvP8wNDzCsvvz61raNndlp5NO_r8AOzGC29IdWeKn.jpg?r=5a6",
              title: "Tập 2",
              synopsis:
                "Sau khi sát hại nhân vật đối nghịch người Ireland, Tommy buộc phải trở thành quân tốt trong trò chơi chính trị xảo trá của Thanh tra Campbell.",
              runtime: "58ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV290jgerq9jeoRP6XvYEycfdkpPfXebfxrdyumXCP6T6-46wbCoNAboHo_ivZoRuZx9-uJ0dRCg6wYrXkoHzBQFN3a4xhQMBXdp7eeOQqcCZj4pQfualEk3.jpg?r=a44",
              title: "Tập 3",
              synopsis: `Sau khi bắt tay làm ăn với ông trùm tội phạm Alfie Solomons tại London, Tommy lo ngại tính tình sáng nắng chiều mưa mới lộ diện của Alfie có thể khiến rắc rối nảy sinh.`,
              runtime: "59ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR4Y77KYvZRACW3U0AJQ9kT3NKdsES5d2GfYmF1RhFy6KxLnldUQ4u9wy-mrIHwz5of1G6KqUOEIlafAhMoHvLkWBIyDzTdnLfbUHsXvY7dti9cJz7J3fCZv.jpg?r=fba",
              title: "Tập 4",
              synopsis: `Bóng Ma Anh Quốc chiếm hộp đêm Eden tại London; Sabini thuyết phục đối thủ cũ Alfie Solomons hợp tác để xóa sổ băng nhóm này.`,
              runtime: "58ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc-pMnn4joMZFQvfKaeKcFnjn8OYpE0SzEwtrYX1S-BmVZjvYYfcGVnbLmIS5jN5XBtBPChfx3vsgNZ467V9aNxqhGD2RP_VszMDw52Zvygw314U50NifZRr.jpg?r=63b",
              title: "Tập 4",
              synopsis: `Bóng Ma Anh Quốc bị tấn công. Thế lực của Tommy tại London sụp đổ hoàn toàn, cả Arthur và Michael đều bị bắt giam.`,
              runtime: "58ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ5TPtSmyKTF1Y7GN3xI0wsoagVFjnkcR-rVF0ZMYnFfAjwwy5GyO1IxNJVXtOr8ylgrM8e_SyxyD5Hvg_1vFUjf8MrbQIWwZ9xe3FrwEDH0kZ8Gre6BuBok.jpg?r=856",
              title: "Tập 4",
              synopsis: `Tommy lên kế hoạch thực hiện nhiệm vụ mà Campbell giao cho anh: ám sát thành viên cấp cao trong quân đội.`,
              runtime: "59ph",
            },
          ],
        },
        {
          id: 3,
          yOB: "2016",
          sysnopsis:
            "Hiện tại là năm 1924, hai năm sau vụ trường đua ngựa Epsom Derby. Tommy công khai tổ chức đua ngựa và bán xe hơi trong khi bí mật làm việc cho Winston Churchill.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT-B-mrdN2Um8PS6EgNPr9sbUklfT4xodKpBVyztg5EUBC_IbLvssZfoWVcDoB75vtUcR-J2Uar2j89PpsBkI4IzMSwjGr0Z0sH-DAKkkvDWXcKsOWnZSuTk.jpg?r=9cd",
              title: "Tập 1",
              synopsis:
                "Trong ngày cưới của Tommy, đối tác làm ăn mới sắp xếp giao dịch bí mật. Arthur tìm thấy một người phụ nữ ngoan đạo và Polly gặp một người đàn ông hấp dẫn.",
              runtime: "56ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRimC3Ct9CBkzwBREuz13SJdzP6Oy5NDbdI77QUHoi9d36MIt6SnOmLlIpVhd6xKbmQcwi2yRghc2Kl4jQxE2Oh9d45Tx9bf3al1uY8_atEbCDm58o4jRN-f.jpg?r=58a",
              title: "Tập 2",
              synopsis:
                "Mối họa bất cẩn khơi mào cuộc chiến. Tommy nhận khoản thanh toán kì lạ, nhưng các sếp lại dùng thế lực để ép anh phải ngoan ngoãn. Polly thuê người vẽ chân dung.",
              runtime: "58ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZbJViZa_kPpzWJApN7ikjlYPCw6Q5hG_Pv166OaQ_rpu2FhleN8NNK9nl9I2liAHKdQQKQRtgpMqa0gPxlbh3x3cW-x9ZZCQNvpi_MKeCeZmLrfsdh34w0N.jpg?r=18c",
              title: "Tập 3",
              synopsis:
                "Tommy lên đường tới Wales, mong được giải thoát khỏi tội lỗi và vạch trần kẻ phản bội trong Liên đoàn Kinh tế. Michael bắt đầu hứng thú với súng ống. Arthur có tin vui.",
              runtime: "58ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUMisr59J3mRnh1PF_VFcKI6m5dMJGJ3t8CkC10v7NY87WWxm2ZOt-RcUbdK7LHG16_QvObDDGRjxVWJ3ZtNyxhXubMtXzorvw4qY7yZWYRbuKCO-CyCwpSD.jpg?r=73f",
              title: "Tập 4",
              synopsis: `Polly thú tội, kéo theo sau là hàng loạt sự kiện hé lộ cái bẫy được sắp sẵn có thể hủy hoại nhà Shelby. Tommy lên kế hoạch thoát khỏi cuộc đời tội phạm.`,
              runtime: "55ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSGM-II__97qjOtXat4lqiv2-Mzy95yk_tbSqMKcEOiRDLg5d-_80KlwYcc4H920KQKeIXDjuv3nms7OHI-H1yvPv22hZxPiA4lysAV3X3U1oN2qdp-du_Ok.jpg?r=9c7",
              title: "Tập 5",
              synopsis: `Nhận ra mình đã bị người Nga qua mặt, Tommy tìm sự trợ giúp từ một đối tác làm ăn cũ. Tình bạn mới nảy sinh của Polly bắt đầu sâu đậm hơn.`,
              runtime: "56ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXIlIND8FxVNqZc1uP97gGu5iWf7OZBZzq8jqVSsZUVoxLoWJfCkbF-2810G-DlLnCtqb-JJfShfAQkDq4HQm2yYrSMDNsnsUeWbIwx5TeBJ4jjj_jBC_CeG.jpg?r=249",
              title: "Tập 6",
              synopsis: `Trong lúc chuẩn bị dấn thân vào phi vụ táo bạo nhất quãng đời tội phạm, một đòn bất ngờ buộc Tommy phải chạy đua với thời gian và đối mặt với nỗi sợ lớn nhất của mình.`,
              runtime: "58ph",
            },
          ],
        },
        {
          id: 4,
          yOB: "2017",
          sysnopsis:
            "Một năm sau khi rạn nứt chia rẽ nhà Shelby, việc trở thành mục tiêu của kẻ thù máu mafia buộc cả gia đình hợp lực và tìm kiếm sự giúp đỡ từ một đồng minh ám muội mới.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfGxzIHg7s2rmlAZL5LTSvLw_ZGKNHgvZczsFO1SkkVgx7hWTFLbx8jr5sZZJQYZBUFFhnjFPxeYpjuaYy-6VI0A7ZlPXRTRbs67ok6HyKmbfjUc46I8ojhV.jpg?r=173",
              title: "Thòng lọng",
              synopsis:
                "Giáng Sinh năm 1925, các thành viên của nhà Shelby vốn đang rạn nứt nhận được tin mafia New York sẽ tới báo thù cho những người họ đã giết một năm trước.",
              runtime: "58ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTQwTThqlqSYeTWBm26djPqn1joEL_MSqQbOUzRDKQEXvPTuGiyb2yl_yVrMFdKhKZPOSkd5sO93dBtd-Tp4_Qm1lFqMsU0gD3ktJd021L8zTCO63CYM7J94.jpg?r=add",
              title: "Lũ man rợ",
              synopsis:
                "Chao đảo vì mất mát, nhà Shelby tập trung ở Small Heath, nơi Tommy kêu gọi đình chiến trong gia tộc để phát động một cuộc tấn công chống lại băng mafia.",
              runtime: "58ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABU6P1UYrOWz3mvO6rd8PlrCq1dv-JLEfsBC-HvIvn8JkoHwW5_bk9WA1cgQJl_HtnOOC6fckCaaGgvTw6sb5P1DqutEqLfz-GcmwCJzhavnlYs0-bIitUVIq.jpg?r=c61",
              title: "Con sáo đen",
              synopsis:
                "Linda cố đánh lạc hướng Arthur. Sau đó Arthur trúng mai phục. Tommy được nhắc nhở về vai trò của bản thân trước cuộc chiến. Polly gặp người quen cũ.",
              runtime: "59ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVhm1drVvBk58M9ScYlgxgmw-VxHGN8LN22yTNefbB-cOQb0dllJ5NN7jWCTfruGwqvxLDioYjtym0jZSvMj0FR0miSZmxSrJGhXKjgwFB8HBNf7DhfJyW9j.jpg?r=e3a",
              title: "Nguy hiểm",
              synopsis:
                "Băng mafia cố dụ một thành viên nhà Shelby vào bẫy. Tình cũ đến gặp Tommy. Lizzie nhận được những tin tức không ngờ.",
              runtime: "57ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXWk8XThbzu4YCfQI37Tdap08RLJGU8hixtUxwhR8b-T-LO13X3nWe16S1jJS39XE3VrrCW-nrGEqdMOPfJjU1em2B6MVXMbCxfE6oygHUyn4zgzkM6R8Qc2.jpg?r=15d",
              title: "Cuộc đấu tay đôi",
              synopsis: `Dù bị áp đảo, Tommy đấu súng với băng mafia. Luca Changretta tiếp cận Alfie Solomons. Quân đội Anh tìm kiếm Ada.`,
              runtime: "58ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZwOfc3fdd4xsdUIuMIpuVHRVV5199cSNPEai45JFkmMaaESF3-C5t8yOImK9ObqhM1iKJvnYQKQGxXV1mXfWoTdxfTqQOjqBhJKPEonfynckzjkdWeWKhQd.jpg?r=cbc",
              title: "Công ty",
              synopsis: `Trong trận đấu quyền anh, Arthur làm theo linh cảm. Nhận định "khôn ngoan" của Alfie Solomons truyền cảm hứng cho Tommy. Tommy nhận được thông tin quý báu từ Jessie.`,
              runtime: "57ph",
            },
          ],
        },
        {
          id: 5,
          yOB: "2018",
          sysnopsis:
            "Khi gia đình Shelby vật lộn với vụ sụp đổ chứng khoán năm 1929, quyền lực của Tommy bị đe dọa bởi các thành viên nhỏ hơn trong gia đình và những đối thủ phát xít.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXb4d9U9jrNiB_kgwBcZn1HI9XWi7g1iCYPwSM-UGP5zTGu6NIoxqlVvXx8uby_k44SJ4abtZ4m8NcueJ6F9YbG8H4YYltPwESw5Fv7mtkU0qY5B-ePI2iEV.jpg?r=f09",
              title: "Thứ ba đen tối",
              synopsis:
                "Tin xấu từ Mỹ khiến nhà Shelby phải triệu tập cuộc họp hội đồng quản trị khẩn cấp. Ada che giấu một bí mật. Quá khứ tìm đến Tommy, dưới hình hài một nhà báo.",
              runtime: "56ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfAJpbzXFaOap94qqTrx2MqJEQ027KWwdyi1N5W7OcLuowqmUKo7IfUExM9cHhzLlsGK881-_hogl1JcHuX3XjKEtYrlVUXVTeoWTtemg9NFr-rPJc5W2T8d.jpg?r=fd8",
              title: "Mèo đen",
              synopsis:
                "Các tin nhắn nặc danh có một bước ngoặt đáng sợ. Lòng trung thành của Michael bị nghi ngờ. Tommy nhận được lời đề nghị từ Oswald Mosley.",
              runtime: "58ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRMQW-Vloxw4KoryZQWZd59F_BX7uBHqVJWAdkLLdpdI1-fD7tjT85Ij2PxIaoBbbKge2GiHfDyRnY9eT6D3qjiXVvcdjGI-WyDsEKnJxvYCTlumIYcQb0BK.jpg?r=621",
              title: "Chiến lược",
              synopsis:
                "Aberama đến Glasgow để trả thù. Khi bị Mosley tống tiền, Tommy quyết định bắt thóp ông ta. Athur mất kiểm soát trong cơn điên cuồng tìm Linda.",
              runtime: "58ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRam-HKDrxGe2-ys54XVe2ouJq4Q66T_x7CcNcBJQTeO1HT6VpIg9ToQmnw-nc5WKekGpN8Fi4RjCdJBtQzSKphETvV0LF3qH0HrNVO0oEQiN0E0EyQmLba6.jpg?r=31e",
              title: "Vòng lặp",
              synopsis:
                "Tommy kêu gọi đình chiến và gặp gỡ Jimmy McCavern. Một cơ hội làm ăn béo bở tự tìm đến. Aberama được yêu cầu đặt tình yêu lên trước sự hận thù.",
              runtime: "58ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUWWae51ER70W0r-hhdDgGmI5aQ7E7hJM-vU51p-rCv4QufTikFXWaUpkKCZDUh7f6RiO3UrHkqVBlvELCyL1cCjJVtKbCUINYC3dRh9_gxkcrEvss2AOMPv.jpg?r=7d0",
              title: "Cú sốc",
              synopsis: `Mosley phát biểu ở bữa tiệc. Ben Younger đối mặt với hậu quả không lường trước vì đã báo cáo tin tức Tommy có được về lũ phát xít. Tommy đến thăm một bệnh nhân tâm thần.`,
              runtime: "56ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbIcLFyOdUqFDuD8wIqe1CmSAzf0fQnVwZUH904TMAzEEMozTH6Yi-5omkUUzKocYonalYdAYeDH2extmckFQa3VGIJPN6CpH2_RDIgOGHb5OI4O5Pt7seJC.jpg?r=57b",
              title: "Ngài Jonse",
              synopsis: `Tại buổi họp gia đình, Michael đưa ra đề nghị táo bạo. Kẻ chỉ điểm bị lật mặt. Tommy nhờ một kẻ thù cũ giúp mình cùng lật đổ Mosley.`,
              runtime: "65ph",
            },
          ],
        },
        {
          id: 6,
          yOB: "2022",
          sysnopsis:
            "Nhà Shelby gánh chịu nỗi mất mát to lớn. Bốn năm sau, Lệnh cấm hết hiệu lực thúc đẩy Tommy buôn thuốc phiện và buộc anh phải liên minh với những kẻ thù tồi tệ nhất.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABanXjbqC8pY5AK44tpa7Mjh7SNIGtAoI-H7kqbZHQHsuB6hC1GziolH_gxrB2hwTntp0qQClGhbsAeKuvz4njhCwqt0TdAoGZmfVGQJBm8TENg8fA-WK9ZQ1.jpg?r=a9c",
              title: "Ngày đen tối",
              synopsis:
                "Vụ ám sát hụt Mosley làm một thành viên gia đình Shelby phải bỏ mạng. Bốn năm sau, Tommy đến Bắc Mỹ khi Lệnh cấm rượu sắp hết hiệu lực.",
              runtime: "56ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaxo4pvGSbaSvPsk60ZDOlC3WhSByAet3EW0G-rwAiYE1S75c6s3wzVy8fwm36OPnnW76umA5nVTm1qsFyDMujqTlH60az5Lz_nXZRDDL1W07FxKIn5AH-Ay.jpg?r=f3b",
              title: "Áo đen",
              synopsis:
                "Trở về nhà, Tommy liên minh với kẻ ít ai ngờ đến nhất để Jack Nelson dễ chấp nhận lời đề nghị của anh. Cô con gái Ruby nói một điều khiến anh lo ngại.",
              runtime: "60ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfHy_ks7m0ET9HTqhJOgesduA1BpwIyPDbws37tHGkzaQ857X2Vv5gNokxbWLsygr21kXwscxkuNJ8hCklLmsjLgEbnoUAGMl3worKW0agXAyQTds6FmW2k3.jpg?r=69b",
              title: "Vàng",
              synopsis:
                "Tommy vội đi tìm Esme. Thay mặt anh, Ada giới thiệu Jack Nelson với Mosley và Diana. Arthur gặp một con nghiện đã cai thành công, người thấu hiểu nỗi khổ của anh.",
              runtime: "56ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRam-HKDrxGe2-ys54XVe2ouJq4Q66T_x7CcNcBJQTeO1HT6VpIg9ToQmnw-nc5WKekGpN8Fi4RjCdJBtQzSKphETvV0LF3qH0HrNVO0oEQiN0E0EyQmLba6.jpg?r=31e",
              title: "Sapphire",
              synopsis:
                "Kiệt quệ sau một sự mất mát nữa, Tommy quyết tâm trả thù. Chủ nghĩa phát xít ập đến cửa nhà Ada. Một lá thư khẩn được gửi đến từ viện điều dưỡng bệnh lao.",
              runtime: "59ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUWWae51ER70W0r-hhdDgGmI5aQ7E7hJM-vU51p-rCv4QufTikFXWaUpkKCZDUh7f6RiO3UrHkqVBlvELCyL1cCjJVtKbCUINYC3dRh9_gxkcrEvss2AOMPv.jpg?r=7d0",
              title: "Đường đến địa ngục",
              synopsis: `Tommy giao kèo với Linda. Tên gián điệp trong gia đình Shelby được giao một nhiệm vụ mới. Diana đồng ý giúp Tommy – với một điều kiện.`,
              runtime: "60ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaGvLeoG4zp-CDDdX8uUY6Xo-mJMjPgDaHAbmtHSaY-O45c_dcUaqbjoBKleYjcGLkkLOv4_-SzEyo57ALIGM0NwZ_y4FiuTkw8.jpg?r=bcc",
              title: "Khóa và chìa",
              synopsis: `Kẻ nội gián biết được Arthur sẽ ở một mình khi nào và ở đâu. Vừa ra tù, Michael bắt đầu nhiệm vụ của mình. Lòng trung thành của Finn đối với nhà Shelby bị thử thách.`,
              runtime: "83ph",
            },
          ],
        },
      ],
      infoMoveFilm: {
        genre: [
          { id: 1, name: "Phim truyền hình chính kịch" },
          { id: 2, name: "Anh" },
          { id: 3, name: "Chương trìng truyền hình tội phạm" },
        ],
        genreShow: "Bạo lực",
        listCast: [
          { id: 1, name: "Cillian Murphy" },
          { id: 2, name: "Sam Neill" },
          { id: 3, name: "Helen McCrory" },
          { id: 4, name: "Paul Anderson" },
          { id: 5, name: "iddo Goldberg" },
          { id: 6, name: "Annabelle Wallis" },
          { id: 7, name: "Sophie Rundle" },
          { id: 8, name: "Tom Hardy" },
          { id: 9, name: "Joe Cole" },
          { id: 10, name: "Ned Dennehy" },
          { id: 11, name: "Andy Nyman" },
          { id: 12, name: "Charlie Creed-Miles" },
          { id: 13, name: "Charlotte Riley" },
          { id: 14, name: "David Dawson" },
          { id: 15, name: "Jeffrey Postlethwaite" },
          { id: 16, name: "Matthew Postlethwaite" },
          { id: 17, name: "Ian Peck" },
          { id: 18, name: "Tony Pitts" },
          { id: 19, name: "Aidan Gillen" },
          { id: 20, name: "Adrien Brody" },
          { id: 21, name: "Charlie Murphy" },
          { id: 22, name: "Aimee-Ffion Edwards" },
          { id: 23, name: "Anya Taylor-Joy" },
          { id: 24, name: "Sam Claflin" },
          { id: 25, name: "Finn Cole" },
          { id: 26, name: "Natasha O'Keeffe" },
        ],
      },
      similarContent: [
        {
          id: 1,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeYfZGR7HjyXh5dYR8FOHWobyN_pVEJ_dblmv_wNo_tXTXTFBWcozVp_b_NkOhqpQRGHpbGMklK0IhMjcmgno-c9v4Ws_XMrhTBe.jpg?r=dc6",
          link: "/title/title8",
        },
        {
          id: 2,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfxP5L1VBqHeZcTwPtQZvyDJSqP1Mxu4HD2f7fENJgrfMQI5cRt06uNRrrHRYLXQWaNLJeRUqsArHI6DTKAzqx1-DFsg0EvOC7X3f65cy0zl0uOr526NNF1SCk_l1Kdzl6g_Yw.jpg?r=05b",
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
      trailer: [
        {
          id: 1,
          trailerPoster:
            "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa6woSwvcO5ubAOOHmsJl2LRzkJNNMHUujx1ZMWJOqtUYrG8UaRzHJNLZIGgS8IKzWR4jJg_h_CcCw0cXNMi4rtuVYh1_tCXPfOU.jpg?r=5e1",
          trailerVideo: season5,
          trailerSeason: "Mùa 6 (Teaser 1): Bóng ma Anh Quốc",
        },
        {
          id: 2,
          trailerPoster:
            "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYTCDd16DwmPDjR4_zwsd0JK64dhOagTfoeTL8nf4yXpujHigUWohkmkMexaIv_ikq_a_CzsZDdxlbDf4f9ROGQUOvnnZRANWARoenBOjdF_l00ApShyLZtqug.jpg?r=27c",
          trailerVideo: season4Recap,
          trailerSeason: "Mùa 6 (Teaser 2): Bóng ma Anh Quốc",
        },
        {
          id: 3,
          trailerPoster:
            "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaSLsSw0B1mNUnk4hpJ0vQ7tsywoENP1T4wcMKh2ay1TWgXKIzxDVgsj1nfIZxmkG4X3Pd5QySu8BpKrbuM0HC2C2JiUWyYXnMof9ySJjy404dd2odxQ0CNxWQ.jpg?r=fe8",
          trailerVideo: season4Trailer,
          trailerSeason: "Mùa 6 (Trailer): Bóng ma Anh Quốc",
        },
        {
          id: 4,
          trailerPoster:
            "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABViRfXb8GaY2GLSqyYr0FwRH7Y9rMxmAHkn-V0zI9HZU3Qp718P3ZPB9I3rbqIljjJMZHG6G4hKP0LC9LWvbPWYlsHUizfYm374n4bFrseVrQm2k54dnaZ2w7w.jpg?r=a5a",
          trailerVideo: season3Recap,
          trailerSeason: "Mùa 1-5 (Tóm tắt): Bóng ma Anh Quốc",
        },
        {
          id: 5,
          trailerPoster:
            "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdBgyFxwOSW9M_KyQl4P2RxloFDQPJrBCbzcYvZ9UXmUStME2LY6WfF1h5d4utwyx8kf2Me6Kfj4TsuntvPEBK-xKyFSxzfLNQglqcI6k78fuh1kvEVA5FH49Q.jpg?r=d67",
          trailerVideo: season3Trailer,
          trailerSeason: "Bóng ma Anh Quốc: Mùa 5 (Trailer)",
        },
      ],
    },
  ];
  return (
    <div>
      <Title
        api={fakeApi}
        topTitle="200px"
        title="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbHEEK-o3mZvlHsUcOAjB9y0kS5cd2cIdLpbI6L6-H027Ai84vogYym6IPOODjLz57br1Jx3TsM3-crbM15IDxWYyC_z7XCIiGuLYYhyRP45HgODf9mscXbxvYOrzzWyBG0CUn0hKuLfiAF3vr_-4B3PlkbYSMlrrFzKC_qqqCz_l14kRfOE5Q.png?r=33d"
        position="fixed"
        width="100%"
        height="100%"
        icon="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfiqv2Th67pFLpn6jzARZGNhBFTtaTfd4i5KPN1-WoxqDUerVqy4i7Yw_hRk146SO2KGIjra0RIIuHbv8oZ0m9LV5YZItZygejeC.jpg?r=15c"
        hideButton="none"
      />
    </div>
  );
}

export default index;

import React from 'react'
import Title from '../../Title'
import season5 from './VideoTrailer/season5.mp4'
import season4Recap from './VideoTrailer/season4_recap.mp4'
import season4Trailer from './VideoTrailer/season4_recap.mp4'
import season3Recap from './VideoTrailer/season3_recap.mp4'
import season3Trailer from './VideoTrailer/season3_trailer.mp4'
import season2 from './VideoTrailer/season2.mp4'
import season1 from './VideoTrailer/season1.mp4'
import season5_volunm2_teaser from './VideoTrailer/season5_volunm2_teaser.mp4'
function index() {  
  const fakeApi = [
    {
      title : 
      {
        title : "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O54…5SHUSmBE2EzSa9GdNbXS1Ow61achFp5mSeVNyYA.png?r=185",
        nameFilm : "Phi vụ triệu đô",
        yob : "2019",
        ar : "16+",
        countSeason : "5 Mùa",
        genre : "Giật gân",
        describe : "Tám tên cướp khống chế các con tin trong Xưởng in tiền Hoàng gia Tây Ban Nha trong khi kẻ chủ mưu thao túng cảnh sát để thực hiện kế hoạch của hắn.",
        cast : "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
        author: "Álex Pina",
        award: {
          award: "Bộ phim này đã đạt giải Phim truyền hình hay nhất ở Giải Emmy quốc tế, Premios Fénix và Premios Iris (6 giải Iris khác).",
          check: ""
        }
      },       
      listSeason : [
        {
          id: 1,
          title: "Phần 1",
          nameOption: "Phần-1",
        },
        {
          id: 2,
          title: "Phần 2",
          nameOption: "Phần-2",
        },
        {
          id: 3,
          title: "Phần 3",
          nameOption: "Phần-3",
        },
        {
          id: 4,
          title: "Phần 4",
          nameOption: "Phần-4",
        },
        {
          id: 5,
          title: "Phần 5",
          nameOption: "Phần-4",
        },
      ],
      list : [
        {      
          id: 1,
          yOB: "2017",
          sysnopsis:
            "Tám tên cướp khống chế các con tin trong Xưởng in tiền Hoàng gia Tây Ban Nha trong khi kẻ chủ mưu thao túng cảnh sát để thực hiện kế hoạch của hắn.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX_TEIN9iXVmG7unvjlLiwVQMEk98RVSGVtPDtM2483tnkfLBV33fSp0HTNh5pANZEEDgA0_E8Txenj2NbEDmHhfFXgu2UM0LZPeZgPS-1p7AdxD7pdulEs8.jpg?r=940",
              title: "Tập 1",
              synopsis:
                "Giáo sư đã tuyển một nữ cướp trẻ tuổi và bảy tên tội phạm khác để thực hiện một phi vụ lớn, nhắm vào Xưởng in tiền Hoàng gia Tây Ban Nha.",
              runtime: "49ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYbJx_3IfZZ5als65opwcvovi2PHYgas6akp0076FgSvKmmRRBdV1JyZJBxdjyFRWXDUStaStHIraNb9vahvlXYnQyAnbfgqzcQSDiM0voBtRQQAvcbE3QmD.jpg?r=556",
              title: "Tập 2",
              synopsis:
                "Raquel, người đàm phán con tin, bắt đầu liên lạc với Giáo sư. Một trong những con tin lại chính là nhân tố quan trọng trong kế hoạch của những tên cướp.",
              runtime: "42ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdZhR7NvuXst92_ANZtsIlHLT0KRvFclZcL7YQ8DJonyxfJYcERPTXpDny2MxsVUVPq00a15A7gF5Mt7t1sHPK6WHLzJBNvCQnqG3CKbiGChE5fptPj1s_mR.jpg?r=026",
              title: "Tập 3",
              synopsis:
                "Cảnh sát có được ảnh khuôn mặt của một trong những tên cướp và Raquel cảm thấy nghi ngờ về người đàn ông cô gặp ở quán bar.",
              runtime: "52ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcqlGNbMGW7shjWbc5RIAMWipAIZ3M93jAxc5KFqh520pw0n3VLzVglXzq3gVzW2xK72AOd3PstdAczm4z-FlVn95MVWNYh0EdGVDd73Ne0d09G9_AGGLEsY.jpg?r=dd1",
              title: "Tập 4",
              synopsis:
                "Raquel rơi vào những bế tắc với chồng cũ. Các con tin sợ hãi trước tiếng súng còn những tên cướp vẫn không ngừng tranh cãi.",
              runtime: "53ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaz7aGdsOxQLA5psH7IB2Am7iigztxxdxunLiy9UHK3HGGznA5Tx_M3Gv8UPL8ISFFEiFqgXDHC9k5dprNF9hEkBBPCsM5vdp0xlrsO2u6CbubHo9DcBRINP.jpg?r=522",
              title: "Tập 5",
              synopsis:
                "Khi nhóm cướp đồng ý cho nhân viên y tế vào Xưởng in tiền, một cảnh sát cải trang đã lẻn vào cùng. Liệu rằng Giáo sư có thể đi trước Raquel một bước?",
              runtime: "44ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRjNjf1cG7OkGUeLnDqWPpErnNESg9m_PZ4K6Y5l54YqJmxgJoF9XbGoygIWzJo_oirxNrHYE3vc1HnWKxg6y_4u51204jJaWXR2l8MPmbZ2T9tT34T8i8fr.jpg?r=496",
              title: "Tập 6",
              synopsis:
                "Tình hình của Mónica càng thêm tồi tệ. Giáo sư đắc chí với những gì có được từ mánh khóe mới nhất của gã còn Río bị phân tâm bởi tin tức anh thấy trên TV.",
              runtime: "45ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRFUsS5pL2LanFl1FxLMy4s8Bo4agvrOiQVcgufvrA7fw5aVaeSO4YuDDOZyKnAkypnG0xOKV62R_hhNwCUiijk9ZVdjC5LS5dtGUnCA2B-pvDC6JzBvWjYl.jpg?r=b00",
              title: "Tập 7",
              synopsis:
                "Kế hoạch điều tra có bước đột phá, Giáo sư lại rơi vào nguy cơ bị phát hiện do sai lầm của một trong những tên cướp.",
              runtime: "49ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABel7HunsZyEl1VMccqjUEo3mW54oG0OhlTQGFnsRerWVs0ablXSZuiODem3yqJZL2ySMpQ3NbtILpefcB1pbDq4QRBYPcbY17w8RbM9iYY5SM_vN_IWzmtQV.jpg?r=f15",
              title: "Tập 8",
              synopsis:
                "Giáo sư đã tuyển một nữ cướp trẻ tuổi và bảy tên tội phạm khác để thực hiện một phi vụ lớn, nhắm vào Xưởng in tiền Hoàng gia Tây Ban Nha.",
              runtime: "45ph",
            },        
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVxTo_oOG31H5MjA8eq7tGxTL8DmWYPgSqzkX7eS8D1FjGzkFYHARyLpLnuACJB-ihppC3rwn22wHwcHUhdqymCj0hCnqjtDNd3ghlErqYBCoESkpOjjjsC7.jpg?r=2dc",
              title: "Tập 9",
              synopsis:
                "Giáo sư cố gắng ngăn chặn nhân chứng đã nhận diện được y. Berlín tìm cách báo thù khi tên mình bị lan truyền và vu khống trên báo chí.",
              runtime: "44ph",
            },
            {
              id: 10,
              number: "10",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWtXGvWXyPlJ4Aoq1kk2_VPX1kfNSzlbS3hHVI5OBZkNfMVhBtqxS2p0AdmaR4kn_EQJfHrX2Up_2AwqMlknum7qQtIc5PInoAtMXZTJ0eZu_s60hnt73Vo9.jpg?r=0b8",
              title: "Tập 10",
              synopsis:
                "Raquel vào Xưởng in tiền để biết chắc chắn rằng tất cả con tin vẫn còn sống và an toàn. Nairobi cũng đã dành cho Alison lời khuyên.",
              runtime: "56ph",
            },
            {
              id: 11,
              number: "11",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQInLhOiykieECdqdXNlw4WXxSNlDA540H33tP1xYlTswIjmgExo4d6H-J7tvwq-VM_HALu5dIi6ycvn5wFY9CvpzlSrgUCxlB2oCuHocIrDNPdEmnL6TqC9.jpg?r=9d0",
              title: "Tập 11",
              synopsis:
                `Ángel và Raquel nghi ngờ về sự trung thành của nhau. Mónica "tấn công" Denver. Río phải đối mặt với quyết định rất đỗi khó khăn.`,
              runtime: "44ph",
            },
            {
              id: 12,
              number: "12",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABek-tXKd9PiV9G7VcYhpV2Csp-C0c4XB55893u5VSPz1L0EtknMe1-WYPOieIKfxB2PDr9944Y-GNQGtWEwez1S8-ZzrJJ1zD8lUaft2W_12ftgRRZbIVC4_.jpg?r=354",
              title: "Tập 12",
              synopsis:
                "Arturo tiếp tục vạch kế hoạch giúp một nhóm các con tin tẩu thoát. Giáo sư tiết lộ kẻ đã cho hắn ý tưởng về vụ cướp.",
              runtime: "45ph",
            },
            {
              id: 13,
              number: "13",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZEdC_hAnkP2O1W0uXSNNlKwJX1UKG1b0hnVPK4-FuI1lFM_OFU2KyshojydqRul7ZZf40GozTyrrnCoieGVWeF-iS101Y8rXPH_XcpfBJ8npxos5th-7bWL.jpg?r=19f",
              title: "Tập 13",
              synopsis:
                "Giáo sư gặp người mẹ của Raquel trong hoàn cảnh đầy căng thẳng. Tại Xưởng in tiền, những tên cướp buộc con tin phải chọn giữa tiền và sự tự do.",
              runtime: "56ph",
            },
          ],
        },
        {
          id: 2,
          yOB: "2017",
          sysnopsis:
            "Khi cảnh sát sắp lần ra danh tính Giáo sư, hắn không thể liên lạc được với nhóm cướp trong Xưởng in tiền. Cuộc nổi loạn xảy ra và một trong những tên cướp đã bị tóm.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWMP8gHYkc4P-yFlZyg5Ku2DooykoZumTBHbwZ-8YcMVFCAMnsW84lxLad770e2k7-nURGuzhhsXX_pDaUeU7H8-uP_HCw__V7kRTrj-ptgEPbXdDgbxFez6.jpg?r=283",
              title: "Tập 1",
              synopsis:
                "Chuyên gia pháp y khám xét ngôi nhà ở Toledo để tìm mẫu ADN trong khi Giáo sư mất khả năng kiểm soát tình hình. Sự chịu đựng của bọn cướp ở Xưởng in tiền đã đến giới hạn.",
              runtime: "44ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXvjgTbyH2C6s27Xg_d7rr5XClmrnguFC7S_8sb-Dlh87qPnL9OjoJmk8svIRPeIGfaPoENN9O4pQIVwmX_14qXGIknXw_2ZDBNEe8iz6rjDL1cuuAvxshCa.jpg?r=f86",
              title: "Tập 2",
              synopsis:
                "Cảnh sát thẩm vấn tên cướp bị bắt đầu tiên. Tức giận với những hành động gần đây của Berlín, Río đã đối đầu với anh ta.",
              runtime: "43ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVKA4qD4Po_8R7pwtremIYDJ69JoghNJohbSeEZW5XbfcP3O3kqpFZSjuZ6H0ZeGsmynKEZsDMPJE5B9VPKHJ3d7XX_8Mp1lUDTwK3Zv3wVSeEwPp-VzGJ2u.jpg?r=62d",
              title: "Tập 3",
              synopsis:
                `Nóng lòng tìm ra chân tướng gã Giáo sư, Raquel dùng chiến lược đánh vào cảm xúc của kẻ bị bắt. Hình phạt cho sự "phản bội lớn" làm nảy sinh sự chống đối trong nhóm cướp.`,
              runtime: "45ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT9MyG__YRwAgLqMZ59Glii5uT-oxklRahIrQnK-LnBnsufLOSW9X5hyW3W0HL1WtKxIO4UIb0Qbrw1OJM6G6arpVerobEXXqzgQQrNeOk8bZSkyavY_uJQu.jpg?r=50e",
              title: "Tập 4",
              synopsis:
                `Nhận thấy kế hoạch không khả quan, nhóm cướp đổi hướng sang thu hút sự ủng hộ của công chúng thông qua báo chí. Raquel giăng lưới nhằm tóm gọn gã Giáo sư.`,
              runtime: "52ph",
            },            
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT5Y30oB0g7hHsFEjqCmafgiBK3iJ6cKrxuyoN8ZlsH3BKiwIkB8ZFDcWLafw0eOX0G3ffHCdmnYpg_azSbnGrsMi0KytOX2R-nZJiF97cRETFwXFg3yLOLG.jpg?r=33b",
              title: "Tập 4",
              synopsis:
                `Arturo cố gắng lập một kế hoạch trốn thoát khác. Trong cuộc trò chuyện với Salva, Raquel đã phát hiện ra chi tiết nhỏ khiến cô không khỏi băn khoăn.`,
              runtime: "44ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTucYoJKIQr6HdksYLKNERnyqrieJVJAHupDhD8gh93EBy4zf1q_za5KGS001Bw5r8zdETnUnVXqigkzpt9TEYcg3KUhkU8oCl8gzaO9cs0dCSp1y-3QCAkJ.jpg?r=deb",
              title: "Tập 4",
              synopsis:
                `Sau khi thú nhận bí mật che giấu từ lâu, Moscow đã làm con trai mất lòng tin ở mình. Kế hoạch dự phòng để Tokyto trốn thoát đã gặp trở ngại, buộc cô phải ứng biến.`,
              runtime: "47ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXm-22XxWleP4CjHMIkdRzox3dHHeQ98uDG05G9Yf0RjR-8yCE-IxpH2RDaIFu96nChRPGUgNTyW21JI19xva9P2zIYNPNGYKQ9caXVEdR3F9vuXtwTdF_Is.jpg?r=94a",
              title: "Tập 7",
              synopsis:
                `Nhóm cướp phải chạy đua với thời gian để cứu mạng một tên đang bị thương nghiêm trọng. Trong phút giây đơn độc, Ariadna đã thú nhận với Mónica.`,
              runtime: "45ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfssCxuxLhNNRnG5E4zpWvQmLfDSlZS5gSEcOx3Vsms-yjh75Q_6nwAMwlqkFg64yz1NSIUHHVppItIjW6tQrNW2YomML3AlMq9jaCyaYAMaqbc0behrQqpq.jpg?r=691",
              title: "Tập 8",
              synopsis:
                `Sau khi bị loại khỏi vụ điều tra do có mối quan hệ với Giáo sư, Raquel đã tự mình truy tìm kẻ chủ mưu.`,
              runtime: "50ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQAzXEvZGPhE-bdMrgjbaz4ElLgNl98pJO9QPpsROK3WL8GKFih4_DbrDhL_dYlkJvUDh7g-ybrE5bZH8u9QlNf6Kmz6xIHUduXl8b76WpnZXNdSd1dl2Cmb.jpg?r=999",
              title: "Tập 9",
              synopsis:
                `Khi cảnh sát xông vào Xưởng in tiền, Berlín cầm đầu những tên cướp trong ván bài lật ngửa cuối cùng. Liệu rằng họ có thể cao chạy xa bay với 984 triệu euro?`,
              runtime: "50ph",
            },
          ],
        },
        {
          id: 3,
          yOB: "2019",
          sysnopsis:
            "Giáo sư cùng cả nhóm tái ngộ để giải cứu Río. Lần này, họ nhắm vào Ngân hàng Tây Ban Nha với một kế hoạch mới đầy táo bạo và mạo hiểm. Cuộc Kháng chiến tiếp tục.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTkXDXti9dGbhhLH7L9RPJv9JKnK_kv1USQbn-QGYl7MIk0hBEYpXyXrwL4Wu3nTEgJjjifIUenBjI_D_HHciHJEdZ-1rdYgHKT0tKJRoxuq-W1ukXlH1JZx.jpg?r=e56",
              title: "Chúng tôi trở lại",
              synopsis:
                "Khi Río bị bắt, Tokyo tuyệt vọng tìm đến Giáo sư để nhờ giúp đỡ. Cả nhóm tái hợp để tìm cách cứu Río... với một kế hoạch táo bạo hơn bao giờ hết.",
              runtime: "51ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUn4dCXmT5gS1NHPEMxAIRpBEQ1G-eVxNbxMph21sQeMvlN2ymaQNwvCk0S4-y8QZ5meEi4F8KANrGzxwE22Nh-qY3KNGW-AMOR7WHJnvRuuSJw3IIf9HnDm.jpg?r=a06",
              title: "Aikido",
              synopsis:
                "Giáo sư nhờ đến Martín để thực hiện kế hoạch của anh trai ông ta và nhắm vào Ngân hàng Tây Ban Nha. Bước đầu tiên là gì? Gây náo loạn.",
              runtime: "42ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQy5bHBKgQmq88lcOxN5EdSgGx0lvQsAngGWru3gkm_yGU00dMbnKnnhLJ6vtBMxCREaZEdDlRo3s6eEpx4Uq4Hggdee7WbALbzjQ0WIAOZU3KPsOk3K5UoL.jpg?r=adb",
              title: "48m dưới lòng đất",
              synopsis:
                "Nỗ lực của Tokyo và Nairobi thất bại thảm hại. Giáo sư nhớ lại những gì Berlín đã nói về cách họ có thể trộm vàng từ hầm vàng ngập nước.",
              runtime: "50ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZm9Hz9iov0HhCizNRd_BAdG1uN8DqZYsCsoin-IcVaGUpFuk-plmTmBmn6f6eGSKaxh_bEws0xhhaqicuFyx5nFK4OYukW2zTlX7dMn1TgRoGQgre2zaSsu.jpg?r=ffe",
              title: "Giờ là lúc cần đến cá heo",
              synopsis:
                `Việc Tamayo vi phạm quy trình khiến Giáo sư bất ngờ. Bogotá trấn an Denver. Khi thời gian không còn nhiều nữa, Palermo khởi động kế hoạch "Chân Vịt"`,
              runtime: "44ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbaEg-6kE5Opap7LpeLNehLONrRXzyMmvqg_5GuLrL9G_vszihSn74B-neNM1vPq2F60PtlCc_0AKbWCj5fzLxae_3DgxKrZTHBC2Ok02AICIhcIBrmXWjSq.jpg?r=1a4",
              title: "Bùm, bùm, chào",
              synopsis:
                `Giáo sư khiến các quan chức sửng sốt với "màn trình diễn" mới nhất, nhưng để trả đũa, một thanh tra đã đe dọa Raquel. Palermo và Nairobi tranh cãi gay gắt.`,
              runtime: "50ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQhUybVYNT61ZiouiIUn6Vh6ujzOUrSTnEqgkGInyixvQyw3ZCMiQ0bK66m__iiKWPL3U8DyysL36AmFVHQ4uPKybQNs5AtZ2QFpihQrU4MpxEIp5pDzw3Aa.jpg?r=1ad",
              title: "Mọi thứ đều lưu mờ",
              synopsis:
                `Ngay khi thanh tra Sierra dàn dựng kế hoạch nhằm lén đưa một đội vào Ngân hàng Tây Ban Nha, Giáo sư và Raquel mất liên lạc với Palermo.`,
              runtime: "48ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXytnHW44-PH-w2meJezTV0L6DtyVA7QCbYiHRfwWNgJX_ubh4MYvi4N6PM7TRizAy41fyiu64ZZ5iMy9eMyocE7cI-VRblVCAcyEeTIzyvwGgxFOD2bkEIS.jpg?r=57c",
              title: "Kỳ nghỉ ngắn",
              synopsis:
                `Niềm vui của Tokyo biến thành nỗi cay đắng. Ángel theo dõi và suýt bắt được Raquel cáu bẳn và Giáo sư. Chính quyền treo thưởng nhiều triệu đô la để đổi lấy thông tin.`,
              runtime: "46ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRPuYTY-nREF_6XfKpsberQZizrsBCtM1A1a8JSI67rypbnZZ36haI4XQVBDXWf_qUUktTDHXultFi3g69tV0ZohF4RDrVgMoI4rZSlS8zdRohLUWox7fANe.jpg?r=e9c",
              title: "Lạc lối",
              synopsis:
                `Tokyo tính uống cho vơi nỗi sầu. Sierra lợi dụng điểm yếu của Nairobi để tấn công cô. Trong khi đó, Suárez tiếp tục truy lùng Raquel.`,
              runtime: "60ph",
            },
          ],
        },
        {
          id: 4,
          yOB: "2020",
          sysnopsis:
            "Bao mạng sống rơi vào hiểm cảnh khi kế hoạch của Giáo sư dần sáng tỏ và cả nhóm phải chống lại kẻ địch từ cả bên trong lẫn bên ngoài Ngân hàng Tây Ban Nha.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSKukA0eQXX3h2Kd5ZcKpliAAVGQraq4TG7dLzfIefmpK1oeocb5pKa_f_7bPEkLBZ6xp_lmuz25ltIXB76VXLvY3qnz0kPlIUHWjbpAakkQRy8br-bIYmTa.jpg?r=246",
              title: "Trò chơi kết thúc",
              synopsis:
                "Sự tức giận và tiếc thương khiến căng thẳng trong nhóm dâng cao. Giáo sư, tuy đang đau buồn, tìm cách thực hiện một cuộc đào thoát táo bạo và nguy hiểm.",
              runtime: "54ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRKGgyRyqtq_VKSY6vb7sJh6lL-eKm42muqQFhfTSs2HZb4PEQN1LNwnJYZH3yj0wChUW0zx__rYZafi9LEHFW6VxHQnuchAAHztSt1vqBIW8mrDN3CURI8J.jpg?r=387",
              title: "Đám cưới Berlin",
              synopsis:
                "Hành động của Palermo khiến băng cướp choáng váng. Sierra ép đối tượng điều tra chấp nhận một thỏa thuận. Giáo sư nhớ lại đám cưới của anh trai mình.",
              runtime: "46Ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVgUleMpZ-HdyPS_iUMnaMxIAr1rYSJ1vYI71MS_316JyU-GUGylj57_Acx_XLtQMPkjGBdVCB7ZbGldwSzyngzMQUtr1JIHVlhWZ9Y7toWGalKyhIFyeuwW.jpg?r=643",
              title: "Bài học giải phẫu",
              synopsis:
                "Nội gián của Giáo sư cố gắng chuyển thông điệp từ Giáo sư cho người ở trong lều. Denver ngày càng ghen tỵ với tình bạn của Mónica và Rio",
              runtime: "43Ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWXEKA9UMm-NsNqhzt1LLH5w8KMNntEvfAUXDmGc-T51xBEIxsX2f6uY2EAy92yDeZTv_kyhnFcqDX45yDHeJi7xXMaBInBY-gGR05SkYbjzlJWpl_rjqa_h.jpg?r=b42",
              title: "Bước đôi",
              synopsis:
                "Trong quá khứ, Berlin dự đoán rằng Gandía sẽ gây rắc rối cho phi vụ. Cuộc thẩm vấn Lisbon của Sierra dẫn đến một tiết lộ cá nhân.",
              runtime: "54ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeJ9604L5HYlCSt9rFFcl1p-Pd8rpnVPHxFcR0P5UclTSsjhZqgk3F58TWQYr0x5xlsVejedFXOL3D5hvTa_TMvZK8wofztPfy1A8HCwkUPVsAvPllN-gJuj.jpg?r=11c",
              title: "Năm phút trước",
              synopsis:
                `Denver nhờ một người làm tay trong giúp đỡ. Nairobi cố gắng động viên đội mình khi mối nguy quanh họ ngày càng dâng cao.`,
              runtime: "44ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbJ8YrmvJFr-BNc7e5OiHgyWFoZmJCmFu9d22OJFvWtM0DU4TVMinEmLksws7s3Te9nhG2Dvy0C4e4UwBXl2Rq5OMqzfF7EVOZqYEfAWmnlLlM2I3DMBM9vS.jpg?r=4da",
              title: "Đo ván",
              synopsis:
                `Khi Nairobi bị bắt làm con tin, Gandía đàm phán với cả nhóm. Giáo sư gấp rút tìm kiếm một kế hoạch mới để cứu đội của mình.`,
              runtime: "47ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf3QIdzPuqPi_5jEVK8dQo1UwyVF3lQNgq7FlZcgj2IXRLItbse7Jnooyem96vSFtXc-m551X6X-60s4A_J0hZl1128abCjAhSpmWQSEYLJOwH3c7i7iBNGr.jpg?r=6ce",
              title: "Tấn công lều",
              synopsis:
                `Cả nhóm quay cuồng sau cuộc tấn công vào một thành viên. Giáo sư bắt đầu thực hiện kế hoạch đã điều chỉnh của hắn với sự giúp sức từ những người mới tham gia và Palermo.`,
              runtime: "53ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUF-ZfFI1s_bQWJaDtTcCzoDA5CWYCMbMCg_iqt09-R9FpA9Eh4zHhEiL6ct2EUjRMJ2HkWq3a_iNobzJOvXITrEgRNv_WHyEdJHVz5kJfBY6aQKfNKmxe8g.jpg?r=bca",
              title: "Kế hoạch Paris",
              synopsis:
                `Giáo sư, Benjamin và những người khác nỗ lực giải thoát Lisbon. Sự phẫn nộ của Tokyo đe dọa niềm tin của cô đối với kế hoạch. Sierra tự mình hành động.`,
              runtime: "61ph",
            },
          ],
        },
        {
          id: 5,
          yOB: "2021",
          sysnopsis:
            "Cả nhóm đã ở Ngân hàng Tây Ban Nha hơn 100 giờ và Giáo sư đang gặp nguy. Tệ hơn nữa, họ sắp phải đối mặt với một kẻ địch mới: quân đội.",
          listEpisode: [
            {
              id: 1,
              number: "1",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdZbvByfngjfP6z_LsYwQC0ZuF73iDtosy7cplgp64X3wPMPJo_4I8RDnCdiK48ux3FoG2Y1HKABDWeSzMGJNAUViC3IzsT-cjrImUBh5H-VilE4CSrtGsOb.jpg?r=ce6",
              title: "Đường cùng",
              synopsis:
                "Giáo sư đối mặt với Sierra khi Tamayo gia tăng áp lực trong đàm phán bằng cách gọi quân đội. Trong quá khứ, Berlin gặp một người thân.",
              runtime: "49ph",
            },
            {
              id: 2,
              number: "2",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABazuegH3eWhnx0kqyMJTR75Mx38JiH7PDu3O3yXImVK-4xgoMSK6M_s5pUZ2vv63dp17Dpiw6hyobI77d_ZxhahZ9jpfvlM5Il1BV14dhl8KLoL1wMBf0ALj.jpg?r=142",
              title: "Mày có tin kiếp sau không?",
              synopsis:
                "Arturo chớp cơ hội phản đòn đồng thời đẩy mạnh chuyện báo thù cá nhân. Lisbon có một khám phá vô cùng quan trọng.",
              runtime: "52ph",
            },
            {
              id: 3,
              number: "3",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbR37EcWI2K0_eaFwBFInQLkZw-DqsRIpaBUZtTL6tHwWagVwS8K7jh7Lp-P8wdwELpTNBmC2JQ0l78ZnSQglzw4nYcTLLi4ATruEdGWvGcKX519KqTVLTz4.jpg?r=c04",
              title: "Chào mừng đến vói bữa tiệc cuộc đời",
              synopsis:
                "Sự phản bội và một tình huống khẩn cấp khiến Sierra không kịp trở tay. Palermo tập hợp đội quân khi quân đội áp sát cả nhóm",
              runtime: "50ph",
            },
            {
              id: 4,
              number: "4",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZDk0kWxsQ9QlYPps58yHDI7jujNJu5knb60aS2ZZSWMqmDmnCpUTxAn2XRnkFtITP9wUNG3BuQCzn5QwIklZuQAvDhr_wRKWKhGdFJYljc5RJsO4AfTsAEU.jpg?r=1bc",
              title: "Một chỗ lên thiên đường",
              synopsis:
                "Khi tính mạng của Helsinki lâm nguy, nhóm cướp tiến hành một cuộc phản công bí mật. Nhiều năm trước, Berlin và con trai đã cùng nhau thực hiện vụ trộm đầu tiên.",
              runtime: "52ph",
            },
            {
              id: 5,
              number: "5",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfNun2gZ2M0FhMzGU244VjtjPmyMAi8KnZC-kjOTUFqgH5ZB-BZ9VcsU69mBJXbxad2RbWlSZpGd8o7zvbpt42tNLaMoNx6XiEY2iTjxYarJ6F68r1xKHfTN.jpg?r=b41",
              title: "Cứu nhiều mạng sống",
              synopsis:
                `Vây quanh là tiếng súng và mắc kẹt trong nhà bếp, Tokyo nhớ về mối tình đầu và cuộc gặp ban đầu của cô với Giáo sư.`,
              runtime: "55ph",
            },
            {
              id: 6,
              number: "6",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRpgGNYzngJqCazpJucVZm9p2pxcOGg9E2p-1hsp45BOIl_QiBpRxqJ3pTNKWZvETG7yZoSMC6fmNfGVF2izFrdHNyhX8OUFnPaw2idJDFsAwt7cn3EHFQb_.jpg?r=617",
              title: "Van thoát",
              synopsis:
                `Sierra lợi dụng nỗi buồn đau của Giáo sư và giành được lợi thế. Trong khi đó, cả nhóm đối mặt với hậu quả về tâm lý do cái chết của bạn mình.`,
              runtime: "54ph",
            },
            {
              id: 7,
              number: "7",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRSdT0S2yvTjqEMNR1hLhQgSF0tuhPIQV8bo8xt0jI2OjMZQ2-fPKqduJBeUMiL_kMpBnFkXFDIRvOoScHAtA4ltJdnUw61lyh3h-OaMiMFLkqh-0HlgQM50.jpg?r=b9d",
              title: "Tư duy khao khát",
              synopsis:
                `Tamayo mở cuộc truy lùng kẻ thù đang lẩn trốn trong khu phố. Trước đó, Berlin và Palermo giải thích cách họ định chuyển số vàng ra khỏi ngân hàng.`,
              runtime: "54ph",
            },
            {
              id: 8,
              number: "8",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeCwATiSpXOFJh34VgCeMNXhkDiXhjlDTqWzXTU1WvoQvwBKltZUcAdn3HGkeI_aHVTBc_Nrqc4dd8htVRWKsq9jFwH34zZvklFt4j_qcYBccyzZHC28xCCW.jpg?r=d8c",
              title: "Giả thuyết tao nhã",
              synopsis:
                `Tamayo săn lùng số vàng trong khi cả đội chạy đua với thời gian. Mónica lo mình lên cơn tâm thần. Berlin bị lừa dối nhiều năm về trước.`,
              runtime: "50ph",
            },
            {
              id: 9,
              number: "9",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQA5FbgeWzDdQaHY1sOrdUUt_4flLnR948Tpj__4A1YpWZknXLiMOb3iR7GZpQOJ6MopjIuT87kPbFnwr18puQyrjO2FG42_B0QETFmh-Hdz7oOcSNnAtfsr.jpg?r=712",
              title: "Tâm tình bên gối",
              synopsis:
                `Giáo sư sôi sục sau khi bị địch dùng chính chiến thuật của mình để đối phó với mình. Khi mọi hi vọng dường như đã mất, anh đưa ra một quyết định táo bạo.`,
              runtime: "52ph",
            },
            {
              id: 10,
              number: "10",
              img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcuIW5osejUU4c-INzZ0YybH2AFoh7n1yCaPvvRz2QynLquUtGgIniL3kfRYIoTiEsCqA-KOdKQXwfgg7FA3Z7zctTDwdBUgP7BHZjHS56gcNa-Q0GdEQ-QN.jpg?r=e7a",
              title: "Truyền thống gia đình",
              synopsis:
                `Khi cuộc sống của nhiều người bị ảnh hưởng và nền kinh tế của Tây Ban Nha bị đe dọa, Giáo sư và Tamayo bước vào trận chiến cuối cùng.`,
              runtime: "76ph",
            },
          ],
        },
      ] , 
      infoMoveFilm :{
        genre: [
          {id : 1,
           name : 'Tây Ban Nha'
          },
          {id : 2,
            name : 'Chương trình truyền hình tội phạm'
           },
           {id : 3,
            name : 'Phim truyền hình giật gân'
           },
        ],
        genreShow : "Kịch tính,lý thú",
        listCast : [
          {id: 1,
           name : "Úrsula Corberó"
          },
          {id: 2,
            name : "Álvaro Morte"
           },
           {id: 3,
            name : "Itziar Ituño"
           },
           {id: 4,
            name : "Pedro Alonso"
           },
           {id: 5,
            name : "Miguel Herrán"
           },
           {id: 6,
            name : "Jaime Lorente"
           },
           {id: 7,
            name : "Esther Acebo"
           },
           {id: 8,
            name : "Darko Perić"
           },
           {id: 9,
            name : "Hovik Keuchkerian"
           },
           {id: 10,
            name : "Luka Peroš"
           },
           {id: 11,
            name : "Belén Cuesta"
           },
           {id: 12,
            name : "Fernando Cayo"
           },
           {id: 13,
            name : "Rodrigo de la Serna"
           },
           {id: 14,
            name : "Najwa Nimri"
           },
           {id: 15,
            name : "Fernando Soto"
           },
           {id: 16,
            name : "Mario de la Rosa"
           },
           {id: 17,
            name : "Antonio Romero"
           },
           {id: 18,
            name : "Mikel Bustamante"
           },
           {id: 19,
            name : "José Manuel Seda"
           },
           {id: 20,
            name : "Ramón Agirre"
           },
           {id: 21,
            name : "Alba Flores"
           },
           {id: 22,
            name : "Enrique Arce"
           },
           {id: 23,
            name : "Patrick Criado"
           },
           {id: 24,
            name : "Diana Gómez"
           },
           {id: 25,
            name : "Miguel Ángel Silvestre"
           },
           {id: 26,
            name : "Paco Tous"
           },
           {id: 27,
            name : "José Manuel Poga"
           },
           {id: 28,
            name : "Kiti Mánver"
           },
           {id: 29,
            name : "María Pedraza"
           }
        ]
      },
      similarContent : [
        {
          id: 1,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABenSkliD28lo6Ysco_3Wa2N_bYnDr8L8EW7t_FlS_KXlXV90D2mj11u-d3ZgOYbKUXVgPKRSWFivLcofu9lNI4XKkezXOArDWxl_dGuJRA5zfJorqkIjwHOeTvjPBtPcXL9xeg.jpg?r=1b8",
          link: "/title/title8"          
        },{
          id: 2,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWACK4q1Ebbb8XwuJyymbYuM5AwxJdC5hkoucMbA_tOt0fPGIli0iwNUUsfDyzEqU6BAp6FfGc3CxpsaeOyHBWu-LmPihbrKodI1-3c_6VgSi-gbIAaG1sLg3RGE2c0WqenLMg.jpg?r=11b",
          link: ""          
        },
        {
          id: 3,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWI15gXeXfTGJkSJ8GvN4c77qV9wexiw1Ag9gnlVu5cR0f-o-ixZSRHWd8u7JZO1cw6zrdcyMQcw4f08YbBTSv8p5wGzcy7pUuzklfCjpbZ86h0qLGUPxlgOrdDD0nlulb9gDg.jpg?r=281",
          link: ""          
        },
        {
          id: 4,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRsxqD9r_bxSD45ry6vXszZ0tW96Nbug6tDJGRjZYKBhNkk0hKYiY5aBJyCWDzz-0ry_F-cVW_svKZEzCLNP8Lmq_OurMavpUB72y9Zr3TaDKHMSvU8Nb_ZfUzIYwiPwI2vHLQ.jpg?r=e0a",
          link: ""          
        },
        {
          id: 5,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb5pNucsNhunag_-L0Kz-7tWy6fkvLKOmaY1WdTIOWN7PPu0mby34YEd8sxfxRCB7CNrY6o7cGoWNMmaUpFB3XOIdiNUz9WPL7siOEH62_sS8zmNnv1whRky9cl_mKZX6OOclw.jpg?r=c45",
          link: ""          
        },
        {
          id: 6,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZu6KWg6gh8u5dpz8RTpW143n1aZlmBX5IQpL_1dksjfY4iJXvjdJUaaHh64gUHOz006ugujSqMF_PouP0FufrM-H7qsqM7rxRAgOc2ezOkL5o4rCMsG1xPBVcfcRL-TnD_EWA.jpg?r=4c2",
          link: ""          
        },
        {
          id: 7,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWmlkMPwpR40mYxo6alX2EJckNV9xqn9ZnDyEySuU9kpONfu6V8LH4gw1Sxgz5AEdoK1O5bSFR9QqES0sQ30NSW3jBhS57QJQWzRVv06wMf21YYHuQ5VSTR1cTz2VsyEAfdmZw.jpg?r=1d0",
          link: ""          
        },
        {
          id: 8,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVBULvh35PisEcwqYfM-7-Rh7k2mwSSjGgg-U8tCbVBY8RA3bkEaPp-SRBbtDpaDH9Owl1bZqNSX04nVzjXXD9F_sEAj51fDjK-uBjD13P9kcKrDc_Sx2u-hIQfzA95yczaPxIG_Kh6kMQVfcoHMUq8XGx7OAIpqjVIjGLWXeVr72lq5rhHh7MOKIRBBrdQXY6sd2cx3A3j-KylcBp8Dqp2ZnWEvJCnI95gwrVMb9r9gJwxGL5BLnyJ4cpl-gHbVDYcXLnTt_1Q6_Yshp1seQPOz0WDOIQs2JhDNA0UTD_S-hWBk2qhe.jpg?r=d52",
          link: ""          
        },
        {
          id: 9,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYKBA9jRlDBuoRPJm_STF2hM7HwFusuXQ7ewwTwj4EEr6Ix2o322kRz96JV4PdvkduVGmeZ6bPAIvOjgZlWk-t5fohUZGCULl1mq.jpg?r=55a",
          link: ""          
        },
        {
          id: 10,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQND6LR-ZOwJkAKFrSQgPnWMzytIUxihHgLegXkWiMlGIs6WSQC2KTZkwhkqL271U7EdvVf__BGZi9yUGdEkQeA1Vcm02UXCARqPojfYuYRKltiuCCrXinV6DKjrkiHZuwqp3w.jpg?r=4f8",
          link: ""          
        },
        {
          id: 11,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbjne_dkh2Zlr_rZI1yHQhj-t0U20YKijTSSgaMUlB-R5k1nq9Mtyp64jBZyoZJF8EZNw6HL9ZWaCOuAxDTg9ylMEO82JEHrYxXRE9dPFqsjPCLyoZ-oNs15kFu5AN-04Q9Ivw.jpg?r=f24",
          link: ""          
        },
        {
          id: 12,
          img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeQwCr6V3Cyb-vEXNmdIPUyxAAKMTk87N0TME1nI8LsvqZe8STfOaPaxuYNycwaQcmgtyvSyzBPUKtmq2DRWJcBRfKAQTSyeprINq_MidBMmjuNgo7RaNEOqokSLn6KgHT0_DA.jpg?r=09f",
          link: ""          
        }
      ],
      trailer : [
        {
          id : 1,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSyUPvfXumPM3Z8ZSNsYfc6cr5cIILGVe78zk03Gc98FnPW9dAPstYgoeP2mQLk4FJDhQX23_vD2yXXNeltd9N-aPywiWIZXHd9tbpPIOU30YN-vpZwZQmRlvw.jpg?r=fb1",
          trailerVideo: season5,
          trailerSeason: "Phần 5 (Trailer): Phi vụ triệu đô",                  
        },
        {
          id : 2,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABegj7kxwYMpEvKU7u4IW7Rj0D1yAnytg31DcRxx3117bXiItEAmkLGoL-YCkVdyKR2hnvj2YNMRwy2UY8VRy5gDbVwRkWqx2owuV7NCwG9qYSyKLRvOzf8N7fA.jpg?r=4b5",
          trailerVideo: season4Recap,
          trailerSeason: "Phần 4 (Tóm tắt): Phi vụ triệu đô",        
        },
        {
          id : 3,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeZso6Bpc8DT5fztxmSAq-ck2raIYab84QAji60jWcJyfy8P2r3Nnsd5krQ8FMAlq7z8OvHTlzMyhBovwLK6YmVvFR8wco8ug3MxM7pJJvVjZTBhnZemawNelw.jpg?r=05d",
          trailerVideo: season4Trailer,
          trailerSeason: "Phần 4 (Trailer): Phi vụ triệu đô",        
        },
        {
          id : 4,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSZTIZOWL6btNdGUGbjuELkX9T0r2A2WXuMF7gFfIiHyiErXfMeDRzDucU8Klh7u9VF0CZ3-Jcf-Bv8ul4U9LZfys0bnJtn80eiY_1DY-BzQh9NGVVxe5qzzkg.jpg?r=7c9",
          trailerVideo: season3Recap,
          trailerSeason: "Phần 3 (Tóm tắt): Phi vụ triệu đô",        
        },
        {
          id : 5,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVrKVhSm4bvjDKcM8tt7UBhcbU3Hwu6F8T3sbIHk_ijyfLOAACvurXYOlWUfkG2d2Jd5bc8vdzVGRtPnczImyyhkSBi1JwFMp0zYhGvZkCYVK2dMNGILMXa9JA.jpg?r=5bf",
          trailerVideo: season3Trailer,
          trailerSeason: "Phi vụ triệu đô: Phần 3 (Trailer)",        
        },
        {
          id : 6,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABct4LYKRg1jiEOPEF8-bOO__3-omfD6andLWR4-8xVFvE4cMMg2EYhqo2t49i-CjdPUK0rig8VvPmc37p8GzZ6BseGlmkdgq3vfjHd_Ez4nsPlvX-J9adCbq-w.jpg?r=1e1",
          trailerVideo: season3Recap,
          trailerSeason: "Phi vụ triệu đô: Phần 1 & 2 (Tóm tắt)",        
        },
        {
          id : 7,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXyd5YkJmfYODKobfX3I_ouAvHirsqmrHpJxnCvUn710OV4aYLhSLVl_WsNBE5o6GU58XrJy1gBqkMxhBSPAXi921TYofCKudMDJ4o2aXlvGsp9_CQfsj2_uEQ.jpg?r=888",
          trailerVideo: season2,
          trailerSeason: "Phi vụ triệu đô: Phần 2 (Trailer)",        
        },
        {
          id : 8,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZTzVThyVgAdvgJzdbzv4On4lss7OchslafyyVjo0tB_dS2vqi7-Xe2syj0mShh8mdNDaJPomyFeNuhfgSqtWITH3ouF1PpFkNNQrTfZ391rQIJs3HgB9Jpt-Q.jpg?r=255",
          trailerVideo: season1,
          trailerSeason: "Phi vụ triệu đô: Phần 1 (Tóm tắt)",        
        },
        {
          id : 9,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX4TKHarNt8xx-1zso4MTmbG_w_d584RmTklfOKu8YFtjo19RPms-hdOKpRgJPk6Zi5QJHxZxzA7qSPT7CAjWm-loy-xO2y0DnjYBOXORmPfRcB8FwSO3721OQ.jpg?r=c5d",
          trailerVideo: season1,
          trailerSeason: "Phi vụ triệu đô (Trailer)",        
        },
        {
          id : 10,
          trailerPoster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfYLIYX3Bl7EvcKXoQNuLbBRg24f6MoGX7DbXUdh0uK6uSAFCfFAGlmVem8NN2u_AhfopBazVftEYc15Lb7F3LE39MVPuAohGDQew2H9vJ_AUUWZsmgd3O8xfg.jpg?r=92f",
          trailerVideo: season5_volunm2_teaser,
          trailerSeason: "Teaser phần 5 quyển 2: Phi vụ triệu đô",        
        }
      ]                      
    }    
  ];
  
  return (
    <div>
        <Title 
        api = {fakeApi} 
        topTitle = "200px" 
        title = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdlvcCg_1SfVsmUDhmC3BWXMC17d5X9_iRNXzq68cWi_moqKORt3n3WTB0I4S8J74S_Xd-nOyizkQ511HuiG1n3gprGEl-TAumitDNAphIVW55QqZHGKDBiqWtl3lm6xQsSgvZAJo1c6b5WXIOyL7SBORbP2yK5Cqb0xkqB176zRNxsSgvbyLg.png?r=a93" 
        position = "fixed" 
        width = "100%" 
        height = "100%" 
        icon = "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYp_zgRoFfc48yEdWc16fZdy_upTWH2_8N0O91-tuEz1GVOUvup0cTKw8RmxlSHN0Rn9z8pplL8u_zV9TE8t2pmMaSorgt_BvW4k.jpg?r=d06" 
        hideButton = "none"/>
    </div>
  )
}

export default index
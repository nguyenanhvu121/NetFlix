import React, { useState } from "react";
import Notifi from '../Notifi/index'
import bell from "../Image/bell.png";
import { useEffect } from "react";
function Notification() {
  const Api = [
    {
      id: 1,
      title: "Dòng máu anh hùng",
      img: "https://vnn-imgs-f.vgcloud.vn/2020/05/15/14/97470694-3099243133468829-5988087990138699776-o.jpg?width=500&s=InhccvYvUMiL3hcV2e3YIg",
      describe:
        "khi mà một nhóm cướp đột nhập được vào xưởng in tiền Hoàng gia Tây Ban Nha họ sẽ làm gi",
      new: true,
      link : "/001"
    },
    {
      id: 2,
      title: "Tèo em",
      img: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/02/15/sdjaxdyd_1920x1080-teoem_296_168.jpeg",
      describe: "Cuộc hành trình đi giành lấy người mình yêu của Tèo anh, với sự đồng hành của Tèo em sẽ có những chuyện gì xảy ra",
      new: true,
    },
    {
      id: 3,
      title: "Bụi đời chợ lớn",
      img: "https://cdn.eva.vn/upload/3-2013/images/2013-07-05/1373010048-2.jpg",
      describe: "Một cuộc chạm trán xảy ra để giành lấy chợ lớn, một trong những đặc khu kinh tế của thế giới ngầm. ai sẽ giành lấy được nó.",
      new: true,
    }
  ];
  const [valueNew, setValueNew]  = useState(0);  
  let count = 0;
  useEffect(() =>{
        Api.map((result) =>{
            !!result.new && count++
        })
  setValueNew(count);
  })    
  return (
    <div>      
        {Api.length > 0 && <span className="iconBell flex">{valueNew}</span>}
        <img
          className="notifiIcon"
          style={{ width: "20px" }}
          src={bell}
          alt=""
        />
        {Api.length > 0 && (
          <div className="notifilBlock">
            {Api.map((result) => (
              <Notifi
                key = {result.id}
                /* update Api check new film */                
                image = {result.img}
                title={result.title}
                describe={result.describe}                
              />
            ))}
          </div>
        )}              
      </div>    
  );
}

export default Notification;

import React, { useEffect, useState } from 'react'
import Notifi from '../Notifi'

function ListSearch(props) {
  const [name, setName] = useState();
  const [poster, setPoster] = useState();
  const [describe, setDescribe] = useState();
  const fakeApi = [
    {
      id: 1,
      title: "Phi vụ triệu đô",
      img: "https://vnn-imgs-f.vgcloud.vn/2020/05/15/14/97470694-3099243133468829-5988087990138699776-o.jpg?width=500&s=InhccvYvUMiL3hcV2e3YIg",
      describe:
        "khi mà một nhóm cướp đột nhập được vào xưởng in tiền Hoàng gia Tây Ban Nha họ sẽ làm gi",
      new: true,
    },
    {
      id: 2,
      title: "Tèo em",
      img: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/02/15/sdjaxdyd_1920x1080-teoem_296_168.jpeg",
      describe: "Cuộc hành trình đi giành lấy người mình yêu của Tèo anh, với sự đồng hành của Tèo em sẽ có những chuyện gì xảy ra",
      new: true,
    },
    {
      id: 2,
      title: "Tèo em",
      img: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/02/15/sdjaxdyd_1920x1080-teoem_296_168.jpeg",
      describe: "Cuộc hành trình đi giành lấy người mình yêu của Tèo anh, với sự đồng hành của Tèo em sẽ có những chuyện gì xảy ra",
      new: true,
    },
  ]    
  let data;
  // fakeSearch
  useEffect(() =>{
    fakeApi.map(result => {      
      if(result.title === props.value){
        setName(result.title);
        setPoster(result.img);
        setDescribe(result.describe);
      }else if(props.value === ""){
        setName("");
        setPoster(null);
        setDescribe("");
      }            
    })
  })
  return (
    <div>              
      <Notifi 
        image = {poster}
        title = {name}
        describe = {describe}
      />
    </div>
  )
}

export default ListSearch
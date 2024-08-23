import React from "react";

function Notifi(props) {
  const title = props.title;
  const describe = props.describe;
  const fevent = props.fevent;  
  const image = props.image   
  return (
    <div className="notifiList flex">
          <img style={{ minWidth: "100px", height: "66px", objectFit: "cover" }} src={image} alt="" />
          <div onClick={fevent} className="notigiItem">
            <h2>{title}</h2>
            <p>{describe}</p>
          </div>
    </div>
  );
}

export default Notifi;

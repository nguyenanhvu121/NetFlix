import React from 'react'

function Button(props) {
  return (
    <div>
        <button className = {props.class} onClick={props.func} style={{width : props.width, height: props.height, backgroundColor: props.backgroundColor, border: props.border, borderRadius: props.borderRadius, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"}}>                  
            <img style={{width: props.sizeIcon, marginRight: "5px", position: props.position, zIndex: props.zIndex}} src={props.icon} alt="" />       
            <span style={{color: props.color, fontWeight: props.fontWeight, fontSize: props.fontSize, position: props.position, zIndex: props.zIndex}}>{props.text}</span>                                   
        </button>            
    </div>
  )
}

export default Button
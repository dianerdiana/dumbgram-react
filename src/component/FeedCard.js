import React from "react"
import {Image} from "react-bootstrap"

function FeedCard (props) {

  return (
    <>
      <div>
        <Image src={props.item.image} style={{display: "flex", width: "100%", borderRadius: "8px"}}/>
        <div style={{display: "flex", margin: "7px 0"}}>
          <div>
            <a href="#" style={{textDecoration: "none"}}>
              <Image src="/images/zayn.png" style={{width: "24px"}}/>
              <span style={{marginLeft: "5px", color: "#ABABAB"}}>{props.item.name}</span>
            </a>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", marginLeft: "auto", width: "25%"}}>
            <a href="#">
              <Image src="/icons/like-icon.svg" style={{width: "16px"}}/>
            </a>
            <a href="#">
              <Image src="/icons/comment-icon.svg" style={{width: "16px"}}/>
            </a>
            <a href="#">
              <Image src="/icons/paper-plane.svg" style={{width: "16px"}}/>
            </a>
          </div>
        </div>
        <div style={{textAlign: "right", fontSize: "14px", color: "#ABABAB"}}>
          {props.item.like} Like
        </div>
      </div>
    </>
  )
}

export default FeedCard
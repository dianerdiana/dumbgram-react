import { Dropdown, Image } from "react-bootstrap"
import style from "../modules/Feed.module.css"

function Notification(props) {


  return (
    <>
      <Dropdown style={{position: "relative"}}>
        <Dropdown.Toggle variant="link" bsPrefix="p-0">
          <Image src="/icons/notif-icon.svg" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" className={style.dropdownMenu}>
        {props.notif.map((content, id) => {
          return (
          <>
            <div className={style.dropdown}></div>
            <Dropdown.Item href="#/action-1" className={style.dropdownItem}>
              <div className={style.dropdownItem2}>
                <div style={{display: "flex"}}>
                  <Image src={content.image}
                  style={{margin: "0px"}} 
                  />
                  <span style={{color: "#FFFFFF", marginLeft: "15px"}}>{content.name}</span>
                </div>
                <div >
                  <span style={{color: "#FFFFFF", marginLeft: "40px"}}>Komentar : <span style={{color: "#ABABAB"}}>{content.comment}</span></span>
                </div>
              </div>
            </Dropdown.Item>
            </>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Notification
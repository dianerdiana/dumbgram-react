import { Container, Row, Col, Button, Image } from "react-bootstrap"
import style from "../modules/MessagesMain.module.css"
import MessagesCard from "../component/MessagesCard"

const assets = [
  {
    name: "zayn",
    image: "/images/Rectangle-1.png",
    like: "126.100",
  },
  {
    name: "zayn",
    image: "/images/Rectangle-3.png",
    like: "156.290"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-7.png",
    like: "136.000"}
  ,
  {
    name: "zayn",
    image: "/images/Rectangle-9.png",
    like: "136.000"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-4.png",
    like: "136.000"
  },
  {
    name: "zayn",
    image: "/images/Rectangle-2.png",
    like: "136.000"
  }
]

const users = [
  {
    image: "/images/Rectangle-2.png",
    name: "egi_lol",
    message: "Hello Lisa"
  },
  {
    image: "/images/Rectangle-5.png",
    name: "beach_lover",
    message: "Hello Lisa, when do you go to the beach"
  }
]

function MessagesMain() {
  return (
    <Container fluid style={{height: "95vh" }}>
      <Row style={{flexDirection: "row"}}>
        <Col md="3">

          {/* profile side (left side) */}

          <Row className={style.leftFeed}>
            <Col>
              <Col style={{paddingLeft: "0", height: "80px"}}>
                <Image src="/icons/DumbGramGroup.svg" className={style.appTitle}/>
              </Col>
              <Col>
                <MessagesCard data={users}/>
              </Col>
            </Col>
          </Row>

        </Col>

        <div style={{
          borderLeft: "1px solid #6A6A6A4D",
          height: "100vh",
          width: "0px",
          position: "absolute",
          left: "28%",
          top: "0"
        }}></div>
          {/* feed image (right side) */}
        <Col md="8" style={{marginLeft: "80px"}}>

          <Row className={style.rightSide}>

            {/* NavBar Head */}

            <Col className={style.feedHeader}>
              <div className={style.headerLeft}>
                <label htmlFor="search">
                  <Image src="/icons/search-icon.svg"/>
                </label>
                <input type="text" placeholder="Search"/>
              </div>
              <div className={style.headerRight}>
                <a href="#" style={{marginRight: "20px"}}>
                  <Image src="/icons/notif-icon.svg"/>
                </a>
                <a href="#" style={{marginRight: "20px"}}>
                  <Image src="/icons/paper-plane.svg"/>
                </a>
                <Button className={style.btnCreate}>
                  <Image src="/icons/plus-icon.svg"/>
                  Create Post
                </Button>
              </div>
            </Col>

            <div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", color: "#FFFFFF"}}>
              <div>
                No Messages
              </div>
            </div>

            
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default MessagesMain
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import style from "../modules/Explore.module.css"
import Masonry from "react-masonry-css"
import FeedCard from "../component/FeedCard.js"
import ExploreCard from "../component/ExploreCard"

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

function Explore() {
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
              <Row className={style.feedProfile}>
                <div className={style.editBtn}>
                  <a href="#" >
                    <Image src="/icons/edit-icon.svg" className={style.editBtnIcon}/>
                  </a>
                </div>
                <div className={style.profileImageWrap} mb={5}>
                  <Image src="/images/Rectangle-6.png" className={style.profileImage} />
                </div>
                <div className={style.profileNameUser} mb={5}>
                  <h5 className={style.profileName}>Lisa</h5>
                  <p className={style.profileUserName}>@lalalisa_m</p>
                </div>
                <div className={style.profileState}>
                  <div className={style.profilePost}>
                    <span className={style.stateTitle}>Posts</span>
                    <span className={style.stateValue}>200</span>
                  </div>
                  <div className={style.profileFollowers}>
                    <span className={style.stateTitle}>Followers</span>
                    <span className={style.stateValue}>51.2 M</span>
                  </div>
                  <div className={style.profileFollow}>
                    <span className={style.stateTitle}>Following</span>
                    <span className={style.stateValue}>1</span>
                  </div>
                </div>
                <div className={style.profileDesc}>
                  <span className={style.profileDescText}>Rapper in Black Pink, Brand Ambasador Penshoppe</span>
                </div>
              </Row>
              <Row className={style.linkFeedExplore}>
                <Col className={style.linkFeed}>
                  <a href="#">
                    <Image src="/icons/home-unactive.svg"/>
                    <span>Feed</span>
                  </a>
                </Col>
                <Col className={style.linkExplore}>
                  <a href="#">
                    <Image src="/icons/explore-active.svg"/>
                    <span>Explore</span>
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px"}}>
                <Col className={style.btnGroup}>
                  <a href="#" className={style.btnLogout}>
                    <Image src="/icons/logout-icon.svg"/>
                    <span>Logout</span>
                  </a>
                </Col>
              </Row>
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
                <Button>
                  <Image src="/icons/plus-icon.svg"/>
                  Create Post
                </Button>
              </div>
            </Col>

            <Col className={style.feedTitle}>
              <h3>Explore</h3>
            </Col>

            <Row className={style.feedContent}>
              <Masonry
              breakpointCols={3}
              className={style.myMasonryGrid}
              columnClassName={style.myMasonryGridColumn}>
                {assets.map((item, id) => {
                  return(
                    <ExploreCard item={item}></ExploreCard>
                  )
                })}
              </Masonry>
            </Row>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Explore;
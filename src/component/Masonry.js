import { Image } from "react-bootstrap"

function Masonry(props) {

  return (
    <div style={{columns: props.columnCount, columnGap: 0, width: "80%"}}>
      {props.gridImage.map((img, i) => {
        return (
          <Image src={img.image} key={i} style={{padding: props.gap/2, display: "block", width: "100%"}}/>
        )
      } 
      )}
    </div>
  )
}

export default Masonry

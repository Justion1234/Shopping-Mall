import React from 'react'
import {Icon, Col, Card, Row, Carousel} from 'antd'; 
function ImageSlider(props) {
  return (
    <div>
        <Carousel>
           {props.images.map((image, index) => ( //map으로 하나 하나 컨트롤해줌     
               <div key={index}>        
                    <img style={{width: '100%', maxHeight: '150px'}}
                        src={`http://localhost:5000/${image}`} />
               </div>
           ))}
        </Carousel>
    </div>
  )
}

export default ImageSlider
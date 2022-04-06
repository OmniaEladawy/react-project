import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import {Carousel} from "react-bootstrap";





function Slider() {
	
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" style={{marginTop:'100px '}} data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block " style={{margin:'auto'}} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block" style={{margin:'auto'}} alt="..."/>      
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block " style={{margin:'auto'}} alt="..."/>
          </div>
        </div>
      </div>
	 
     
    );
  }
  
  export default Slider;


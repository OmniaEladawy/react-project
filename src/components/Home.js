import {NavLink} from "react-router-dom";
import ProductCarousel from "./ProductCarousel";
import Slider from "./Slider";
import res from '../imgs/respiratory.jpeg';
import anes from '../imgs/anesthesia.jpeg';
import cath from '../imgs/catheter.jpeg';
import woven from '../imgs/non-woven.jpeg';
import acc from '../imgs/Accessory.jpeg';
import others from '../imgs/Others.jpeg';
import panner from '../imgs/panner.jpeg';

function Home(){
  return(
    <>
    <Slider />

    <div className="container categories" style={{textAlign:'center' , padding:'100px 0'}}>
      <div className="row">
        <div className="col-2">
          <NavLink to="/respiratory">
            <img src={res} alt="Respiratory" />
            <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Respiratory</h5>
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/anesthesia">
            <img src={anes} alt="Anesthesia" />
            <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Anesthesia</h5>
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/catheter">
            <img src={cath} alt="Catheter" />
            <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Catheter</h5>
          </NavLink>
        </div>
        <div className="col-2">
        <NavLink to="/nonwoven">
          <img src={woven} alt="non-woven" />
          <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Non-Woven</h5>
        </NavLink> 
        </div>
        <div className="col-2">
          <NavLink to="/accessory">
            <img src={acc} alt="Accessory" />
            <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Accessory</h5>
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/others">
            <img src={others} alt="Others" />
            <h5 className="my-3 fw-bold" style={{color:'#104773'}}>Others</h5>
          </NavLink>
        </div>
      </div>
    </div>

    <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
      <h3 className="secTitle" style={{marginLeft:'15px' }}> All Products </h3>
      
      <hr style={{marginLeft:'15px'}}/>
      <ProductCarousel />  
    </div>

    <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
      <h3 className="secTitle" style={{marginLeft:'15px' }}> Respiratory </h3>
      
      <hr style={{marginLeft:'15px'}}/>
      <ProductCarousel />  
    </div>

    <div style={{textAlign: 'center'}}>
      <img src={panner} alt="panner" />
    </div>

    <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
      <h3 className="secTitle" style={{marginLeft:'15px' }}> Catheter </h3>
      
      <hr style={{marginLeft:'15px'}}/>
      <ProductCarousel />  
    </div>
    
    </>
    
  )
}

export default Home;
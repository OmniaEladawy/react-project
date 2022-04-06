import React from "react";
import {useNavigate} from "react-router-dom";


function ProductDetails(){

  let navigate = useNavigate();

  let navigateCart = ()=>{
    navigate('/cart');
  }
  
  return(
      <>
   
  <section>
    <div className="py-5" style={{width: '1150px' , margin: 'auto'}}>
      
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center" >
              <img src="https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg" alt="product"/>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-9">
                  <h4 className="mb-3" style={{color:'#104773'}}>Product</h4>
                  <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Category</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Respiratory</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Price</p>
                </div>
                <div className="col-sm-9">
                  <p className="mb-0 fw-bold" style={{color:'#0da8a7'}}>22.000 EG</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Count in stock</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">3</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Description</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo nisl velit, eu blandit sapien aliquet in. Nam at neque pharetra, posuere diam vel, placerat massa. Vivamus non enim malesuada, ullamcorper nisi in, vestibulum dui. Donec eu hendrerit velit, placerat mattis libero. Aliquam consectetur consequat vehicula. Morbi iaculis nisi non felis ornare varius. Vivamus sed orci fringilla, suscipit nulla id, malesuada ipsum.</p>
                </div>
                <div className="d-flex justify-content-center my-5">
                <button type="button" className="btn mx-3 prodBtn" style={{border:'none' , outLine:'none' , boxShadow:'none' , color:'#fff' , fontWeight:'bold'}}><i className="fa-solid fa-cart-shopping mx-2"></i><span>Add to cart</span></button>
                <button onClick={navigateCart} type="button" className="btn prodBtn" style={{border:'none' , outLine:'none' , boxShadow:'none' , color:'#fff' , fontWeight:'bold'}}><i className="fa-solid fa-bag-shopping mx-2"></i><span style={{marginRight:'15px'}}>Buy now</span></button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       
    
      </>
  
    
  )
}

export default ProductDetails;
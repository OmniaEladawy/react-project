import React from "react";
import {useNavigate ,useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function ProductDetails(){
  const [products, setproducts] = useState({});
  const {id} = useParams();
  console.log(id);
  let navigate = useNavigate();
  let navigateCart = (id)=>{
    navigate('/cart');
   
  }
  useEffect(() => {
    const fetch = async () => {
      const { data} = await axios.get(`/api/products/${id}`);
      setproducts(data)
    }
    console.log(fetch());
  }, []);
  
  return(
      <>
   
  <section>
    <div className="py-5" style={{width: '1150px' , margin: 'auto'}}>
      
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center" >
              <img src={products.image} alt="product" style={{width:'100px' ,height:'500px' }}/>
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
                  <p className="text-muted mb-0">{products.category
}</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Price</p>
                </div>
                <div className="col-sm-9">
                  <p className="mb-0 fw-bold" style={{color:'#0da8a7'}}>{products.
price}</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Count in stock</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{products.countInStock}</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0 fw-bold" style={{color:'#104773'}}>Description</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{products.description}</p>
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
import React from "react";
import {Card,Button} from "react-bootstrap";
import {useNavigate ,Link } from 'react-router-dom';

function Cards(props){
        let {id,title,img,price}=props;
        console.log(id);
        let navigate = useNavigate();

        let navigateProfile = ()=>{
          navigate('/cart');
        }

        let navigateProduct = ()=>{
          navigate('/productdetails');
        }
        
        return(
          <Card className='col-3 mx-3 text-center border-2 mb-5' style={{width:'280px'}}>
            <Link to={`/productdetails/${id}`}>
            <Card.Img variant="top" src={img} style={{ height: '250px' }}/>
            </Link >
            <Card.Body>
                <h5 className="card-title my-3" style={{color:'#104773'}}>{title}</h5>
                <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                <p className="card-text my-3" style={{color:'#0da8a7'}}>
                {price}
                </p>
              <Button variant="primary" className='my-3 fw-bold px-3' onClick={navigateProfile} style={{boxShadow:'none' , border:'none'}}><i className="fa-solid fa-cart-shopping mx-1"></i> Add to cart</Button>
              
            </Card.Body>
          </Card>
        )
}

export default Cards;
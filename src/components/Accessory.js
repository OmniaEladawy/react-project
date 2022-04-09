import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function Accessory(props) {
  const [products,setproducts]=useState([]);
  useEffect(()=>{
  const fetch= async()=>{
    const{data}= await  axios.get('/api/products')
     setproducts (data)
  }
    console.log( fetch());
  },[]);
  const fillter=" Accessory        ";
  const {onAdd}=props;
    return (
	    <>
        <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
            <div className="row">
                <h3 className="secTitle col2" style={{marginLeft:'15px' }}> Accessory </h3>
                <hr style={{marginLeft:'15px'}}/>
                {
                    products.filter(productfil => productfil.category===fillter).map((product,index) => {
                        return (
                          <Cards key={product._id} product={product} onAdd={onAdd}/>  
                        )
                    }) 
                }   
            </div>
        </div>
        </>
    );
  }
  
  export default Accessory;
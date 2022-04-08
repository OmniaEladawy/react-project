import Cards from "./Cards";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
function AdminAllProducts() {

  let navigate = useNavigate();

        let addproduct = ()=>{
          navigate('/addproduct');
        }

        let deleteproduct = ()=>{
          navigate('/deleteproduct');
        }

        const [products, setproducts] = useState([]);
        useEffect(() => {
          const fetch = async () => {
            const { data } = await axios.get('/api/products')
            setproducts(data)
          }
          console.log(fetch());
        }, []);
    return (
	    <>
        <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
            <div className="row">
                <h3 className="secTitle d-inline-block col-2" style={{marginLeft:'15px' }}> All Products </h3>
                <div className=" col-9" style={{display: 'flex' , justifyContent: 'end' , height: '40px' , marginLeft: '89px'}}>
                  <button className="adminBtn" style={{width:'150px'}} onClick={addproduct}> Add Product </button>
                  <button className="adminBtn" style={{width:'150px'}} onClick={deleteproduct}> Delete Product </button>
                </div>
                
                <hr style={{marginLeft:'15px'}}/>
                {
                   products.map((product,index) => {
                    return (
                      <Cards key={index}  id={product._id} title={product.name} img={product.image} price={product.price} />
                    )
                  })
                }   
            </div>
        </div>
        </>
    );
  }
  
  export default AdminAllProducts;
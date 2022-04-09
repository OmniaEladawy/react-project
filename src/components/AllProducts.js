import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function AllProducts(props) {
  let navigate = useNavigate();

        let addproduct = ()=>{
          navigate('/addproduct');
        }
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }
    console.log(fetch());
  }, []);

  const {onAdd}=props;

  return (
    <>
      <div className="container p-5 my-5" style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
        <div className="row">
          <h3 className="secTitle col-2" style={{ marginLeft: '15px' }}> All Products </h3>
          <div className=" col-9" style={{display: 'flex' , justifyContent: 'end' , height: '40px' , marginLeft: '89px'}}>
                  <button className="adminBtn" style={{width:'150px'}} onClick={addproduct}> Add Product </button>
      
                </div>
          <hr style={{ marginLeft: '15px' }} />
          {
            products.map((product,index) => {
              return (
                <Cards key={product._id} product={product} onAdd={onAdd} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default AllProducts;
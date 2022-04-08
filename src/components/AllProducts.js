import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function AllProducts() {
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
      <div className="container p-5 my-5" style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
        <div className="row">
          <h3 className="secTitle col-2" style={{ marginLeft: '15px' }}> All Products </h3>
          <hr style={{ marginLeft: '15px' }} />
          {
            products.map((product,index) => {
              return (
                <Cards key={product.id} id={product._id} title={product.name} img={product.image} price={product.price} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default AllProducts;
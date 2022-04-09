import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function AllProducts(props) {
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
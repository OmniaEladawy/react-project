import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function Respiratory() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }
    console.log(fetch());
  }, []);
  const fillter = "Respiratory";
  return (
    <>
      <div className="container p-5 my-5" style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
        <div className="row">
          <h3 className="secTitle col-2" style={{ marginLeft: '15px' }}> Respiratory </h3>
          <hr style={{ marginLeft: '15px' }} />
          {
            products.filter(productfil => productfil.category === fillter).map((product, index) => {
              return (
                <Cards key={index} title={product.name} img={product.image} price={product.price} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Respiratory;
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function NonWoven(props) {
  const {onAdd} = props;
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/products')
      setproducts(data)
    }
    console.log(fetch());
  }, []);
  const fillter = " Non-Woven        ";
  return (
    <>
      <div className="container p-5 my-5" style={{ backgroundColor: '#fff', borderRadius: '20px' }}>
        <div className="row">
          <h3 className="secTitle col-2" style={{ marginLeft: '15px' }}> Non-Woven </h3>
          <hr style={{ marginLeft: '15px' }} />
          {
            products.filter(productfil => productfil.category === fillter).map((product, index) => {
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

export default NonWoven;
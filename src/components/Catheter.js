import Cards from "./Cards";

function Catheter() {

    let products = [
        {
          id:1,
          title: 'Product 1',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/TlrhodjHOEK92JcXtLTy39GsdXpVcBYGB4LunOk5.jpg'
        },
        {
          id:2,
          title: 'Product 2',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/ZgP3yiCMBJBaIRBhsrxJgl8sHSF5HEvCPOt4Px1x.jpeg'
        },
        {
          id:3,
          title: 'Product 3',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg'
        },
        {
          id:4,
          title: 'Product 4',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/VGNB7ix0JnK4KDfmISmxJPpwN8WPNB81FHknxus9.jpg'
        },
        {
          id:5,
          title: 'Product 5',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/7m285aiwIpNCL13RDoSjxVbcJpcVOaKRjvVGgYtq.jpg'
        },
        {
          id:6,
          title: 'Product 6',
          price: '22.000 EG',
          img: 'https://mymedicalshope.com/public/uploads/all/62xbz55NEmiYhC3pmLiKvDRplYuVExNtz88vNAGY.jpg'
        },
        {
            id:7,
            title: 'Product 7',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg'
        },
        {
            id:8,
            title: 'Product 8',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/7m285aiwIpNCL13RDoSjxVbcJpcVOaKRjvVGgYtq.jpg'
        },
        {
            id:9,
            title: 'Product 9',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/TlrhodjHOEK92JcXtLTy39GsdXpVcBYGB4LunOk5.jpg'
        },
        {
            id:10,
            title: 'Product 10',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/ZgP3yiCMBJBaIRBhsrxJgl8sHSF5HEvCPOt4Px1x.jpeg'
        },
        {
            id:11,
            title: 'Product 11',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/62xbz55NEmiYhC3pmLiKvDRplYuVExNtz88vNAGY.jpg'
        },
        {
            id:12,
            title: 'Product 12',
            price: '22.000 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/VGNB7ix0JnK4KDfmISmxJPpwN8WPNB81FHknxus9.jpg'
        },
    ]
	
    return (
	    <>
        <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
            <div className="row">
                <h3 className="secTitle col-2" style={{marginLeft:'15px' }}> Catheter </h3>
                <hr style={{marginLeft:'15px'}}/>
                {
                    products.map((product,index) => {
                        return (
                            <Cards key={product.id} title={product.title} img={product.img} price={product.price}/>  
                        )
                    }) 
                }   
            </div>
        </div>
        </>
    );
  }
  
  export default Catheter;
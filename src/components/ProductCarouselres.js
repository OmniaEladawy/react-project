import {Carousel} from "react-bootstrap";

function ProductCarouselres() {

    let products1 = [
      {
      id:7,
            title: 'Guedel Airway',
            price: '20 EG',
            img: 'https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg'
          },
          {
            id:8,
            title: 'Connecting tubes',
            price: '100 EG',
            img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
          },
          {
            id:9,
            title: 'BVF',
            price: '90 EG',
            img: 'https://cdn.salla.sa/lK2FDoOzNUDI3lmBKzvHm2dkKGEqt2KTx7I1Kubj.png'
          },
          {
            id:10,
            title: 'Urine bag',
            price: '90 EG',
            img: 'https://cdn.shopify.com/s/files/1/0550/0275/9337/products/RES2102_500x.jpg?v=1629901934'
          },
          {
            id:11,
            title: 'Urine bag',
            price: '20 EG',
            img: 'https://sc04.alicdn.com/kf/H649ed9f97d23443cae63e388548f7ac41.jpg'
          },
          {
            id:12,
            title: 'Suction catheter',
            price: '100 EG',
            img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
          }
        
      ]

      let products2 = [
          {
            id:1,
            title: "Oxygen Cannula",
            price: '50 EG',
            img: 'http://cdn.shopify.com/s/files/1/0045/4216/9201/products/72598bd3dd93dd99faba4b5283341fca_1200x1200.png?v=1571730897'
          },
          {
            id:2,
            title: 'Disposable Foley',
            price: '100 EG',
            img: 'https://p.globalsources.com/IMAGES/PDT/B5155022344/Medical-Foley-Catheter-2-way.jpg'
          },
          {
            id:3,
            title: 'Disposable bed sheet',
            price: '70 EG',
            img: 'https://www.evereastmedical.com/wp-content/uploads/2021/05/breathing-circuit.jpg'
          },
          {
            id:4,
            title: 'Suction catheter',
            price: '100 EG',
            img: 'https://sc04.alicdn.com/kf/H649ed9f97d23443cae63e388548f7ac41.jpg'
          },
          {
            id:5,
            title: 'Feeding Tube',
            price: '100 EG',
            img: 'https://5.imimg.com/data5/EF/DN/MY-2246628/romsons-infant-feeding-tube-500x500.png'
          },
          {
            id:6,
            title: 'Humidification Bottle',
            price: '90 EG',
            img: 'http://www.smd-medical.com/wp-content/uploads/2017/02/3-Silicone-Anesthesia-Mask.jpg'
          }
            
      ]
	
    return (
	    <Carousel fade>

            <Carousel.Item>
				<div className="carousel-item active">
					<div className="container">
							<div className="row">
                            {
                            products1.map((product,index) => {
                                return (
                                    <div className="col-lg-2" key={product.id}>
                                    <div className="card">
                                    <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{height:'150px'}}
                                        />
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title my-3" style={{color:'#104773',height:'40px'}}>{product.title}</h5>
                                        <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        <p className="card-text my-3" style={{color:'#0da8a7'}}>
                                        {product.price}
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                            }

						</div>
					</div>
					</div>
			
			</Carousel.Item>

            <Carousel.Item>
				<div className="carousel-item active">
					<div className="container">
							<div className="row">
                            {
                            products2.map((product,index) => {
                                return (
                                    <div className="col-lg-2" key={product.id}>
                                    <div className="card">
                                    <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt="..."
                                        style={{height:'150px'}}
                                        />
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title my-3" style={{color:'#104773',height:'40px'}}>{product.title}</h5>
                                        <div style={{color:'#aaaaaa'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        <p className="card-text my-3" style={{color:'#0da8a7'}}>
                                        {product.price}
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                            }

						</div>
					</div>
					</div>
			
			</Carousel.Item>
           
		</Carousel>
    );
  }
  
  export default ProductCarouselres;
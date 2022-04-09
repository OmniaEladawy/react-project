import {Carousel} from "react-bootstrap";

function ProductCarouselcath() {

    let products1 = [
        {
          id:1,
          title: "Disposable Foley",
          price: '50 EG',
          img: 'https://p.globalsources.com/IMAGES/PDT/B5155022344/Medical-Foley-Catheter-2-way.jpg'
        },
        {
          id:2,
          title: 'Disposable Silicone',
          price: '100 EG',
          img: 'https://www.oxyaider.co.za/wp-content/uploads/2021/11/laryngeal-mask-airway.jpeg'
        },
        {
          id:3,
          title: 'Connecting tubes',
          price: '70 EG',
          img: 'https://image.made-in-china.com/202f0j00zuyfEmZjlbcF/Ce-ISO-Approved-Suction-Connecting-Tube-with-Yankauer-Handle.jpg'
        },
        {
          id:4,
          title: 'Suction catheter',
          price: '100 EG',
          img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
        },
        {
          id:5,
          title: 'Feeding Tube',
          price: '100 EG',
          img: 'https://5.imimg.com/data5/EF/DN/MY-2246628/romsons-infant-feeding-tube-500x500.png'
        },
        {
          id:6,
          title: 'Stomach Tube',
          price: '90 EG',
          img: 'https://5.imimg.com/data5/AK/KX/MY-13168396/stomach-tube-500x500.jpg'
        }
      ]

      let products2 = [
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
            img: 'https://image.made-in-china.com/202f0j00zuyfEmZjlbcF/Ce-ISO-Approved-Suction-Connecting-Tube-with-Yankauer-Handle.jpg'
          },
          {
            id:9,
            title: 'BVF',
            price: '90 EG',
            img: 'https://d35cnulyv0pa6p.cloudfront.net/products/images/2017/26906/tracheal_tube_without_cuff.jpg?u8Er8Yw_5qEe2jOo2bmGO7l88avdYmRd='
          },
          {
            id:10,
            title: 'Urine bag',
            price: '90 EG',
            img: 'https://5.imimg.com/data5/IH/SV/YE/SELLER-59601336/hme-bvf-filter-500x500.jpg'
          },
          {
            id:11,
            title: 'Berman Airway',
            price: '20 EG',
            img: 'https://www.avermed.com/v/vspfiles/photos/1-1508-2.jpg?v-cache=1361040041'
          },
          {
            id:12,
            title: 'Suction catheter',
            price: '100 EG',
            img: 'https://i0.wp.com/www.wessex-medical.com/wp-content/uploads/2015/10/Catheters.jpg?fit=3072%2C2048&ssl=1'
          },
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
  
  export default ProductCarouselcath;
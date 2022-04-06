import {Carousel} from "react-bootstrap";

function ProductCarousel() {

    let products1 = [
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
        }
      ]

      let products2 = [
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
                                        <h5 className="card-title my-3" style={{color:'#104773'}}>{product.title}</h5>
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
                                        <h5 className="card-title my-3" style={{color:'#104773'}}>{product.title}</h5>
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
           
			{/* <Carousel.Item>
				<div className="carousel-item active">
					<div className="container">
							<div className="row">
							<div className="col-lg-2">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/181.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

							<div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

							<div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

                            <div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

                            <div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

                            <div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

							</div>
						</div>
					</div>
				
			</Carousel.Item>
			<Carousel.Item>
			<div className="carousel-item active">
					<div className="container">
						<div className="row">
						<div className="col-lg-2">
							<div className="card">
							<img
								src="https://mdbootstrap.com/img/new/standard/nature/181.jpg"
								className="card-img-top"
								alt="..."
								/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
								</p>
								<a href="#!" className="btn btn-primary">Button</a>
							</div>
							</div>
						</div>

						<div className="col-lg-2 d-none d-lg-block">
							<div className="card">
							<img
								src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
								className="card-img-top"
								alt="..."
								/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
								</p>
								<a href="#!" className="btn btn-primary">Button</a>
							</div>
							</div>
						</div>

						<div className="col-lg-2 d-none d-lg-block">
							<div className="card">
							<img
								src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
								className="card-img-top"
								alt="..."
								/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
								</p>
								<a href="#!" className="btn btn-primary">Button</a>
							</div>
							</div>
						</div>

                        <div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

                            <div className="col-lg-2 d-none d-lg-block">
								<div className="card">
								<img
									src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
									className="card-img-top"
									alt="..."
									/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
									Some quick example text to build on the card title and
									make up the bulk of the card's content.
									</p>
									<a href="#!" className="btn btn-primary">Button</a>
								</div>
								</div>
							</div>

						</div>
					</div>
					</div>
			
			</Carousel.Item> */}
		</Carousel>
    );
  }
  
  export default ProductCarousel;
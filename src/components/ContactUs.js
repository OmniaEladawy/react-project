import React from "react";


function Contact(){
  
  return(
      <>
   
  <section>
    <div className="py-5" style={{width: '1150px' , margin: 'auto'}}>
      
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <div className="row" style={{marginBottom:'40px'}}>
                <div className="col-sm-3">
                  <p className="mb-0 mx-5"><i className="fa-solid fa-location-dot fa-2xl" style={{color:'#104773'}}></i></p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row" style={{marginBottom:'40px',marginTop:'50px'}}>
                <div className="col-sm-3">
                  <p className="mb-0 mx-4 fw-bold">General Support</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row" style={{marginBottom:'40px',marginTop:'50px'}}>
                <div className="col-sm-3">
                  <p className="mb-0 mx-4 fw-bold">Let's talk</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <hr className="prodHr"/>
              <div className="row" style={{marginBottom:'40px',marginTop:'50px'}}>
                <div className="col-sm-3">
                  <p className="mb-0 mx-4 fw-bold">Social accounts</p>
                </div>
                <div className="col-sm-9">
                  <div className="social">
                    <i className="fa-brands fa-facebook-square fa-2xl" ></i>
                    <a href="https://www.facebook.com/"> Facebook page </a> <br/><br/>
                    <i className="fa-brands fa-twitter-square fa-2xl"></i>
                    <a href="https://www.twitter.com/"> Twitter page </a> <br/><br/>
                    <i className="fa-brands fa-instagram-square fa-2xl"></i>
                    <a href="https://www.instagram.com/"> Instagram page </a> <br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       
    
      </>
  
    
  )
}

export default Contact;
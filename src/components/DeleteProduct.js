
function DeleteProduct (){

    return (
        <form id="myForm" name="theForm" method="get" style={{backgroundColor:'#e9ffff' , padding:'90px 0'}}>
            <div className="container">
                <h1> Delete Product </h1>
                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Name </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="name"
                    name="name"
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Category </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="cat"
                    name="cat"
                    /><br />
                </div>
                
                <button style={{marginTop:'20px'}} type="submit" id="sub" >
                    Delete Product
                </button>
            </div>
        </form>
    )
}

export default DeleteProduct;
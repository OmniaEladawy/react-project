
function AddProduct (){

    return (
        <form id="myForm" name="theForm" method="get" style={{backgroundColor:'#e9ffff' , padding:'90px 0'}}>
            <div className="container">
                <h1> Add Product </h1>
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
                    <label htmlFor="name"> Price </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="price"
                    name="price"
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Image </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    type="file"
                    id="img"
                    name="img"
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Count in stock </label>
                    <input
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="count"
                    name="count"
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

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Description </label>
                    <textarea id="des" name="des" style={{width:'100%'}} rows='5'></textarea>
                    <br />
                </div>
                
                <button style={{marginTop:'50px'}} type="submit" id="sub" >
                    Add Product
                </button>
            </div>
        </form>
    )
}

export default AddProduct;
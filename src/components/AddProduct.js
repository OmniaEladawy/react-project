import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function AddProduct (){
    let [nameinputValue,setnameInputValue]=useState();
   let nameinput=(e)=>{
    setnameInputValue(e.target.value);
   }
   let [priceinputValue,setpriceinputValue]=useState();
   let priceinput=(e)=>{
    setpriceinputValue(e.target.value)
   }
   let [imageinputValue,setimageinputValue]=useState();
   let imageinput=(e)=>{
    setimageinputValue(e.target.value)
   }
   let [CountinputValue,setCountinputValue]=useState();
   let Countinput=(e)=>{
    setCountinputValue(e.target.value)
   }
   let [CategoryinputValue,setCategoryinputValue]=useState();
   let Categoryinput=(e)=>{
    setCategoryinputValue(e.target.value)
   }
   let [DescriptioninputValue,setDescriptioninputValue]=useState();
   let Descriptioninput=(e)=>{
    setDescriptioninputValue(e.target.value)
   }
  
const data={name:nameinputValue,price:priceinputValue,image:imageinputValue 
    ,count:CountinputValue ,Category:CategoryinputValue ,Description:DescriptioninputValue};
    console.log(data);
// const token = JSON.parse(localStorage.getItem('token'));
let navigate = useNavigate();
let navigatehome = navigate('/allproducts');

const bodyParameters = { "name" :nameinputValue,
"price": priceinputValue,
"description" : DescriptioninputValue,
"image" : imageinputValue,
"category" : CategoryinputValue ,
"countInStock" : CountinputValue
}
    let formhandeler=()=>{
            axios.post('/api/products' ,bodyParameters)
              .then(res => {
              
                  alert('Student successfully created')
                //   navigatehome();
              })
              .catch(err => {alert('Something went wrong');
            })
       }
    return (
        <form id="myForm" name="theForm" method="post"  
        style={{backgroundColor:'#e9ffff' , padding:'90px 0'}}   >
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
                    onChange={(e)=>{nameinput(e);}}
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
                   onChange={(e)=>{priceinput(e);}}
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Image </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="img"
                    name="img"
                    onChange={(e)=>{imageinput(e);}}
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Count in stock </label>
                    <input
                    style={{width:'100%',height:'50px'}}
                    type="text"
                    id="count"
                    name="count"
                   onChange={(e)=>{Countinput(e);}}
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
                   onChange={(e)=>{Categoryinput(e);}}
                    /><br />
                </div>

                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Description </label>
                    <textarea id="des" name="des" style={{width:'100%'}} rows='5'
                   onChange={(e)=>{Descriptioninput(e);}}
                    ></textarea>
                    <br />
                </div>
                
                <button style={{marginTop:'50px'}} type="submit" id="sub"
                     onClick={formhandeler}
                >
                    Add Product
                </button>
            </div>
        </form>
    )
}

export default AddProduct;
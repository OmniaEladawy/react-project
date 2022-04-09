import React , {useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';

function Cart(props){
        const {cartItems,onAdd,onRemove} = props;
        const totalPrice = cartItems.reduce((a,c) => a + c.price * c.qty , 0);
        
        return(
            <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>  
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.length === 0 && <tr><td colSpan='4' style={{fontWeight:'bold' , fontSize: '20px'}}>Cart is empty</td></tr>}   
                    {cartItems.map((item) => (
                        <tr style={{verticalAlign:'middle'}} key={item._id}>
                            <td><img src={item.image} style={{width:'100px'}} alt="product img"/></td>
                            <td>{item.name}</td>
                            <td>{item.qty} x {item.price}</td>
                            <td>
                                <button className="addBtn" onClick={()=>{onAdd(item)}}>+</button>
                                <button className="removeBtn" onClick={()=>{onRemove(item)}}>-</button>
                            </td>
                        </tr>
                    ))}    
                    {/* <tr style={{verticalAlign:'middle'}}>
                        <td>1</td>
                        <td><img src="https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg" style={{width:'100px'}} alt="product img"/></td>
                        <td>Product</td>
                        <td>22.000</td>
                       
                    </tr>
                    <tr style={{verticalAlign:'middle'}}>
                        <td>2</td>
                        <td><img src="https://mymedicalshope.com/public/uploads/all/7m285aiwIpNCL13RDoSjxVbcJpcVOaKRjvVGgYtq.jpg" style={{width:'100px'}} alt="product img"/></td>
                        <td>Product</td>
                        <td>22.000</td>
                        
                    </tr> */}
                   
                    </tbody>
                </Table>
                <div>
                {cartItems.length === 0 ? <span></span> : <span style={{fontWeight:'bold',fontSize:'20px'}}> Total Price is : {totalPrice} EG</span>}    
                </div>
                <div>
                {cartItems.length === 0 ? <span></span> : <button style={{marginTop:'50px' , border:'none' , boxShadow:'none',color:'#fff', fontWeight: 'bold',width:'100%'}} onClick={()=>{alert("you checkedout")}}> CheckOut </button>}    
                </div>
            </div>
        )
}

export default Cart;
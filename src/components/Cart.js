import React from "react";
import Table from 'react-bootstrap/Table';

function Cart(){
        
        return(
            <div className="container p-5 my-5" style={{backgroundColor:'#fff' , borderRadius:'20px'}}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        {/* {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                        ))} */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{verticalAlign:'middle'}}>
                        <td>1</td>
                        <td><img src="https://mymedicalshope.com/public/uploads/all/tSJtGshrMmtaKK1rJ2uztPKxq9GFKafY81faTJ3n.jpg" style={{width:'100px'}} alt="product img"/></td>
                        <td>Product</td>
                        <td>22.000</td>
                        {/* {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                        ))} */}
                    </tr>
                    <tr style={{verticalAlign:'middle'}}>
                        <td>2</td>
                        <td><img src="https://mymedicalshope.com/public/uploads/all/7m285aiwIpNCL13RDoSjxVbcJpcVOaKRjvVGgYtq.jpg" style={{width:'100px'}} alt="product img"/></td>
                        <td>Product</td>
                        <td>22.000</td>
                        {/* {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                        ))} */}
                    </tr>
                   
                    </tbody>
                </Table>
            </div>
        )
}

export default Cart;
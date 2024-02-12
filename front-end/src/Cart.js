import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Cart= ()=>{
    const [cartItems, setCartItems] = useState([]);  

    useEffect(() => {
        const storedItems = localStorage.getItem('products');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);    
    

    const handleSubmit = async () => {
        try {
            for (const item of cartItems) {
                const response = await axios.post('http://localhost:4000/api/cart', item);
                console.log(response.data.message);
            }
            alert('Cart submitted successfully');
            // Clear local storage and cart items state after successful submission
            localStorage.removeItem('product');
            setCartItems([]);
        } catch (error) {
            console.error('Error submitting cart:', error);
        }
    };
    // Remove item from cart
    const handleRemove = async (index) => {
        try {
            
            const items = cartItems.filter((item, i) => i !== index);//filtering the items to remove the selected item
            localStorage.setItem('products', JSON.stringify(items));//updating the local storage
            setCartItems(items); //updating the state
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
        
    };

    return(
        <div className="cart_section">
            {/* the following code is for a single item  and design testing 
            <div className="row">
                <div className="col-xs-3">
                    <button className="btn btn-default remove">remove</button>
                    <h3 className="ietem_name">barcelona VS real madrid </h3>
                    <p className="price">price: $60</p>
                    <input type="number"className="quantity"/>
                </div>
                <div className="col-xs-7" >
                    <hr />
                </div>
                            
                <div className="col-xs-2 detail_box">
                    <div className="img-box">
                        <img src="https://www.fcbarcelona.com/photo-resources/2023/10/26/03879242-a327-4753-8866-5a93929484ab/HORARIS_NEW-Real_Madrid.jpg?width=1200&height=750" alt="" />
                    </div>
                </div>
            </div>*/}
            <div>
                {cartItems.map((item, index) => (
                    <div className="row" key={index}>
                            <div className="col-xs-3">
                                <button className="btn btn-default remove" onClick={() =>handleRemove(index)}>remove</button>
                                <h3 className="item_name">{item.name} </h3>
                                <p className="price">price: ${item.price}</p>
                                <input type="number" className="quantity"/>
                            </div>
                            <div className="col-xs-7">
                                <hr />
                            </div>
                            <div className="col-xs-2 detail_box">
                                <div className="img-box ">
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            <div className="submit">
                <input className="btn btn-default btn-block" type="button" value="submit" onClick={handleSubmit}/>
            </div>
            
        </div>
    );

}
export default Cart;
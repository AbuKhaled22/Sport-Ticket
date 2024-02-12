import React, { useState, useEffect } from 'react';
import axios from "axios";
const Shop= () => {
    const handleProductClick = async (name, price, img) => {
        try {
            const product = { name, price, img };
            // Get stored items from local storage
            const storedItems = localStorage.getItem('products');
            // If there are stored items, add the new product to the list
            if (storedItems) {
                const items = JSON.parse(storedItems);
                localStorage.setItem('products', JSON.stringify([...items, product]));
            }
            // If there are no stored items, add the new product to the list
             else {
                localStorage.setItem('products', JSON.stringify([product]));
            }
            alert("Product added to cart");
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }; 

    // Fetch product items from the database
    const [productItems, setProductItems] = useState([]);
    useEffect(() => {
        const fetchProductItems = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/product");
            setProductItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
        };
        // Call the fetchProductItems function
        fetchProductItems();
    }, []);
    
    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Latest Products
                    </h2>
                </div>
                <div className="row">
                    {/* the code below will list all products from the database without the need to add multiple <div> manually */}
                    {productItems.map((item, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="box" onClick={() => handleProductClick(item.name,item.price, item.img)}>
                                <a href="#" >
                                    <div className="img-box">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                        {item.name} 
                                        </h5>
                                        <h6>
                                            Price
                                            <span>
                                                ${item.price}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                    {/*the following code is replaced by the above code by using the data base to get the products the below code is the old code manually added products
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box" onClick={() => handleProductClick("Al Hilal VS Al Nassr", 45, "https://image.discovery.indazn.com/ca/v2/ca/image?id=4pnxehb56bh11mxxq3m16rt1g_image-header_pIt_1700752737000&quality=70")}>
                            <a href="#">
                                <div className="img-box">
                                    <img src="https://image.discovery.indazn.com/ca/v2/ca/image?id=4pnxehb56bh11mxxq3m16rt1g_image-header_pIt_1700752737000&quality=70" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                    Al Hilal VS Al Nassr
                                    </h5>
                                    <h6>
                                        Price
                                        <span>
                                            $45
                                        </span>
                                    </h6>
                                </div>
                                <div className="new">
                                    <span>
                                        New
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box" onClick={() => handleProductClick("Barça VS Liverpool", 90, "https://www.fcbarcelona.com/photo-resources/2019/04/30/791e280a-9a0b-4100-a67b-e7af908eb3f0/mini_3200x2000_Messi_Salah_PREVIA.jpg?width=1200&height=750")}>
                            <a href="#">
                                <div className="img-box">
                                    <img src="https://www.fcbarcelona.com/photo-resources/2019/04/30/791e280a-9a0b-4100-a67b-e7af908eb3f0/mini_3200x2000_Messi_Salah_PREVIA.jpg?width=1200&height=750" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                    Barça VS Liverpool
                                    </h6>
                                    <h6>
                                        Price
                                        <span>
                                            $90
                                        </span>
                                    </h6>
                                </div>
                                <div className="new">
                                    <span>
                                        New
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box" onClick={() => handleProductClick("Team USA vs Germany FIBA World Cup", 150, "https://resources.prod.fiba.pulselive.com/fiba-courtside/photo/2023/09/07/111320da-dd8f-4aee-b9c9-0e30bb5b3f83/USA-v-Germany.JPG")}>
                            <a href="">
                                <div className="img-box">
                                    <img src="https://resources.prod.fiba.pulselive.com/fiba-courtside/photo/2023/09/07/111320da-dd8f-4aee-b9c9-0e30bb5b3f83/USA-v-Germany.JPG" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                    Team USA vs Germany FIBA World Cup
                                    </h6>
                                    <h6>
                                        Price
                                        <span>
                                            $150
                                        </span>
                                    </h6>
                                </div>
                                <div className="new">
                                    <span>
                                        New
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/shop">
                        View All Products
                    </Link>
                </div>
                */}
            </div>
        </section>
    );
}

export default Shop;
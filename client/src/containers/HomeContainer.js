import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import MainTitle from "../components/MainTitle";
import ShopService from "../services/ShopService";

const HomeContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ShopService.getProducts()
            .then(products => setProducts(products));
    }, []);

    return (
        <div className="home-container">
            <MainTitle title="Welcome"/>
            <Products products={products}/>
        </div>
    )
}

export default HomeContainer;
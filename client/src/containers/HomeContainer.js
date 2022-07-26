import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import MainTitle from "../components/MainTitle";
import ProductService from "../services/ProductService";

const HomeContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts()
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
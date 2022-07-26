import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Services from "../components/Services";
import MainTitle from "../components/MainTitle";
import ProductService from "../services/ProductService";
import ServiceService from "../services/ServiceService";

const HomeContainer = () => {
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        ProductService.getProducts()
            .then(products => setProducts(products));
    }, []);
    useEffect(() => {
        ServiceService.getServices()
            .then(services => setServices(services));
    }, []);

    return (
        <div className="home-container">
            <MainTitle title="Welcome"/>
            <Products products={products}/>
            <Services services={services}/>
        </div>
    )
}

export default HomeContainer;
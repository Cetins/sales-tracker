import React , { useState, useEffect } from "react";
import SalesService from '../services/SalesService';
import SalesTable from '../components/SalesTable';
import SaleTabs from "../components/SaleComponent/SaleTabs";
import ServiceService from "../services/ServiceService";
import StaffService from '../services/StaffService';
import ProductService from '../services/ProductService';

const Sales = () => {
    const [sales, setSales] = useState([]);
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        SalesService.getSales()
            .then(sales => setSales(sales));
    }, []);
    useEffect(() => {
        ServiceService.getServices()
            .then(services => setServices(services));
    }, []);
    useEffect(() => {
        ProductService.getProducts()
            .then(products => setProducts(products));
    }, []);
    useEffect(() => {
        StaffService.getStaff()
            .then(staff => setStaff(staff));
    }, []);

    return (
        <div className="parent-container">
            <SaleTabs services={services} products={products} staff={staff}/>
            <SalesTable sales={sales}/>
        </div>
    )
}

export default Sales;
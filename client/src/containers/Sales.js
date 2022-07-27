import React , { useState, useEffect } from "react";
import SalesService from '../services/SalesService';
import SalesTable from '../components/SalesTable';
import SaleTabs from "../components/SaleComponent/SaleTabs";
import ServiceService from "../services/ServiceService";

const Sales = () => {
    const [sales, setSales] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        SalesService.getSales()
            .then(sales => setSales(sales));
    }, []);
    useEffect(() => {
        ServiceService.getServices()
            .then(services => setServices(services));
    }, []);

    return (
        <div>
            <SaleTabs services={services}/>
            <SalesTable sales={sales}/>
        </div>
    )
}

export default Sales;
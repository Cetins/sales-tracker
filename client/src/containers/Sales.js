import React , { useState, useEffect } from "react";
import SalesService from '../services/SalesService';
import SalesTable from '../components/SalesTable';
import SaleTabs from "../components/SaleComponent/SaleTabs";
import ServiceService from "../services/ServiceService";
import StaffService from '../services/StaffService';

const Sales = () => {
    const [sales, setSales] = useState([]);
    const [services, setServices] = useState([]);
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
        StaffService.getStaff()
            .then(staff => setStaff(staff));
    }, []);

    return (
        <div className="parent-container">
            <SaleTabs services={services} staff={staff}/>
            <SalesTable sales={sales}/>
        </div>
    )
}

export default Sales;
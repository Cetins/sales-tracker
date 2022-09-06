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
    const [service, setService] = useState();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();
    const [staff, setStaff] = useState([]);
    const [staffMember, setStaffMember] = useState();
    const [date, setDate] = useState();    

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

    const handleServiceChange = (e) => {setService(services[e.target.value])}
    const handleProductChange = (e) => {setProduct(products[e.target.value])}
    const handleStaffMemberChange = (e) => {setStaffMember(staff[e.target.value])}
    const handleDateChange = (e) => {setDate(e.target.value)}

    const updateStock = (stockSold) => {
        const updatedProduct = {...product}
        updatedProduct.stock -= stockSold
        setProduct(updatedProduct)
        ProductService.updateProduct(updatedProduct)
    } 

    const addSale = (sale) => {
        SalesService.addSale(sale);
        const updatedSales = [...sales, sale]  
        setSales(updatedSales);
    }

    return (
        <div className="parent-container">
            <SaleTabs 
                services={services}
                products={products}
                staff={staff}
                staffMember={staffMember}
                service={service}
                product={product}
                date={date}
                addSale={addSale}
                updateStock={updateStock}
                handleServiceChange={handleServiceChange}
                handleProductChange={handleProductChange}
                handleStaffMemberChange={handleStaffMemberChange}
                handleDateChange={handleDateChange} />
            <SalesTable sales={sales}/>
        </div>
    )
}

export default Sales;
import React , { useState, useEffect } from "react";
import SalesService from '../services/SalesService';
import SalesTable from '../components/SalesTable';

const Sales = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        SalesService.getSales()
            .then(sales => setSales(sales));
    }, []);

    return (
        <SalesTable sales={sales}/>
    )
}

export default Sales;
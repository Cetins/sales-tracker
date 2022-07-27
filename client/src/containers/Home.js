import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import ShopService from '../services/ShopService';

const Home = () => {
    const [shop, setShop] = useState([]);

    useEffect(() => {
        ShopService.getShop()
            .then(shop => setShop(shop));
    }, []);
    
    return (
        <div className="home-container">
            { shop.length > 0 ? <Welcome shop={shop[0]}/> : null}
        </div>
    )
}

export default Home;
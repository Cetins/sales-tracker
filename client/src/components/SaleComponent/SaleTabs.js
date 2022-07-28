import React, { useState } from "react";
import '../../styles/Tabs.css';
import ServiceSaleTab from "./ServiceSaleTab";
import ProductSaleTab from "./ProductSaleTab";

const Tabs = ({ services, products, staff}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  function handleTab1() {setActiveTab("tab1")};
  function handleTab2() {setActiveTab("tab2")};

  return (
    <div className="Tabs child-container">
      <ul className="nav">
        <li key="service-tab" className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Service Sale</li>
        <li key="product-tab" className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Product Sale</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <ServiceSaleTab services={services} staff={staff} /> : <ProductSaleTab products={products} staff={staff} />}
      </div>
    </div>
  );
};

export default Tabs;
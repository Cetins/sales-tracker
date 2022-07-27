import React from "react";
import '../../styles/Tabs.css';
import SelectService from "./SelectService";

const ServiceSaleTab = ({ services }) => {
  return (
    <div className="FirstTab">
        <form>
            <div>
                <label>Title:</label>
                <SelectService services={services}/>
            </div>
            <div>
                <label>Staff:</label>
            </div>
            <div>
                <label>Date:</label>
            </div>
        </form>
    </div>
  );
};

export default ServiceSaleTab;
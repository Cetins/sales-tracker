import React, { useState } from "react";
import '../../styles/Tabs.css';
import SelectService from "./SelectService";
import SelectStaff from "./SelectStaff";
import '../../styles/Form.css'
import ServiceInfo from "./ServiceInfo";

const ServiceSaleTab = ({ 
    staff,
    services,
    staffMember,
    service,
    date,
    addSale,
    handleStaffMemberChange,
    handleServiceChange,
    handleDateChange
    }) => {

    const handleServiceSaleSubmit = (e) => {
        e.preventDefault();
        addSale({
            category: "service",
            title: service.title,
            price: service.price,
            staff: staffMember.name,
            date: date
        });
        console.log("add service sale")
    }
    
    return (
        <div className="FirstTab">
            <form className="styled-form" onSubmit={handleServiceSaleSubmit}>
                <div>
                    <label>Staff:</label>
                    <SelectStaff staff={staff} handleStaffMemberChange={handleStaffMemberChange} />
                </div>
                <div>
                    <label>Service:</label>
                    <SelectService services={services} handleServiceChange={handleServiceChange}/>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={handleDateChange}/>
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
            {service &&  (
                <ServiceInfo service={service} />
            )}
        </div>
    );
};

export default ServiceSaleTab;
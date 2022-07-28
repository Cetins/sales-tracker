import React, { useState } from "react";
import '../../styles/Tabs.css';
import SelectService from "./SelectService";
import SelectStaff from "./SelectStaff";
import '../../styles/Form.css'

const ServiceSaleTab = ({ services, staff, addSale }) => {
    const [service, setService] = useState(services[0]);
    const [staffMember, setStaffMember] = useState(staff[0]);
    const [date, setDate] = useState();

    const handleDateChange = (e) => {setDate(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        addSale({
            category: "service",
            title: service.title,
            price: service.price,
            staff: staffMember.name,
            date: date
        });
        console.log("addSale")
    }
    
    return (
        <div className="FirstTab">
            <form className="styled-form" onSubmit={handleSubmit}>
                <div>
                    <label>Staff:</label>
                    <SelectStaff staff={staff} setStaffMember={setStaffMember}/>
                </div>
                <div>
                    <label>Service:</label>
                    <SelectService services={services} setService={setService}/>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={handleDateChange}/>
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
            {service? <p>{service.title}</p> : null}
        </div>
    );
};

export default ServiceSaleTab;
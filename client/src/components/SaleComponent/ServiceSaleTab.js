import React from "react";
import '../../styles/Tabs.css';
import SelectService from "./SelectService";
import SelectStaff from "./SelectStaff";
import '../../styles/Form.css'

const ServiceSaleTab = ({ services, staff }) => {
    const date = new Date().toLocaleDateString();
    
    return (
        <div className="FirstTab">
            <form className="styled-form">
                <div>
                    <label>Title:</label>
                    <SelectService services={services}/>
                </div>
                <div>
                    <label>Staff:</label>
                    <SelectStaff staff={staff} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" defaultValue={date}/>
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
        </div>
    );
};

export default ServiceSaleTab;
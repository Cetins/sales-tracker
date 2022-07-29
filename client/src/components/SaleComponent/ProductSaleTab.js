import React from "react";
import '../../styles/Tabs.css';
import SelectProduct from './SelectProduct';
import SelectStaff from "./SelectStaff";

const ProductSaleTab = ({ 
    staff,
    products,
    staffMember,
    product,
    date,
    addSale,
    handleProductChange,
    handleStaffMemberChange,
    handleDateChange }) => {

    const handleProductSaleSubmit = (e) => {
        e.preventDefault();
        addSale({
            category: "product",
            title: product.title,
            price: product.price,
            staff: staffMember.name,
            date: date
        });
        console.log("add product sale")
    }
    
    return (
        <div className="SecondTab">
            <form className="styled-form" onSubmit={handleProductSaleSubmit}>
                <div>
                    <label>Product:</label>
                    <SelectProduct products={products} handleProductChange={handleProductChange} />
                </div>
                <div>
                    <label>Staff:</label>
                    <SelectStaff staff={staff} handleStaffMemberChange={handleStaffMemberChange} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={handleDateChange} />
                </div>
                <input type="submit" value="Submit Sale"/>
            </form>
        </div>
    );
};

export default ProductSaleTab;
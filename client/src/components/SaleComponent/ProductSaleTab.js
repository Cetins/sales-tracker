import React from "react";
import '../../styles/Tabs.css';
import SelectProduct from './SelectProduct';
import SelectStaff from "./SelectStaff";

const ProductSaleTab = ({ products, staff }) => {
  const date = new Date().toLocaleDateString();
    
  return (
      <div className="SecondTab">
          <form className="styled-form">
              <div>
                  <label>Product:</label>
                  <SelectProduct products={products}/>
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

export default ProductSaleTab;
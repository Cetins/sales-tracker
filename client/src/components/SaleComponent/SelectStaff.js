import React from "react";

const SelectStaff = ({ staff, handleStaffMemberChange }) => {

    const staffOptions = staff.map((member, index) => {
        return <option key={member._id} value={index}>{member.name}</option>
    })
    return (
        <select onChange={handleStaffMemberChange} >
            <option defaultValue="" >Staff Member</option>
            {staffOptions}
        </select>
    )
}

export default SelectStaff;
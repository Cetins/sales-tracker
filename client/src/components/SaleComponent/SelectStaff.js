import React from "react";

const SelectStaff = ({ staff }) => {
    const staffOptions = staff.map(member => {
        return <option key={member._id} value={member}>{member.name}</option>
    })
    return (
        <select>
            {staffOptions}
        </select>
    )
}

export default SelectStaff;
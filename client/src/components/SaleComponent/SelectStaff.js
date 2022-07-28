import React from "react";

const SelectStaff = ({ staff, setStaffMember }) => {
    const handleStaffMemberChange = (e) => {setStaffMember(staff[e.target.value])};

    const staffOptions = staff.map((member, index) => {
        return <option key={member._id} value={index}>{member.name}</option>
    })
    return (
        <select onChange={handleStaffMemberChange} >
            <option value="" selected>Staff Member</option>
            {staffOptions}
        </select>
    )
}

export default SelectStaff;
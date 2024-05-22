'use client'

import dayjs from "dayjs"
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function StaffTable({ staffList, removeStaffAction }) {
    const handleRemoveStaff = (staff) => {
        Swal.fire({
            title: "Are you sure remove this staff?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                //call a server action
                let response = await removeStaffAction(staff)
                if(response?.code === 200) {
                    toast.success("Staff removed success")
                }
                else {
                    toast.error(response?.message)
                }
            }
        });
    }
    return (
        <table className="table table-striped">
            <thead className="table-success">
                <tr>
                    <th>#ID</th>
                    <th>Avatar</th>
                    <th>Fullname</th>
                    <th>Gender</th>
                    <th>Dob</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    staffList?.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>
                                <img className="rounded-circle w-25" src={staff.avatarUrl} alt="" />
                            </td>
                            <td>{staff.fullname}</td>
                            <td>{`${staff.gender ? 'Male' : 'Female'}`}</td>
                            <td>{dayjs(staff.dob).format('MMM-DD-YYYY')}</td>
                            <td>{staff.mobile}</td>
                            <td>{staff.email}</td>
                            <td>
                                <button onClick={() => handleRemoveStaff(staff)} className="btn btn-sm btn-danger">Remove</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
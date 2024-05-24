import StaffTable from "@/components/staff/staff-table";
import { revalidateTag } from "next/cache";
import Link from "next/link";
/**
 * chúng ta ko thể sử dụng các hook ở server component 
 */
export default async function StaffsPage() {
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/staffs?_sort=id&_order=desc', {
        method: "GET",
        cache: "no-cache",
        next: { tags: ['staff-list'] }
    })
    let staffList = await res.json()

    //server
    async function removeStaffAction(staff) {
        'use server'
        try {
            let res = await fetch(`https://jsonserver-vercel-api.vercel.app/staffs/${staff?.id}`, {
                method: "DELETE"
            })
            const result = await res.json()
            revalidateTag('staff-list')
            return {
                result,
                code: 200
            }
        } catch (error) {
            return {
                result,
                message: 'Something went wrong, please contact administrator',
                code: 500
            }
        }
    }
    return (
        <>
            <h5>Staff List</h5>
            <Link href={'/staff-list/create'} className="btn btn-sm btn-primary my-2">Add New Staff</Link>
            <StaffTable
                staffList={staffList}
                removeStaffAction={removeStaffAction}
            />
        </>

    )
}
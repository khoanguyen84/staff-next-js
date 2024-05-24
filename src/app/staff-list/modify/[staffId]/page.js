import { modifyStaffAction } from "@/actions/staff-action";
import ModifyStaff from "@/components/staff/modify-staff";

export default async function ModifyStaffPage({ params: { staffId } }) {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/staffs/${staffId}`)
    if (!res.ok) {
        redirect('/error')
    }
    let staff = await res.json()
    
    return (
        <>
            <h5>Modify Staff</h5>
            <ModifyStaff
                staff={staff}
                modifyStaffAction={modifyStaffAction}
            />
        </>
    )
}
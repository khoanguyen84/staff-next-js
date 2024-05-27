import { createStaffAction } from "@/actions/staff-action";
import CreateStaff from "@/components/staff/create-staff";

export const metadata = {
    title: 'Create Staff'
}

export default function CreateStaffPage() {
    return (
        <>
            <h5>Create Staff</h5>
            <CreateStaff
                createStaffAction={createStaffAction}
            />
        </>
    )
}
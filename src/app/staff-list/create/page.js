import { createStaffAction } from "@/actions/staff-action";
import CreateStaff from "@/components/staff/create-staff";

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
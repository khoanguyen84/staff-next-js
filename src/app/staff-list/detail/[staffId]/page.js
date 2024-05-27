import dayjs from "dayjs"
import Link from "next/link"
import { redirect } from "next/navigation"

export async function generateMetadata({ params: { staffId } }) {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/staffs/${staffId}`)
    let staff = await res.json()
    return {
        title: `${staff?.fullname}'s detail`
    }
}

export default async function StaffDetailPage({ params: { staffId } }) {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/staffs/${staffId}`)
    if (!res.ok) {
        redirect('/error')
    }
    let response = await res.json()
    return (
        <>
            <h5>Staff Detail</h5>
            <div className="w-50">
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src={response.avatarUrl} alt="" />
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bolder">Fullname: </span> {response?.fullname}
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bolder">Dob: </span> {dayjs(response?.dob).format('DD/MM/YYYY')}
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bolder">Gender: </span> {response?.gender ? 'Male' : "Female"}
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bolder">Email: </span> {response?.email}
                    </li>
                    <li className="list-group-item">
                        <span className="fw-bolder">Mobile: </span> {response?.mobile}
                    </li>

                    <li className="list-group-item">
                        <span className="fw-bolder">Fullname: </span> {response?.fullname}
                    </li>
                </ul>
            </div>
            <Link
                className="btn btn-sm btn-success mt-2"
                href={'/staff-list'}
            >
                Back to list
            </Link>
        </>
    )
}
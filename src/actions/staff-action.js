export async function createStaffAction(newStaff) {
    'use server'
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/staffs', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newStaff)
    })
    if (!res.ok) {
        return {
            code: 500,
            message: 'Something went wrong, please contact adminstrator'
        }
    }
    let result = await res.json()
    return {
        code: 200,
        response: result
    }
}

export async function modifyStaffAction(staff) {
    'use server'
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/staffs/${staff?.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
    })
    if (!res.ok) {
        return {
            code: 500,
            message: 'Can not modify staff'
        }
    }
    let result = await res.json()
    return {
        code: 200,
        response: result
    }
}
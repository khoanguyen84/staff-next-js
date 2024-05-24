'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const schema = yup
    .object({
        fullname: yup.string().required(),
        email: yup.string().email().required(),
        avatarUrl: yup.string().url().required(),
        dob: yup.date().required().typeError('dob is a required field'),
        mobile: yup.string().required(),
        gender: yup.boolean().required()
    })

export default function CreateStaff({ createStaffAction }) {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const handleCreateStaff = async (values) => {
        let result = await createStaffAction(values)
        if(result.code === 200) {
            toast.success(`Staff created success`)
            router.push('/staff-list')
        }
        else {
            toast.error(result.message)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleCreateStaff)} className="w-50">
                <div className="form-group mb-2">
                    <label className="form-label">Fullname</label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullname?.message ? 'is-invalid' : ''}`}
                        {...register('fullname')}
                    />
                    <span className="invalid-feedback">{errors.fullname?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Gender</label>
                    <div>
                        <div class="form-check">
                            <input
                                className={`form-check-input ${errors.gender?.message ? 'is-invalid' : ''}`}
                                type="radio"
                                value={true}
                                {...register('gender')}
                            />
                            <label class="form-check-label">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className={`form-check-input ${errors.gender?.message ? 'is-invalid' : ''}`}
                                type="radio"
                                value={false}
                                {...register('gender')}
                            />
                            <label class="form-check-label">
                                Female
                            </label>
                        </div>
                    </div>
                    <span className="invalid-feedback">{errors.mobile?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email?.message ? 'is-invalid' : ''}`}
                        {...register('email')}
                    />
                    <span className="invalid-feedback">{errors.email?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Avatar URL</label>
                    <input
                        type="url"
                        className={`form-control ${errors.avatarUrl?.message ? 'is-invalid' : ''}`}
                        {...register('avatarUrl')}
                    />
                    <span className="invalid-feedback">{errors.avatarUrl?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Dob</label>
                    <input
                        type="date"
                        className={`form-control ${errors.dob?.message ? 'is-invalid' : ''}`}
                        {...register('dob')}
                    />
                    <span className="invalid-feedback">{errors.dob?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Mobile</label>
                    <input
                        type="tel"
                        className={`form-control ${errors.mobile?.message ? 'is-invalid' : ''}`}
                        {...register('mobile')}
                    />
                    <span className="invalid-feedback">{errors.mobile?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-sm btn-dark">Create</button>
                    <button type="button"
                        onClick={() => reset()}
                        className="btn btn-sm btn-primary ms-2"
                    >Cancel</button>
                </div>
            </form>
        </>
    )
}
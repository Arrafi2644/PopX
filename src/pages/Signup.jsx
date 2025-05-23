import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // handle form submission logic here (e.g., API call)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-black">
                    Create your<br /> <span className="text-black">PopX account</span>
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Full Name */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-32 absolute -top-3 left-2 z-10 bg-white text-sm font-medium text-purple-700 mb-1">Full Name *</label>
                            <input
                                {...register("fullName", { required: "Full name is required" })}
                                placeholder="Enter full name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-32 absolute -top-3 left-2 z-10 bg-white text-sm font-medium text-purple-700 mb-1">Phone number *</label>
                            <input
                                {...register("phone", { required: "Phone number is required" })}
                                placeholder="Enter phone number"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-32 absolute -top-3 left-2 z-10 bg-white text-sm font-medium text-purple-700 mb-1">Email address *</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter email address"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-32 absolute -top-3 left-2 z-10 bg-white text-sm font-medium text-purple-700 mb-1">Password *</label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                placeholder="Enter password"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-28 absolute -top-3 z-10 outline-hidden left-2 bg-white text-sm font-medium text-purple-700 mb-1">Company name</label>
                            <input
                                {...register("company")}
                                placeholder="Enter company name"
                                className=" input input-bordered w-full"
                            />
                        </div>
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                    </div>

                    {/* Agency Radio */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Are you an Agency? *</label>
                        <div className="flex items-center space-x-4">
                            <label className="label cursor-pointer">
                                <input
                                    type="radio"
                                    value="yes"
                                    {...register("agency", { required: "Please select an option" })}
                                    className="radio radio-xs text-purple-600"
                                />
                                <span className="label-text ml-2">Yes</span>
                            </label>
                            <label className="label cursor-pointer">
                                <input
                                    type="radio"
                                    value="no"
                                    {...register("agency", { required: "Please select an option" })}
                                    className="radio radio-xs text-purple-600"
                                />
                                <span className="label-text ml-2">No</span>
                            </label>
                        </div>
                        {errors.agency && <p className="text-red-500 text-sm mt-1">{errors.agency.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-purple-600 text-white w-full hover:bg-purple-700">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

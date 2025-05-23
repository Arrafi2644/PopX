import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // handle form submission logic here (e.g., API call)
        const email = data?.email;
        const password = data?.password;

        loginUser(email, password)
            .then(res => {
                toast.success("Login successful!")
                navigate("/account")
            })
            .catch(err => {
                toast.error("Something went wrong! Please try again.")
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-slate-100 min-h-screen border p-6 shadow-md w-full max-w-sm my-6">
                <h2 className="text-2xl font-bold  text-black">
                    Signin to your<br /> <span className="text-black">PopX account</span>
                </h2>
                <p className="mb-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, modi. </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email Address */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-28 absolute -top-3 left-2 z-10 bg-slate-100 text-sm font-medium text-purple-700 mb-1">Email address *</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter email address"
                                className="input input-bordered w-full bg-slate-100"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="relative">
                            <label className="block px-1 w-28 absolute -top-3 left-2 z-10 bg-slate-100 text-sm font-medium text-purple-700 mb-1">Password *</label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                placeholder="Enter password"
                                className="input input-bordered w-full bg-slate-100"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-purple-600 text-white w-full hover:bg-purple-700">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

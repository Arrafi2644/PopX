import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-slate-100 min-h-screen p-6 shadow-md w-full max-w-sm border rounded-none my-4 flex flex-col justify-end">
                <div>
                    <h2 className="text-2xl font-bold  text-black">
                        Welcome to PopX
                    </h2>
                    <p className="mb-6"> Your gateway to seamless <br />  login, signup, and access. </p>

                    <Link to='/signup' className="btn bg-purple-600 text-white w-full rounded-md hover:bg-purple-700 mb-4">
                        Create Account
                    </Link>
                    <Link to='/login' className="btn text-gray-900 bg-gray-300 w-full rounded-md hover:bg-purple-700 hover:text-white">
                        Already Registered? Login
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default LandingPage;

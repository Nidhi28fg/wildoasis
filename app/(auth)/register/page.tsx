import React from "react";
import Logo from "@/components/Logo";
import RegisterForm from "@/features/authentication/RegisterForm";
import Link from "next/link";

const Register = () => {
    return (
        <main className="min-h-screen grid bg-gray-50 dark:bg-gray-900 grid-cols-[480px] content-center justify-center gap-8 py-12">
            <Logo width={124} height={89} />
            <h4 className="text-[24px] font-semibold text-center leading-[1.4] dark:text-gray-100">
                Create a new admin account
            </h4>
            <RegisterForm />
            <p className="text-center text-[14px] text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Log in
                </Link>
            </p>
        </main>
    );
};

export default Register;

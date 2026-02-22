import React from "react";
import Logo from "@/components/Logo";
import LoginForm from "@/features/authentication/LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <main className="min-h-screen grid bg-gray-50 dark:bg-gray-900 grid-cols-[420px] content-center justify-center gap-8 ">
      <Logo width={124} height={89} />
      <h4 className="text-[24px] font-semibold text-center leading-[1.4] dark:text-gray-100">
        Log for Admin
      </h4>
      <LoginForm />
      <p className="text-center text-[14px] text-gray-600 dark:text-gray-300">
        Don't have an account?{" "}
        <Link href="/register" className="text-indigo-600 hover:text-indigo-700">
          Sign up
        </Link>
      </p>
      <p className="text-center text-[14px] text-gray-500 mt-4"> Go to Main Website <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
        Home
      </Link></p>
    </main>
  );
};

export default Login;

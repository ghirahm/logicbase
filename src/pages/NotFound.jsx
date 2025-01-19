import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { useAuth } from "../context.jsx/AuthContext";

const NotFound = () => {
    const { isLogin } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-bold text-[var(--color-tertiary)]">404</h1>
            <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
            {
                isLogin === true ?
                <Link to="/main" className="mt-6 px-6 py-3 text-white bg-[var(--color-tertiary)] hover:bg-[var(--color-shadow)] rounded-lg shadow transition duration-300">
                    Go Back Home
                </Link>
                :
                <Link to="/" className="mt-6 px-6 py-3 text-white bg-[var(--color-tertiary)] hover:bg-[var(--color-shadow)] rounded-lg shadow transition duration-300">
                    Go Back Home
                </Link>
            }
        </div>
    );
};

export default NotFound;

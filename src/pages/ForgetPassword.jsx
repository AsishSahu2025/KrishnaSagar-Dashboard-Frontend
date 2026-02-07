import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [identifier, setIdentifier] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const apiUrl = import.meta.env.VITE_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${apiUrl}/forgotpassword/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, new_password: newPassword }),
            });

            const data = await res.json();
            console.log('API Response:', data);  // Debugging line

            if (res.ok) {
                setMessage(data.message || '✅ Password reset successful.');
                setIsSuccess(true);
            } else {
                setMessage(data.message || '⚠️ Password reset failed.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error(error);
            setMessage('❌ Something went wrong. Please try again.');
            setIsSuccess(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-sm text-gray-700">Email or Mobile</label>
                    <input
                        type="text"
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm mb-4"
                        placeholder="Enter registered email or mobile"
                    />

                    <label className="block mb-2 text-sm text-gray-700">New Password</label>
                    <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm mb-4"
                        placeholder="Enter new password"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow"
                    >
                        Reset Password
                    </button>
                </form>

                {message && (
                    <p className="mt-4 text-sm text-center text-gray-700">
                        {message}
                        {isSuccess && (
                            <>
                                <br />
                                <Link to="/" className="text-blue-600 underline">
                                    Back to Login
                                </Link>
                            </>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;

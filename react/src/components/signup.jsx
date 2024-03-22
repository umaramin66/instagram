import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

Signup.propTypes = {
    setLogin: PropTypes.func.isRequired,
};

function Signup({ setLogin }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/user/createUser", {
                username,
                password
            });
            console.log(response);

            // Check if the response indicates a successful signup
            if (response.status === 200 && response.data.response) {
                alert("Signup successful! Please login.");
                // Redirect or perform any other action upon successful signup
                setLogin(true);
            } else {
                alert("Signup failed: " + response.data.message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("An error occurred during signup. Please try again later.");
        }
    };

    return (
        <>
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
                    <form onSubmit={(e) => { e.preventDefault(); signup(); }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Username"
                                required
                                value={username}
                                onChange={(event) => { setUserName(event.target.value) }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600">
                                {"Already have an account? "}
                                <span className="cursor-pointer" onClick={() => setLogin(true)}>Go to Login</span>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;

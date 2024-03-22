import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes from 'prop-types'
import axios from "axios";

Login.propTypes = {
    setLogin: PropTypes.func.isRequired, // Ensure that setLogin is a function
};

function Login({ setLogin }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        console.log("userName", username);
        console.log("Password", password);

        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                username,
                password
            });
            console.log(response);

            // Check if the response indicates a successful login
            if (response.status === 200 && response.data.response) {
                alert("Login successful!");
                // Redirect or perform any other action upon successful login
            } else {
                alert("Invalid username or password. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login. Please try again later.");
        }
    };


    useEffect(() => {
        // This effect will run every time userName or password changes
        console.log("Updated userName", username);
        console.log("Updated Password", password);
    }, [username, password]);





    return (
        <>

            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="username"
                                required
                                autoComplete="username"
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
                                required
                                autoComplete="current-password"
                                onChange={(event) => { setPassword(event.target.value) }}


                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600">
                                {"Don't Have and Account?"}{""}<span className="cursor-pointer"
                                    onClick={() =>
                                        setLogin(false)}>
                                    Go to Signup

                                </span>


                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default form submission behavior
                                login();
                            }}
                        >
                            Login
                        </button>
                    </form>
                </div></div >

        </>

    )


}
export default Login;
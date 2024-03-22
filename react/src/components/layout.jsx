import { useState } from "react";
function Layout() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-full h-full">
                <h1 className="text-black">{count}</h1>
                <p className="text-black cursor-pointer"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Count ++
                </p>
                <p className="text-black cursor-pointer"
                    onClick={() => {
                        setCount(count - 1);
                    }}

                >count --  </p>

            </div>

            {/* <div className="bg-gray-100 h-screen flex items-center justify-center">
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
                                placeholder="Enter your username"

                                required
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
                                placeholder="Enter your password"


                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </form>
                </div></div> */}


        </>
    )

}
export default Layout;
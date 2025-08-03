import { motion } from "framer-motion";
import { useMyContext } from "../context/usercontext.jsx"
import { useEffect, useState } from "react";
import { parsePath } from "react-router-dom";
export default function Login() {
    // usemy context has two vals, inside it User itself has userandpass

    const { SetUser } = useMyContext();
    const [username, SetUsername] = useState(null)
    const [pass, Setpass] = useState(null)

    useEffect(() => {
        SetUser({ username, pass });
        console.log(username)

    }, [username])



    return (
        <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

            <div

                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dbvxna33m/image/upload/v1751386013/q1egbetzccdqq1i63xgv.jpg')`,
                }}
            >
                <div className="w-full h-full backdrop-blur-[6px] bg-black/60"></div>
            </div>

            {/* 🧊 Login Card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 bg-black/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-purple-800/30"
            >
                <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
                    Username :  {username}
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            onChange={(e) => {
                                SetUsername(e.target.value)
                            }}
                            type="email"
                            placeholder="you@elite.dev"
                            className="w-full bg-gray-900/80 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            onChange={(e) => {
                                Setpass(e.target.value)
                            }}
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-900/80 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <motion.button

                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}

                        className="w-full bg-purple-600 py-3 rounded-md text-white font-semibold hover:bg-purple-700 transition-all"
                    >
                        LOGIN


                    </motion.button>
                </form>

            </motion.div>

        </main>
    );
}

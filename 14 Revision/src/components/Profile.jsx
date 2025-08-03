import { useEffect, useState } from "react";
import { useMyContext } from "../context/usercontext.jsx";

export default function Profile() {


    const { User } = useMyContext();
    const [username, setUsername] = useState(null);
    useEffect(() => {
        if (User != null) {
            setUsername(User.username)
            // console.log(User)
        }
    }, [User])
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}>
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

            {/* Profile Content */}
            <div className="relative z-10 text-center p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20">
                <h1 className="text-4xl font-semibold text-white mb-4">Your Profile</h1>
                <p className="text-white text-lg opacity-80">{username}</p>
            </div>
        </div>
    );
}

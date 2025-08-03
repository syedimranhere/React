// pages/Home.jsx
export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">

            {/* 🔮 Blurred Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/dbvxna33m/image/upload/v1751386013/q1egbetzccdqq1i63xgv.jpg" // Replace with your image path
                    alt="Background"
                    className="w-full h-full object-cover blur-md opacity-30"
                />
            </div>

            {/* 🔥 Main Content */}
            <div className="z-10 text-center">
                {/* Static Logo or Image Circle */}
                <div className="w-48 h-48 rounded-full border-4 border-purple-600 mb-8 shadow-2xl overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dbvxna33m/image/upload/v1751991593/imran-best_riqepg.jpg"
                        alt="Future Billionaire"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    Meet the <span className="text-purple-500">Future Billionaire</span>
                </h1>

                {/* Subheadline */}
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    I'm a 16-year-old tech prodigy from Pakistan, building my way to a $150K/month income stream — one AI-enhanced, full-stack, blockchain-powered project at a time.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {[
                        {
                            title: "Full-Stack Dev",
                            desc: "Building full-stack web apps that scale and impress.",
                        },
                        {
                            title: "Blockchain Master",
                            desc: "Learning and dominating the decentralized world.",
                        },
                        {
                            title: "Future VC Slayer",
                            desc: "SaaS plans so hot they melt investor decks.",
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
                        >
                            <h3 className="text-lg font-semibold text-purple-400">{card.title}</h3>
                            <p className="text-sm mt-2 text-gray-300">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

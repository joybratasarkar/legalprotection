"use client";

export default function Hero() {
    return (
        <section
            className="h-screen bg-cover bg-center flex flex-col justify-center items-start pl-20 relative text-white"
            style={{ backgroundImage: "url('/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')" }} 
        >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-6xl font-display font-bold tracking-widest leading-tight mb-4">
                    Lawyers You Can Trust.
                </h1>
                <h2 className="text-5xl font-display font-semibold leading-tight mb-6">
                    Protecting Your Rights
                </h2>
                <p className="text-xl font-light text-gray-300 mb-10">
                    Legal services tailored to your needs.
                </p>

                {/* Call to Action Button */}
                <a 
                    href="/contact" 
                    className="bg-primary-light text-white px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105"
                >
                    Get Consultation
                </a>
            </div>
        </section>
    );
}

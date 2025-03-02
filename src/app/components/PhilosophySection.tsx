export default function PhilosophySection() {
    return (
        <section className="bg-primary-dark text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gold tracking-wider">
                        WHAT WE STAND FOR
                    </h2>
                    <p className="text-xl text-gray-300 mt-2">
                        Our Philosophy, Principle, and Key to Success
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    {/* Our Philosophy */}
                    <div className="bg-primary-dark rounded-lg shadow-lg p-10 text-center transition transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/icons/philosophy.svg"
                            alt="Our Philosophy"
                            className="mx-auto w-16 h-16 mb-4 text-gold-light"
                        />
                        <h3 className="text-2xl font-semibold mb-2 text-gold">
                            OUR PHILOSOPHY
                        </h3>
                        <p className="text-gray-300">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                        </p>
                    </div>

                    {/* Our Principle */}
                    <div className="bg-primary-dark rounded-lg shadow-lg p-10 text-center transition transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/icons/principle.svg"
                            alt="Our Principle"
                            className="mx-auto w-16 h-16 mb-4 text-gold-light"
                        />
                        <h3 className="text-2xl font-semibold mb-2 text-gold">
                            OUR PRINCIPLE
                        </h3>
                        <p className="text-gray-300">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                        </p>
                    </div>

                    {/* Key of Success */}
                    <div className="bg-primary-dark rounded-lg shadow-lg p-10 text-center transition transform hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/icons/success.svg"
                            alt="Key of Success"
                            className="mx-auto w-16 h-16 mb-4 text-gold-light"
                        />
                        <h3 className="text-2xl font-semibold mb-2 text-gold">
                            KEY OF SUCCESS
                        </h3>
                        <p className="text-gray-300">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

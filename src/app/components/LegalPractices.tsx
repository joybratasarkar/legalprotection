"use client";

const legalPractices = [
    {
        title: "Corporate & Securities",
        description: "We can provide corporate governance, helping clients manage the responsibilities of running a corporation in the financial field.",
        icon: "/icons/business-law-icon-free-vector.ico",
        link: "/services/corporate"
    },
    {
        title: "Real Estate Law",
        description: "We provide comprehensive real estate legal services, ensuring smooth transactions and property rights protection.",
        icon: "/icons/—Pngtree—scale construction law_8544687.ico",
        link: ""
    },
    {
        title: "Health Care Law",
        description: "Our team assists healthcare providers with regulatory compliance, risk management, and dispute resolution.",
        icon: "/icons/health-care-law-illustration-vector-white-background-259395416.jpg",
        link: "/services/health-care"
    },
    {
        title: "Insurance Law",
        description: "We help clients navigate complex insurance policies, claims, and disputes with legal expertise and support.",
        icon: "/icons/insurance-svgrepo-com.svg",
        link: "/services/insurance"
    },
    {
        title: "Construction & Engineering",
        description: "We offer legal solutions for construction contracts, disputes, and compliance with safety regulations.",
        icon: "/icons/real-estate-vector-icons.ico",
        link: "/services/construction"
    },
    {
        title: "Ecommerce Law",
        description: "We provide legal guidance on e-commerce regulations, data privacy, and online business compliance.",
        icon: "/icons/2d-thin-linear-icon-e-commerce-laws-concept-295549910.ico",
        link: "/services/ecommerce"
    }
];

export default function LegalPractices() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-lg font-semibold text-gray-500 tracking-widest mb-2">
                    WHAT WE ARE EXPERT AT
                </h2>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Legal Practices Area
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {legalPractices.map((practice, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
                        >
                            <div className="mb-4">
                                <img 
                                    src={`${practice.icon}`} 
                                    alt={practice.title} 
                                    className="w-16 h-16 mx-auto text-primary-light" 
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {practice.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {practice.description}
                            </p>
                            <a 
                                href={practice.link} 
                                className="text-primary-light font-semibold hover:text-primary-dark transition duration-300"
                            >
                                LEARN MORE →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

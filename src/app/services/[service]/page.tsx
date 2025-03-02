export default function Services() {
    return (
        <section className="p-8 text-center bg-gray-100">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <ul className="mt-4 space-y-2">
                <li><a href="/services/family-law" className="text-blue-700 underline">Family Law</a></li>
                <li><a href="/services/business-law" className="text-blue-700 underline">Business Law</a></li>
                <li><a href="/services/criminal-defense" className="text-blue-700 underline">Criminal Defense</a></li>
            </ul>
        </section>
    );
}

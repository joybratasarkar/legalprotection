export default function Services() {
    return (
        <section className="p-16 text-center bg-white">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Family Law</h3>
                    <p>Legal assistance for family disputes and child custody cases.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Business Law</h3>
                    <p>Expert advice on business contracts, compliance, and disputes.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">Criminal Defense</h3>
                    <p>Protecting your rights with a strong legal defense strategy.</p>
                </div>
            </div>
        </section>
    );
}

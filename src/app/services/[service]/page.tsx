import Link from "next/link";

export default function Services() {
    return (
        <section className="p-8 text-center bg-gray-100">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <ul className="mt-4 space-y-2">
                <li>
                    <Link href="/services/family-law" className="text-blue-700 underline">
                        Family Law
                    </Link>
                </li>
                <li>
                    <Link href="/services/business-law" className="text-blue-700 underline">
                        Business Law
                    </Link>
                </li>
                <li>
                    <Link href="/services/criminal-defense" className="text-blue-700 underline">
                        Criminal Defense
                    </Link>
                </li>
            </ul>
        </section>
    );
}

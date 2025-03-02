import ContactForm from "../components/ContactForm";
import AddressSection from "../components/AddressSection"
export default function Contact() {
    return (
        <section className="p-8 text-center">
            {/* <h2 className="text-3xl font-bold">Contact Us</h2> */}
            <ContactForm />
            <AddressSection/>
        </section>
    );
}

import Image from "next/image";

export default function AboutDetails() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image with Larger Size */}
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <Image 
            src="/pexels-august-de-richelieu-4427430.jpg" 
            alt="Professional Legal Team" 
            width={800} 
            height={500} 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
        </div>

        {/* Right Column: Text Content */}
        <div>
          <h3 className="text-lg uppercase text-gray-500 tracking-wider mb-2">
            About Legal Protection
          </h3>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Your Trusted Partner in Consumer Complaint Resolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Legal Protection is your go-to platform for registering consumer complaints. 
            We provide a comprehensive space where you can address all types of grievances and find solutions under one roof. 
            Whether it’s issues with home appliances, telecom, employment, or more, we are here to assist you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our team of experienced and professional legal consultants is dedicated to guiding you on the right path. 
            Best of all, we do not charge for consultations, ensuring you get expert advice without any financial burden.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our advocates will draft a clear legal notice explaining your issue and requested solution, 
            then send it to the company to encourage a quick resolution.
          </p>

          {/* Signature */}
          <div className="mt-8">
            <Image 
              src="/icons/iconLegal.png" 
              alt="Signature" 
              width={160} 
              height={50} 
              className="w-40 mb-2"
            />
            <p className="text-gray-800 font-semibold">Akashdeep</p>
            <p className="text-gray-500 text-sm">CEO & Founder of Legal Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}

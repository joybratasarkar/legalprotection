export default function AddressSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Address
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          
          {/* Address for Bengaluru */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Bengaluru
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              10th Cross Road, 13th B Main Rd, HAL 2nd Stage, Doopanahalli,
            </p>
            <p className="text-gray-600 leading-relaxed">
              Indiranagar, Bengaluru, Karnataka-560008
            </p>
          </div>
  
          {/* Address for Hyderabad */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hyderabad
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Dr Madhu Sudhan murthy mansion, cooperative bank colony, road no 6,
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nagole, Hyderabad-500068
            </p>
          </div>
        </div>
      </section>
    );
  }
  
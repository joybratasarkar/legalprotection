export default function ContactForm() {
  return (
    <section 
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: "url('/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')" }}
    >
      {/* Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/50"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-95 shadow-2xl rounded-2xl p-10 md:p-16 border-t-4 border-primary-dark">
          <h1 className="text-5xl font-serif font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Have questions or need legal assistance? Fill out the form below, and our team will get back to you promptly.
          </p>

          <form action="#" className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
                required
              />
            </div>

            {/* Phone/Mobile Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+1 123 456 7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
                required
              />
            </div>

            {/* Issue Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Describe the Issue
              </label>
              <textarea
                placeholder="Kindly elaborate the issue with Company name"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
              ></textarea>
            </div>

            {/* Purchase Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Purchase Amount of Product/Service
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark transition"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-dark text-white py-3 px-8 rounded-full hover:bg-black transition duration-300 shadow-lg tracking-widest"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

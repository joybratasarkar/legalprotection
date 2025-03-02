export default function AboutHero() {
  return (
    <section 
      className="relative h-[50vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/library-bg.jpg')" }}  // ✅ Background Image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-widest">
          About Us
        </h1>
      </div>
    </section>
  );
}

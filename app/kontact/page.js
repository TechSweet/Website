import Image from "next/image";

export default function Kontact() {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Kontact</h1>
          <p className="text-2xl mb-6">Your Ultimate Contact Management App</p>
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            atque, accusantium exercitationem maiores laborum et quos? Eos non
            officia deserunt dicta omnis praesentium iste, laborum recusandae
            nisi magnam. Eaque, est.
          </p>
          <a
            href="https://apps.apple.com/us/app/kontact/id1234567890"
            className="btn btn-primary"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-center">
        <p className="text-4xl font-bold">
          TechSweet LLC is a value-driven digital products company that focuses
          on usability, function, and clean design.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Kontact?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
            <p className="text-lg">Brief description of the first feature.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
            <p className="text-lg">Brief description of the second feature.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
            <p className="text-lg">Brief description of the third feature.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <img
            src="/path-to-screenshot1.jpg"
            alt="Screenshot 1"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/path-to-screenshot2.jpg"
            alt="Screenshot 2"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/path-to-screenshot3.jpg"
            alt="Screenshot 3"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-base-300 text-center">
        <p className="text-lg">© 2024 TechSweet. All Rights Reserved.</p>
        <a
          href="https://apps.apple.com/us/app/kontact/id1234567890"
          className="btn btn-secondary mt-4"
        >
          Download Kontact
        </a>
      </footer>
    </div>
  );
}

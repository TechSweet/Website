import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">TechSweet</h1>
          <p className="text-2xl mb-6">Innovating the Future</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-cover bg-center">
        <div className="text-center text-white">
          <h2 className="text-6xl font-bold mb-4">Our Work At a Glance</h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-base-300 text-center">
        <p className="text-lg">© 2021 TechSweet. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

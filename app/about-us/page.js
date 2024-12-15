import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-[80px]">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-4">Last updated: {currentDate}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Graduate Farmer</h2>
          <p className="text-lg">
            Graduate Farmer is committed to revolutionizing poultry farming by
            offering 100% antibiotic-free chicken and eggs. Our journey began
            with a vision to provide healthier and more sustainable food options
            while empowering farmers. At Graduate Farmer, we produce
            azolla-based, herb-enriched poultry feed to ensure the highest
            quality and nutrition in our products. We work closely with farmers,
            providing them with chicks, natural feed, and training in
            antibiotic-free poultry farming. The farmers' produce is bought back
            and sold under our trusted brand, ensuring a seamless farm-to-table
            experience. Located in the heart of Barak Valley, Assam, we strive
            to create a healthier future for our customers and the environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About the Founder</h2>
          <p className="text-lg">
            Bapan Das, the visionary founder of Graduate Farmer, is a dedicated
            agripreneur from Barak Valley, Assam. With a mission to
            revolutionize poultry farming, Bapan specializes in antibiotic-free
            chicken and egg production. His innovative approach incorporates
            azolla-based, Black Soldier Fly larvae-enriched feed, which enhances
            the nutritional value of poultry while eliminating the need for
            antibiotics. Recognized as a pioneer in sustainable farming, Bapan
            has trained thousands of farmers online and offline, empowering them
            to adopt environmentally friendly and profitable practices. Under
            his leadership, Graduate Farmer has emerged as a trusted name in
            sustainable agriculture, delivering quality and health to customers
            across the region.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">We’d love to hear from you!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Address:</h3>
              <p className="text-lg">
                C/O - Sabitri Das <br />
                Vill-Binnakandi Part-1, <br />
                P.O - Dilkhoosh, <br />
                Dist - Cachar, <br />
                State - Assam - 788106
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Info:</h3>

              <p className="text-lg">
                Email: bd1894623@gmail.com <br />
                Phone: 8723862245 <br />
                WhatsApp: 8720966242
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-[80px]">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {currentDate}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Graduate Farmer’s Website
          </h2>
          <p className="text-lg">
            At Graduate Farmer, we prioritize your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy outlines how we collect, use, and safeguard your information
            when you visit our website, www.graduatefarmer.com, to purchase our
            antibiotic-free chickens and eggs or other products.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="text-lg">
            We collect certain information when you interact with our website,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Personal Information:</strong> When you create an account,
              place an order, or contact us, we may collect personal information
              such as your name, email address, phone number, shipping address,
              and payment information.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> We may collect
              information about your device, browser type, IP address, and
              website usage to enhance your browsing experience. This data is
              collected through cookies and other tracking technologies.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-lg">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              Process and fulfill your orders for chickens, eggs, and other
              products.
            </li>
            <li>Improve our website, customer service, and user experience.</li>
            <li>
              Send you order updates, promotional information, and other
              relevant communications (if you opt-in).
            </li>
            <li>
              Analyze website traffic and usage patterns to improve our
              services.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-lg">
            We may share your information with third-party service providers,
            such as payment processors and delivery partners, to fulfill your
            orders. We ensure these third parties are committed to protecting
            your data and use it only as necessary to provide their services.
          </p>
          <p className="text-lg">
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties without your consent,
            except to comply with legal obligations or enforce our site
            policies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-lg">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration, or
            disclosure. However, please note that no method of online
            transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            5. Cookies and Tracking
          </h2>
          <p className="text-lg">
            Our website uses cookies and similar technologies to enhance your
            browsing experience and collect data on website usage. You can
            control or disable cookies through your browser settings; however,
            please note that this may affect website functionality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-lg">
            Depending on your location, you may have rights regarding your
            personal information, including the right to access, correct,
            delete, or restrict its processing. To exercise these rights, please
            contact us at [contact email].
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to This Policy
          </h2>
          <p className="text-lg">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-lg">
            For any questions or concerns about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="text-lg font-semibold">Graduate Farmer</p>
          <p className="text-lg">
            <strong>Email:</strong> bd1894623@gmail.com
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +91 8723862245
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

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
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">Last updated: {currentDate}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Graduate Farmer’s Website
          </h2>
          <p className="text-lg">
            These Terms and Conditions (“Terms”) govern your access to and use
            of the website www.graduatefarmer.com and the purchase of our
            products, including chickens, eggs, and other offerings. By
            accessing or using our website, you agree to be bound by these
            Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-lg">
            By accessing or using this website, you accept and agree to comply
            with these Terms. If you do not agree with any part of these Terms,
            please do not use our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. Account Registration
          </h2>
          <p className="text-lg">
            To make purchases, you may need to create an account. You agree to
            provide accurate and complete information during registration and
            keep your account information up to date. You are responsible for
            maintaining the confidentiality of your account and password and
            accept responsibility for all activities under your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. Product Information
          </h2>
          <p className="text-lg">
            Graduate Farmer offers antibiotic-free chickens, eggs, and other
            farm products. We strive to display accurate information; however,
            we do not guarantee that product descriptions or other content on
            the website are error-free. In case of errors, we reserve the right
            to correct them at any time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            4. Ordering and Payment
          </h2>
          <p className="text-lg">
            <strong>Placing Orders:</strong> By placing an order, you agree to
            purchase our products. All orders are subject to availability and
            confirmation of the order price.
          </p>
          <p className="text-lg">
            <strong>Payment:</strong> We accept various payment methods provided
            at checkout. You agree to pay all charges at the prices in effect at
            the time of your order.
          </p>
          <p className="text-lg">
            <strong>Order Confirmation:</strong> Once you place an order, we
            will send an order confirmation to your provided email address.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            5. Shipping and Delivery
          </h2>
          <p className="text-lg">
            We aim to deliver your products in a timely manner. Delivery times
            are estimates and may vary. We are not responsible for delays caused
            by external factors, such as weather or transport disruptions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            6. Returns and Refunds
          </h2>
          <p className="text-lg">
            Due to the nature of perishable products, we do not accept returns
            on chickens, eggs, or similar items. If you receive a damaged or
            incorrect product, please contact us within 24 hours, and we will
            work to resolve the issue.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-lg">
            All content on this website, including text, images, logos, and
            trademarks, is the property of Graduate Farmer or its content
            suppliers and is protected by copyright and trademark laws.
            Unauthorized use or reproduction of this content is prohibited.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-lg">
            Graduate Farmer is not liable for any damages arising from the use
            of, or inability to use, our website or products, including but not
            limited to indirect, incidental, or consequential damages. Our
            liability shall be limited to the maximum extent permitted by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
          <p className="text-lg">
            You agree to indemnify, defend, and hold harmless Graduate Farmer,
            its directors, employees, and affiliates from any claims,
            liabilities, damages, and expenses (including legal fees) arising
            from your use of the website or violation of these Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-lg">
            These Terms and any disputes arising from your use of the website
            shall be governed by the laws of [Your State/Country], without
            regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p className="text-lg">
            We may revise these Terms periodically. Any changes will be posted
            on this page with the “Last Updated” date. Your continued use of our
            website after changes are posted constitutes acceptance of the new
            Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-lg">
            If you have any questions or concerns regarding these Terms, please
            contact us at:
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

export default TermsAndConditions;

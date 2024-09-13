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
        <h1 className="text-3xl font-bold mb-6">
          Terms and Conditions for Graduate Farmers
        </h1>
        <p className="mb-4">Last updated: {currentDate}</p>

        <section className="mb-8">
          <p className="mb-4">
            Welcome to Graduate Farmers. These terms and conditions outline the
            rules and regulations for the use of Graduate Farmers' website,
            located at https://graduatefarmers.com/.
          </p>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Graduate Farmers if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
          <p className="mb-4">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              "Client", "You" and "Your" refers to you, the person accessing
              this website and accepting these terms and conditions.
            </li>
            <li>
              "The Company", "Ourselves", "We", "Our" and "Us", refers to
              Graduate Farmers.
            </li>
            <li>
              "Party", "Parties", or "Us", refers to both the Client and
              ourselves.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Graduate Farmers' website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Graduate Farmers' website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on Graduate Farmers' website are provided on an 'as
            is' basis. Graduate Farmers makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall Graduate Farmers or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Graduate Farmers' website, even
            if Graduate Farmers or a Graduate Farmers authorized representative
            has been notified orally or in writing of the possibility of such
            damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Accuracy of Materials
          </h2>
          <p className="mb-4">
            The materials appearing on Graduate Farmers' website could include
            technical, typographical, or photographic errors. Graduate Farmers
            does not warrant that any of the materials on its website are
            accurate, complete or current. Graduate Farmers may make changes to
            the materials contained on its website at any time without notice.
            However Graduate Farmers does not make any commitment to update the
            materials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
          <p className="mb-4">
            Graduate Farmers has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            Graduate Farmers of the site. Use of any such linked website is at
            the user's own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-4">
            Graduate Farmers may revise these terms of service for its website
            at any time without notice. By using this website you are agreeing
            to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Country/State] and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please
            contact us at info@graduatefarmers.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Privacy Policy | A&W Menu",
  description: "Read about how A&W Menu collects, uses, and protects your data.",
  robots: {
    index: true, // 👈 allow indexing
    follow: true,
  },
};

const page = () => {
  return (
  
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>A&amp;W Menu</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when interacting with our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Your name and contact details when submitting forms (e.g., reservations or newsletter signups)</li>
        <li>Email address for newsletters or inquiries</li>
        <li>Browser and device information through cookies and analytics tools</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide better user experiences on our website</li>
        <li>Respond to your messages or reservations</li>
        <li>Send occasional promotional emails (if subscribed)</li>
        <li>Improve our services through analytics and feedback</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Tracking</h2>
      <p className="mb-4">
        We use cookies to analyze site traffic and enhance functionality. You can choose to disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, or alteration.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services like Google Analytics to monitor site performance. These services have their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Consent</h2>
      <p className="mb-4">
        By using our website, you consent to our Privacy Policy and its terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about our Privacy Policy, please contact us at <span className="text-orange-600 font-semibold">support@example.com</span>.
      </p>

    </div>
  );
};

export default page;

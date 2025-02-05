import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="font-semibold">Evatril</span>, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal details such as name, phone number, and email when you make a booking. We may also collect preferences related to catering and events.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Data</h2>
      <p className="mb-4">
        We use your data to manage your bookings, personalize event services, and send updates about your orders. We do not sell or share your information with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6">3. Security Measures</h2>
      <p className="mb-4">
        We take strict measures to ensure your data is secure. All transactions are encrypted, and sensitive information is stored securely.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Cookies & Tracking</h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience and track performance. You can disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services (e.g., payment gateways) that have their own privacy policies. Please refer to their policies for more details.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to your personal data or request deletion. Contact us at{" "}
        <span className="text-blue-500 underline">support@evatril.com</span> for assistance.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

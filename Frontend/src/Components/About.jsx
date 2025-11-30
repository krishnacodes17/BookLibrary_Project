import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setOpenModal(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-3">
          About <span className="text-pink-500">Us</span>
        </h1>

        <p className="text-gray-600 text-center text-sm mb-6">
          Learn more about our mission, vision, and purpose.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We are dedicated to providing the best online shopping experience.
            Our team works hard every day to bring quality products at the best
            prices, ensuring customer satisfaction and a smooth buying journey.
          </p>

          <p>
            Our platform is built with modern technology and user-friendly
            design to give you a seamless experience while browsing, selecting,
            and purchasing products.
          </p>

          <p>
            We believe in transparency, trust, and excellent service. If you
            ever need help, our support team is always ready to assist you.
          </p>
        </div>

        <button
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
          onClick={() => setOpenModal(true)}
        >
          Learn More
        </button>
      </div>

      {/* 🟣 Modal Popup */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full animate-fadeIn">
            <h2 className="text-xl font-bold text-center mb-2">Thank You! 💖</h2>
            <p className="text-gray-600 text-center mb-4">
              Thanks for learning about us. We value your time!
            </p>

            <button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition"
              onClick={handleRedirect}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

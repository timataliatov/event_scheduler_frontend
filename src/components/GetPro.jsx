import React from 'react';
import { FaCrown, FaCheckCircle, FaRocket, FaChartLine, FaPalette, FaHeadset } from 'react-icons/fa';

const GetPro = () => {
  const features = [
    { icon: FaRocket, text: 'Unlimited events', description: 'Create and manage as many events as you want' },
    { icon: FaChartLine, text: 'Advanced analytics', description: 'Gain insights with detailed event performance metrics' },
    { icon: FaPalette, text: 'Custom branding', description: 'Personalize your event pages with your own branding' },
    { icon: FaHeadset, text: 'Priority support', description: 'Get faster responses from our dedicated support team' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Upgrade to Pro</h1>
      <div className="bg-base-200 rounded-box shadow-lg p-8">
        <div className="flex items-center justify-center mb-10">
          <FaCrown className="text-5xl md:text-6xl text-yellow-500 mr-4 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Eventify Pro</h2>
        </div>
        <p className="text-xl md:text-2xl text-center mb-12 text-base-content/80 max-w-3xl mx-auto">
          Elevate your event planning experience with premium features and unparalleled support.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Exclusive Pro Features</h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-lg group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 flex-shrink-0">
                    <feature.icon className="text-primary text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <span className="font-semibold transition-colors duration-300 group-hover:text-primary">{feature.text}</span>
                    <p className="text-sm text-base-content/70 mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Pro Plan Pricing</h3>
            <div className="bg-base-100 p-6 rounded-lg shadow-inner transition-all duration-300 hover:shadow-md">
              <p className="text-4xl md:text-5xl font-bold text-primary">$19.99<span className="text-xl font-normal text-base-content/70">/month</span></p>
              <p className="text-sm mt-2 text-base-content/70">Billed annually or $24.99 month-to-month</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-base-content/80">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>30-day money-back guarantee</span>
              </li>
              <li className="flex items-center text-base-content/80">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>Cancel anytime</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary btn-lg px-12 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetPro;

import React from 'react';
import { FaCrown, FaCheckCircle, FaRocket, FaChartLine, FaPalette, FaHeadset } from 'react-icons/fa';

const GetPro = () => {
  const features = [
    { icon: FaRocket, text: 'Unlimited events' },
    { icon: FaChartLine, text: 'Advanced analytics' },
    { icon: FaPalette, text: 'Custom branding' },
    { icon: FaHeadset, text: 'Priority support' },
  ];

  return (
    <div className="flex-grow flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-base-200 rounded-lg shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
          <div className="flex items-center justify-center mb-8">
            <FaCrown className="text-5xl md:text-6xl text-yellow-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Eventify Pro</h2>
          </div>
          <p className="text-xl md:text-2xl text-center mb-12 text-base-content/80">
            Elevate your event planning experience with premium features and unparalleled support.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Exclusive Pro Features</h3>
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg group">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20">
                      <feature.icon className="text-primary text-2xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="transition-colors duration-300 group-hover:text-primary">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Pro Plan Pricing</h3>
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
    </div>
  );
};

export default GetPro;

import React, { useState } from 'react';
import { FaBell, FaLock, FaPalette, FaUser, FaCreditCard } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: FaUser },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'appearance', label: 'Appearance', icon: FaPalette },
    { id: 'billing', label: 'Billing', icon: FaCreditCard },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ul className="menu bg-base-200 rounded-box p-2">
            {tabs.map((tab) => (
              <li key={tab.id} className={activeTab === tab.id ? 'bordered' : ''}>
                <a onClick={() => setActiveTab(tab.id)} className="flex items-center py-2">
                  <tab.icon className="mr-3 text-lg" />
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-base-200 rounded-box p-6">
            {activeTab === 'account' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Display Name</span>
                  </label>
                  <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mt-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="your.email@example.com" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn btn-primary mt-6">Save Changes</button>
              </div>
            )}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" defaultChecked />
                    <span className="label-text">Email notifications</span>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" defaultChecked />
                    <span className="label-text">Push notifications</span>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" />
                    <span className="label-text">SMS notifications</span>
                  </label>
                </div>
              </div>
            )}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
                <button className="btn btn-primary mb-4">Change Password</button>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" />
                    <span className="label-text">Two-factor authentication</span>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" />
                    <span className="label-text">Login alerts</span>
                  </label>
                </div>
              </div>
            )}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Appearance Settings</h2>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="toggle toggle-primary mr-4" />
                    <span className="label-text">Dark mode</span>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Color theme</span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option>Default</option>
                    <option>Vibrant</option>
                    <option>Pastel</option>
                    <option>Monochrome</option>
                  </select>
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Font size</span>
                  </label>
                  <input type="range" min="0" max="100" className="range range-primary" step="25" />
                  <div className="w-full flex justify-between text-xs px-2 mt-2">
                    <span>Small</span>
                    <span>Medium</span>
                    <span>Large</span>
                    <span>X-Large</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Billing Settings</h2>
                <div className="bg-base-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-2">Current Plan</h3>
                  <p className="text-base">Pro Plan - $19.99/month</p>
                  <p className="text-sm text-base-content/70">Next billing date: July 1, 2023</p>
                </div>
                <button className="btn btn-outline btn-primary mb-4">Update Payment Method</button>
                <button className="btn btn-outline btn-error">Cancel Subscription</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

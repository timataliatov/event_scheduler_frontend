import React, { useState } from 'react';
import { FaBell, FaLock, FaPalette, FaUser, FaCreditCard, FaCheck } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [savedMessage, setSavedMessage] = useState('');

  const tabs = [
    { id: 'account', label: 'Account', icon: FaUser },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'appearance', label: 'Appearance', icon: FaPalette },
    { id: 'billing', label: 'Billing', icon: FaCreditCard },
  ];

  const handleSave = () => {
    setSavedMessage('Changes saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Settings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ul className="menu bg-base-200 rounded-box p-2 sticky top-4">
            {tabs.map((tab) => (
              <li key={tab.id} className={activeTab === tab.id ? 'bordered' : ''}>
                <button onClick={() => setActiveTab(tab.id)} className="flex items-center py-3 px-4">
                  <tab.icon className="mr-3 text-lg" />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-base-200 rounded-box p-6 shadow-md">
            {savedMessage && (
              <div className="alert alert-success mb-4">
                <FaCheck className="mr-2" /> {savedMessage}
              </div>
            )}
            {activeTab === 'account' && <AccountSettings onSave={handleSave} />}
            {activeTab === 'notifications' && <NotificationSettings onSave={handleSave} />}
            {activeTab === 'security' && <SecuritySettings onSave={handleSave} />}
            {activeTab === 'appearance' && <AppearanceSettings onSave={handleSave} />}
            {activeTab === 'billing' && <BillingSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountSettings = ({ onSave }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
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
    <button className="btn btn-primary mt-6" onClick={onSave}>Save Changes</button>
  </div>
);

const NotificationSettings = ({ onSave }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Notification Settings</h2>
    <div className="space-y-4">
      <ToggleOption label="Email notifications" defaultChecked={true} />
      <ToggleOption label="Push notifications" defaultChecked={true} />
      <ToggleOption label="SMS notifications" defaultChecked={false} />
    </div>
    <button className="btn btn-primary mt-6" onClick={onSave}>Save Changes</button>
  </div>
);

const SecuritySettings = ({ onSave }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
    <button className="btn btn-primary mb-6">Change Password</button>
    <div className="space-y-4">
      <ToggleOption label="Two-factor authentication" defaultChecked={false} />
      <ToggleOption label="Login alerts" defaultChecked={true} />
    </div>
    <button className="btn btn-primary mt-6" onClick={onSave}>Save Changes</button>
  </div>
);

const AppearanceSettings = ({ onSave }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Appearance Settings</h2>
    <ToggleOption label="Dark mode" defaultChecked={false} />
    <div className="form-control mt-6">
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
    <div className="form-control mt-6">
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
    <button className="btn btn-primary mt-6" onClick={onSave}>Save Changes</button>
  </div>
);

const BillingSettings = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Billing Settings</h2>
    <div className="bg-base-100 p-6 rounded-lg shadow-inner mb-6">
      <h3 className="text-lg font-semibold mb-2">Current Plan</h3>
      <p className="text-xl font-bold text-primary">Pro Plan - $19.99/month</p>
      <p className="text-sm text-base-content/70 mt-1">Next billing date: July 1, 2023</p>
    </div>
    <button className="btn btn-outline btn-primary mb-4 w-full sm:w-auto">Update Payment Method</button>
    <button className="btn btn-outline btn-error w-full sm:w-auto">Cancel Subscription</button>
  </div>
);

const ToggleOption = ({ label, defaultChecked }) => (
  <div className="form-control">
    <label className="label cursor-pointer justify-start">
      <input type="checkbox" className="toggle toggle-primary mr-4" defaultChecked={defaultChecked} />
      <span className="label-text">{label}</span>
    </label>
  </div>
);

export default Settings;

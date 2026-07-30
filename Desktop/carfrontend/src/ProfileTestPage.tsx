import React, { useState } from 'react';

// Aapke teeno components import kar rahe hain
import Profile1 from './Profile1';
import HostProfile from './HostProfile';
import CompanyProfile from './CompanyProfile';

const ProfileTestPage: React.FC = () => {
  // Konsa profile abhi dikhana hai, uska state (Default: 'user')
  const [activeTab, setActiveTab] = useState<'user' | 'host' | 'company'>('user');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 10px 0', color: '#1a1a1a' }}>Profile Components Tester</h1>
        <p style={{ color: '#666', margin: 0 }}>Tabs par click karke teeno profiles check karein</p>
      </div>

      {/* Tabs Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        <button
          onClick={() => setActiveTab('user')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'user' ? '#007bff' : '#ffffff',
            color: activeTab === 'user' ? '#ffffff' : '#333333',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          👤 User Profile
        </button>

        <button
          onClick={() => setActiveTab('host')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'host' ? '#28a745' : '#ffffff',
            color: activeTab === 'host' ? '#ffffff' : '#333333',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          🚗 Host Profile (Driver)
        </button>

        <button
          onClick={() => setActiveTab('company')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'company' ? '#6f42c1' : '#ffffff',
            color: activeTab === 'company' ? '#ffffff' : '#333333',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          🏢 Company Profile
        </button>
      </div>

      {/* Profile Render Container */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
        maxWidth: '700px', 
        margin: '0 auto',
        padding: '10px'
      }}>
        {activeTab === 'user' && <Profile1 />}
        {activeTab === 'host' && <HostProfile />}
        {activeTab === 'company' && <CompanyProfile />}
      </div>

    </div>
  );
};

export default ProfileTestPage;
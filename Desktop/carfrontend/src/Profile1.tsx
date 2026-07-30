import React, { useState } from 'react';


// User data ka structure (TypeScript Interface)
export interface UserProfileData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  languagePreference: string;
  isVerified: boolean;
  defaultAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

const Profile1: React.FC = () => {
  // Intermediate level: State manage karne ke liye mock data
  const [user, setUser] = useState<UserProfileData>({
    id: 'USR-89423',
    firstName: 'Rahul',
    lastName: 'Sharma',
    email: 'rahul.sharma@example.com',
    phoneNumber: '+91 98765 43210',
    profilePictureUrl: 'https://via.placeholder.com/150',
    gender: 'Male',
    dateOfBirth: '1995-06-15',
    languagePreference: 'Hindi / English',
    isVerified: true,
    defaultAddress: {
      street: 'MG Road, Near Central Mall',
      city: 'New Delhi',
      state: 'Delhi',
      zipCode: '110001',
    },
  });

  return (
    <div className="profile-container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>User Profile</h2>
      
      {/* Profile Header / Basic Info */}
      <div className="profile-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '20px' }}>
        <img 
          src={user.profilePictureUrl} 
          alt="Profile" 
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        <div>
          <h3>{user.firstName} {user.lastName}</h3>
          <p style={{ margin: '4px 0', color: '#666' }}>{user.email}</p>
          <span style={{ 
            backgroundColor: user.isVerified ? '#e6f4ea' : '#fce8e6', 
            color: user.isVerified ? '#137333' : '#c5221f',
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '12px' 
          }}>
            {user.isVerified ? 'Verified User' : 'Unverified'}
          </span>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="profile-details" style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h4>Personal Details</h4>
        <p><strong>Phone:</strong> {user.phoneNumber}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
        <p><strong>Preferred Language:</strong> {user.languagePreference}</p>

        <h4 style={{ marginTop: '15px' }}>Default Address</h4>
        <p>{user.defaultAddress.street}, {user.defaultAddress.city}, {user.defaultAddress.state} - {user.defaultAddress.zipCode}</p>
      </div>
    </div>
  );
};

export default Profile1;
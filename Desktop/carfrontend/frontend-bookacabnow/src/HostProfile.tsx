import React, { useState } from 'react';

// Host Data ka Structure (TypeScript Interface)
export interface HostProfileData {
  hostId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profilePictureUrl: string;
  isIdentityVerified: boolean;
  governmentIdNumber: string; // e.g., Aadhaar Number / Driving License
  
  // Host ki Vehicle ya Property detail
  listingDetails: {
    vehicleName: string;      // e.g., Swift Dzire
    vehicleNumber: string;    // e.g., DL 01 AB 1234
    vehicleType: string;      // Sedan, SUV, Hatchback
  };

  // Payment lene ke liye Bank Details
  bankDetails: {
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
  };

  rating: number; // e.g., 4.8 / 5
  totalTrips: number;
}

const HostProfile: React.FC = () => {
  // Intermediate Level State with Mock Data
  const [host, setHost] = useState<HostProfileData>({
    hostId: 'HST-55102',
    fullName: 'Suresh Kumar',
    email: 'suresh.driver@example.com',
    phoneNumber: '+91 98111 22334',
    profilePictureUrl: 'https://via.placeholder.com/150',
    isIdentityVerified: true,
    governmentIdNumber: 'DL-1420110012345',
    listingDetails: {
      vehicleName: 'Maruti Suzuki Swift Dzire',
      vehicleNumber: 'DL 01 A 9876',
      vehicleType: 'Sedan',
    },
    bankDetails: {
      accountHolderName: 'Suresh Kumar',
      accountNumber: 'XXXX-XXXX-4321',
      ifscCode: 'SBIN0001234',
    },
    rating: 4.8,
    totalTrips: 342,
  });

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Host Profile (Driver)</h2>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <img 
          src={host.profilePictureUrl} 
          alt="Host" 
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
        />
        <div>
          <h3 style={{ margin: '0 0 5px 0' }}>{host.fullName}</h3>
          <p style={{ margin: '0 0 5px 0', color: '#666' }}>{host.email}</p>
          <div>
            <span style={{ 
              backgroundColor: '#e6f4ea', 
              color: '#137333', 
              padding: '2px 8px', 
              borderRadius: '4px', 
              fontSize: '12px',
              marginRight: '10px'
            }}>
              {host.isIdentityVerified ? 'ID Verified ✓' : 'ID Pending'}
            </span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
              ⭐ {host.rating} ({host.totalTrips} Trips)
            </span>
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        {/* Identity Section */}
        <h4 style={{ marginTop: '0' }}>Identity & Documents</h4>
        <p><strong>Phone:</strong> {host.phoneNumber}</p>
        <p><strong>Driving License / ID:</strong> {host.governmentIdNumber}</p>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        {/* Vehicle / Service Details */}
        <h4>Vehicle Details</h4>
        <p><strong>Vehicle:</strong> {host.listingDetails.vehicleName} ({host.listingDetails.vehicleType})</p>
        <p><strong>Number Plate:</strong> {host.listingDetails.vehicleNumber}</p>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        {/* Payout Details */}
        <h4>Payout Bank Details</h4>
        <p><strong>Account Holder:</strong> {host.bankDetails.accountHolderName}</p>
        <p><strong>Account Number:</strong> {host.bankDetails.accountNumber}</p>
        <p><strong>IFSC Code:</strong> {host.bankDetails.ifscCode}</p>
      </div>
    </div>
  );
};

export default HostProfile;
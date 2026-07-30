import React, { useState } from 'react';

// Company Data ka Structure (TypeScript Interface)
export interface CompanyProfileData {
  companyId: string;
  companyName: string;
  brandLogoUrl: string;
  tagline: string;
  registrationNumber: string; // CIN ya Business Reg Number
  gstNumber: string;           // Legal Tax ID
  
  // Company Contact Information
  contactInfo: {
    officialEmail: string;
    supportPhone: string;
    websiteUrl: string;
    headOfficeAddress: string;
  };

  // Service Details (Aapki company kya services deti hai)
  serviceDetails: {
    totalFleetSize: number;       // Kitni cars/vehicles hain
    serviceTypes: string[];       // e.g., Outstation, Airport Transfer, Daily Rental
    operatingCities: string[];    // Jin shehron mein service available hai
  };

  // Company ka Commercial Bank Account
  bankAccount: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
  };

  isVerifiedBusiness: boolean;
}

const CompanyProfile: React.FC = () => {
  // Intermediate Level State with Mock Data
  const [company, setCompany] = useState<CompanyProfileData>({
    companyId: 'CMP-99012',
    companyName: 'Apex Fleet & Travel Solutions Pvt. Ltd.',
    brandLogoUrl: 'https://via.placeholder.com/150',
    tagline: 'Safe & Premium Mobility Services',
    registrationNumber: 'U74999DL2021PTC123456',
    gstNumber: '07AAAAA0000A1Z5',
    contactInfo: {
      officialEmail: 'contact@apexfleet.com',
      supportPhone: '+91 11 4567 8900',
      websiteUrl: 'https://www.apexfleet.com',
      headOfficeAddress: 'Plot 45, Sector 18, Cyber City, Gurugram, Haryana - 122002',
    },
    serviceDetails: {
      totalFleetSize: 45,
      serviceTypes: ['Airport Pick & Drop', 'Intercity Outstation', 'Hourly Rentals', 'Corporate Fleet'],
      operatingCities: ['Delhi NCR', 'Mumbai', 'Bengaluru'],
    },
    bankAccount: {
      accountName: 'Apex Fleet & Travel Solutions Pvt Ltd',
      accountNumber: 'XXXX-XXXX-8899',
      bankName: 'HDFC Bank',
      ifscCode: 'HDFC0000123',
    },
    isVerifiedBusiness: true,
  });

  return (
    <div style={{ padding: '20px', maxWidth: '650px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Company Profile (Business Partner)</h2>

      {/* Company Header / Logo & Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <img 
          src={company.brandLogoUrl} 
          alt="Company Logo" 
          style={{ width: '80px', height: '80px', borderRadius: '8px', border: '1px solid #ddd', objectFit: 'cover' }} 
        />
        <div>
          <h3 style={{ margin: '0 0 4px 0' }}>{company.companyName}</h3>
          <p style={{ margin: '0 0 6px 0', color: '#555', fontStyle: 'italic', fontSize: '14px' }}>"{company.tagline}"</p>
          <span style={{ 
            backgroundColor: company.isVerifiedBusiness ? '#e8f0fe' : '#fef7e0', 
            color: company.isVerifiedBusiness ? '#1a73e8' : '#b06000', 
            padding: '3px 10px', 
            borderRadius: '4px', 
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {company.isVerifiedBusiness ? 'Verified Business Partner ✓' : 'Verification Pending'}
          </span>
        </div>
      </div>

      {/* Profile Details */}
      <div style={{ background: '#f9f9f9', padding: '18px', borderRadius: '8px' }}>
        
        {/* Service Details Section */}
        <h4 style={{ marginTop: '0', color: '#333' }}>Service Details</h4>
        <p><strong>Fleet Size:</strong> {company.serviceDetails.totalFleetSize} Vehicles</p>
        <p>
          <strong>Services Offered:</strong>{' '}
          {company.serviceDetails.serviceTypes.map((service, index) => (
            <span key={index} style={{ background: '#e0e0e0', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', marginRight: '5px' }}>
              {service}
            </span>
          ))}
        </p>
        <p><strong>Operating Cities:</strong> {company.serviceDetails.operatingCities.join(', ')}</p>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        {/* Legal & Registration */}
        <h4 style={{ color: '#333' }}>Legal & Tax Info</h4>
        <p><strong>GST Number:</strong> {company.gstNumber}</p>
        <p><strong>Registration No (CIN):</strong> {company.registrationNumber}</p>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        {/* Contact Info */}
        <h4 style={{ color: '#333' }}>Contact & Address</h4>
        <p><strong>Official Email:</strong> {company.contactInfo.officialEmail}</p>
        <p><strong>Support Phone:</strong> {company.contactInfo.supportPhone}</p>
        <p><strong>Website:</strong> <a href={company.contactInfo.websiteUrl} target="_blank" rel="noreferrer">{company.contactInfo.websiteUrl}</a></p>
        <p><strong>Office Address:</strong> {company.contactInfo.headOfficeAddress}</p>

        <hr style={{ border: '0.5px solid #eee', margin: '15px 0' }} />

        {/* Commercial Bank Details */}
        <h4 style={{ color: '#333' }}>Commercial Payout Account</h4>
        <p><strong>Account Name:</strong> {company.bankAccount.accountName}</p>
        <p><strong>Bank & Account:</strong> {company.bankAccount.bankName} ({company.bankAccount.accountNumber})</p>
        <p><strong>IFSC Code:</strong> {company.bankAccount.ifscCode}</p>

      </div>
    </div>
  );
};

export default CompanyProfile;
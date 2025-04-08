import React, { useState } from 'react';
import axios from 'axios'; // For API calls
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginCreateAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handlePhoneNumberSubmit = async () => {
    // Send OTP to the phone number via your API
    try {
      await axios.post('/api/send-otp', { phoneNumber });
      setIsOtpSent(true);
      alert('OTP sent to your phone number!');
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };

  const handleOtpSubmit = async () => {
    // Verify OTP
    try {
      const response = await axios.post('/api/verify-otp', { phoneNumber, otp });
      if (response.data.success) {
        setIsVerified(true);
        alert('OTP verified successfully!');
        // Redirect to home page after successful verification
        window.location.href = '/home'; // Redirect to home page
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center  my-5">
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center">Login/Create Account</h3>
          {!isOtpSent ? (
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={handlePhoneNumberSubmit}
              >
                Send OTP
              </button>
            </div>
          ) : !isVerified ? (
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </div>
              <button
                className="btn btn-success w-100"
                onClick={handleOtpSubmit}
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCreateAccount;

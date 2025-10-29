import React, { useState, useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    course_name: "",
    consent: true,
  });

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showOtp) {
      // Simulate sending OTP
      setShowOtp(true);
      setCountdown(30);
    } else {
      // Handle OTP verification here
      alert("OTP Verified: your application submit " + otp.join(""));
    }
  };

  // Countdown for Resend OTP
  useEffect(() => {
    if (!showOtp) return;
    if (countdown === 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, showOtp]);

  return (
    <div className="p-4 max-w-xl mx-auto relative  top-3.7 right-15">
      <form onSubmit={handleSubmit} className="bg-amber-50 shadow-md rounded-lg p-6 space-y-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          Join <span className="text-orange-600">50,000+ Learners</span> Across India
        </h2>
        <div className="flex space-x-4 mb-4  text-center relative left-12">
          <div className="flex relative  space-x-2 text-center">
            <img
              src="https://www.onlinemanipal.com/wp-content/themes/flamingo/assets/images/online-degree-courses/cap.svg"
              alt="finance"
              className="w-5 h-5"
            />
            <span>Easy financing options</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://www.onlinemanipal.com/wp-content/themes/flamingo/assets/images/online-degree-courses/schol.svg"
              alt="scholarship"
              className="w-5 h-5"
            />
            <span>Attractive scholarships</span>
          </div>
        </div>

        {!showOtp && (
          <>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-medium">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-medium">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile_number" className="block font-medium">
                Mobile number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile_number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                maxLength={10}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Course */}
            <div>
              <label htmlFor="course_name" className="block font-medium">
                Course <span className="text-red-500">*</span>
              </label>
              <select
                id="course_name"
                name="course_name"
                value={formData.course_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select course applying for*</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="B.Com">B.Com</option>
                <option value="M.Com">M.Com</option>
                <option value="MA.JMC">MA.JMC</option>
                <option value="MA in Economics">MA in Economics</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 text-blue-700"
              />
              <label htmlFor="consent" className="text-sm">
                I authorize Online Manipal and its associates to contact me with
                updates via email, SMS, WhatsApp, and voice call.
              </label>
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 text-blue-700"
              />
              <label htmlFor="consent" className="text-sm">
                I agree to the Terms and Conditions of this website.
              </label>


            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-orange-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-orange-500 w-full"
            >
              Enroll Now
            </button>
          </>
        )}

        {/* OTP Section */}
        {showOtp && (
          <div className="space-y-4 relative">
            <h3 className="font-semibold text-lg">Verify OTP</h3>
            <p>
              Enter the 4 digit OTP received on <span className="otpNumber">+91-{formData.mobile_number || "XXXXXXX"}</span>
            </p>
            <div className="flex space-x-2">
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-12 border rounded text-center"
                />
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setCountdown(30)}
                disabled={countdown !== 0}
                className={`px-3 py-1 cursor-pointer rounded text-white ${countdown === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"}`}
              >
                Resend OTP
              </button>
              <span>00:{countdown < 10 ? `0${countdown}` : countdown}s</span>
            </div>
            <button
              type="submit"
              className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded w-full"
            >
              Verify
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;

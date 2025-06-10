import React, { useState } from 'react';
import { ArrowLeft, Shield, Users, CheckCircle, X, ChevronDown, Download, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  gender: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  aadharNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  nomineeFullName: string;
  nomineeRelationship: string;
  nomineeGender: string;
  nomineeDateOfBirth: string;
  planType: 'student-shield' | 'student-shield-plus' | '';
}

interface PolicyFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'student-shield' | 'student-shield-plus';
}

const PolicyForm: React.FC<PolicyFormProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    gender: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    aadharNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    nomineeFullName: '',
    nomineeRelationship: '',
    nomineeGender: '',
    nomineeDateOfBirth: '',
    planType: selectedPlan || ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPlanDropdown, setShowPlanDropdown] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentData, setPaymentData] = useState<any>(null);

  const plans = {
    'student-shield': {
      name: 'Student Shield',
      price: 1,
      ageRange: '18-65 years',
      description: 'Complete student protection package',
      features: ['Personal Accident Cover (₹10 Lakhs)', 'Hospital Daily Cash', 'MiCare Wellness'],
      color: 'red',
      gradient: 'from-red-600 to-red-700'
    },
    'student-shield-plus': {
      name: 'Student Shield Plus',
      price: 1500,
      ageRange: '40-60 years',
      description: 'Enhanced protection with life coverage',
      features: ['Term Life Cover (₹3 Lakhs)', 'MiCare Wellness', 'Premium Services'],
      color: 'red',
      gradient: 'from-red-700 to-red-800'
    }
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
    'Uttarakhand', 'West Bengal'
];


  const relationships = [
    'Spouse', 'Son', 'Daughter', 'Father', 'Mother', 'Brother', 'Sister', 
    'Grandfather', 'Grandmother', 'Uncle', 'Aunt', 'Cousin', 'Other'
  ];

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.planType) newErrors.planType = 'Please select a plan';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<FormData> = {};
    
    // Personal Information Validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber.replace(/\D/g, ''))) {
      newErrors.aadharNumber = 'Aadhar number must be 12 digits';
    }
    
    // Address Validation
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Partial<FormData> = {};
    
    // Nominee Information Validation
    if (!formData.nomineeFullName.trim()) newErrors.nomineeFullName = 'Nominee name is required';
    if (!formData.nomineeRelationship) newErrors.nomineeRelationship = 'Nominee relationship is required';
    if (!formData.nomineeGender) newErrors.nomineeGender = 'Nominee gender is required';
    if (!formData.nomineeDateOfBirth) newErrors.nomineeDateOfBirth = 'Nominee date of birth is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      setStep(4);
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const selectedPlanData = plans[formData.planType as keyof typeof plans];
      
      // Check if Razorpay is loaded
      if (!window.Razorpay) {
        throw new Error('Razorpay SDK not loaded');
      }
      
      // Razorpay Configuration with Environment Variables
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Use environment variable
        amount: selectedPlanData.price * 100, // Amount in paise
        currency: 'INR',
        name: 'Student Shield',
        description: `Payment for ${selectedPlanData.name}`,
        image: '/st.shield_logo-removebg-preview.png',
        handler: function (response: any) {
          // Payment successful callback
          console.log('Payment Response:', response);
          
          // Generate customer reference with "ssst" prefix
          const customerReference = `ssst${Date.now()}`;
          
          // Store payment data for thank you page
          setPaymentData({
            paymentId: response.razorpay_payment_id,
            customerReference: customerReference,
            amount: selectedPlanData.price,
            planName: selectedPlanData.name,
            timestamp: new Date().toLocaleString()
          });
          
          setPaymentSuccess(true);
          setIsLoading(false);
          
          // TODO: Send payment verification to your backend
          verifyPayment(response);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          plan_type: formData.planType,
          aadhar_number: formData.aadharNumber,
          date_of_birth: formData.dateOfBirth,
          nominee_name: formData.nomineeFullName,
          nominee_relationship: formData.nomineeRelationship
        },
        theme: {
          color: '#DC2626' // Red theme for Student Shield
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
          }
        }
      };
  
      const razorpay = new window.Razorpay(options);
      
      // Handle payment failure
      razorpay.on('payment.failed', function (response: any) {
        alert('Payment failed. Please try again.');
        console.error('Payment failed:', response.error);
        setIsLoading(false);
      });
      
      razorpay.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Payment failed. Please try again.');
      setIsLoading(false);
    }
  };

  const verifyPayment = async (paymentResponse: any) => {
  try {
    // TODO: Call your backend API to verify payment
    const verificationData = {
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_signature: paymentResponse.razorpay_signature,
      user_data: formData
    };
    
    // Example API call (implement your backend endpoint)
    // const response = await fetch('/api/verify-payment', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(verificationData),
    // });
    
    console.log('Payment verification data:', verificationData);
  } catch (error) {
    console.error('Payment verification failed:', error);
  }
};

  const formatAadhar = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(' ');
    }
    return value;
  };

  const selectPlan = (planKey: string) => {
    handleInputChange('planType', planKey);
    setShowPlanDropdown(false);
  };

  const handleClose = () => {
    // Reset all states when closing
    setStep(1);
    setPaymentSuccess(false);
    setPaymentData(null);
    setFormData({
      name: '',
      gender: '',
      phone: '',
      email: '',
      dateOfBirth: '',
      aadharNumber: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      nomineeFullName: '',
      nomineeRelationship: '',
      nomineeGender: '',
      nomineeDateOfBirth: '',
      planType: selectedPlan || ''
    });
    setErrors({});
    setIsLoading(false);
    setShowPlanDropdown(false);
    onClose();
  };

  const downloadPolicy = () => {
    // Simulate policy download
    alert('Policy document will be downloaded shortly!');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-red-50 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-red-100"
        >
          {/* Header */}
          <div className="flex-shrink-0 bg-red-50 border-b border-red-200 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {!paymentSuccess && step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="p-2 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                  </button>
                )}
                <h2 className="text-2xl font-bold text-gray-800">
                  {paymentSuccess ? '🎉 Payment Successful!' : 'Get Your Policy'}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-red-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            {/* Progress Bar - Only show if not payment success */}
            {!paymentSuccess && (
              <div className="mt-4 flex items-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      i <= step ? 'bg-red-600 text-white' : 'bg-red-200 text-gray-500'
                    }`}>
                      {i < step ? <CheckCircle className="h-4 w-4" /> : i}
                    </div>
                    {i < 4 && <div className={`w-8 h-1 ${i < step ? 'bg-red-600' : 'bg-red-200'}`} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Thank You Page - Step 5 */}
            {paymentSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                {/* Success Animation */}
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                  >
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Choosing Student Shield!</h3>
                  <p className="text-gray-600 mb-6">Your payment has been processed successfully. You're now protected!</p>
                </div>

                {/* Payment Details Card */}
                <div className="bg-white rounded-xl p-6 border border-red-200 text-left">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">Payment & Policy Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Customer Reference:</span>
                      <div className="font-bold text-red-600">{paymentData?.customerReference}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Payment ID:</span>
                      <div className="font-medium">{paymentData?.paymentId}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Plan:</span>
                      <div className="font-medium">{paymentData?.planName}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Amount Paid:</span>
                      <div className="font-bold text-green-600">₹{paymentData?.amount}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Customer Name:</span>
                      <div className="font-medium">{formData.name}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Date & Time:</span>
                      <div className="font-medium">{paymentData?.timestamp}</div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">🎯 What's Next?</h4>
                  <ul className="text-left space-y-2 text-sm text-green-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Policy document will be sent to your email within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Your coverage is active immediately</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Save this policy number for future reference</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Download our app for easy claim filing</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-white hover:bg-gray-50 text-red-600 py-3 px-6 rounded-lg font-semibold transition-colors border border-red-200"
                  >
                    Close
                  </button>
                </div>

                {/* Contact Info */}
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-3">Need Help?</h4>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2 text-red-700">
                      <Mail className="h-4 w-4" />
                      <span>support@studentshield.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-700">
                      <Phone className="h-4 w-4" />
                      <span>1800-123-4567</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 1: Plan Selection */}
            {!paymentSuccess && step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Your Plan</h3>
                  <p className="text-gray-600">Select the protection plan that best fits your needs</p>
                </div>

                {/* Modern Plan Selector - FIXED DROPDOWN */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Protection Plan *
                  </label>
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                      className={`w-full p-4 text-left bg-white border-2 rounded-xl focus:ring-2 focus:ring-red-500 transition-all ${
                        formData.planType ? 'border-red-500' : 'border-red-300'
                      } ${showPlanDropdown ? 'border-red-500 ring-2 ring-red-500' : ''}`}
                    >
                      {formData.planType ? (
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-800">
                              {plans[formData.planType as keyof typeof plans].name}
                            </div>
                            <div className="text-sm text-gray-600">
                              ₹{plans[formData.planType as keyof typeof plans].price}/year • Age: {plans[formData.planType as keyof typeof plans].ageRange}
                            </div>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showPlanDropdown ? 'rotate-180' : ''}`} />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Choose your protection plan</span>
                          <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showPlanDropdown ? 'rotate-180' : ''}`} />
                        </div>
                      )}
                    </button>

                    {/* Dropdown Menu - FIXED Z-INDEX AND POSITIONING */}
                    <AnimatePresence>
                      {showPlanDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-red-200 rounded-xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto z-50"
                        >
                          {Object.entries(plans).map(([key, plan]) => (
                            <button
                              key={key}
                              onClick={() => selectPlan(key)}
                              className="w-full p-4 text-left hover:bg-red-50 transition-colors border-b border-red-100 last:border-b-0"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-red-100">
                                    {key === 'student-shield' ? (
                                      <Shield className="h-5 w-5 text-red-600" />
                                    ) : (
                                      <Users className="h-5 w-5 text-red-600" />
                                    )}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-800">{plan.name}</h4>
                                    <p className="text-sm text-gray-600 mb-1">{plan.description}</p>
                                    <p className="text-xs text-gray-500">Age: {plan.ageRange}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-gray-800">₹{plan.price}</div>
                                  <div className="text-xs text-gray-600">/year</div>
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {plan.features.slice(0, 2).map((feature, idx) => (
                                  <span key={idx} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.planType && <p className="text-red-500 text-sm mt-1">{errors.planType}</p>}
                </div>

                {/* Selected Plan Preview */}
                {formData.planType && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-gradient-to-r ${plans[formData.planType as keyof typeof plans].gradient} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">
                        {plans[formData.planType as keyof typeof plans].name}
                      </h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{plans[formData.planType as keyof typeof plans].price}</div>
                        <div className="text-sm opacity-90">/year</div>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-3">{plans[formData.planType as keyof typeof plans].description}</p>
                    <p className="text-xs opacity-75">Age: {plans[formData.planType as keyof typeof plans].ageRange}</p>
                    <div className="mt-4 space-y-1">
                      {plans[formData.planType as keyof typeof plans].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-yellow-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 2: Personal Information */}
            {!paymentSuccess && step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-600">Please provide your personal details for the policy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.name ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.gender ? 'border-red-500' : 'border-red-300'
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.phone ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.email ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.dateOfBirth ? 'border-red-500' : 'border-red-300'
                      }`}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                  </div>

                  {/* Aadhar Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar Number *
                    </label>
                    <input
                      type="text"
                      value={formatAadhar(formData.aadharNumber)}
                      onChange={(e) => handleInputChange('aadharNumber', e.target.value.replace(/\D/g, ''))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.aadharNumber ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="XXXX XXXX XXXX"
                      maxLength={14}
                    />
                    {errors.aadharNumber && <p className="text-red-500 text-xs mt-1">{errors.aadharNumber}</p>}
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.address ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.city ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="Enter your city"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.state ? 'border-red-500' : 'border-red-300'
                      }`}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.pincode ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="6-digit pincode"
                      maxLength={6}
                    />
                    {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Nominee Information */}
            {!paymentSuccess && step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Nominee Information</h3>
                  <p className="text-gray-600">Please provide details of your nominee</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nominee Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nominee Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.nomineeFullName}
                      onChange={(e) => handleInputChange('nomineeFullName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.nomineeFullName ? 'border-red-500' : 'border-red-300'
                      }`}
                      placeholder="Enter nominee's full name"
                    />
                    {errors.nomineeFullName && <p className="text-red-500 text-xs mt-1">{errors.nomineeFullName}</p>}
                  </div>

                  {/* Nominee Relationship */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nominee Relationship *
                    </label>
                    <select
                      value={formData.nomineeRelationship}
                      onChange={(e) => handleInputChange('nomineeRelationship', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.nomineeRelationship ? 'border-red-500' : 'border-red-300'
                      }`}
                    >
                      <option value="">Select Relationship</option>
                      {relationships.map((relationship) => (
                        <option key={relationship} value={relationship}>{relationship}</option>
                      ))}
                    </select>
                    {errors.nomineeRelationship && <p className="text-red-500 text-xs mt-1">{errors.nomineeRelationship}</p>}
                  </div>

                  {/* Nominee Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nominee Gender *
                    </label>
                    <select
                      value={formData.nomineeGender}
                      onChange={(e) => handleInputChange('nomineeGender', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.nomineeGender ? 'border-red-500' : 'border-red-300'
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.nomineeGender && <p className="text-red-500 text-xs mt-1">{errors.nomineeGender}</p>}
                  </div>

                  {/* Nominee Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nominee Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.nomineeDateOfBirth}
                      onChange={(e) => handleInputChange('nomineeDateOfBirth', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white ${
                        errors.nomineeDateOfBirth ? 'border-red-500' : 'border-red-300'
                      }`}
                    />
                    {errors.nomineeDateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.nomineeDateOfBirth}</p>}
                  </div>
                </div>

                {/* Nominee Information Note */}
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">📝 Important Note</h4>
                  <p className="text-sm text-red-700">
                    The nominee will be entitled to receive the policy benefits in case of any unfortunate event. 
                    Please ensure all nominee details are accurate and up-to-date.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Payment */}
            {!paymentSuccess && step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Review & Payment</h3>
                  <p className="text-gray-600">Please review your information before proceeding</p>
                </div>

                {/* Selected Plan Summary */}
                <div className={`bg-gradient-to-r ${plans[formData.planType as keyof typeof plans]?.gradient} rounded-xl p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">
                      {plans[formData.planType as keyof typeof plans]?.name}
                    </h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        ₹{plans[formData.planType as keyof typeof plans]?.price}
                      </div>
                      <div className="text-sm opacity-90">/year</div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 mb-2">{plans[formData.planType as keyof typeof plans]?.description}</p>
                  <p className="text-xs opacity-75 mb-4">Age: {plans[formData.planType as keyof typeof plans]?.ageRange}</p>
                  <div className="space-y-2">
                    {plans[formData.planType as keyof typeof plans]?.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Information Summary */}
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <div className="font-medium">{formData.name}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Gender:</span>
                      <div className="font-medium">{formData.gender}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <div className="font-medium">{formData.phone}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <div className="font-medium">{formData.email}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Date of Birth:</span>
                      <div className="font-medium">{formData.dateOfBirth}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Aadhar:</span>
                      <div className="font-medium">{formatAadhar(formData.aadharNumber)}</div>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-600">Address:</span>
                      <div className="font-medium">{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</div>
                    </div>
                  </div>
                </div>

                {/* Nominee Information Summary */}
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Nominee Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Nominee Name:</span>
                      <div className="font-medium">{formData.nomineeFullName}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Relationship:</span>
                      <div className="font-medium">{formData.nomineeRelationship}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Gender:</span>
                      <div className="font-medium">{formData.nomineeGender}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Date of Birth:</span>
                      <div className="font-medium">{formData.nomineeDateOfBirth}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Buttons - Fixed at bottom */}
          {!paymentSuccess && (
            <div className="flex-shrink-0 bg-red-50 border-t border-red-200 p-6">
              <div className="flex gap-4">
                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={step === 1 && !formData.planType}
                    className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Processing...' : `Pay ₹${plans[formData.planType as keyof typeof plans]?.price}`}
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Add type declaration for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default PolicyForm;
import { useState, useCallback } from 'react';

export default function AppointmentFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSendWhatsApp = useCallback(() => {
    const message = `Hello Dr. Nikitha,

I would like to enquire about an appointment.

Name: ${formData.name}

Phone: ${formData.phone}

Email: ${formData.email || 'Not provided'}

Reason: ${formData.reason}

Preferred Date & Time:
${formData.preferredDate} at ${formData.preferredTime || 'Not specified'}

Message:
${formData.message || 'No additional message'}

Please contact me regarding my appointment enquiry.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918197301494?text=${encodedMessage}`, '_blank');
  }, [formData]);

  return (
    <section id="appointment-form" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
              Send an Enquiry
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">WhatsApp Enquiry Form</h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Fill in your details below and send your enquiry directly to our WhatsApp. We typically respond within a few hours during clinic hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-background-50 rounded-3xl border border-background-200 p-6 md:p-10 overflow-hidden relative">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400"></div>

            <div className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Full Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Phone Number <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Email Address <span className="text-foreground-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Reason For Consultation <span className="text-primary-500">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">Select a reason</option>
                    <option value="Pregnancy Care">Pregnancy Care</option>
                    <option value="Gynecology Consultation">Gynecology Consultation</option>
                    <option value="Fertility Consultation">Fertility Consultation</option>
                    <option value="Menopause Care">Menopause Care</option>
                    <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                    <option value="Hysteroscopic Surgery">Hysteroscopic Surgery</option>
                    <option value="Second Opinion">Second Opinion</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Preferred Date <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Preferred Time <span className="text-primary-500">*</span>
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Message <span className="text-foreground-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 resize-none"
                  placeholder="Briefly describe your concern or any specific requirements..."
                ></textarea>
                <p className="text-xs text-foreground-400 mt-1.5">Maximum 500 characters</p>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleSendWhatsApp}
                disabled={!formData.name || !formData.phone || !formData.reason || !formData.preferredDate || !formData.preferredTime}
                className="w-full py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ebe57')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Send Enquiry on WhatsApp
              </button>

              {/* Form Note */}
              <p className="text-center text-xs text-foreground-400 mt-2">
                Your enquiry will be sent directly to our WhatsApp.<br />
                We typically respond within a few hours during clinic hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

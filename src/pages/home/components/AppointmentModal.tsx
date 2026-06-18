import { useState, useCallback } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Send WhatsApp Enquiry">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground-900/60"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-[calc(100%-2rem)] max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full bg-background-100 flex items-center justify-center cursor-pointer hover:bg-background-200 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <i className="ri-close-line text-foreground-600"></i>
        </button>

        <div className="p-5 md:p-8">
          <h3 className="font-heading text-lg md:text-2xl font-semibold text-foreground-900 mb-1">WhatsApp Enquiry</h3>
          <p className="text-foreground-500 text-sm mb-5 md:mb-6">Fill in your details and send directly to our WhatsApp.</p>

          <div className="space-y-3 md:space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Full Name <span className="text-primary-500">*</span>
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Phone Number <span className="text-primary-500">*</span>
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Email Address <span className="text-foreground-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="modal-reason" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Reason For Consultation <span className="text-primary-500">*</span>
              </label>
              <select
                id="modal-reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
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

            <div>
              <label htmlFor="modal-date" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Preferred Date <span className="text-primary-500">*</span>
              </label>
              <input
                type="date"
                id="modal-date"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="modal-time" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Preferred Time <span className="text-primary-500">*</span>
              </label>
              <input
                type="time"
                id="modal-time"
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                Message <span className="text-foreground-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                maxLength={500}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 resize-none"
                placeholder="Briefly describe your concern..."
              ></textarea>
              <p className="text-xs text-foreground-400 mt-1">Maximum 500 characters</p>
            </div>

            <button
              onClick={handleSendWhatsApp}
              disabled={!formData.name || !formData.phone || !formData.reason || !formData.preferredDate || !formData.preferredTime}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ebe57')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Send Enquiry on WhatsApp
            </button>

            <p className="text-center text-xs text-foreground-400 mt-2">
              Your enquiry will be sent directly to our WhatsApp. We typically respond within a few hours during clinic hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

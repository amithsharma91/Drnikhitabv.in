import { useState, useCallback, FormEvent } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d8j4at9hmtkvo7bfr4j0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try calling us directly.');
      }
    } catch {
      setError('Network error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Book Appointment">
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

        {submitted ? (
          <div className="p-6 md:p-10 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <i className="ri-check-line text-green-500 text-xl md:text-2xl"></i>
            </div>
            <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-900 mb-2">Thank You!</h3>
            <p className="text-foreground-600 text-sm mb-6">
              Your appointment request has been received. Our team will contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-5 md:p-8">
            <h3 className="font-heading text-lg md:text-2xl font-semibold text-foreground-900 mb-1">Book Appointment</h3>
            <p className="text-foreground-500 text-sm mb-5 md:mb-6">Fill in your details and we&apos;ll get back to you shortly.</p>

            <form
              onSubmit={handleSubmit}
              data-readdy-form="true"
              className="space-y-3 md:space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Full Name <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Phone Number <span className="text-primary-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Reason for Consultation <span className="text-primary-500">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                >
                  <option value="">Select a reason</option>
                  <option value="Pregnancy Care">Pregnancy Care</option>
                  <option value="Gynecology Consultation">Gynecology Consultation</option>
                  <option value="Fertility Consultation">Fertility Consultation</option>
                  <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={500}
                  className="w-full px-4 py-2.5 rounded-xl border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 resize-none"
                  placeholder="Briefly describe your concern..."
                ></textarea>
                <p className="text-xs text-foreground-400 mt-1">Maximum 500 characters</p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary-500 text-white rounded-xl text-sm font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i> Submitting...
                  </span>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

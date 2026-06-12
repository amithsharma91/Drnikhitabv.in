import { useState, useCallback, FormEvent } from 'react';

export default function AppointmentFormSection() {
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
      const response = await fetch('https://readdy.ai/api/form/d8l3sdgm1jqlm5gfvnb0', {
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
        setError('Something went wrong. Please try calling us directly at +91 80508 16686.');
      }
    } catch {
      setError('Network error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <section id="appointment-form" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
              Schedule Your Visit
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">Book an Appointment</h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Fill in your details below and our team will confirm your appointment within a few hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-background-50 rounded-3xl border border-background-200 p-6 md:p-10 overflow-hidden relative">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400"></div>

            {submitted ? (
              <div className="py-8 md:py-12 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <i className="ri-check-line text-green-500 text-2xl md:text-3xl"></i>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-3">Appointment Request Received!</h3>
                <p className="text-foreground-600 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for reaching out. Our team will contact you shortly on your provided phone number to confirm your appointment date and time.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-readdy-form="true"
                className="space-y-5 md:space-y-6"
              >
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
                      className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {/* Reason */}
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Reason for Consultation <span className="text-primary-500">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select a reason</option>
                      <option value="Pregnancy Care">Pregnancy Care</option>
                      <option value="Gynecology Consultation">Gynecology Consultation</option>
                      <option value="Fertility Consultation">Fertility Consultation</option>
                      <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                      <option value="PMOS Management">PMOS Management</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Clinic */}
                  <div>
                    <label htmlFor="clinic" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Preferred Clinic <span className="text-primary-500">*</span>
                    </label>
                    <select
                      id="clinic"
                      name="clinic"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select a clinic</option>
                      <option value="South End Speciality Clinic, Basavanagudi">South End Speciality Clinic — Basavanagudi</option>
                      <option value="Sagar Hospitals, Banashankari">Sagar Hospitals — Banashankari</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 cursor-pointer"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-xl border border-background-200 bg-white text-sm text-foreground-900 placeholder-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 resize-none"
                    placeholder="Briefly describe your concern or any specific requirements..."
                  ></textarea>
                  <p className="text-xs text-foreground-400 mt-1.5">Maximum 500 characters</p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    <i className="ri-error-warning-line mr-2"></i>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary-500 text-white rounded-xl text-sm md:text-base font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 whitespace-nowrap cursor-pointer shadow-lg shadow-primary-500/20 hover:shadow-primary-600/30"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i> Submitting...
                    </span>
                  ) : (
                    'Confirm Appointment Booking'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

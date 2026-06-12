import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UnderstandingGynaeSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full lg:w-1/2">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20discussing%20women%20health%20with%20a%20woman%20patient%20in%20a%20warm%20luxury%20clinic%20consultation%20room%2C%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%2C%20compassionate%20healthcare%20atmosphere%2C%20editorial%20photography%20style%20with%20gentle%20warm%20tones&width=700&height=500&seq=gynae-understanding-01&orientation=landscape"
              alt="Understanding Gynaecological Health"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-heart-pulse-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Women's Health Education</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Understanding Gynaecological Health
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Gynaecological health encompasses the comprehensive well-being of the female reproductive system throughout every life stage — from adolescence through the reproductive years to menopause and beyond.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Regular gynaecological care is essential not just for addressing concerns when they arise, but for preventive health maintenance, early detection of potential issues, and ensuring optimal quality of life.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi brings over 12 years of specialized experience in diagnosing and managing the full spectrum of gynaecological conditions. Her approach combines evidence-based medicine with genuine compassion, ensuring every woman receives personalized care tailored to her unique needs, concerns, and life stage.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Adolescent to Menopause' },
                { icon: 'ri-checkbox-circle-line', label: 'Preventive Screenings' },
                { icon: 'ri-checkbox-circle-line', label: 'Personalized Treatment' },
                { icon: 'ri-checkbox-circle-line', label: 'Long-Term Wellness' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-foreground-700 text-sm">
                  <i className={`${item.icon} text-primary-500`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

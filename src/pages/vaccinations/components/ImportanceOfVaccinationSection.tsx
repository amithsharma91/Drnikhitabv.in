import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ImportanceOfVaccinationSection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20explaining%20vaccination%20benefits%20to%20a%20young%20woman%20patient%20in%20a%20premium%20healthcare%20clinic%2C%20warm%20rose%20cream%20interior%20design%2C%20soft%20daylight%2C%20educational%20preventive%20care%20atmosphere&width=700&height=500&seq=vax-importance-01&orientation=landscape"
              alt="Importance of Vaccination"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-shield-check-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Preventive Protection</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              The Importance Of Vaccination For Women
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Vaccination is one of the most powerful tools in preventive healthcare — protecting not just individuals but entire communities from serious, potentially life-threatening diseases. For women and adolescent girls, certain vaccines play an especially critical role in safeguarding reproductive health, pregnancy outcomes, and long-term wellness.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              From the HPV vaccine that prevents cervical cancer to the Tdap vaccine that protects newborns from whooping cough, evidence-based immunization creates a shield of protection that extends across generations.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi provides personalized vaccination guidance based on your age, health history, lifestyle, and future family planning goals — ensuring you receive the right protection at the right time.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Cervical Cancer Prevention' },
                { icon: 'ri-checkbox-circle-line', label: 'Pregnancy Protection' },
                { icon: 'ri-checkbox-circle-line', label: 'Newborn Immunity Transfer' },
                { icon: 'ri-checkbox-circle-line', label: 'Long-Term Health Security' },
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

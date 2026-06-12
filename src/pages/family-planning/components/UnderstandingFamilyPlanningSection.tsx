import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UnderstandingFamilyPlanningSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Female%20gynecologist%20having%20a%20warm%20consultation%20with%20a%20young%20couple%20about%20family%20planning%20in%20a%20luxury%20clinic%2C%20rose%20blush%20and%20cream%20interior%20design%2C%20soft%20natural%20daylight%20through%20windows%2C%20educational%20family%20planning%20materials%20on%20desk%2C%20supportive%20professional%20atmosphere%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=family-planning-understanding-01&orientation=landscape"
                  alt="Understanding family planning with Dr. Nikhita"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-lightbulb-line text-primary-700 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Understanding Family Planning</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Empowering Your Reproductive Choices
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Family planning is about making informed, confident decisions about your reproductive health and future. Whether you are considering when to start a family, spacing your children, or completing your family, Dr. Nikhita provides personalized, evidence-based guidance tailored to your unique health profile, lifestyle, and goals.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Our approach combines medical expertise with deep respect for your personal values, ensuring you receive comprehensive information about all available options in a judgment-free, supportive environment.
              </p>
              <div className="space-y-3">
                {[
                  { icon: 'ri-checkbox-circle-line', text: 'Comprehensive contraceptive counselling and options' },
                  { icon: 'ri-checkbox-circle-line', text: 'Personalized birth spacing guidance' },
                  { icon: 'ri-checkbox-circle-line', text: 'Preconception health optimization' },
                  { icon: 'ri-checkbox-circle-line', text: 'Long-term reproductive wellness planning' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <i className={`${item.icon} text-primary-500 mt-0.5 flex-shrink-0`}></i>
                    <span className="text-foreground-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

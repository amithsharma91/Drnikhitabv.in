import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FamilyPlanningCounsellingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-chat-heart-line text-primary-700 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Counselling</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Private, Personalized Family Planning Counselling
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                Family planning decisions are deeply personal. Dr. Nikhita provides a safe, confidential, and judgment-free space where you can discuss your concerns, ask questions, and explore all your options with complete privacy and respect.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: 'ri-shield-user-line',
                    title: 'Complete Confidentiality',
                    desc: 'All discussions are strictly private. You can speak freely about your concerns, preferences, and questions.',
                  },
                  {
                    icon: 'ri-information-line',
                    title: 'Evidence-Based Information',
                    desc: 'Receive accurate, up-to-date information about all contraceptive methods, their effectiveness, benefits, and potential side effects.',
                  },
                  {
                    icon: 'ri-user-heart-line',
                    title: 'Respect For Your Values',
                    desc: 'Your personal, cultural, and religious beliefs are respected. We work within your value system to find the right solution.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 border border-background-200/70">
                    <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${item.icon} text-primary-600`}></i>
                    </div>
                    <div>
                      <h4 className="text-foreground-900 text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Compassionate%20female%20gynecologist%20having%20a%20private%20one%20on%20one%20counselling%20session%20with%20a%20woman%20in%20a%20luxury%20clinic%2C%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20window%20light%2C%20confidential%20supportive%20atmosphere%2C%20fresh%20flowers%2C%20editorial%20healthcare%20photography&width=800&height=600&seq=family-planning-counselling-01&orientation=landscape"
                  alt="Family planning counselling"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

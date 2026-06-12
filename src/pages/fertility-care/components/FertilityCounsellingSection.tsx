import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FertilityCounsellingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Warm%20intimate%20consultation%20between%20a%20compassionate%20female%20fertility%20specialist%20and%20a%20hopeful%20couple%20in%20a%20luxury%20clinic%20setting%2C%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20lighting%20through%20windows%2C%20tissue%20box%20on%20desk%2C%20emotional%20supportive%20atmosphere%2C%20editorial%20healthcare%20photography%20with%20gentle%20warm%20tones&width=800&height=600&seq=fertility-counselling-01&orientation=landscape"
                  alt="Fertility counselling with Dr. Nikhita"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
                <i className="ri-chat-heart-line text-secondary-700 text-xs mr-1.5"></i>
                <span className="text-secondary-700 text-xs font-semibold tracking-wide">Fertility Counselling</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Support Beyond Medical Care
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
                The fertility journey can be emotionally challenging. Dr. Nikhita believes that comprehensive fertility care extends beyond medical evaluation and treatment — it includes emotional support, clear communication, and shared decision-making at every stage.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: 'ri-chat-1-line',
                    title: 'Open Communication',
                    desc: 'All your questions answered in clear, compassionate language. No medical jargon without explanation.',
                  },
                  {
                    icon: 'ri-heart-2-line',
                    title: 'Emotional Support',
                    desc: 'Acknowledging the emotional aspects of fertility challenges and providing resources for psychological well-being.',
                  },
                  {
                    icon: 'ri-team-line',
                    title: 'Partner Involvement',
                    desc: 'Encouraging partner participation in consultations and decisions, fostering shared understanding and support.',
                  },
                  {
                    icon: 'ri-road-map-line',
                    title: 'Realistic Planning',
                    desc: 'Honest, evidence-based discussions about timelines, success rates, and next steps tailored to your situation.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${item.icon} text-secondary-600`}></i>
                    </div>
                    <div>
                      <h4 className="text-foreground-900 text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-foreground-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
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

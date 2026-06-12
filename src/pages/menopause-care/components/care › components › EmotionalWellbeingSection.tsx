import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function EmotionalWellbeingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 mb-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Calm%20peaceful%20middle%20aged%20woman%20practicing%20mindfulness%20meditation%20in%20a%20serene%20wellness%20space%20with%20warm%20rose%20and%20cream%20tones%2C%20soft%20natural%20lighting%2C%20emotional%20wellbeing%20and%20self%20care%20atmosphere&width=700&height=500&seq=meno-emotional-01&orientation=landscape"
                alt="Emotional Wellbeing During Menopause"
                className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
                <i className="ri-heart-2-line text-primary-600 text-xs mr-1.5"></i>
                <span className="text-primary-700 text-xs font-semibold tracking-wide">Mental Wellness</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
                Emotional Wellbeing
              </h2>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                The emotional and psychological aspects of menopause are often overlooked — yet they can be some of the most challenging. Anxiety, irritability, mood swings, and feelings of low mood are common and directly linked to hormonal fluctuations affecting brain chemistry.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
                Many women also experience a sense of loss or uncertainty as they navigate this major life transition. Dr. Nikhita understands that menopause care must address the whole person — body and mind.
              </p>
              <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
                Through a combination of medical support, counseling resources, lifestyle strategies, and compassionate listening, we help you maintain emotional balance and rediscover confidence and vitality during this transitional phase.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'ri-checkbox-circle-line', label: 'Anxiety Management' },
                  { icon: 'ri-checkbox-circle-line', label: 'Mood Stabilization' },
                  { icon: 'ri-checkbox-circle-line', label: 'Counseling Support' },
                  { icon: 'ri-checkbox-circle-line', label: 'Positive Reframing' },
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
      </div>
    </section>
  );
}

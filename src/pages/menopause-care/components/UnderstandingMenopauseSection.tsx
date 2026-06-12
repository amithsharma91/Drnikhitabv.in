import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UnderstandingMenopauseSection() {
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
              src="https://readdy.ai/api/search-image?query=Confident%20elegant%20middle%20aged%20woman%20in%20a%20warm%20supportive%20conversation%20with%20a%20compassionate%20female%20gynecologist%20in%20a%20premium%20luxury%20healthcare%20clinic%2C%20rose%20cream%20interior%20design%2C%20soft%20daylight%2C%20empowering%20wellness%20atmosphere&width=700&height=500&seq=meno-understand-01&orientation=landscape"
              alt="Understanding Menopause"
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
              Understanding Menopause
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Menopause is a natural biological transition that every woman experiences — not a medical condition to be feared. It marks the end of menstrual cycles, typically occurring between ages 45-55, with the average age being 51. The transition phase, known as perimenopause, can begin years earlier.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              While this transition brings hormonal changes that can cause challenging symptoms — from hot flashes and sleep issues to mood changes and bone density concerns — effective management strategies exist. With the right support, women can navigate menopause confidently and maintain excellent quality of life.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi brings over 12 years of experience in supporting women through this transition. Her compassionate, evidence-based approach ensures you receive personalised care that addresses your unique symptoms, concerns, and wellness goals.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Personalized Symptom Management' },
                { icon: 'ri-checkbox-circle-line', label: 'Hormone Therapy Guidance' },
                { icon: 'ri-checkbox-circle-line', label: 'Bone & Heart Health Focus' },
                { icon: 'ri-checkbox-circle-line', label: 'Holistic Wellness Support' },
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

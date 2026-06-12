import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UnderstandingAdolescentHealthSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20a%20premium%20clinic%20having%20a%20warm%20reassuring%20conversation%20with%20a%20teenage%20girl%20and%20her%20mother%20soft%20natural%20daylight%20elegant%20medical%20interior%20design%20cream%20and%20rose%20blush%20tones%20comfortable%20setting%20gentle%20healthcare%20atmosphere&width=800&height=600&seq=adolescent-understanding-01&orientation=landscape"
                alt="Adolescent health consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Understanding Adolescent Health
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              A Gentle Approach To{' '}
              <span className="text-primary-500 italic">Young Women's Health</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Adolescence is a transformative period in a young woman's life. Physical changes, emotional shifts, and the onset of menstruation can feel confusing and overwhelming without proper guidance.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Dr. Nikhita provides a safe, confidential, and judgment-free environment where young girls can openly discuss their concerns. Whether it's understanding puberty changes, managing irregular periods, or addressing hormonal issues, every consultation is approached with sensitivity and respect.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-primary-500 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Confidential Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-heart-line text-secondary-600 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Gentle Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-parent-line text-accent-600 text-sm"></i>
                </div>
                <span className="text-foreground-700 text-sm font-medium">Parent-Inclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

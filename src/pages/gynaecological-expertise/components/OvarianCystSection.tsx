import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function OvarianCystSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 md:py-20 bg-background-100">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 transition-all duration-900 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-contrast-drop-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Ovarian Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Ovarian Cyst Management
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Ovarian cysts are fluid-filled sacs that develop on or within the ovaries. While functional cysts are common and often resolve spontaneously, complex, large, or persistent cysts require careful evaluation and expert management to rule out malignancy and prevent complications.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita follows a systematic approach — thorough diagnostic evaluation with high-resolution ultrasound and tumour markers when indicated, serial monitoring for low-risk cysts, and laparoscopic ovarian cystectomy for those requiring surgical intervention. The goal is always to preserve healthy ovarian tissue and protect fertility.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Ultrasound Evaluation', icon: 'ri-scan-line' },
                { label: 'Serial Monitoring', icon: 'ri-timer-line' },
                { label: 'Laparoscopic Cystectomy', icon: 'ri-surgical-mask-line' },
                { label: 'Ovarian Preservation', icon: 'ri-shield-check-line' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-foreground-700 text-sm">
                  <i className={`${item.icon} text-secondary-500`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=Female%20doctor%20in%20a%20luxury%20clinic%20reviewing%20pelvic%20ultrasound%20results%20with%20a%20woman%20patient%2C%20showing%20ovarian%20imaging%20on%20a%20high%20resolution%20monitor%2C%20warm%20rose%20blush%20and%20cream%20interior%2C%20compassionate%20professional%20atmosphere%2C%20editorial%20photography&width=700&height=500&seq=gynae-cysts-detail-01&orientation=landscape"
              alt="Ovarian Cyst Management"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

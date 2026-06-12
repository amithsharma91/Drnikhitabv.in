import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { hysteroscopicSurgery } from '@/mocks/minimalInvasiveSurgeryData';

export default function HysteroscopicSurgerySection() {
  const navigate = useNavigate();
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
              src={hysteroscopicSurgery.image}
              alt="Hysteroscopic Surgery"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-camera-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Scarless Surgery</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Hysteroscopic Surgery
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              {hysteroscopicSurgery.overview}
            </p>

            <div className="mb-4">
              <h3 className="font-heading text-sm font-semibold text-foreground-800 mb-2">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-2">
                {hysteroscopicSurgery.benefits.slice(0, 6).map((b) => (
                  <div key={b} className="flex items-start space-x-2">
                    <i className="ri-checkbox-circle-line text-accent-500 mt-0.5 flex-shrink-0"></i>
                    <span className="text-foreground-600 text-xs">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-heading text-sm font-semibold text-foreground-800 mb-2">Conditions Treated</h3>
              <div className="flex flex-wrap gap-1.5">
                {hysteroscopicSurgery.conditions.map((c) => (
                  <span key={c} className="px-2.5 py-1 bg-accent-50 text-accent-700 rounded-full text-xs">{c}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => { navigate('/services/hysteroscopic-surgery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 shadow-sm inline-flex items-center space-x-2"
            >
              <span>Explore Hysteroscopic Surgery</span>
              <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

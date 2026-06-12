import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PMOSInTeenagersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50 overflow-hidden">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              PMOS In Teenagers
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              Early Detection Makes{' '}
              <span className="text-primary-500 italic">All The Difference</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Polycystic Metabolic Ovary Syndrome (PMOS) is increasingly being diagnosed in teenage girls. Early identification and management can prevent long-term health complications including fertility issues, diabetes, and metabolic syndrome.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Dr. Nikhita takes a gentle, non-judgmental approach to adolescent PMOS care. Treatment focuses on lifestyle modifications, nutritional guidance, and safe medical management tailored specifically for young girls — avoiding unnecessary medications and prioritizing long-term health.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white rounded-xl p-3 md:p-4 border border-background-200">
                <i className="ri-scales-line text-primary-500 text-lg mb-1.5 block"></i>
                <h4 className="text-sm font-semibold text-foreground-900 mb-1">Weight Management</h4>
                <p className="text-xs text-foreground-600">Healthy lifestyle guidance</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4 border border-background-200">
                <i className="ri-restaurant-line text-secondary-600 text-lg mb-1.5 block"></i>
                <h4 className="text-sm font-semibold text-foreground-900 mb-1">Nutrition Plans</h4>
                <p className="text-xs text-foreground-600">Balanced diet for hormones</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4 border border-background-200">
                <i className="ri-run-line text-primary-500 text-lg mb-1.5 block"></i>
                <h4 className="text-sm font-semibold text-foreground-900 mb-1">Exercise Guidance</h4>
                <p className="text-xs text-foreground-600">Age-appropriate activity</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4 border border-background-200">
                <i className="ri-heart-pulse-line text-secondary-600 text-lg mb-1.5 block"></i>
                <h4 className="text-sm font-semibold text-foreground-900 mb-1">Regular Monitoring</h4>
                <p className="text-xs text-foreground-600">Long-term health tracking</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20consulting%20a%20teenage%20girl%20about%20hormonal%20health%20in%20a%20premium%20clinic%20setting%20soft%20warm%20lighting%20elegant%20medical%20environment%20rose%20blush%20tones%20compassionate%20healthcare%20interaction%20modern%20aesthetic&width=800&height=600&seq=adolescent-pcos-01&orientation=landscape"
                alt="Teenage PMOS consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

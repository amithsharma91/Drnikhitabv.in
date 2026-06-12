import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PMOSManagementSection() {
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
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent-100/70 border border-accent-200/50 mb-4">
              <i className="ri-bubble-chart-line text-accent-700 text-xs mr-1.5"></i>
              <span className="text-accent-700 text-xs font-semibold tracking-wide">Hormonal Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              PMOS Management
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Polycystic Metabolic Ovary Syndrome (PMOS) affects approximately 1 in 10 women of reproductive age and is one of the most common hormonal disorders. It requires a comprehensive, multi-dimensional approach that addresses not just the symptoms but the underlying metabolic and hormonal imbalances.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita&apos;s PMOS management protocol integrates medical treatment with personalised lifestyle guidance, nutritional counselling, and long-term health monitoring. Whether your primary concern is irregular cycles, skin manifestations, weight management, or fertility preservation, you will receive a customised care plan designed for sustainable results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: 'ri-checkbox-circle-line', label: 'Hormonal Assessment & Regulation' },
                { icon: 'ri-checkbox-circle-line', label: 'Lifestyle & Dietary Guidance' },
                { icon: 'ri-checkbox-circle-line', label: 'Fertility Preservation Planning' },
                { icon: 'ri-checkbox-circle-line', label: 'Long-Term Metabolic Health' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-foreground-700 text-sm">
                  <i className={`${item.icon} text-accent-500`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20a%20warm%20luxury%20clinic%20consulting%20a%20young%20woman%20about%20PMOS%20treatment%20options%20while%20pointing%20to%20a%20health%20diagram%2C%20rose%20blush%20and%20cream%20interior%2C%20soft%20natural%20lighting%2C%20compassionate%20healthcare%20atmosphere%2C%20editorial%20photography&width=700&height=500&seq=gynae-pmos-detail-01&orientation=landscape"
              alt="PMOS Management"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

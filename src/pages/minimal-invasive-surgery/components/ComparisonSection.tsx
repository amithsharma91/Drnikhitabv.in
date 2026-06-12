import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { comparisonTable } from '@/mocks/minimalInvasiveSurgeryData';

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-14 md:py-20 bg-background-50">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div ref={ref} className={`transition-all duration-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-100/70 border border-secondary-200/50 mb-4">
              <i className="ri-scales-line text-secondary-700 text-xs mr-1.5"></i>
              <span className="text-secondary-700 text-xs font-semibold tracking-wide">Surgery Comparison</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-3">
              Traditional vs Minimally Invasive Surgery
            </h2>
            <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto">
              A direct comparison of key surgical parameters clearly demonstrates why minimally invasive techniques have become the gold standard in modern gynaecological surgery.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-background-200/70 shadow-sm overflow-hidden">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-primary-50 border-b border-primary-100">
              <div className="col-span-4">
                <span className="text-foreground-500 text-xs font-semibold uppercase tracking-wider">Feature</span>
              </div>
              <div className="col-span-3">
                <span className="text-foreground-400 text-xs font-semibold uppercase tracking-wider">Traditional Surgery</span>
              </div>
              <div className="col-span-3">
                <span className="text-primary-600 text-xs font-semibold uppercase tracking-wider">Minimally Invasive</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="text-foreground-400 text-xs font-semibold uppercase tracking-wider">Winner</span>
              </div>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-background-100">
              {comparisonTable.map((row, index) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 md:p-5 hover:bg-background-50 transition-colors duration-200"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="md:col-span-4">
                    <span className="text-foreground-800 text-sm font-semibold">{row.feature}</span>
                  </div>
                  <div className="md:col-span-3 flex items-center">
                    <span className="text-foreground-500 text-xs md:text-sm">{row.traditional}</span>
                  </div>
                  <div className="md:col-span-3 flex items-center">
                    <span className="text-primary-600 text-xs md:text-sm font-medium">{row.minimallyInvasive}</span>
                  </div>
                  <div className="md:col-span-2 flex md:justify-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold">
                      <i className="ri-check-line mr-1"></i>
                      MIS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

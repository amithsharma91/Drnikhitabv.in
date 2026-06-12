import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FolicAcidSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
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
                src="https://readdy.ai/api/search-image?query=Premium%20medical%20consultation%20scene%20female%20doctor%20explaining%20prenatal%20supplements%20and%20folic%20acid%20benefits%20to%20a%20woman%20planning%20pregnancy%20elegant%20clinic%20interior%20soft%20natural%20lighting%20scientific%20yet%20warm%20atmosphere%20rose%20blush%20and%20cream%20tones&width=800&height=600&seq=prepreg-folic-01&orientation=landscape"
                alt="Folic acid and supplements consultation"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              Essential Supplements
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 md:mb-5 leading-tight">
              Folic Acid &{' '}
              <span className="text-primary-500 italic">Essential Supplements</span>
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Folic acid is the single most important supplement to start before pregnancy. It dramatically reduces the risk of neural tube defects — serious birth defects of the brain and spine that occur in the first few weeks of pregnancy, often before you even know you're pregnant.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-5">
              Beyond folic acid, Dr. Nikhita provides personalized supplement recommendations based on your blood work results and individual needs — including iron, vitamin D, calcium, and omega-3 fatty acids — ensuring your body has everything it needs for a healthy pregnancy.
            </p>
            <div className="bg-white rounded-2xl p-5 border border-primary-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i className="ri-capsule-line text-primary-500 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground-900 text-sm">Key Supplement Timeline</h4>
                  <p className="text-foreground-500 text-xs">Start 3 months before conception</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background-50 rounded-xl p-3 text-center">
                  <span className="text-primary-500 font-heading text-xl font-bold">400mcg-5mg</span>
                  <p className="text-foreground-600 text-xs mt-1">Folic Acid Daily</p>
                </div>
                <div className="bg-background-50 rounded-xl p-3 text-center">
                  <span className="text-primary-500 font-heading text-xl font-bold">1000-2000</span>
                  <p className="text-foreground-600 text-xs mt-1">IU Vitamin D Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

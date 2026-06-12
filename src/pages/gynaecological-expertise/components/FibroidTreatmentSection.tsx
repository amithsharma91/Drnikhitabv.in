import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FibroidTreatmentSection() {
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
              src="https://readdy.ai/api/search-image?query=Female%20gynecologist%20in%20a%20premium%20clinic%20using%20an%20anatomical%20model%20to%20explain%20uterine%20fibroid%20treatment%20to%20a%20woman%20patient%2C%20warm%20rose%20blush%20and%20cream%20consultation%20room%2C%20soft%20natural%20daylight%2C%20professional%20compassionate%20atmosphere%2C%20editorial%20healthcare%20photography&width=700&height=500&seq=gynae-fibroids-detail-01&orientation=landscape"
              alt="Fibroid Treatment"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-pulse-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Uterine Health</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              Fibroid Treatment
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Uterine fibroids are benign smooth muscle tumours that affect up to 70% of women by age 50. While many fibroids remain asymptomatic, when they cause heavy bleeding, pelvic pressure, pain, or fertility concerns, expert intervention becomes essential.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita offers the complete spectrum of fibroid treatment — from conservative medical management to advanced minimally invasive surgical options including laparoscopic myomectomy and hysteroscopic resection. Each treatment plan is individually tailored, prioritising fertility preservation whenever possible while effectively addressing symptoms.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Medical Management', icon: 'ri-capsule-line' },
                { label: 'Laparoscopic Myomectomy', icon: 'ri-surgical-mask-line' },
                { label: 'Hysteroscopic Resection', icon: 'ri-scan-line' },
                { label: 'Fertility Preservation', icon: 'ri-seedling-line' },
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

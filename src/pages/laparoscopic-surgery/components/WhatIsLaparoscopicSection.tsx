import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhatIsLaparoscopicSection() {
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
              src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/fae8eb9e-b955-4593-9a8a-bfbedad0e608_IMG_20260617_152505.jpg"
              alt="What Is Laparoscopic Surgery"
              className="w-full rounded-2xl object-contain h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-surgical-mask-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Understanding Laparoscopy</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              What Is Laparoscopic Surgery?
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Laparoscopic surgery, also known as keyhole surgery, is a modern minimally invasive surgical technique that allows surgeons to access the abdominal and pelvic cavities through small incisions of just 5-10mm rather than the large incisions required in traditional open surgery.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              A thin telescopic camera called a laparoscope is inserted through one of these tiny incisions, transmitting high-definition images to monitors in the operating theatre. Specialized long, thin instruments are inserted through the remaining incisions, allowing the surgeon to perform complex procedures with exceptional precision and control.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi, with her <strong>MRCOG (UK)</strong> qualification and <strong>FMIS</strong> certification, brings international standards of laparoscopic surgical expertise to every procedure — combining technical precision with compassionate, personalized care.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-contrast-drop-line', label: '5-10mm Keyhole Incisions' },
                { icon: 'ri-timer-line', label: '1-2 Week Recovery' },
                { icon: 'ri-home-line', label: 'Day Care or Overnight Stay' },
                { icon: 'ri-shield-check-line', label: 'Minimal Scarring' },
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

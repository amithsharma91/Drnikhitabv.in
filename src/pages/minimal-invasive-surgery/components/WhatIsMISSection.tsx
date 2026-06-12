import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhatIsMISSection() {
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
              src="https://readdy.ai/api/search-image?query=Professional%20female%20surgeon%20in%20modern%20operating%20theatre%20wearing%20surgical%20loupes%20and%20sterile%20blue%20scrubs%20performing%20minimally%20invasive%20keyhole%20surgery%20on%20patient%20draped%20in%20blue%2C%20advanced%20HD%20laparoscopic%20tower%20with%20large%20monitor%20displaying%20magnified%20internal%20view%20beside%20her%2C%20pristine%20sterile%20environment%20with%20warm%20balanced%20overhead%20LED%20surgical%20lighting%2C%20small%20keyhole%20incisions%20visible%20on%20patient%20abdomen%2C%20authentic%20premium%20international%20hospital%20operating%20room%2C%20realistic%20editorial%20medical%20photography%20with%20natural%20depth%20of%20field%2C%20soft%20warm%20clinical%20tones%20and%20clean%20composition&width=700&height=500&seq=mis-advanced-surgical-v3&orientation=landscape"
              alt="Minimally Invasive Surgery"
              className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px] md:h-[440px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 mb-4">
              <i className="ri-surgical-mask-line text-primary-600 text-xs mr-1.5"></i>
              <span className="text-primary-700 text-xs font-semibold tracking-wide">Advanced Surgical Care</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
              What Is Minimally Invasive Surgery?
            </h2>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              Minimally invasive surgery (MIS) represents the modern evolution of surgical care — procedures performed through tiny incisions using specialized cameras and precision instruments, rather than large traditional surgical openings.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-4">
              In gynaecology, two primary MIS approaches are used: <strong>laparoscopic surgery</strong>, where instruments enter through small abdominal incisions guided by a camera, and <strong>hysteroscopic surgery</strong>, performed through the natural vaginal canal with no abdominal incisions at all.
            </p>
            <p className="text-foreground-600 text-sm md:text-base leading-relaxed mb-6">
              Dr. Nikhita B Vadvadgi, with her MRCOG (UK) qualification and FMIS certification, combines international surgical training with extensive hands-on experience to deliver outcomes that prioritise safety, precision, comfort, and rapid recovery.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'ri-contrast-drop-line', label: '5-10mm Keyhole Incisions' },
                { icon: 'ri-timer-line', label: '1-2 Week Recovery' },
                { icon: 'ri-home-line', label: 'Day Care or Overnight' },
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

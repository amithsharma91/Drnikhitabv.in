import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HealthEducationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const galleryImages = [
    {
      src: 'https://readdy.ai/api/search-image?query=Compassionate%20female%20doctor%20educating%20a%20teenage%20girl%20about%20menstrual%20health%20in%20a%20bright%20premium%20clinic%20with%20anatomical%20charts%20soft%20natural%20light%20rose%20blush%20interior%20design%20professional%20yet%20friendly%20atmosphere&width=600&height=450&seq=adolescent-edu-01&orientation=landscape',
      alt: 'Health education for adolescent girls',
      title: 'Menstrual Health Education',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20having%20a%20warm%20conversation%20with%20a%20mother%20and%20teenage%20daughter%20in%20a%20comfortable%20modern%20clinic%20setting%20soft%20cream%20tones%20elegant%20healthcare%20environment%20reassuring%20atmosphere&width=600&height=450&seq=adolescent-edu-02&orientation=landscape',
      alt: 'Mother and daughter consultation',
      title: 'Family-Centered Care',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Young%20teenage%20girl%20smiling%20and%20talking%20with%20a%20caring%20female%20doctor%20in%20a%20premium%20clinic%20soft%20natural%20lighting%20rose%20blush%20and%20white%20interior%20design%20modern%20healthcare%20setting%20positive%20and%20reassuring%20atmosphere&width=600&height=450&seq=adolescent-edu-03&orientation=landscape',
      alt: 'Adolescent patient consultation',
      title: 'Confidential Consultations',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Wellness%20education%20session%20in%20a%20bright%20elegant%20clinic%20with%20educational%20materials%20about%20puberty%20and%20adolescent%20health%20professional%20female%20doctor%20explaining%20to%20young%20patient%20warm%20atmosphere%20natural%20lighting&width=600&height=450&seq=adolescent-edu-04&orientation=landscape',
      alt: 'Wellness education',
      title: 'Puberty Awareness',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background-50">
      <div
        ref={ref}
        className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary-500 text-xs md:text-sm font-semibold tracking-widest uppercase relative">
            Education & Awareness
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-300/50 rounded-full"></span>
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-900 mt-3 mb-4">
            Health Education For Young Girls
          </h2>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Empowering adolescents with knowledge about their changing bodies in a safe, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-900/70 via-foreground-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <h4 className="text-white text-sm font-semibold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={aboutRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Hakkımda</span> - Doktorun Hikayesi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div 
              className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <span className="text-blue-700 font-semibold">İstanbul Üniversitesi Tıp Fakültesi'nde</span> aldığım eğitimin ardından,
                  Memorial Sloan Kettering gibi prestijli kurumlarda edindiğim tecrübeler, 
                  beni yalnızca bir cerrah değil; <span className="text-emerald-700 font-semibold">bir yol arkadaşı</span> haline getirdi.
                </p>
                
                <p>
                  Her hasta için en uygun tedavi yöntemini belirlerken, sadece tıbbi verileri değil, 
                  hastalarımın <span className="font-semibold text-gray-800">duygusal ihtiyaçlarını</span> da göz önünde bulundururum.
                </p>

                <p>
                  Ameliyathane kapılarından başlayan yolculuk, hastalarımın tam iyileşmesi ve 
                  yaşam kalitelerinin artması ile tamamlanır. Bu süreçte onlara sadece 
                  <span className="text-red-600 font-semibold"> güven</span> değil, 
                  <span className="text-blue-600 font-semibold"> umut</span> da vermeyi hedefliyorum.
                </p>
              </div>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-blue-800">Uluslararası Sertifikalar</div>
                  <div className="text-xs text-blue-600">Memorial Sloan Kettering</div>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-emerald-600 mb-2" />
                  <div className="text-sm font-semibold text-emerald-800">Bilimsel Yayınlar</div>
                  <div className="text-xs text-emerald-600">50+ Makale</div>
                </div>
              </div>
            </div>

            {/* Professional Image */}
            <div 
              className={`relative transition-all duration-1000 delay-400 ease-out ${
                aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/ilhan-karabicak.jpg.jpg"
                    alt="Dr. İlhan Karabıçak - Professional"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="text-sm text-gray-600 italic leading-relaxed">
                    "Her hasta benim için özeldir. Onların iyileşmesi, benim en büyük başarım."
                  </div>
                  <div className="mt-2 text-xs text-blue-600 font-semibold">
                    - Doç. Dr. İlhan Karabıçak
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className={`mt-20 transition-all duration-1000 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-blue-50 via-white to-emerald-50 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Yıllık Tecrübe</div>
                  <div className="text-sm text-gray-500">Genel Cerrahi Alanında</div>
                </div>

                <div className="text-center group">
                  <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">5000+</div>
                  <div className="text-gray-600">Mutlu Hasta</div>
                  <div className="text-sm text-gray-500">Başarılı Tedavi Süreci</div>
                </div>

                <div className="text-center group">
                  <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">%98</div>
                  <div className="text-gray-600">Başarı Oranı</div>
                  <div className="text-sm text-gray-500">Hasta Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
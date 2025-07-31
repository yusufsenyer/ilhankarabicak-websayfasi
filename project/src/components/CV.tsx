import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CV: React.FC = () => {
  const [cvRef, cvVisible] = useScrollAnimation();

  const educationData = [
    {
      year: "1992-1998",
      title: "Tıp Fakültesi",
      institution: "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
      location: "İstanbul"
    },
    {
      year: "1999-2004",
      title: "Genel Cerrahi Asistanlığı",
      institution: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi",
      location: "İstanbul"
    }
  ];

  const experienceData = [
    {
      year: "2017-Günümüz",
      title: "Genel Cerrahi Uzmanı",
      institution: "Samsun VM Medikalpark Hastanesi",
      location: "Samsun"
    },
    {
      year: "2008-2017",
      title: "Yardımcı Doçent / Doçent",
      institution: "Ondokuz Mayıs Üniversitesi Tıp Fakültesi",
      location: "Samsun"
    },
    {
      year: "2008-2010",
      title: "Yan Dal Eğitimi",
      institution: "New York Üniversitesi & SUNY Downstate",
      location: "New York, ABD"
    },
    {
      year: "2005-2007",
      title: "Araştırmacı/Gözlemci Doktor",
      institution: "Mount Sinai Hastanesi",
      location: "New York, ABD"
    }
  ];

  const achievementsData = [
    {
      year: "2012",
      title: "FEBS Ünvanı",
      description: "Avrupa Genel Cerrahi Bordu Sınavı"
    },
    {
      year: "2012",
      title: "Doçentlik",
      description: "Genel Cerrahi Doçenti"
    },
    {
      year: "2007",
      title: "USMLE",
      description: "Amerika Birleşik Devletleri Tıpta Uzmanlık Sınavları"
    },
    {
      year: "2012",
      title: "Karaciğer Nakli Merkezi",
      description: "OMÜ'de karaciğer nakli merkezini kurdu"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="cv">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={cvRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              cvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Özgeçmiş</span> & Kariyer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className={`transition-all duration-1000 delay-200 ease-out ${
              cvVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Eğitim</h3>
                </div>

                <div className="space-y-6">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className={`relative pl-6 border-l-2 border-blue-200 transition-all duration-700 ease-out ${
                        cvVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: cvVisible ? `${400 + index * 200}ms` : '0ms'
                      }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center text-sm text-blue-600 font-semibold mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.year}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600 mb-2">{item.institution}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className={`transition-all duration-1000 delay-400 ease-out ${
              cvVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Deneyim</h3>
                </div>

                <div className="space-y-6">
                  {experienceData.map((item, index) => (
                    <div
                      key={index}
                      className={`relative pl-6 border-l-2 border-emerald-200 transition-all duration-700 ease-out ${
                        cvVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: cvVisible ? `${600 + index * 200}ms` : '0ms'
                      }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
                      <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center text-sm text-emerald-600 font-semibold mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.year}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600 mb-2">{item.institution}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`mt-12 transition-all duration-1000 delay-600 ease-out ${
            cvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Başarılar & Sertifikalar</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {achievementsData.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-red-50 p-6 rounded-lg border border-red-100 hover:shadow-md transition-all duration-700 ease-out ${
                      cvVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-6 scale-95'
                    }`}
                    style={{
                      transitionDelay: cvVisible ? `${800 + index * 150}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center text-sm text-red-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.year}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;

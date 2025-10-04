import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Medical Park Samsun Hastanesi",
      info: "Kılıçdede Mah. Liman Cad. No:1",
      detail: "İlkadım/Samsun",
      color: "blue",
      action: "Haritada Görüntüle"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Randevu Hattı",
      info: "+90 362 444 55 66",
      detail: "7/24 Erişilebilir",
      color: "emerald",
      action: "Hemen Ara"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp İletişim",
      info: "+90 555 123 45 67",
      detail: "Hızlı Yanıt",
      color: "green",
      action: "WhatsApp'ta Yaz"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta Desteği",
      info: "dr.ilhan@medicalpark.com.tr",
      detail: "24 saat içinde yanıt",
      color: "red",
      action: "E-posta Gönder"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="contact">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-red-600">İletişim</span> - Samimi & Kolay Erişim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sorularınız için her zaman ulaşılabilir olmaya özen gösteriyorum. 
              Size en uygun iletişim kanalını seçerek bana ulaşabilirsiniz.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div 
              ref={contactRef}
              className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Bana Ulaşın
              </h3>

              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${method.color}-100 rounded-xl flex items-center justify-center text-${method.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {method.title}
                      </h4>
                      <div className={`text-${method.color}-600 font-medium mb-1`}>
                        {method.info}
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        {method.detail}
                      </div>
                      
                      <div className={`inline-flex items-center gap-2 text-${method.color}-600 text-sm font-medium group-hover:gap-3 transition-all duration-300`}>
                        <span>{method.action}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <h4 className="font-semibold text-gray-800">Çalışma Saatleri</h4>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazartesi - Cuma</span>
                    <span className="font-medium text-gray-800">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cumartesi</span>
                    <span className="font-medium text-gray-800">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazar</span>
                    <span className="text-red-600">Kapalı</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-emerald-600 text-xs font-medium">
                      * Acil durumlar için 7/24 ulaşılabilir
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`transition-all duration-1000 delay-400 ease-out ${
                contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Hızlı İletişim Formu
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="Adınızı ve soyadınızı giriniz"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                      placeholder="+90 5xx xxx xx xx"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                      placeholder="Durumunuz hakkında kısaca bilgi veriniz..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    Mesaj Gönder
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Gönderdiğiniz mesajlara <span className="font-semibold text-blue-600">24 saat içinde</span> yanıt veriyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-80 bg-gray-200 flex items-center justify-center relative">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Medical Park Samsun Hastanesi</p>
                  <p className="text-sm">Kılıçdede Mah. Liman Cad. No:1, İlkadım/Samsun</p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Google Maps'te Aç
                  </button>
                </div>
                
                {/* Custom Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-12 h-12 bg-red-600 opacity-30 rounded-full absolute -top-3 -left-3 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
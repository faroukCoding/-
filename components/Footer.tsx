
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-blue text-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-amiri font-bold mb-4">مدرسة الفجر الدولية</h3>
            <p className="text-gray-300 mb-4">
              نلتزم بتقديم تعليم يواكب العصر ويلهم الأجيال القادمة.
            </p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p>📍 شارع المعرفة، مدينة التعليم، الدولة</p>
              <p>📞 +966 12 345 6789</p>
              <p>✉️ info@alfajrschool.edu</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.018485295171!2d46.62121767591696!3d24.76066297799516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee38d327a0549%3A0x425838127389910c!2sKing%20Saud%20University!5e0!3m2!1sen!2sus!4v1720556157078!5m2!1sen!2sus"
                className="w-full h-64 border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-cairo mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-300 hover:text-brand-gold transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-cairo mb-4">تواصل معنا</h3>
            <form>
              <div className="mb-4">
                <input type="email" placeholder="بريدك الإلكتروني" className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
              </div>
              <div className="mb-4">
                <textarea placeholder="رسالتك" rows={4} className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-gold text-brand-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300">
                إرسال
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} مدرسة الفجر الدولية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

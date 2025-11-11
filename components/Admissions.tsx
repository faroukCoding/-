
import React, { useState } from 'react';

const Admissions: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    date: '',
    time: '09:00',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=1')" }}>
      <div className="container mx-auto px-6">
        <div className="bg-brand-blue bg-opacity-80 py-16 rounded-lg text-center max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-white px-6">
              <h2 className="text-4xl font-amiri font-bold mb-4 text-3d-hero">شكراً لتسجيلكم!</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                تم استلام طلبكم لحجز جولة مدرسية بنجاح. سنتواصل معكم قريبًا لتأكيد الموعد.
              </p>
            </div>
          ) : (
            <div className="px-6">
              <h2 className="text-4xl font-amiri font-bold text-white mb-4 text-3d-hero">
                هل أنتم مستعدون لبدء الرحلة؟
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                نحن متحمسون للتعرف عليكم. احجزوا جولة تعريفية في مدرستنا لاكتشاف بيئتنا التعليمية الفريدة.
              </p>
              <form onSubmit={handleSubmit} className="text-right max-w-2xl mx-auto space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="اسم ولي الأمر" required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني" required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهاتف" required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                   <input type="text" name="childName" value={formData.childName} onChange={handleChange} placeholder="اسم الطالب/الطالبة" required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
                 <div className="grid md:grid-cols-3 gap-4">
                    <input type="number" name="childAge" value={formData.childAge} onChange={handleChange} placeholder="عمر الطالب/الطالبة" required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    <select name="time" value={formData.time} onChange={handleChange} required className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold">
                      <option value="09:00">09:00 صباحًا</option>
                      <option value="11:00">11:00 صباحًا</option>
                      <option value="13:00">01:00 ظهرًا</option>
                    </select>
                </div>
                <button 
                  type="submit" 
                  className="bg-brand-gold text-brand-blue font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105 inline-block w-full md:w-auto mt-4"
                >
                  تأكيد حجز الجولة
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admissions;

import React, { useState, useEffect, useCallback } from 'react';
import { generateCurriculumDescription } from '../services/geminiService';

const SUBJECTS = ['العلوم', 'الرياضيات', 'التاريخ', 'الفنون', 'الأدب العربي'];

const Academics: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDescription = useCallback(async (subject: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateCurriculumDescription(subject);
      setDescription(result);
    } catch (err) {
      setError('فشل في تحميل الوصف. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDescription(selectedSubject);
  }, [selectedSubject, fetchDescription]);

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri font-bold text-brand-blue text-3d-title">نظرة على مناهجنا</h2>
          <p className="text-lg mt-2 text-brand-gray max-w-2xl mx-auto">
            انقر على المادة لعرض وصف تفاعلي تم إنشاؤه بواسطة الذكاء الاصطناعي.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`py-2 px-5 font-semibold rounded-full transition-all duration-300 text-sm md:text-base ${
                selectedSubject === subject
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-gray-200 text-brand-gray hover:bg-brand-gold hover:text-brand-blue'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="bg-brand-light p-8 rounded-lg shadow-inner min-h-[200px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex items-center space-x-3 space-x-reverse text-brand-blue">
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="font-semibold">جاري إنشاء الوصف...</span>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <p className="text-lg text-brand-gray leading-relaxed text-center font-amiri">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Academics;

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri font-bold text-brand-blue text-3d-title">رسالتنا ورؤيتنا</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=10" 
              alt="Students in a library" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-6 text-lg text-brand-gray">
            <h3 className="text-3xl font-amiri text-brand-blue font-semibold">مهمتنا</h3>
            <p>
              تتمثل مهمتنا في توفير بيئة تعليمية محفزة وآمنة، تطلق العنان لإمكانيات كل طالب، وتغرس فيهم حب التعلم مدى الحياة، وتعدهم ليكونوا مواطنين عالميين مسؤولين ومبتكرين.
            </p>
            <h3 className="text-3xl font-amiri text-brand-blue font-semibold mt-6">رؤيتنا</h3>
            <p>
              أن نكون مؤسسة تعليمية رائدة، معترف بها لجودتها الأكاديمية الفائقة، والتزامها بتنمية الشخصية المتكاملة، وتخريج جيل من القادة القادرين على إحداث تأثير إيجابي في العالم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
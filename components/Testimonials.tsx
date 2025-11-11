
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-brand-blue text-white p-8 rounded-lg shadow-xl min-h-[300px] flex flex-col justify-between">
    <p className="font-amiri text-xl italic mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-brand-gold" />
      <div className="mr-4">
        <p className="font-bold text-lg">{testimonial.name}</p>
        <p className="text-brand-gold">{testimonial.relation}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri font-bold text-brand-blue text-3d-title">أصداء مجتمعنا</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
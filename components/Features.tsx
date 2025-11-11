
import React from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-15deg)] hover:shadow-2xl">
    <div className="[transform:translateZ(40px)]">
      <div className="flex justify-center items-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold font-amiri text-brand-blue mb-2">{feature.title}</h3>
      <p className="text-brand-gray">{feature.description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri font-bold text-brand-blue text-3d-title">لماذا تختارنا؟</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
// FIX: Import React to provide the React namespace for types like ReactNode.
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  relation: string;
  image: string;
}

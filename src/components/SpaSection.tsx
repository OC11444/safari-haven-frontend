
import React, { useState } from 'react';
import { Star, Heart, Leaf, Waves, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SpaSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const treatments = [
    {
      name: 'African Stone Massage',
      duration: '90 minutes',
      price: '$180',
      description: 'Healing massage using warm volcanic stones and indigenous oils',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    },
    {
      name: 'Baobab Body Wrap',
      duration: '60 minutes',
      price: '$120',
      description: 'Nourishing body treatment with baobab fruit extract and shea butter',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
    },
    {
      name: 'Serengeti Facial',
      duration: '75 minutes',
      price: '$150',
      description: 'Rejuvenating facial using organic African botanicals and minerals',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
    },
    {
      name: 'Couples Safari Retreat',
      duration: '120 minutes',
      price: '$350',
      description: 'Romantic couples treatment in our private outdoor pavilion',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      text: 'The spa experience was absolutely divine. The African Stone Massage left me feeling completely rejuvenated after our safari adventures.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      text: 'The Baobab Body Wrap was unlike anything I\'ve experienced. The natural ingredients and serene environment made it unforgettable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      text: 'My husband and I loved the Couples Safari Retreat. The outdoor setting with sounds of nature was incredibly romantic and peaceful.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <section id="spa" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Spa & <span className="text-gradient">Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reconnect with your inner self through our holistic wellness treatments, 
            inspired by ancient African healing traditions and modern luxury.
          </p>
        </div>

        {/* Wellness Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-scale-in">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Natural Ingredients</h3>
            <p className="text-gray-600 dark:text-gray-300">Organic African botanicals and minerals</p>
          </div>

          <div className="text-center animate-scale-in">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Holistic Healing</h3>
            <p className="text-gray-600 dark:text-gray-300">Mind, body, and soul wellness</p>
          </div>

          <div className="text-center animate-scale-in">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Serene Environment</h3>
            <p className="text-gray-600 dark:text-gray-300">Peaceful settings with nature sounds</p>
          </div>

          <div className="text-center animate-scale-in">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Therapists</h3>
            <p className="text-gray-600 dark:text-gray-300">Certified wellness professionals</p>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="relative overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {treatment.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">{treatment.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{treatment.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{treatment.duration}</span>
                  <Button size="sm" className="gold-gradient text-white">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-luxury-sage rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold mb-4">What Our Guests Say</h3>
            <p className="text-lg text-gray-200">Experience the transformative power of our wellness treatments</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-luxury-gold opacity-50" />
              <div className="text-center animate-fade-in">
                <p className="text-xl md:text-2xl mb-6 italic leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-luxury-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-200">{testimonials[activeTestimonial].location}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-luxury-gold' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;

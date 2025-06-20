
import React, { useState } from 'react';
import { Camera, Clock, Users, Map, Binoculars, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SafariSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const safariExperiences = [
    {
      name: 'Big Five Safari',
      duration: 'Full Day',
      groupSize: '6 people max',
      price: '$250',
      description: 'Track the legendary Big Five in their natural habitat with expert guides',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop',
      highlights: ['Lion Pride Tracking', 'Elephant Herds', 'Leopard Spotting', 'Rhino Sanctuary'],
      inclusions: ['Professional Guide', 'Lunch', 'Refreshments', 'Binoculars'],
    },
    {
      name: 'Sunrise Hot Air Balloon',
      duration: '4 hours',
      groupSize: '12 people max',
      price: '$450',
      description: 'Soar above the savannah at dawn for breathtaking aerial views of wildlife',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
      highlights: ['Aerial Photography', 'Champagne Breakfast', 'Wildlife from Above', 'Sunrise Views'],
      inclusions: ['Flight Certificate', 'Breakfast', 'Transfers', 'Insurance'],
    },
    {
      name: 'Night Safari Adventure',
      duration: '3 hours',
      groupSize: '8 people max',
      price: '$180',
      description: 'Discover the mysteries of nocturnal African wildlife with thermal imaging',
      image: 'https://images.unsplash.com/photo-1534567110849-bdce5afaa2bd?w=800&h=600&fit=crop',
      highlights: ['Nocturnal Animals', 'Star Gazing', 'Thermal Imaging', 'Bush Dinner'],
      inclusions: ['Night Vision Equipment', 'Thermal Camera', 'Dinner', 'Warm Blankets'],
    },
  ];

  const wildlife = [
    { name: 'African Elephant', count: '200+', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300&h=200&fit=crop' },
    { name: 'African Lion', count: '50+', image: 'https://images.unsplash.com/photo-1546835512-6d52999de9c7?w=300&h=200&fit=crop' },
    { name: 'Leopard', count: '30+', image: 'https://images.unsplash.com/photo-1580474155730-f05b5ac2d7aa?w=300&h=200&fit=crop' },
    { name: 'Giraffe', count: '100+', image: 'https://images.unsplash.com/photo-1534567110849-bdce5afaa2bd?w=300&h=200&fit=crop' },
    { name: 'Zebra', count: '300+', image: 'https://images.unsplash.com/photo-1563455491-15cc7cce3a88?w=300&h=200&fit=crop' },
    { name: 'Cheetah', count: '20+', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&h=200&fit=crop' },
  ];

  const currentExperience = safariExperiences[selectedExperience];

  return (
    <section id="safari" className="py-20 bg-gradient-to-b from-luxury-earth-light to-luxury-earth text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Safari <span className="text-luxury-gold">Adventures</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Embark on unforgettable wildlife encounters guided by our expert rangers 
            who know every trail, watering hole, and animal behavior pattern.
          </p>
        </div>

        {/* Safari Experience Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={currentExperience.image}
                alt={currentExperience.name}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full font-semibold">
                {currentExperience.price} per person
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="font-playfair text-3xl font-bold mb-4">{currentExperience.name}</h3>
            <p className="text-gray-200 text-lg mb-6">{currentExperience.description}</p>

            {/* Experience Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-luxury-gold" />
                <span>{currentExperience.duration}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-luxury-gold" />
                <span>{currentExperience.groupSize}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Binoculars className="w-5 h-5 text-luxury-gold mr-2" />
                Experience Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {currentExperience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">What's Included</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentExperience.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-sm">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="gold-gradient text-white font-semibold px-8 py-3 hover:opacity-90 transition-opacity">
              Book Safari Experience
            </Button>
          </div>
        </div>

        {/* Safari Experience Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
            {safariExperiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedExperience === index
                    ? 'gold-gradient text-white shadow-lg'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                {experience.name}
              </button>
            ))}
          </div>
        </div>

        {/* Wildlife Gallery */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-center mb-8">
            Wildlife You'll <span className="text-luxury-gold">Encounter</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {wildlife.map((animal, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white group hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <CardContent className="p-4 text-center">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{animal.name}</h4>
                  <p className="text-xs text-luxury-gold">{animal.count} spotted</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safari Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-luxury-gold mb-2">25+</div>
            <p className="text-lg">Years Experience</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-luxury-gold mb-2">50+</div>
            <p className="text-lg">Wildlife Species</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-luxury-gold mb-2">98%</div>
            <p className="text-lg">Big Five Sightings</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-luxury-gold mb-2">10K+</div>
            <p className="text-lg">Happy Guests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariSection;

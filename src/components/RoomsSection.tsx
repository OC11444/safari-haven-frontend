
import React, { useState } from 'react';
import { Wifi, Car, Utensils, Waves, Users, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const rooms = [
    {
      id: 1,
      name: 'Savannah Suite',
      description: 'Spacious luxury suite with panoramic views of the African savannah',
      price: '$850',
      period: 'per night',
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      ],
      features: ['King Bed', 'Private Balcony', 'Wildlife View', 'Butler Service'],
      amenities: [Wifi, Car, Utensils, Waves],
      size: '65 m²',
      guests: '2 Adults',
    },
    {
      id: 2,
      name: 'Presidential Villa',
      description: 'Ultimate luxury with private pool and dedicated game viewing deck',
      price: '$1,500',
      period: 'per night',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      ],
      features: ['Master Suite', 'Private Pool', 'Game Deck', 'Personal Chef'],
      amenities: [Wifi, Car, Utensils, Waves],
      size: '150 m²',
      guests: '4 Adults',
    },
    {
      id: 3,
      name: 'Family Safari Lodge',
      description: 'Perfect for families with connecting rooms and child-friendly amenities',
      price: '$1,200',
      period: 'per night',
      images: [
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&h=600&fit=crop',
      ],
      features: ['Two Bedrooms', 'Family Deck', 'Kids Corner', 'Game Room'],
      amenities: [Wifi, Car, Utensils, Users],
      size: '100 m²',
      guests: '6 People',
    },
  ];

  const currentRoom = rooms[selectedRoom];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Luxury Rooms & <span className="text-gradient">Suites</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Each room is a sanctuary of comfort and elegance, offering breathtaking views 
            of the African wilderness while providing world-class amenities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Room Gallery */}
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
              <img
                src={currentRoom.images[0]}
                alt={currentRoom.name}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full font-semibold">
                {currentRoom.price} {currentRoom.period}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {currentRoom.images.slice(1).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${currentRoom.name} ${index + 2}`}
                    className="w-full h-24 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <h3 className="font-playfair text-3xl font-bold mb-4">{currentRoom.name}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {currentRoom.description}
              </p>

              {/* Room Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Bed className="w-5 h-5 text-luxury-gold" />
                  <span>{currentRoom.size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-luxury-gold" />
                  <span>{currentRoom.guests}</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Amenities</h4>
                <div className="flex space-x-4">
                  {currentRoom.amenities.map((Icon, index) => (
                    <div key={index} className="p-2 bg-luxury-gold/10 rounded-lg">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="gold-gradient text-white font-semibold px-8 py-3 hover:opacity-90 transition-opacity">
                Book This Room
              </Button>
            </div>
          </div>
        </div>

        {/* Room Selection Tabs */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedRoom === index
                    ? 'gold-gradient text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;

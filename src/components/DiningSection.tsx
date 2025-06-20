
import React, { useState } from 'react';
import { Star, Clock, MapPin, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DiningSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const restaurants = [
    {
      name: 'Acacia Fine Dining',
      cuisine: 'Contemporary African',
      description: 'Award-winning restaurant featuring modern interpretations of traditional African cuisine',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
      rating: 5,
      hours: '7:00 PM - 10:30 PM',
      location: 'Main Lodge',
      chef: 'Chef Amani Kiptoo',
      specialties: ['Nyama Choma', 'Samaki wa Kupaka', 'Sukuma Wiki Fusion', 'Ugali Gourmet'],
    },
    {
      name: 'Savannah Grill',
      cuisine: 'International BBQ',
      description: 'Open-air grilling experience with panoramic views of the savannah',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
      rating: 4,
      hours: '6:00 PM - 9:30 PM',
      location: 'Terrace Deck',
      chef: 'Chef Maria Santos',
      specialties: ['Grilled Antelope', 'Seafood Platter', 'Vegetarian Delight', 'Traditional Braai'],
    },
    {
      name: 'Baobab Lounge',
      cuisine: 'Cocktails & Light Bites',
      description: 'Sophisticated lounge with craft cocktails and stunning sunset views',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      rating: 5,
      hours: '5:00 PM - 12:00 AM',
      location: 'Rooftop',
      chef: 'Mixologist John Kamau',
      specialties: ['Signature Cocktails', 'Wine Selection', 'Artisan Cheeses', 'Tapas'],
    },
  ];

  const currentRestaurant = restaurants[activeTab];

  return (
    <section id="dining" className="py-20 bg-luxury-earth text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-luxury-gold">Dining</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Savor exceptional culinary experiences that blend authentic African flavors 
            with international sophistication, all while enjoying breathtaking views.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Restaurant Image */}
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={currentRestaurant.image}
                alt={currentRestaurant.name}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-luxury-gold text-white px-3 py-1 rounded-full flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">{currentRestaurant.rating}.0</span>
              </div>
            </div>
          </div>

          {/* Restaurant Details */}
          <div className="animate-slide-in-right">
            <div className="mb-6">
              <h3 className="font-playfair text-3xl font-bold mb-2">{currentRestaurant.name}</h3>
              <p className="text-luxury-gold text-lg font-medium mb-4">{currentRestaurant.cuisine}</p>
              <p className="text-gray-200 text-lg mb-6">{currentRestaurant.description}</p>
            </div>

            {/* Restaurant Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-luxury-gold" />
                <span>{currentRestaurant.hours}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span>{currentRestaurant.location}</span>
              </div>
              <div className="flex items-center space-x-3 md:col-span-2">
                <ChefHat className="w-5 h-5 text-luxury-gold" />
                <span>{currentRestaurant.chef}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Signature Dishes</h4>
              <div className="grid grid-cols-2 gap-3">
                {currentRestaurant.specialties.map((specialty, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-medium">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gold-gradient text-white font-semibold px-6 py-3 hover:opacity-90 transition-opacity">
                Make Reservation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-luxury-earth px-6 py-3"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Restaurant Tabs */}
        <div className="flex justify-center">
          <div className="flex space-x-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
            {restaurants.map((restaurant, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === index
                    ? 'gold-gradient text-white shadow-lg'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                {restaurant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Special Dining Experiences */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold mb-3">Bush Dinner</h4>
              <p className="text-gray-200">Romantic dinner under the stars in the heart of the wilderness</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold mb-3">Wine Tasting</h4>
              <p className="text-gray-200">Curated selection of South African wines with expert sommelier</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold mb-3">Cultural Feast</h4>
              <p className="text-gray-200">Traditional Maasai dining experience with local entertainment</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;

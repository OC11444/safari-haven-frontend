
import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: '',
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: "Thank you for choosing Savannah Grand Hotel. We'll send confirmation details to your email.",
    });
  };

  const paymentMethods = [
    { id: 'visa', name: 'Visa', icon: '💳' },
    { id: 'mastercard', name: 'Mastercard', icon: '💳' },
    { id: 'apple-pay', name: 'Apple Pay', icon: '📱' },
    { id: 'google-pay', name: 'Google Pay', icon: '📱' },
    { id: 'mpesa', name: 'M-Pesa', icon: '📲' },
  ];

  const roomTypes = [
    { id: 'savannah', name: 'Savannah Suite', price: '$850' },
    { id: 'presidential', name: 'Presidential Villa', price: '$1,500' },
    { id: 'family', name: 'Family Safari Lodge', price: '$1,200' },
  ];

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="text-gradient">Safari Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Secure your luxury accommodation and create memories that will last a lifetime. 
            Easy booking with flexible cancellation options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Booking Progress */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= bookingStep 
                      ? 'gold-gradient text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 ${
                      step < bookingStep ? 'bg-luxury-gold' : 'bg-gray-200'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-center">
                {bookingStep === 1 && 'Select Your Stay'}
                {bookingStep === 2 && 'Guest Information'}
                {bookingStep === 3 && 'Payment & Confirmation'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Step 1: Booking Details */}
              {bookingStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="checkin" className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-luxury-gold" />
                        Check-in Date
                      </Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout" className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-luxury-gold" />
                        Check-out Date
                      </Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="guests" className="flex items-center mb-2">
                        <Users className="w-4 h-4 mr-2 text-luxury-gold" />
                        Number of Guests
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="flex items-center mb-2">
                        Room Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('roomType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          {roomTypes.map((room) => (
                            <SelectItem key={room.id} value={room.id}>
                              {room.name} - {room.price}/night
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {bookingStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2 text-luxury-gold" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2 text-luxury-gold" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {bookingStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-luxury-gold/10 rounded-lg p-6 mb-6">
                    <h3 className="font-playfair text-xl font-bold mb-4">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Room Type:</span>
                        <span className="font-semibold">{roomTypes.find(r => r.id === formData.roomType)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dates:</span>
                        <span>{formData.checkIn} to {formData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span>{formData.guests} {parseInt(formData.guests) === 1 ? 'Guest' : 'Guests'}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-luxury-gold">{roomTypes.find(r => r.id === formData.roomType)?.price}/night</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="flex items-center mb-4">
                      <CreditCard className="w-4 h-4 mr-2 text-luxury-gold" />
                      Payment Method
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => handleInputChange('paymentMethod', method.id)}
                          className={`p-4 border-2 rounded-lg text-center transition-all ${
                            formData.paymentMethod === method.id
                              ? 'border-luxury-gold bg-luxury-gold/10'
                              : 'border-gray-200 hover:border-luxury-gold/50'
                          }`}
                        >
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <div className="text-sm font-medium">{method.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Shield className="w-4 h-4 text-luxury-gold" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={bookingStep === 1}
                  className="px-8"
                >
                  Previous
                </Button>
                
                {bookingStep < 3 ? (
                  <Button
                    onClick={handleNextStep}
                    className="gold-gradient text-white px-8"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleBooking}
                    className="gold-gradient text-white px-8"
                  >
                    Confirm Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need assistance with your booking? Our concierge team is here to help.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span>reservations@savannahgrand.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

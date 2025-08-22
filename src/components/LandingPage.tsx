// import React from 'react'
import { Button } from './ui/button'
import {  Shield, Star, Truck } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import HeroPage from './HeroPage'

// import womensLuxuryFashion from '../assets/womens-luxury-fashion.png'
// import mensLuxury from "../assets/mens-luxury-fashion.png"

const LandingPage = () => {
  return (
    <div>
      <HeroPage/>

      
        
    {/* <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/elegant-model-black-luxury.png')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6">Redefine Your Style</h2>
          <p className="text-xl md:text-2xl font-serif mb-8 text-gray-200">
            Discover premium fashion that speaks to your individuality
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section> */}

      {/* Featured Collections */}
      {/* <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4 text-card-foreground">Featured Collections</h3>
            <p className="text-xl font-serif text-muted-foreground">Curated styles for every occasion</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg ">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/mens-luxury-fashion.png"
                  alt="Men's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">New Arrivals</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold font-sans mb-2">Men's Collection</h4>
                <p className="text-muted-foreground font-serif">Sophisticated styles for the modern gentleman</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="../assets/womens-luxury-fashion.png"
                  alt="Women's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">Trending</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold font-sans mb-2">Women's Collection</h4>
                <p className="text-muted-foreground font-serif">Elegant pieces that empower and inspire</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/luxury-accessories.png"
                  alt="Accessories Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">Limited</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold font-sans mb-2">Accessories</h4>
                <p className="text-muted-foreground font-serif">Complete your look with premium details</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Product Showcase */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4">Best Sellers</h3>
            <p className="text-xl font-serif text-muted-foreground">Customer favorites that define luxury</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/luxury-clothing-item.png?height=300&width=250&query=luxury clothing item ${item}`}
                    alt={`Product ${item}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold font-sans mb-1">Premium Jacket</h4>
                  <p className="text-sm text-muted-foreground font-serif mb-2">Tailored perfection</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">$299</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground border-primary/50 hover:border-primary bg-transparent"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold font-sans mb-2 text-card-foreground">Free Shipping</h4>
              <p className="text-muted-foreground font-serif">Complimentary shipping on orders over $200</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold font-sans mb-2 text-card-foreground">Quality Guarantee</h4>
              <p className="text-muted-foreground font-serif">30-day return policy on all premium items</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold font-sans mb-2 text-card-foreground">Premium Service</h4>
              <p className="text-muted-foreground font-serif">Personal styling consultation available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-sans mb-4">What Our Customers Say</h3>
            <p className="text-xl font-serif text-muted-foreground">Real experiences from fashion enthusiasts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Blogger",
                content:
                  "LUXE has completely transformed my wardrobe. The quality and attention to detail is unmatched.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                content:
                  "Every piece I've purchased has exceeded my expectations. The craftsmanship is truly exceptional.",
                rating: 5,
              },
              {
                name: "Emma Rodriguez",
                role: "Entrepreneur",
                content:
                  "The personal styling service helped me find pieces that perfectly match my lifestyle and aesthetic.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-serif italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold font-sans">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold font-sans mb-4 text-card-foreground">Stay in Style</h3>
          <p className="text-xl font-serif text-muted-foreground mb-8">
            Subscribe to receive exclusive offers and style updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-input text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6 py-3 bg-primary flex items-center h-full hover:bg-primary/90 text-primary-foreground font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
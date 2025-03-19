import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, CheckCircle, Clock, Globe, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Journey to Canadian Permanent Residence Starts Here
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Immigration provides expert guidance through every step of your immigration process, making your Canadian dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 animate-slide-up">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              Canadian landscape with maple leaf flag
                {/* <Image
                  src="https://images.unsplash.com/photo-1535041422672-8c3254ab9b2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Canadian landscape with maple leaf flag"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Immigration?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, personalized service, and a proven track record to make your immigration journey smooth and successful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-md">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Consultants</h3>
              <p className="text-muted-foreground">
                Our team consists of certified immigration consultants with years of experience in Canadian immigration law.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-md">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-muted-foreground">
                We develop customized immigration strategies tailored to your unique situation and goals.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-md">
              <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Success Rate</h3>
              <p className="text-muted-foreground">
                Our proven methodology has helped thousands of clients successfully immigrate to Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Immigration Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive immigration services to help you navigate the Canadian immigration system with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Express Entry"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Express Entry</h3>
                <p className="text-muted-foreground mb-4">
                  Fast-track your immigration through Canada's Express Entry system for skilled workers.
                </p>
                <Link href="/services#express-entry" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560306843-33986aebaf12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Provincial Nominee Programs"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Provincial Nominee Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Explore pathways to permanent residence through provincial nomination programs.
                </p>
                <Link href="/services#pnp" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Family Sponsorship"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Sponsorship</h3>
                <p className="text-muted-foreground mb-4">
                  Reunite with your family in Canada through our family sponsorship services.
                </p>
                <Link href="/services#family-sponsorship" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our clients who have successfully immigrated to Canada with our help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Sarah Johnson"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Express Entry, 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Immigration made my immigration journey smooth and stress-free. Their expert guidance helped me navigate the Express Entry system successfully. I'm now happily settled in Toronto!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Michael Chen"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">BC PNP, 2023</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The team at Immigration was instrumental in helping me secure a provincial nomination. Their attention to detail and personalized approach made all the difference."
                </p>
              </CardContent>
            </Card>
            
            <Card className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Priya Patel"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Patel</h4>
                    <p className="text-sm text-muted-foreground">Family Sponsorship, 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Thanks to Immigration, I was able to sponsor my parents to join me in Canada. Their expertise in family sponsorship made the process much easier than I expected."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Canadian Journey?
              </h2>
              <p className="text-lg text-white/90">
                Book a consultation with our immigration experts today and take the first step towards your new life in Canada.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">98%</p>
              <p className="text-lg text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">5,000+</p>
              <p className="text-lg text-muted-foreground">Successful Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">10+</p>
              <p className="text-lg text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">24/7</p>
              <p className="text-lg text-muted-foreground">Client Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  123 Immigration Avenue<br />
                  Toronto, ON M5V 2K7<br />
                  Canada
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Globe className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground">
                  Phone: +1 (416) 555-7890<br />
                  Email: info@immigration.ca<br />
                  <Link href="/contact" className="text-red-600 hover:text-red-700 mt-2 inline-block">
                    Send us a message
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
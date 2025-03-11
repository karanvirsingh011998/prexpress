import Image from "next/image";
import { Award, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About PR Express
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for navigating the Canadian immigration process with confidence and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="PR Express office"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2015, PR Express was born from a passion to help individuals and families navigate the complex Canadian immigration system. Our founder, having gone through the immigration process personally, understood the challenges and uncertainties that come with it.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small consultancy has grown into a trusted immigration partner for thousands of clients worldwide. Our team of certified immigration consultants brings decades of combined experience and a deep understanding of Canadian immigration policies and procedures.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, PR Express is proud to have helped over 5,000 individuals and families successfully immigrate to Canada, turning their dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To provide expert, personalized immigration services that empower individuals and families to successfully navigate the Canadian immigration process with confidence and peace of mind.
            </p>
            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At PR Express, our values guide everything we do. They reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, ensuring the highest quality advice and support for our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical standards in all our client interactions and business practices.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Empathy</h3>
                <p className="text-muted-foreground">
                  We understand the emotional journey of immigration and approach each client with compassion and understanding.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  We value your time and work diligently to process your immigration case efficiently without compromising quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of certified immigration consultants brings decades of combined experience and a deep understanding of Canadian immigration policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="John Smith"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">John Smith</h3>
                <p className="text-red-600 mb-3">Founder & Lead Consultant</p>
                <p className="text-muted-foreground">
                  With over 15 years of experience in Canadian immigration, John has helped thousands of clients achieve their immigration goals.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Maria Rodriguez"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Maria Rodriguez</h3>
                <p className="text-red-600 mb-3">Senior Immigration Consultant</p>
                <p className="text-muted-foreground">
                  Maria specializes in Express Entry and Provincial Nominee Programs, with a proven track record of successful applications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="relative h-64 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="David Chen"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                <p className="text-red-600 mb-3">Family Sponsorship Specialist</p>
                <p className="text-muted-foreground">
                  David's expertise in family sponsorship has helped reunite hundreds of families in Canada over the past decade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Canadian Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team of experts is ready to guide you through every step of the immigration process.
            </p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
import Image from "next/image";
import { ArrowRight, CheckCircle, FileText, Globe, Headphones, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Immigration Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive immigration solutions tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Express Entry Section */}
      <section id="express-entry" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Express Entry</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Express Entry is Canada's flagship immigration system for skilled workers. It manages applications for three federal economic immigration programs:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Federal Skilled Worker Program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Federal Skilled Trades Program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Canadian Experience Class</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mb-6">
                Our Express Entry services include comprehensive profile evaluation, documentation preparation, application submission, and ongoing support throughout the process.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Learn More About Express Entry
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Express Entry"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Nominee Programs Section */}
      <section id="pnp" className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Provincial Nominee Programs</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Provincial Nominee Programs (PNPs) allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and who are interested in settling in a particular province.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Each province has its own streams and criteria for nominating candidates based on their specific economic and demographic needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our PNP services include identifying the most suitable provincial program for your profile, preparing your application, and guiding you through the nomination and permanent residence process.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Explore Provincial Programs
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1518132006738-94c6d4f96da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Provincial Nominee Programs"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Sponsorship Section */}
      <section id="family-sponsorship" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Family Sponsorship</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Family reunification is a cornerstone of Canada's immigration policy. Canadian citizens and permanent residents can sponsor eligible family members to join them in Canada.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Eligible family members include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Spouses and common-law partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Dependent children</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Parents and grandparents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Other eligible relatives</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground mb-6">
                Our family sponsorship services include eligibility assessment, application preparation, and guidance throughout the sponsorship process.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Learn About Family Sponsorship
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Family Sponsorship"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond our core immigration pathways, we offer a range of specialized services to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card id="consultation" className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Immigration Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  One-on-one consultation with our immigration experts to assess your eligibility and develop a personalized immigration strategy.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  Book a Consultation
                </Button>
              </CardContent>
            </Card>
            
            <Card id="document-review" className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Review</h3>
                <p className="text-muted-foreground mb-4">
                  Professional review of your immigration documents to ensure accuracy, completeness, and compliance with IRCC requirements.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Settlement Services</h3>
                <p className="text-muted-foreground mb-4">
                  Guidance and support for your transition to life in Canada, including housing, healthcare, education, and employment resources.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  Explore Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Immigration Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure a smooth and successful immigration journey for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-muted-foreground">
                We assess your eligibility and identify the most suitable immigration pathway for your specific situation.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">
                We create a personalized immigration plan tailored to your goals, timeline, and circumstances.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Application Preparation</h3>
              <p className="text-muted-foreground">
                We prepare and review all necessary documentation to ensure a complete and accurate application.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">
                We provide continuous guidance and support throughout the application process until you receive your permanent residence.
              </p>
            </div>
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
    </div>
  );
}
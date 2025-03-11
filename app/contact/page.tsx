"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our immigration experts to start your Canadian journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                <Phone className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  Main Office: +1 (416) 555-7890<br />
                  Toll-Free: +1 (800) 555-7890<br />
                  Fax: +1 (416) 555-7891
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  General Inquiries: info@prexpress.ca<br />
                  Consultations: consult@prexpress.ca<br />
                  Support: support@prexpress.ca
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below to request information about our services or to schedule a consultation with one of our immigration experts.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Thank You!</h3>
                  <p className="text-green-700 dark:text-green-400">
                    Your message has been received. One of our immigration experts will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="express-entry">Express Entry</SelectItem>
                          <SelectItem value="pnp">Provincial Nominee Program</SelectItem>
                          <SelectItem value="family-sponsorship">Family Sponsorship</SelectItem>
                          <SelectItem value="consultation">Immigration Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your immigration goals or questions..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="h-full min-h-[400px] bg-muted rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-secondary/50">
                  <p className="text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Office Hours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visit our office during business hours or schedule an appointment for a consultation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Day</th>
                    <th className="py-3 px-6 text-left">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-6">Monday</td>
                    <td className="py-3 px-6">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Tuesday</td>
                    <td className="py-3 px-6">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Wednesday</td>
                    <td className="py-3 px-6">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Thursday</td>
                    <td className="py-3 px-6">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Friday</td>
                    <td className="py-3 px-6">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Saturday</td>
                    <td className="py-3 px-6">10:00 AM - 2:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6">Sunday</td>
                    <td className="py-3 px-6">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              Virtual consultations are available outside of regular business hours by appointment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and the consultation process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">What happens during the initial consultation?</h3>
                <p className="text-muted-foreground">
                  During the initial consultation, our immigration expert will assess your eligibility for various Canadian immigration programs, discuss your goals and options, and recommend the most suitable pathway for your situation.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How much does a consultation cost?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-minute initial consultation for $150 CAD. This fee is credited towards your immigration services if you decide to proceed with our firm.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer virtual consultations?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer consultations via video call for clients who cannot visit our office in person. Virtual consultations provide the same level of service and expertise as in-person meetings.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">What documents should I prepare for the consultation?</h3>
                <p className="text-muted-foreground">
                  For the most productive consultation, please have your education credentials, work experience details, language test results (if available), and any previous immigration applications or correspondence ready for review.
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
              Book a consultation with our immigration experts today and take the first step towards your new life in Canada.
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
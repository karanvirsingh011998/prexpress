import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      program: "Express Entry",
      year: "2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Immigration made my immigration journey smooth and stress-free. Their expert guidance helped me navigate the Express Entry system successfully. I'm now happily settled in Toronto with my family and building a new life in Canada. The team was always responsive and provided clear advice throughout the process.",
      location: "Toronto, ON"
    },
    {
      id: 2,
      name: "Michael Chen",
      program: "BC PNP",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The team at Immigration was instrumental in helping me secure a provincial nomination. Their attention to detail and personalized approach made all the difference. They identified the BC PNP as the best pathway for my situation and guided me through every step. I couldn't have done it without their expertise and support.",
      location: "Vancouver, BC"
    },
    {
      id: 3,
      name: "Priya Patel",
      program: "Family Sponsorship",
      year: "2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Thanks to Immigration, I was able to sponsor my parents to join me in Canada. Their expertise in family sponsorship made the process much easier than I expected. They were patient with all my questions and concerns, and always provided clear and honest advice. My parents are now enjoying their retirement in Canada, and we're so grateful to be together.",
      location: "Calgary, AB"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      program: "Express Entry",
      year: "2023",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "After trying to navigate the Express Entry system on my own, I realized I needed professional help. Immigration was recommended by a friend, and they exceeded my expectations. Their knowledge of the CRS scoring system helped me improve my profile significantly. Within six months, I received my ITA and am now a proud permanent resident of Canada.",
      location: "Ottawa, ON"
    },
    {
      id: 5,
      name: "Sofia Rodriguez",
      program: "Quebec Skilled Worker",
      year: "2023",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "As a French speaker, Immigration helped me navigate the Quebec Skilled Worker Program. They provided excellent guidance on the Quebec selection criteria and prepared me for the interview. Their bilingual consultants made the process so much easier. I'm now living in Montreal and loving every minute of it!",
      location: "Montreal, QC"
    },
    {
      id: 6,
      name: "James Wilson",
      program: "Atlantic Immigration Program",
      year: "2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Immigration helped me secure a job offer in Nova Scotia and guided me through the Atlantic Immigration Program. Their connections with employers in the region were invaluable. They handled all the paperwork and coordination between me, the employer, and immigration authorities. I'm now enjoying the beautiful Atlantic coast and building my career here.",
      location: "Halifax, NS"
    },
    {
      id: 7,
      name: "Aisha Mahmood",
      program: "Self-Employed Program",
      year: "2023",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "As an artist, I didn't think I would qualify for Canadian immigration. Immigration introduced me to the Self-Employed Program and helped me showcase my artistic achievements and business plan. Their creative approach to my application made all the difference. I'm now establishing my art studio in Canada and contributing to the cultural scene.",
      location: "Victoria, BC"
    },
    {
      id: 8,
      name: "Raj Singh",
      program: "Manitoba PNP",
      year: "2024",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Immigration guided me through the Manitoba Provincial Nominee Program with exceptional expertise. They helped me understand the connection to Manitoba that I needed to demonstrate and prepared a compelling application. Their knowledge of provincial programs is outstanding. My family and I are now happily settled in Winnipeg.",
      location: "Winnipeg, MB"
    },
    {
      id: 9,
      name: "Elena Petrova",
      program: "Caregiver Program",
      year: "2023",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The Home Child Care Provider Pathway seemed complicated until I consulted with Immigration. They simplified the process and helped me meet all the requirements. Their step-by-step guidance made a complex program manageable. I'm now a permanent resident and have brought my family to join me in Canada. We're building a wonderful new life here.",
      location: "Edmonton, AB"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Hear from our clients who have successfully immigrated to Canada with our help.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/30 rounded-xl p-8 md:p-12 relative">
            <Quote className="absolute text-red-600/10 h-32 w-32 -top-6 -left-6" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="md:w-1/3">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-red-600">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sofia Rodriguez"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-xl md:text-2xl text-foreground italic mb-6">
                  "As a French speaker, Immigration helped me navigate the Quebec Skilled Worker Program. They provided excellent guidance on the Quebec selection criteria and prepared me for the interview. Their bilingual consultants made the process so much easier. I'm now living in Montreal and loving every minute of it!"
                </p>
                <div>
                  <h3 className="text-xl font-semibold">Sofia Rodriguez</h3>
                  <p className="text-red-600">Quebec Skilled Worker Program, 2023</p>
                  <p className="text-muted-foreground">Montreal, QC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Client Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Read about the experiences of our clients from around the world who have successfully immigrated to Canada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.id !== 5).map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.program}, {testimonial.year}</p>
                      <p className="text-sm text-red-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our clients share their immigration journey and experience with Immigration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Testimonial</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Ahmed's Express Entry Journey</h3>
                <p className="text-sm text-muted-foreground">From application to landing in just 6 months</p>
              </div>
            </div>
            
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Testimonial</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">The Singh Family's Reunion</h3>
                <p className="text-sm text-muted-foreground">A successful family sponsorship story</p>
              </div>
            </div>
            
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Testimonial</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Maria's Provincial Nominee Success</h3>
                <p className="text-sm text-muted-foreground">From international student to permanent resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your Canadian immigration journey today and become our next success story.
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
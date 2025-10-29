import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Megaphone, Sparkles, Users, Video, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "From concept to execution, we handle every aspect of your event with precision and creativity. Our comprehensive services include venue selection, logistics coordination, vendor management, and on-site oversight. We specialize in corporate events, product launches, conferences, and social gatherings that leave lasting impressions.",
    },
    {
      icon: Megaphone,
      title: "Public Relations",
      description: "Build and maintain your brand's reputation with our strategic PR services. We craft compelling narratives, manage media relations, handle crisis communications, and create campaigns that generate positive publicity. Our team ensures your message reaches the right audience through the most effective channels.",
    },
    {
      icon: Sparkles,
      title: "Branding & Marketing",
      description: "Create a powerful brand identity that resonates with your target audience. Our services include brand strategy development, visual identity design, marketing campaigns, and digital presence optimization. We help you stand out in a crowded marketplace with authentic and memorable branding.",
    },
    {
      icon: Users,
      title: "Education & Training",
      description: "Empower your team and youth with our specialized training programs. We offer workshops in communications, event management, professional development, and industry-specific skills. Our interactive sessions are designed to inspire confidence and build practical capabilities.",
    },
    {
      icon: Video,
      title: "Media & Content Production",
      description: "Bring your stories to life with high-quality media production. From video content and photography to written materials and social media assets, we create compelling content that engages audiences across all platforms. Our production team handles everything from concept to final delivery.",
    },
    {
      icon: Heart,
      title: "CSI Projects",
      description: "Make a meaningful difference in communities through our Corporate Social Investment initiatives. We design and implement impactful programs including Industry Chats, Women's Networking Breakfast, and youth empowerment projects. Our CSI solutions align with your values while creating measurable social impact.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive solutions for events, communications, branding, and social impact
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <service.icon className="w-14 h-14 text-accent mb-6" />
                  <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our comprehensive services
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

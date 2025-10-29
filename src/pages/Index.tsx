import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";
import industryChats from "@/assets/industry-chats.jpg";
import womensBreakfast from "@/assets/womens-breakfast.jpg";
import { Calendar, Users, Megaphone, Sparkles, Video, Heart } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "Professional planning and execution of memorable events that exceed expectations.",
    },
    {
      icon: Megaphone,
      title: "PR & Communications",
      description: "Strategic public relations to amplify your brand voice and build strong relationships.",
    },
    {
      icon: Sparkles,
      title: "Brand Activations",
      description: "Creative campaigns that bring your brand to life and engage your audience.",
    },
    {
      icon: Users,
      title: "Education & Training",
      description: "Empowering youth with essential skills for personal and professional development.",
    },
    {
      icon: Video,
      title: "Media Production",
      description: "High-quality content creation that tells your story and captivates audiences.",
    },
    {
      icon: Heart,
      title: "CSI Projects",
      description: "Meaningful community initiatives driving social impact and positive change.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Fresh Ideas. <br />
            <span className="text-accent-foreground">Purposeful Impact.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Empowering youth and transforming visions into reality since 2017
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">Explore Our Work</Link>
          </Button>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-heading font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Magaga Media and Communications is a dynamic agency established in 2017, specializing in event 
              management, public relations, branding, and community impact. We bring fresh ideas and purposeful 
              impact to every project, empowering youth and driving meaningful change.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CSI Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift overflow-hidden">
              <img src={industryChats} alt="Industry Chats" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-semibold mb-3">Industry Chats</h3>
                <p className="text-muted-foreground mb-4">
                  Empowering youth through meaningful conversations with industry leaders and professionals.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/gallery">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <img src={womensBreakfast} alt="Women's Networking Breakfast" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-semibold mb-3">Women's Networking Breakfast</h3>
                <p className="text-muted-foreground mb-4">
                  Creating spaces for professional women to connect, inspire, and support each other.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/gallery">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl opacity-90">Empowering youth, transforming visions</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6 animate-slide-up">
              Established in 2017, Magaga Media and Communications is a dynamic agency specializing in 
              event management, public relations, branding, and marketing. We are passionate about creating 
              memorable experiences and building meaningful connections between brands and their audiences.
            </p>
            <p className="text-lg mb-6">
              Our team brings fresh perspectives and innovative solutions to every project, ensuring that 
              each campaign resonates with purpose and impact. We pride ourselves on our ability to transform 
              visions into reality, whether it's through captivating events, strategic communications, or 
              compelling brand activations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be a leading force in communications and events, recognized for creating impactful experiences 
                that inspire and empower communities across South Africa.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To deliver innovative and strategic solutions in event management, PR, and branding while 
                fostering youth development and creating platforms for meaningful engagement.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Purpose</h3>
              <p className="text-muted-foreground">
                To empower youth through education, training, and meaningful opportunities while driving 
                purposeful impact through every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Youth Empowerment & Training</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At the heart of our work is a commitment to youth development. Through our Industry Chats initiative 
            and various training programs, we create platforms where young people can learn from industry leaders, 
            develop professional skills, and build networks that support their career growth.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe in creating opportunities that go beyond traditional education, providing practical insights 
            and real-world experiences that prepare the next generation for success in their chosen fields.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Mnqobi Mthethwa",
      role: "Principal Executive",
      description: "Visionary leader with a passion for creating impactful experiences and empowering communities.",
    },
    {
      name: "Sbonginkosi Mthembu",
      role: "Operations & People Manager",
      description: "Strategic operations expert ensuring seamless execution and team excellence.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Team
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Meet the passionate professionals driving our vision forward
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-16 h-16 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Fresh ideas and creative solutions for every challenge
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Unwavering commitment to quality in everything we do
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Creating meaningful change in communities and businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

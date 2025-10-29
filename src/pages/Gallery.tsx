import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import industryChats from "@/assets/industry-chats.jpg";
import womensBreakfast from "@/assets/womens-breakfast.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import heroMain from "@/assets/hero-main.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: industryChats,
      title: "Industry Chats",
      category: "CSI Projects",
      description: "Youth empowerment through industry insights",
    },
    {
      image: womensBreakfast,
      title: "Women's Networking Breakfast",
      category: "CSI Projects",
      description: "Building professional networks for women",
    },
    {
      image: aboutHero,
      title: "Team Collaboration",
      category: "Behind the Scenes",
      description: "Our team bringing ideas to life",
    },
    {
      image: heroMain,
      title: "Event Excellence",
      category: "Event Management",
      description: "Creating memorable experiences",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Work
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            A showcase of our events, projects, and impact
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover-lift">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-primary-foreground">
                  <span className="text-accent text-sm font-semibold mb-2">{item.category}</span>
                  <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Highlight */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6 text-center">Community Impact Projects</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Industry Chats</h3>
                <p className="text-muted-foreground">
                  Our flagship youth empowerment initiative brings together industry professionals and aspiring 
                  young talent in meaningful conversations. Through these sessions, we provide mentorship, share 
                  industry insights, and create networking opportunities that open doors for the next generation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Women's Networking Breakfast</h3>
                <p className="text-muted-foreground">
                  A dedicated platform for professional women to connect, inspire, and support each other. These 
                  intimate breakfast sessions foster meaningful relationships, share experiences, and create a 
                  supportive community for women in business and leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

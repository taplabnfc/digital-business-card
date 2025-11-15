import { Mail, Phone, ExternalLink, Briefcase, Code, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  // Sample data - replace with actual information
  const profile = {
    name: "Alex Morgan",
    title: "Digital Solutions Expert",
    bio: "Passionate about creating innovative digital experiences that drive business growth. With over 8 years of experience in web development and digital strategy, I help businesses transform their online presence.",
    phone: "+1234567890",
    email: "alex.morgan@example.com",
    businessLink: "https://example.com",
    businessName: "Visit My Portfolio"
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Data-driven strategies to accelerate your online growth"
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description: "Expert guidance to optimize your digital operations"
    },
    {
      icon: Users,
      title: "Brand Development",
      description: "Creating compelling brand identities that resonate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col" style={{ perspective: "1500px" }}>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-4xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-3d)] transition-all duration-500 animate-scale-in hover:-translate-y-2" style={{ transformStyle: "preserve-3d" }}>
          <div className="p-8 sm:p-12 space-y-12">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-float"></div>
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-background shadow-xl transition-transform duration-500 group-hover:scale-110"
                  style={{ transform: "translateZ(30px)" }}
                />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {profile.name}
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <p className="text-center text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                {profile.bio}
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both", transformStyle: "preserve-3d" }}>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[var(--shadow-3d)]"
                size="lg"
                style={{ transform: "translateZ(20px)" }}
              >
                <a href={`tel:${profile.phone}`} className="hover:-translate-y-1 transition-transform duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Me
                </a>
              </Button>
              
              <Button
                asChild
                className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[var(--shadow-3d)]"
                size="lg"
                style={{ transform: "translateZ(20px)" }}
              >
                <a href={`mailto:${profile.email}`} className="hover:-translate-y-1 transition-transform duration-300">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:bg-muted transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-3d)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <a href={profile.businessLink} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {profile.businessName}
                </a>
              </Button>
            </div>

            {/* Services Section */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ transformStyle: "preserve-3d" }}>
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 hover:from-primary/10 hover:to-secondary/10 border border-border transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-3d)] hover:-translate-y-2"
                      style={{ 
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${index * 5}px)`
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110" style={{ transform: "translateZ(15px)" }}>
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-lg text-foreground">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>Powered by <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">@YourCompany</span></p>
      </footer>
    </div>
  );
};

export default Index;

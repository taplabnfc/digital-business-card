import { Mail, Phone, ExternalLink, Code, TrendingUp, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
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
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <Card className="mb-8 border-border">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover ring-2 ring-offset-4 ring-border"
                />
              </div>
              
              {/* Name & Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {profile.name}
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  {profile.title}
                </p>
              </div>

              <Separator className="w-16" />

              {/* Bio */}
              <p className="text-foreground/70 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Button
                  asChild
                  size="default"
                  className="font-medium"
                >
                  <a href={`tel:${profile.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Me
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="default"
                  className="font-medium"
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="font-medium"
                >
                  <a href={profile.businessLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {profile.businessName}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Services
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Comprehensive solutions for your digital needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-border hover:border-primary/50 transition-colors duration-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-base text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container max-w-4xl py-6 px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-semibold text-foreground">@YourCompany</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

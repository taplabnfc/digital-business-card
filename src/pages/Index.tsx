import {
  Mail,
  Phone,
  ExternalLink,
  Building2,
  Wallet,
  FileSpreadsheet,
  Receipt,
  FileSignature,
  FileCheck,
  Stamp,
  Medal,
  Globe2,
  Users,
  Crown,
  Briefcase,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profilePhoto from "@/assets/nfc-profile.jpeg";

const Index = () => {
  const profile = {
    name: "Mohammed Ajmal Idrisi",
    title: "Business Owner - One Consultant",
    bio: "Helping entrepreneurs understand UAE markets and tailoring the best suitable option available to start their dream business in UAE, Qatar, Oman and Saudi",
    phone: "0527868411",
    email: "ajmal@oneconsultant.ae",
    businessLink: "https://oneconsultant.ae/",
    businessName: "Visit My Portfolio",
    linkedin: "https://www.linkedin.com/in/idrisi-ajmal-2b382974/"
  };

  const services = [
    {
      icon: Building2,
      title: "Company Formation Advisor",
      description: "Expert guidance for setting up your company legally and efficiently."
    },
    {
      icon: Wallet,
      title: "Bank Account Opening Assistance",
      description: "Support in opening corporate bank accounts smoothly."
    },
    {
      icon: FileSpreadsheet,
      title: "Accounting & Bookkeeping Solutions",
      description: "Accurate and reliable accounting and bookkeeping services."
    },
    {
      icon: Receipt,
      title: "VAT Registration Assistance",
      description: "Professional help with VAT registration and compliance."
    },
    {
      icon: FileSignature,
      title: "Secretarial Services",
      description: "Corporate secretarial services to maintain legal compliance."
    },
    {
      icon: FileCheck,
      title: "Tax Registration",
      description: "Complete assistance for business tax registration."
    },
    {
      icon: Stamp,
      title: "Trademark Registration",
      description: "Secure your brand identity with trademark registration."
    },
    {
      icon: Medal,
      title: "Golden Visa Services",
      description: "Guidance and support for UAE Golden Visa applications."
    },
    {
      icon: Globe2,
      title: "Tax Residency Services",
      description: "Assistance with obtaining tax residency certificates."
    },
    {
      icon: Users,
      title: "PRO (Public Relations Officer) Services",
      description: "End-to-end PRO services for all government-related processes."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Wide range of corporate and professional support services."
    },
    {
      icon: Crown,
      title: "VIP Client Services",
      description: "Exclusive services tailored for premium clients."
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-indigo-950">
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

                <Button asChild size="default" className="font-medium">
                  <a href={`tel:${profile.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Me
                  </a>
                </Button>

                <Button asChild size="default" className="font-medium">
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>

                {/* 🔹 LinkedIn Button */}
                <Button asChild size="default" className="font-medium">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
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
              Expert Guidance for Company Formation & Compliance
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
            Powered by <span className="font-semibold text-foreground">@TapLabCompany</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

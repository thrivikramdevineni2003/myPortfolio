import { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";
import { useToast } from "@/hooks/use-toast";

interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
  };
  about: {
    bio: string;
    education: Array<{
      degree: string;
      field: string;
      institution: string;
      year: string;
    }>;
    certifications: string[];
  };
  skills: Array<{
    category: string;
    items: string[];
  }>;
  services: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
    featured: boolean;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      linkedin: string;
      github: string;
      twitter: string;
    };
  };
}

const Portfolio = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        const contentData = await response.json();
        setData(contentData);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        toast({
          title: "Error",
          description: "Failed to load portfolio content. Please check your content.json file.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Error Loading Portfolio</h1>
          <p className="text-muted-foreground">Please check your content.json file and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero personal={data.personal} contact={data.contact} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Services services={data.services} />
      <Projects projects={data.projects} />
      <Contact contact={data.contact} />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 {data.personal.name}. Built with React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Settings, Cloud } from "lucide-react";

interface ServicesProps {
  services: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
}

const Services = ({ services }: ServicesProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="h-8 w-8" />;
      case 'shield':
        return <Shield className="h-8 w-8" />;
      case 'settings':
        return <Settings className="h-8 w-8" />;
      case 'cloud':
        return <Cloud className="h-8 w-8" />;
      default:
        return <Code className="h-8 w-8" />;
    }
  };

  const getGlowClass = (index: number) => {
    const glows = ['hover:glow-primary', 'hover:glow-secondary', 'hover:glow-accent', 'hover:glow-primary'];
    return glows[index % glows.length];
  };

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Diverse Services To Meet Needs</h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions for your digital transformation needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center h-full border-border/20 hover:border-border/40 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted/20 flex items-center justify-center group-hover:bg-muted/40 transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <Badge 
                        key={feature}
                        variant="outline" 
                        className="text-xs px-2 py-1"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Megaphone, 
  Smartphone, 
  Globe, 
  Database,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Création d'applications web modernes et performantes avec les dernières technologies.",
      features: [
        "Sites web responsives",
        "Applications web complexes", 
        "E-commerce",
        "Intégration API"
      ],
      price: "À partir de 500€"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience optimale.",
      features: [
        "Maquettes et prototypes",
        "Design d'interface",
        "Expérience utilisateur",
        "Design system"
      ],
      price: "À partir de 300€"
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles cross-platform avec React Native.",
      features: [
        "Applications iOS/Android",
        "Interface native",
        "Performance optimisée",
        "Déploiement stores"
      ],
      price: "À partir de 800€"
    },
    {
      icon: Database,
      title: "Backend & API",
      description: "Développement de solutions backend robustes et d'APIs sécurisées.",
      features: [
        "APIs REST/GraphQL",
        "Base de données",
        "Authentification",
        "Hébergement cloud"
      ],
      price: "À partir de 400€"
    },
    {
      icon: Megaphone,
      title: "Branding Digital",
      description: "Création d'identité visuelle forte et cohérente pour votre marque.",
      features: [
        "Logo et charte graphique",
        "Identité visuelle",
        "Marketing digital",
        "Stratégie de marque"
      ],
      price: "À partir de 250€"
    },
    {
      icon: Globe,
      title: "Optimisation & SEO",
      description: "Amélioration des performances et du référencement de votre site web.",
      features: [
        "Optimisation SEO",
        "Performance web",
        "Analytics",
        "Maintenance"
      ],
      price: "À partir de 200€"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Discussion de vos besoins et objectifs pour définir le projet ensemble."
    },
    {
      step: "02", 
      title: "Conception",
      description: "Création des maquettes et planification de l'architecture technique."
    },
    {
      step: "03",
      title: "Développement", 
      description: "Réalisation du projet avec des points de validation réguliers."
    },
    {
      step: "04",
      title: "Livraison",
      description: "Déploiement, formation et accompagnement pour la mise en ligne."
    }
  ];

  return (
    <Layout
      title="Services - Développement Web & Design UI/UX | Jumael Kamga"
      description="Découvrez mes services de développement web, design UI/UX, applications mobiles et solutions digitales personnalisées."
      keywords="services, développement web, design UI/UX, applications mobiles, backend, API, branding, SEO, Jumael Kamga"
    >
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Mes Services
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Solutions digitales complètes pour donner vie à vos projets avec expertise et créativité.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-text-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-text-secondary">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <p className="text-primary font-semibold mb-4">{service.price}</p>
                      <Button 
                        variant="outline"
                        className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Mon Processus de Travail
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Une approche structurée pour garantir la réussite de votre projet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <Card key={index} className="bg-gradient-card border-border-light shadow-card text-center group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                      <span className="text-primary-foreground font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {process.title}
                    </h3>
                    <p className="text-text-secondary">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Technologies Utilisées
              </h2>
              <p className="text-text-secondary text-lg">
                Stack technique moderne pour des solutions performantes.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {[
                "React", "Node.js", "TypeScript", "MongoDB", 
                "PostgreSQL", "AWS", "Docker", "Figma",
                "Next.js", "Express", "Python", "Firebase"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-card border border-border-light rounded-lg p-4 text-center hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary-foreground font-bold text-xs">
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-text-primary text-sm font-medium">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et voyons comment je peux vous aider à concrétiser vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
              >
                <a href="/contact">
                  Commencer un Projet
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border-light hover:border-primary hover:bg-primary/10"
              >
                <a href="https://wa.me/237679454785" target="_blank" rel="noopener noreferrer">
                  Discuter sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
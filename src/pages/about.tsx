import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, Code, Palette, Globe, Database } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const skills = [
    { icon: Code, name: "Frontend Development", level: 95 },
    { icon: Database, name: "Backend Development", level: 90 },
    { icon: Palette, name: "UI/UX Design", level: 85 },
    { icon: Globe, name: "Web Technologies", level: 92 }
  ];

  return (
    <Layout
      title="À Propos - Jumael Kamga | Développeur Web & Designer UI/UX"
      description="Découvrez le parcours et les compétences de Jumael Kamga, développeur web passionné et designer UI/UX créatif basé à Douala."
      keywords="à propos, Jumael Kamga, parcours, compétences, développeur web, designer UI/UX, expérience"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              À Propos de Moi
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Découvrez mon parcours et ma passion pour le développement web et le design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-card rounded-2xl shadow-card border border-border-light overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url(${aboutBg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10" />
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">JK</span>
                      </div>
                      <p className="text-text-primary font-semibold">Jumael Kamga</p>
                      <p className="text-text-secondary text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Qui suis-je ?
                </h2>
                <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                  <p>
                    Je suis Jumael Kamga, un développeur web passionné et étudiant en informatique 
                    basé à Douala, Cameroun. Depuis plus de 3 ans, je me spécialise dans la création 
                    de solutions digitales innovantes et performantes.
                  </p>
                  <p>
                    Mon expertise couvre le développement frontend et backend, ainsi que le design 
                    UI/UX. J'ai une approche centrée sur l'utilisateur et je m'efforce de créer 
                    des expériences web fluides et intuitives.
                  </p>
                  <p>
                    Actuellement, je poursuis mes études en informatique tout en travaillant sur 
                    des projets variés, de sites vitrines aux applications web complexes. 
                    J'aime relever de nouveaux défis et apprendre constamment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                >
                  <a href="mailto:jumaelkamga1@gmail.com">
                    <Mail className="mr-2 w-5 h-5" />
                    Me Contacter
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border-light hover:border-primary hover:bg-primary/10"
                >
                  <a href="/cv-jumael-kamga.pdf" download>
                    <Download className="mr-2 w-5 h-5" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-text-primary text-center mb-12">
              Mes Compétences
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">
                        {skill.name}
                      </h4>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-secondary rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-text-secondary text-sm">{skill.level}%</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-text-primary text-center mb-12">
              Mon Parcours
            </h3>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="bg-gradient-card border-border-light shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">3+</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        Développeur Web Freelance
                      </h4>
                      <p className="text-primary font-medium mb-2">2021 - Présent</p>
                      <p className="text-text-secondary">
                        Création de sites web et d'applications pour diverses entreprises et particuliers. 
                        Spécialisation dans les technologies modernes comme React, Node.js, et les designs responsives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border-light shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">📚</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        Étudiant en Informatique
                      </h4>
                      <p className="text-primary font-medium mb-2">2020 - Présent</p>
                      <p className="text-text-secondary">
                        Formation approfondie en informatique avec spécialisation en développement web 
                        et technologies modernes. Acquisition de solides bases théoriques et pratiques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border-light shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">🎨</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        Designer UI/UX
                      </h4>
                      <p className="text-primary font-medium mb-2">2022 - Présent</p>
                      <p className="text-text-secondary">
                        Développement de compétences en design d'interface et expérience utilisateur. 
                        Création de maquettes et prototypes pour optimiser l'ergonomie des applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Travaillons Ensemble
            </h3>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Je serais ravi de discuter avec vous 
              de vos besoins et de voir comment je peux vous aider à les concrétiser.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
            >
              <a href="/contact">
                Démarrer un Projet
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
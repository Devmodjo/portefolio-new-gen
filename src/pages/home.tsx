import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import MyStack from "@/components/MyStack.tsx";
const Home = () => {
  return (
    <Layout 
      title = "Modjo victor- Développeur Java React & Software engineer student"
      description = "Portfolio de Modjo victor, développeur web, mobile, desktop spécialisé dans la création de solutions digitales innovantes et performantes."
      keywords = "développeur Java, développeur backend, Java, React, développement web, portfolio, Modjo Victor, solutions digitales">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MyStack/>
    </Layout>
  );
};

export default Home;
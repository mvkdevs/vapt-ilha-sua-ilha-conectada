 import HeroSection from "@/components/landing/HeroSection";
 import PainSection from "@/components/landing/PainSection";
 import SolutionSection from "@/components/landing/SolutionSection";
 import HowItWorksSection from "@/components/landing/HowItWorksSection";
 import PlansSection from "@/components/landing/PlansSection";
 import LojistaSection from "@/components/landing/LojistaSection";
 import FAQSection from "@/components/landing/FAQSection";
 import CTASection from "@/components/landing/CTASection";
 import Footer from "@/components/landing/Footer";
 
 const Index = () => {
   return (
     <main className="overflow-hidden">
       <HeroSection />
       <PainSection />
       <SolutionSection />
       <HowItWorksSection />
       <PlansSection />
       <LojistaSection />
       <FAQSection />
       <CTASection />
       <Footer />
     </main>
   );
 };
 
 export default Index;

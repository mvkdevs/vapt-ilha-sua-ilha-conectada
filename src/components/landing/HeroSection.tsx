import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bike, Store, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-motoboy.jpg";
import logo from "@/assets/logo-vapt-ilha.png";
import PreRegistrationModal from "./PreRegistrationModal";

const HeroSection = () => {
  const [motoboyModalOpen, setMotoboyModalOpen] = useState(false);
  const [lojistaModalOpen, setLojistaModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        {/* Radar Animation Background - repositioned to be behind logo */}
        <div className="absolute right-10 md:right-20 lg:right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-radar-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-radar-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-radar-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-radar-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                Chega de ficar amarrado.
                <span className="block text-secondary mt-2">
                  No Vapt Ilha, pedido circula.
                </span>
                <span className="block text-primary-foreground/90 text-3xl md:text-4xl lg:text-5xl mt-2">
                  Você também.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl"
              >
                O Vapt Ilha conecta lojistas e motoboys em tempo real, eliminando a 
                dependência do entregador fixo e a ociosidade de quem fica parado esperando pedido.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  variant="motoboy" 
                  size="lg" 
                  className="group text-sm sm:text-base whitespace-normal h-auto py-3 px-4 sm:px-6"
                  onClick={() => setMotoboyModalOpen(true)}
                >
                  <Bike className="w-5 h-5" />
                  <span className="text-left">Sou Motoboy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="lojista" 
                  size="lg" 
                  className="group text-sm sm:text-base whitespace-normal h-auto py-3 px-4 sm:px-6"
                  onClick={() => setLojistaModalOpen(true)}
                >
                  <Store className="w-5 h-5" />
                  <span className="text-left">Sou Lojista</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              {/* Trust Signal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 text-primary-foreground/60 text-sm"
              >
                🏝️ Feito para a Ilha de Itaparica · Simples. Justo. Do jeito da Ilha.
              </motion.p>
            </div>

            {/* Logo - Large and Prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-b from-secondary/30 via-accent/20 to-transparent scale-110" />
                <img 
                  src={logo} 
                  alt="Vapt Ilha" 
                  className="relative z-10 w-64 h-auto md:w-80 lg:w-96 drop-shadow-2xl animate-float" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PreRegistrationModal 
        open={motoboyModalOpen} 
        onOpenChange={setMotoboyModalOpen} 
        type="motoboy" 
      />
      <PreRegistrationModal 
        open={lojistaModalOpen} 
        onOpenChange={setLojistaModalOpen} 
        type="lojista" 
      />
    </>
  );
};

export default HeroSection;

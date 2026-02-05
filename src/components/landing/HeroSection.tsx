 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Bike, Store, ArrowRight } from "lucide-react";
 import heroImage from "@/assets/hero-motoboy.jpg";
 import logo from "@/assets/logo-vapt-ilha.jpeg";
 
 const HeroSection = () => {
   return (
     <section className="relative min-h-screen flex items-center overflow-hidden">
       {/* Background Image with Overlay */}
       <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${heroImage})` }}
       >
         <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
       </div>
 
       {/* Radar Animation Background */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" />
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" style={{ animationDelay: "0.5s" }} />
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" style={{ animationDelay: "1s" }} />
       </div>
 
       <div className="container relative z-10 py-20">
         <div className="max-w-3xl">
           {/* Logo */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="mb-8"
           >
             <img src={logo} alt="Vapt Ilha" className="h-20 w-auto" />
           </motion.div>
 
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
             <Button variant="motoboy" size="xl" className="group">
               <Bike className="w-5 h-5" />
               Sou Motoboy – Quero rodar a Ilha toda
               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </Button>
             <Button variant="lojista" size="xl" className="group">
               <Store className="w-5 h-5" />
               Sou Lojista – Quero entregadores disponíveis
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
       </div>
     </section>
   );
 };
 
 export default HeroSection;
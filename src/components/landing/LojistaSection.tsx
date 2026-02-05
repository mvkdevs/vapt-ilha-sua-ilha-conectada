import { useState } from "react";
import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Store, ArrowRight, CheckCircle2, Clock, Users, ThumbsUp } from "lucide-react";
import PreRegistrationModal from "./PreRegistrationModal";
 
 const benefits = [
   { icon: Clock, text: "Mais entregas" },
   { icon: CheckCircle2, text: "Menos atraso" },
   { icon: ThumbsUp, text: "Mais cliente satisfeito" },
 ];
 
 const LojistaSection = () => {
  const [lojistaModalOpen, setLojistaModalOpen] = useState(false);

   return (
    <>
     <section className="py-20 bg-gradient-to-br from-lojista/10 to-lojista/5">
       <div className="container">
         <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lojista mb-8">
               <Store className="w-10 h-10 text-lojista-foreground" />
             </div>
 
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
               Seu pedido não espera.
               <span className="block text-lojista mt-2">
                 O cliente também não.
               </span>
             </h2>
 
             <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
               Com o Vapt Ilha, você não depende mais de um entregador fixo.
               <strong className="text-foreground block mt-2">
                 Sempre tem alguém disponível no radar, pronto pra sair.
               </strong>
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-wrap justify-center gap-6 mb-10"
           >
             {benefits.map((benefit, index) => (
               <div
                 key={index}
                 className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-md border border-lojista/20"
               >
                 <benefit.icon className="w-5 h-5 text-lojista" />
                 <span className="font-semibold text-foreground">{benefit.text}</span>
               </div>
             ))}
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
           >
              <Button 
                variant="lojista" 
                size="lg" 
                className="group"
                onClick={() => setLojistaModalOpen(true)}
              >
               <Store className="w-5 h-5" />
               Quero meu negócio no radar
               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
             </Button>
           </motion.div>
         </div>
       </div>
     </section>

      <PreRegistrationModal 
        open={lojistaModalOpen} 
        onOpenChange={setLojistaModalOpen} 
        type="lojista" 
      />
    </>
   );
 };
 
 export default LojistaSection;
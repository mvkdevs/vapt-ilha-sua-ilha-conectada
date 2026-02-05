 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Check, Star, Zap, Bike, ArrowRight } from "lucide-react";
 
 const plans = [
   {
     name: "Start",
     tagline: "Quem está começando",
     benefit: "Acesso básico ao radar",
     highlight: "Recebe pedidos depois",
     icon: Bike,
     featured: false,
   },
   {
     name: "Pro",
     tagline: "Quem quer constância",
     benefit: "Recebe pedidos antes do Start",
     highlight: "Mais chances, menos espera",
     icon: Star,
     featured: true,
   },
   {
     name: "Turbo",
     tagline: "Quem vive de entrega",
     benefit: "Prioridade máxima no radar",
     highlight: "Vê o pedido primeiro",
     icon: Zap,
     featured: false,
   },
 ];
 
 const PlansSection = () => {
   return (
     <section className="py-20 bg-muted/50">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-4"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
             Quanto mais visibilidade,{" "}
             <span className="text-secondary">mais corrida</span>.
           </h2>
           <p className="text-muted-foreground text-lg">
             Você escolhe o plano. Você controla seu ritmo.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-6 mt-12">
           {plans.map((plan, index) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className={`relative rounded-2xl p-8 ${
                 plan.featured
                   ? "bg-primary text-primary-foreground border-2 border-secondary shadow-2xl scale-105"
                   : "bg-card border-2 border-border"
               }`}
             >
               {plan.featured && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                   <Star className="w-4 h-4" /> Mais Popular
                 </div>
               )}
 
               <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                 plan.featured ? "bg-secondary" : "bg-motoboy/10"
               }`}>
                 <plan.icon className={`w-7 h-7 ${
                   plan.featured ? "text-secondary-foreground" : "text-motoboy"
                 }`} />
               </div>
 
               <h3 className={`text-2xl font-display font-bold mb-2 ${
                 plan.featured ? "text-primary-foreground" : "text-foreground"
               }`}>
                 {plan.name}
               </h3>
               
               <p className={`text-sm mb-6 ${
                 plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
               }`}>
                 {plan.tagline}
               </p>
 
               <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <Check className={`w-5 h-5 mt-0.5 shrink-0 ${
                     plan.featured ? "text-secondary" : "text-lojista"
                   }`} />
                   <span className={plan.featured ? "text-primary-foreground/90" : "text-foreground"}>
                     {plan.benefit}
                   </span>
                 </div>
                 <div className={`text-sm font-medium px-3 py-2 rounded-lg ${
                   plan.featured 
                     ? "bg-secondary/20 text-secondary" 
                     : "bg-muted text-muted-foreground"
                 }`}>
                   {plan.highlight}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Radar Legend */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="text-center mt-8 mb-10"
         >
           <p className="text-muted-foreground flex items-center justify-center gap-2">
             📡 Quem está em plano superior recebe o pedido alguns segundos antes.
           </p>
         </motion.div>
 
         {/* CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="text-center"
         >
           <Button variant="motoboy" size="xl" className="group">
             <Bike className="w-5 h-5" />
             Quero escolher meu plano e rodar a Ilha
             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </Button>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default PlansSection;
 import { motion } from "framer-motion";
 import { UserPlus, Radio, Package } from "lucide-react";
 
 const steps = [
   {
     number: "1",
     icon: UserPlus,
     title: "Cadastro",
     description: "Motoboys e lojistas se cadastram em poucos minutos.",
   },
   {
     number: "2",
     icon: Radio,
     title: "Radar em Tempo Real",
     description: "Quando surge um pedido, ele entra no radar. Motoboys disponíveis recebem o aviso.",
   },
   {
     number: "3",
     icon: Package,
     title: "Entrega",
     description: "Quem pega primeiro, faz a entrega. Sem amarração. Sem espera desnecessária.",
   },
 ];
 
 const HowItWorksSection = () => {
   return (
     <section className="py-20 bg-background">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
             Como funciona o{" "}
             <span className="text-secondary">Vapt Ilha</span>
           </h2>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-8">
           {steps.map((step, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.15 }}
               className="relative"
             >
               {/* Connector Line */}
               {index < steps.length - 1 && (
                 <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-secondary/30" />
               )}
 
               <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-secondary/50 transition-all hover:shadow-xl group text-center">
                 {/* Step Number */}
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm">
                   {step.number}
                 </div>
 
                 {/* Icon */}
                 <div className="w-20 h-20 rounded-2xl bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mx-auto mb-6 transition-colors">
                   <step.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
                 </div>
 
                 <h3 className="text-xl font-display font-bold text-foreground mb-3">
                   {step.title}
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">
                   {step.description}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default HowItWorksSection;
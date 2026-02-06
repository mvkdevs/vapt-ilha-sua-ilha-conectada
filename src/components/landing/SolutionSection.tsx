 import { motion } from "framer-motion";
 import { Radar, CheckCircle2 } from "lucide-react";
 
 const SolutionSection = () => {
   const features = [
     "Pedidos aparecem para os disponíveis mais próximos.",
     "Entregadores são notificados e escolhem qual pedido aceitar.",
     "Lojistas nunca ficam sem entregadores. Entregadores nunca ficam sem entregas.",
   ];
 
   return (
     <section className="py-20 bg-primary relative overflow-hidden">
       {/* Radar Animation Background */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" />
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" style={{ animationDelay: "0.5s" }} />
         <div className="absolute inset-0 rounded-full border-2 border-secondary animate-radar-pulse" style={{ animationDelay: "1s" }} />
         <div className="absolute inset-1/4 rounded-full bg-secondary/20" />
       </div>
 
       <div className="container relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto"
         >
           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-8">
             <Radar className="w-10 h-10 text-secondary-foreground" />
           </div>
 
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
             O problema nunca foi falta de entrega.
             <span className="block text-secondary mt-2">
               Foi falta de conexão.
             </span>
           </h2>
 
           <p className="text-xl text-primary-foreground/80 mb-10">
             O Vapt Ilha resolve isso com um{" "}
             <strong className="text-secondary">Radar em Tempo Real</strong>.
           </p>
 
           <div className="grid sm:grid-cols-3 gap-6">
             {features.map((feature, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="flex items-start gap-3 bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm"
               >
                 <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                 <span className="text-primary-foreground text-left font-medium">
                   {feature}
                 </span>
               </motion.div>
             ))}
           </div>
 
           <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="mt-10 text-secondary text-xl font-display font-semibold"
           >
             Simples. Justo. Do jeito da Ilha.
           </motion.p>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SolutionSection;
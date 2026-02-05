 import { motion } from "framer-motion";
 import { Clock, MapPinOff, AlertTriangle, Users } from "lucide-react";
 
 const PainSection = () => {
   return (
     <section className="py-20 bg-card">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
             Todo mundo perde quando fica{" "}
             <span className="text-destructive">preso</span>.
           </h2>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
           {/* Motoboy Pain */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-motoboy/5 rounded-2xl p-8 border-2 border-motoboy/20 hover:border-motoboy/40 transition-colors"
           >
             <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-xl bg-motoboy flex items-center justify-center">
                 <Clock className="w-7 h-7 text-motoboy-foreground" />
               </div>
               <h3 className="text-2xl font-display font-bold text-motoboy">
                 Para o Motoboy
               </h3>
             </div>
             
             <div className="space-y-4 text-muted-foreground">
               <p className="text-lg leading-relaxed">
                 Você chega cedo, fica parado, olha o celular…
                 <br />
                 <strong className="text-foreground">O pedido não sai.</strong>
               </p>
               <p className="text-lg leading-relaxed">
                 Enquanto isso, tem entrega rolando do outro lado da Ilha — 
                 <span className="text-destructive font-semibold"> e você não vê.</span>
               </p>
               <div className="pt-4 border-t border-motoboy/20">
                 <p className="flex items-start gap-3">
                   <MapPinOff className="w-5 h-5 text-destructive mt-1 shrink-0" />
                   <span>
                     Ficar "amarrado" a um único lugar <strong className="text-destructive">mata seu ganho e sua liberdade.</strong>
                   </span>
                 </p>
               </div>
             </div>
           </motion.div>
 
           {/* Lojista Pain */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="bg-lojista/5 rounded-2xl p-8 border-2 border-lojista/20 hover:border-lojista/40 transition-colors"
           >
             <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-xl bg-lojista flex items-center justify-center">
                 <AlertTriangle className="w-7 h-7 text-lojista-foreground" />
               </div>
               <h3 className="text-2xl font-display font-bold text-lojista">
                 Para o Lojista
               </h3>
             </div>
             
             <div className="space-y-4 text-muted-foreground">
               <p className="text-lg leading-relaxed">
                 Seu entregador saiu pra longe.
                 <br />
                 <strong className="text-foreground">A cozinha cheia. Pedido parado. Cliente reclamando.</strong>
               </p>
               <div className="pt-4 border-t border-lojista/20">
                 <p className="flex items-start gap-3">
                   <Users className="w-5 h-5 text-destructive mt-1 shrink-0" />
                   <span>
                     Depender de uma pessoa só <strong className="text-destructive">trava seu negócio.</strong>
                   </span>
                 </p>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default PainSection;
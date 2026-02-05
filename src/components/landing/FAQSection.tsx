 import { motion } from "framer-motion";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 
 const faqs = [
   {
     question: "Isso substitui meu entregador fixo?",
     answer: "Não necessariamente. Você pode continuar com ele e usar o radar como apoio quando precisar.",
   },
   {
     question: "É seguro liberar pedidos para vários motoboys?",
     answer: "Sim. Todos passam por cadastro e validação. Você sabe quem aceitou a entrega.",
   },
   {
     question: "O motoboy é obrigado a pegar pedido?",
     answer: "Não. Ele escolhe as corridas que fazem sentido pra ele.",
   },
   {
     question: "Como o radar decide quem recebe o pedido primeiro?",
     answer: "Pela disponibilidade e pelo plano contratado. Planos superiores recebem o aviso antes.",
   },
   {
     question: "Funciona em toda a Ilha de Itaparica?",
     answer: "Sim. A ideia é justamente rodar a Ilha toda, sem ficar preso a um ponto só.",
   },
 ];
 
 const FAQSection = () => {
   return (
     <section className="py-20 bg-card">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
             Dúvidas frequentes
           </h2>
           <p className="text-muted-foreground text-lg">
             Tudo que você precisa saber sobre o Vapt Ilha.
           </p>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="max-w-3xl mx-auto"
         >
           <Accordion type="single" collapsible className="space-y-4">
             {faqs.map((faq, index) => (
               <AccordionItem
                 key={index}
                 value={`item-${index}`}
                 className="bg-background rounded-xl border-2 border-border px-6 data-[state=open]:border-secondary/50 transition-colors"
               >
                 <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary hover:no-underline py-5">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-5">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;
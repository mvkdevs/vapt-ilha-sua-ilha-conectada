import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Store, ArrowRight, Clock, Users, ThumbsUp,
  Smartphone, MapPin, Zap, TrendingUp, ShieldCheck,
  Wallet
} from "lucide-react";
import PreRegistrationModal from "./PreRegistrationModal";

const steps = [
  {
    icon: Smartphone,
    title: "1. O Pedido Chegou",
    description: "Você recebe o pedido do cliente pelo seu WhatsApp ou sistema de vendas normal.",
  },
  {
    icon: MapPin,
    title: "2. Chame no Radar",
    description: "Acesse o Vapt Ilha e lance a entrega. O sistema notifica os entregadores próximos.",
  },
  {
    icon: Zap,
    title: "3. Entrega Rápida",
    description: "O motoboy aceita, coleta o produto e leva até o cliente. Você acompanha tudo.",
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "Custo Variável",
    description: "Sem salário fixo ou encargos. Pague apenas quando tiver entrega para fazer.",
  },
  {
    icon: Clock,
    title: "Menos Espera",
    description: "Com vários entregadores no radar, seu cliente recebe o pedido muito mais rápido.",
  },
  {
    icon: Users,
    title: "Expansão de Área",
    description: "Atenda bairros que antes ficavam longe demais para sua equipe fixa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Entregadores cadastrados e validados. Saiba exatamente quem está levando seu produto.",
  },
  {
    icon: TrendingUp,
    title: "Foco nas Vendas",
    description: "Deixe a logística com a gente e foque no que importa: vender mais e melhor.",
  },
  {
    icon: ThumbsUp,
    title: "Cliente Satisfeito",
    description: "Entrega rápida e segura gera boas avaliações e fideliza sua clientela.",
  },
];

const LojistaSection = () => {
  const [lojistaModalOpen, setLojistaModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-lojista/5 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lojista/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lojista/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lojista/10 text-lojista mb-6">
                <Store className="w-8 h-8" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Potencialize sua entrega.
                <span className="block text-lojista">
                  Sem dor de cabeça.
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforme sua logística em vantagem competitiva.
                Entregadores disponíveis sob demanda para sua loja vender mais.
              </p>
            </motion.div>
          </div>

          {/* How it Works Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Veja como é fácil</h3>
            <p className="text-muted-foreground">Em apenas 3 passos sua entrega está a caminho.</p>
          </motion.div>

          {/* How it Works Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-lojista/20 to-transparent z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-lojista/10 flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-10 h-10 text-lojista" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Por que usar o Vapt Ilha?</h3>
              <p className="text-muted-foreground">Benefícios reais para o seu negócio.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border hover:border-lojista/30 transition-colors shadow-sm"
                >
                  <benefit.icon className="w-8 h-8 text-lojista mb-4" />
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              variant="lojista"
              size="xl"
              className="group text-wrap shadow-lg text-wrap  shadow-lojista/20 hover:shadow-lojista/40 transition-all duration-300"
              onClick={() => setLojistaModalOpen(true)}
            >
              <Store className="w-5 h-5 mr-2" />
              Quero meu negócio no radar
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Garanta acesso antecipado gratuito ao Vapt Ilha e outros bônus de Fundador.
            </p>
          </motion.div>
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
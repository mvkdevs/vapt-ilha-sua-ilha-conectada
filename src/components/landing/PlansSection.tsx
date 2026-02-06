import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Check, Star, Zap, Bike, ArrowRight, Radio, Eye, Wrench, 
  Compass, BarChart3, Globe, Shield, Headphones, MapPin, 
  Crown, Rocket 
} from "lucide-react";
import PreRegistrationModal from "./PreRegistrationModal";

const plans = [
  {
    name: "Start",
    tagline: "Comece a rodar sem ficar parado",
    description: "Ideal para quem está entrando agora no sistema.",
    subtitle: "Tudo o que você precisa para sair da ociosidade e começar a ganhar na Ilha:",
    color: "plan-start",
    colorClass: "bg-plan-start",
    borderClass: "border-plan-start",
    icon: Bike,
    featured: false,
    features: [
      { icon: Radio, text: "Acesso ao Radar Vapt Ilha em tempo real" },
      { icon: Eye, text: "Visibilidade para lojistas ativos da sua zona" },
      { icon: Wrench, text: "Suporte básico" },
      { icon: Compass, text: "Liberdade total para escolher quais pedidos aceitar" },
      { icon: BarChart3, text: "Histórico básico de entregas e ganhos" },
    ],
    cta: "Perfeito para aprender o fluxo, ganhar avaliações e subir de nível.",
  },
  {
    name: "Pro",
    tagline: "Para quem vive da pista",
    description: "O plano de quem roda todo dia e não pode perder pedido.",
    subtitle: "Aqui você já entra em vantagem:",
    color: "plan-pro",
    colorClass: "bg-plan-pro",
    borderClass: "border-plan-pro",
    icon: Star,
    featured: true,
    features: [
      { icon: Zap, text: "Prioridade de Notificação", highlight: "visualiza pedidos antes dos usuários Start" },
      { icon: Globe, text: "Acesso simultâneo a múltiplas zonas" },
      { icon: Shield, text: "Selo de Credibilidade no perfil", highlight: "lojistas confiam mais, chamam mais" },
      { icon: Headphones, text: "Suporte prioritário" },
      { icon: BarChart3, text: "Relatórios completos de corridas e faturamento" },
      { icon: Radio, text: "Radar sempre ativo, sem limitação de área" },
    ],
    cta: "Menos espera. Mais corridas.",
  },
  {
    name: "Turbo",
    tagline: "Domine a pista",
    description: "O topo da hierarquia do Vapt Ilha.",
    subtitle: "Para quem quer estar sempre na frente, em qualquer ponto da Ilha:",
    color: "plan-turbo",
    colorClass: "bg-plan-turbo",
    borderClass: "border-plan-turbo",
    icon: Rocket,
    featured: false,
    features: [
      { icon: Rocket, text: "Prioridade Máxima de Notificação", highlight: "vê o pedido no exato momento em que o lojista lança" },
      { icon: MapPin, text: "Acesso ilimitado a todas as zonas da Ilha" },
      { icon: Crown, text: "Badge Ouro de Destaque no perfil" },
      { icon: Headphones, text: "Fila VIP de suporte" },
      { icon: BarChart3, text: "Relatórios avançados de ganhos e performance" },
      { icon: Star, text: "Máxima exposição para lojistas bem avaliados" },
    ],
    cta: "Você não corre atrás de pedido. O pedido te procura.",
  },
];

const PlansSection = () => {
  const [motoboyModalOpen, setMotoboyModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 to-muted/30 bg-gradient-to-b from-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Mais prioridade. Mais corridas.{" "}
              <span className="text-secondary">Mais controle da sua rotina.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No Vapt Ilha, quem escolhe o pedido é você. Os planos não te prendem — te colocam na frente.
            </p>
            <p className="text-foreground/80 text-base mt-4">
              Quanto maior a prioridade, mais oportunidades aparecem primeiro no seu radar. <strong>Simples assim.</strong>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                  plan.featured
                    ? "bg-primary text-primary-foreground border-2 border-secondary shadow-2xl lg:scale-105"
                    : "bg-card border-2 border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" /> Mais Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${plan.colorClass}`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  plan.featured ? "bg-secondary/20 text-secondary" : `${plan.colorClass}/10 text-${plan.color}`
                }`}>
                  {plan.name === "Start" && "🟢"} 
                  {plan.name === "Pro" && "🔵"} 
                  {plan.name === "Turbo" && "🟡"} 
                  {" MOTO " + plan.name.toUpperCase()}
                </div>

                <h3 className={`text-2xl font-display font-bold mb-2 ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.tagline}
                </h3>
                
                <p className={`text-sm mb-2 ${
                  plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>

                <p className={`text-sm font-medium mb-4 ${
                  plan.featured ? "text-primary-foreground/90" : "text-foreground/80"
                }`}>
                  {plan.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <feature.icon className={`w-5 h-5 mt-0.5 shrink-0 ${
                        plan.featured ? "text-secondary" : `text-${plan.color}`
                      }`} style={{ color: plan.featured ? undefined : `hsl(var(--${plan.color}))` }} />
                      <div>
                        <span className={plan.featured ? "text-primary-foreground/90" : "text-foreground"}>
                          {feature.text}
                        </span>
                        {feature.highlight && (
                          <span className={`block text-xs mt-0.5 ${
                            plan.featured ? "text-secondary/80" : "text-muted-foreground"
                          }`}>
                            ({feature.highlight})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Text */}
                <div className={`text-sm font-medium px-4 py-3 rounded-lg mt-6 ${
                  plan.featured 
                    ? "bg-secondary/20 text-secondary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  👉 {plan.cta}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              variant="motoboy" 
              size="xl" 
              className="group text-wrap"
              onClick={() => setMotoboyModalOpen(true)}
            >
              <Bike className="w-5 h-5" />
              Faça seu pré-cadastro e saia na frente!
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <PreRegistrationModal 
        open={motoboyModalOpen} 
        onOpenChange={setMotoboyModalOpen} 
        type="motoboy" 
      />
    </>
  );
};

export default PlansSection;

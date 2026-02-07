import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Star, Trophy, TrendingUp, ArrowRight, Bike,
  CheckCircle, Scale, Percent, Unlock, Crown,
  Store, Clock, AlertTriangle, ThumbsUp
} from "lucide-react";
import PreRegistrationModal from "./PreRegistrationModal";

const levels = [
  { name: "Novato", icon: "🔰", color: "text-muted-foreground" },
  { name: "Piloto", icon: "🏍️", color: "text-plan-start" },
  { name: "Craque", icon: "⭐", color: "text-plan-pro" },
  { name: "Mestre", icon: "🏆", color: "text-secondary" },
  { name: "Lenda", icon: "👑", color: "text-plan-turbo" },
];

const GamificationSection = () => {
  const [motoboyModalOpen, setMotoboyModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background  bg-muted/50 ">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Trophy className="w-4 h-4" />
              SUA CARREIRA, SEU NÍVEL
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Aqui, entregar bem faz você{" "}
              <span className="text-secondary">subir. Sempre.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No Vapt Ilha, você não é só mais um motoboy. Você constrói reputação, nível e vantagem real no radar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* XP System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border-2 border-border shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Como você ganha XP
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Você sobe de nível quando faz o que já sabe fazer bem:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-plan-start" />
                  <div>
                    <p className="font-semibold text-foreground">Entrega concluída = XP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <Star className="w-6 h-6 text-plan-turbo" />
                  <div>
                    <p className="font-semibold text-foreground">Avaliação 5 estrelas do lojista = XP extra</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-plan-pro" />
                  <div>
                    <p className="font-semibold text-foreground">Constância e qualidade aceleram sua progressão</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-foreground/80 font-medium">
                Quanto mais profissional você é, mais o sistema te favorece.
              </p>
            </motion.div>

            {/* 360 Evaluation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border-2 border-border shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Avaliação 360º
                </h3>
              </div>

              <p className="text-lg font-semibold text-foreground mb-4">
                Respeito dos dois lados
              </p>
              <p className="text-muted-foreground mb-6">
                Aqui não existe relação injusta.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Store className="w-6 h-6 text-lojista shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">O lojista avalia o motoboy</p>
                    <p className="text-sm text-muted-foreground">→ Gera XP e fortalece seu perfil</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Bike className="w-6 h-6 text-motoboy shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">O motoboy avalia o lojista</p>
                    <p className="text-sm text-muted-foreground">→ Cria reputação do estabelecimento</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <p className="font-semibold text-foreground mb-2">O que isso muda na prática?</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <ThumbsUp className="w-4 h-4 text-plan-start shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Lojistas que respeitam o tempo do entregador ganham <strong>Selos de Confiança</strong></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-foreground/80">Restaurantes que atrasam preparo ou seguram motoboy no balcão são <strong>sinalizados no sistema</strong></p>
                  </div>
                </div>
                <p className="text-sm font-bold text-secondary mt-3">
                  👉 Quem atrapalha o fluxo perde prioridade. Quem respeita, ganha.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Level Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-display font-bold">
                  Benefícios do Nível
                </h3>
              </div>

              <p className="text-primary-foreground/80 text-lg mb-8">
                Subir de nível não é status. É <strong>vantagem real</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <Scale className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-lg mb-2">Desempate Inteligente</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Se dois motoboys do mesmo plano visualizam o pedido, quem tem maior nível fica com a prioridade
                  </p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <Percent className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-lg mb-2">Descontos Progressivos</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Descontos progressivos na renovação da assinatura. Quanto mais alto o nível, mais barato fica continuar no topo
                  </p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <Unlock className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-lg mb-2">Níveis Especiais</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Desbloqueio de níveis exclusivos com benefícios únicos
                  </p>
                </div>
              </div>

              {/* Levels */}
              <div className="flex flex-wrap justify-center gap-4">
                {levels.map((level, idx) => (
                  <div
                    key={level.name}
                    className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full"
                  >
                    <span className="text-xl">{level.icon}</span>
                    <span className="font-semibold">{level.name}</span>
                    {idx === levels.length - 1 && <Crown className="w-4 h-4 text-plan-turbo" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-secondary/20">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                🚦 O Resultado Final
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="font-bold text-foreground">A Ilha inteira vira seu campo de trabalho</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="font-bold text-foreground">Você escolhe a rota</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="font-bold text-foreground">Você escolhe o pedido</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="font-bold text-foreground">Você domina a pista</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xl font-bold text-foreground mb-2">
                  A Ilha inteira é seu cliente.
                </p>
                <p className="text-muted-foreground">
                  Escolha suas zonas, suba de nível e domine a pista.
                </p>
              </div>

              <Button
                variant="motoboy"
                size="xl"
                className="group text-wrap"
                onClick={() => setMotoboyModalOpen(true)}
              >
                <Bike className="w-5 h-5" />
                Quero dominar a pista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
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

export default GamificationSection;

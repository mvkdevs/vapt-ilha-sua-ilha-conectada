import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bike, Store, ArrowRight } from "lucide-react";
import PreRegistrationModal from "./PreRegistrationModal";

const CTASection = () => {
  const [motoboyModalOpen, setMotoboyModalOpen] = useState(false);
  const [lojistaModalOpen, setLojistaModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Aqui ninguém fica
              <span className="text-secondary"> parado à toa</span>.
            </h2>

            <p className="text-xl text-primary-foreground/80 mb-10">
              Faça parte do Vapt Ilha e movimente a Ilha inteira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="motoboy"
                  size="lg"
                  className="group"
                onClick={() => setMotoboyModalOpen(true)}
                >
                  <Bike className="w-5 h-5" />
                  Sou Motoboy
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              <Button
                variant="lojista"
                size="lg"
                className="group"
                onClick={() => setLojistaModalOpen(true)}
              >
                <Store className="w-5 h-5" />
                Sou Lojista
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
      <PreRegistrationModal
        open={lojistaModalOpen}
        onOpenChange={setLojistaModalOpen}
        type="lojista"
      />
    </>
  );
};

export default CTASection;

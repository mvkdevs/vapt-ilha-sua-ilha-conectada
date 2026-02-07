import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bike, Store } from "lucide-react";
import { toast } from "sonner";
import { track } from '@vercel/analytics';

interface PreRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "motoboy" | "lojista";
}

const PreRegistrationModal = ({ open, onOpenChange, type }: PreRegistrationModalProps) => {
  // COLE AQUI OS LINKS DO GOOGLE FORMS
  // Exemplo: const MOTOBOY_FORM_URL = "https://docs.google.com/forms/d/e/XXX/viewform";
  const MOTOBOY_FORM_URL = "https://forms.gle/pwMDDEdsNRtf193K6"; // <-- link do formulário para motoboys
  const LOJISTA_FORM_URL = "https://forms.gle/hvFx6BbBY9k8LBv27"; // <-- link do formulário para lojistas

  const isMotoboy = type === "motoboy";

  const handleClose = () => onOpenChange(false);

  const openForm = () => {
    const url = isMotoboy ? MOTOBOY_FORM_URL : LOJISTA_FORM_URL;
    if (!url) {
      toast.error("Link do formulário ainda não configurado.");
      return;
    }

    track('redirect', {}, { flags: [isMotoboy ? 'Motoboy Form' : 'Lojista Form'] });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isMotoboy ? "bg-motoboy" : "bg-lojista"}`}>
              {isMotoboy ? (
                <Bike className="w-6 h-6 text-motoboy-foreground" />
              ) : (
                <Store className="w-6 h-6 text-lojista-foreground" />
              )}
            </div>
            <div>
              <DialogTitle className="text-left">
                {isMotoboy ? "Pré-cadastro Motoboy" : "Pré-cadastro Lojista"}
              </DialogTitle>
              <DialogDescription className="text-left">
                {isMotoboy ? "Você será redirecionado para o formulário do Google Forms." : "Você será redirecionado para o formulário do Google Forms."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center text-center py-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isMotoboy ? "bg-motoboy/20" : "bg-lojista/20"}`}>
            {isMotoboy ? (
              <Bike className={`w-8 h-8 text-motoboy`} />
            ) : (
              <Store className={`w-8 h-8 text-lojista`} />
            )}
          </div>

          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            {isMotoboy ? "Pré-cadastro Motoboy" : "Pré-cadastro Lojista"}
          </h3>

          <p className="text-muted-foreground mb-4 px-4">
            Você será direcionado para um formulário do Google Forms para completar o pré-cadastro.
            Por favor, responda corretamente às perguntas do formulário — isso garante que seu cadastro
            seja processado sem problemas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full px-4 mb-4">
            <Button className="w-full " variant={isMotoboy ? "motoboy" : "lojista"} onClick={openForm}>
              {(isMotoboy ? MOTOBOY_FORM_URL : LOJISTA_FORM_URL) ? "Abrir formulário do Google Forms" : "Link do formulário em breve"}
            </Button>
            <Button className="w-full" variant="ghost" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreRegistrationModal;
import logo from "@/assets/logo-vapt-ilha.png";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-accent/100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Vapt Ilha" className="h-24 w-auto" />
            <p className="text-primary-foreground/80 text-center md:text-left">
              Conectando motoboys e lojistas na Ilha de Itaparica
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-primary-foreground font-display font-bold text-lg">Contato</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+5571999999999" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (71) 983982572
              </a>
              <a 
                href="mailto:contato@vaptilha.com.br" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                mvk.devs@gmail.com.br
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Ilha de Itaparica, BA
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-primary-foreground font-display font-bold text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/vaptilha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-primary-foreground/80"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://facebook.com/vaptilha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-primary-foreground/80"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a 
                href="https://wa.me/5571983982572?text=Ol%C3%A1%20Vapt%20Ilha%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-primary-foreground/80"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Vapt Ilha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

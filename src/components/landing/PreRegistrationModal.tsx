 import { useState } from "react";
 import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Bike, Store, CheckCircle2 } from "lucide-react";
 import { toast } from "sonner";
 
 interface PreRegistrationModalProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   type: "motoboy" | "lojista";
 }
 
 const PreRegistrationModal = ({ open, onOpenChange, type }: PreRegistrationModalProps) => {
   const [formData, setFormData] = useState({
     name: "",
     phone: "",
     email: "",
     city: "",
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
 
   const isMotoboy = type === "motoboy";
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
     
     // Simulate API call
     await new Promise(resolve => setTimeout(resolve, 1000));
     
     setIsLoading(false);
     setIsSubmitted(true);
     toast.success("Pré-cadastro realizado com sucesso!");
   };
 
   const handleClose = () => {
     onOpenChange(false);
     // Reset form after modal closes
     setTimeout(() => {
       setFormData({ name: "", phone: "", email: "", city: "" });
       setIsSubmitted(false);
     }, 300);
   };
 
   return (
     <Dialog open={open} onOpenChange={handleClose}>
       <DialogContent className="sm:max-w-md">
         {isSubmitted ? (
           <div className="flex flex-col items-center text-center py-6">
             <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isMotoboy ? "bg-motoboy/20" : "bg-lojista/20"}`}>
               <CheckCircle2 className={`w-8 h-8 ${isMotoboy ? "text-motoboy" : "text-lojista"}`} />
             </div>
             <h3 className="text-xl font-display font-bold text-foreground mb-2">
               Você está na lista!
             </h3>
             <p className="text-muted-foreground mb-6">
               {isMotoboy 
                 ? "Assim que o Vapt Ilha lançar, você será um dos primeiros a saber!" 
                 : "Entraremos em contato para colocar seu negócio no radar!"}
             </p>
             <Button onClick={handleClose} variant={isMotoboy ? "motoboy" : "lojista"}>
               Fechar
             </Button>
           </div>
         ) : (
           <>
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
                     {isMotoboy 
                       ? "Seja o primeiro a saber quando lançarmos!" 
                       : "Coloque seu negócio no radar da Ilha!"}
                   </DialogDescription>
                 </div>
               </div>
             </DialogHeader>
             
             <form onSubmit={handleSubmit} className="space-y-4 mt-4">
               <div className="space-y-2">
                 <Label htmlFor="name">Nome completo</Label>
                 <Input
                   id="name"
                   placeholder={isMotoboy ? "Seu nome" : "Nome do responsável"}
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   required
                 />
               </div>
 
               <div className="space-y-2">
                 <Label htmlFor="phone">WhatsApp</Label>
                 <Input
                   id="phone"
                   type="tel"
                   placeholder="(71) 99999-9999"
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                   required
                 />
               </div>
 
               <div className="space-y-2">
                 <Label htmlFor="email">E-mail</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="seu@email.com"
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   required
                 />
               </div>
 
               <div className="space-y-2">
                 <Label htmlFor="city">
                   {isMotoboy ? "Onde você roda?" : "Nome do estabelecimento"}
                 </Label>
                 <Input
                   id="city"
                   placeholder={isMotoboy ? "Ex: Mar Grande, Vera Cruz..." : "Ex: Pizzaria do João"}
                   value={formData.city}
                   onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                   required
                 />
               </div>
 
               <Button 
                 type="submit" 
                 variant={isMotoboy ? "motoboy" : "lojista"} 
                 className="w-full"
                 disabled={isLoading}
               >
                 {isLoading ? "Enviando..." : "Quero entrar na lista"}
               </Button>
             </form>
           </>
         )}
       </DialogContent>
     </Dialog>
   );
 };
 
 export default PreRegistrationModal;
 import logo from "@/assets/logo-vapt-ilha.jpeg";
 
 const Footer = () => {
   return (
     <footer className="py-10 bg-foreground">
       <div className="container">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
             <img src={logo} alt="Vapt Ilha" className="h-12 w-auto" />
             <span className="text-background/80">
               Conectando a Ilha de Itaparica
             </span>
           </div>
           <p className="text-background/60 text-sm">
             © {new Date().getFullYear()} Vapt Ilha. Todos os direitos reservados.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;
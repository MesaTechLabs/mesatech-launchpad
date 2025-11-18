const Footer = () => {
  return <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-xl mb-2">&lt; MesaTech /&gt;</p>
            <p className="text-sm opacity-80">
              © 2025 MesaTech. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-80 transition-opacity">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
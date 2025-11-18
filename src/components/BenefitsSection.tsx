import { Zap, DollarSign, Palette, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Entrega rápida",
    description: "Web lista en 3 a 7 días.",
  },
  {
    icon: DollarSign,
    title: "Precios accesibles",
    description: "Paquetes desde 80€ sin costos ocultos.",
  },
  {
    icon: Palette,
    title: "Diseños profesionales",
    description: "Plantillas modernas adaptadas a tu negocio.",
  },
  {
    icon: MessageCircle,
    title: "Soporte humano",
    description: "Comunicación directa por WhatsApp.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir <span className="text-gradient">MesaTech</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos enfocamos en lo que realmente importa para tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-md hover-lift hover-glow transition-all"
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Landing Básica",
    price: "80€",
    stars: 1,
    description: "Perfecta para emprendedores que necesitan presencia online.",
    features: [
      "Una sola página tipo scroll",
      "Sección de servicios",
      "Contacto",
      "Formulario",
      "Integración WhatsApp",
      "Entrega en 3 días",
    ],
    popular: false,
  },
  {
    name: "Estándar",
    price: "150€",
    stars: 2,
    description: "Ideal para negocios que quieren una web completa.",
    features: [
      "4–5 secciones",
      "Diseño personalizado",
      "SEO básico",
      "3 revisiones",
      "Entrega en 5 días",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "250€",
    stars: 3,
    description: "Para quienes buscan una web profesional.",
    features: [
      "6–7 secciones",
      "Branding básico (colores + tipografías)",
      "Copywriting optimizado",
      "SEO avanzado",
      "Integración con redes",
      "Entrega en 7 días",
    ],
    popular: false,
  },
];

const extras = [
  "Dominio + hosting: 20€/mes",
  "Mantenimiento: 15€/mes",
];

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Paquetes de <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-lg hover-lift transition-all ${
                pkg.popular
                  ? "border-2 border-primary ring-4 ring-primary/20"
                  : "border border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Más Vendida
                </div>
              )}

              <div className="flex gap-1 mb-4">
                {Array.from({ length: pkg.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-black text-gradient mb-4">
                {pkg.price}
              </div>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular ? "gradient-primary hover-glow" : ""
                }`}
                variant={pkg.popular ? "default" : "outline"}
                onClick={scrollToContact}
              >
                {pkg.popular ? "Quiero este paquete" : "Elegir plan"}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Extras Opcionales</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {extras.map((extra, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <Check className="w-5 h-5 text-secondary" />
                <span>{extra}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

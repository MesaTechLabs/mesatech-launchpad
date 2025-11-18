import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    package: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Format email body
      const emailBody = `
Nuevo contacto desde MesaTech

Nombre: ${formData.name}
Email: ${formData.email}
Tipo de negocio: ${formData.business || "No especificado"}
Paquete deseado: ${formData.package || "No especificado"}

Mensaje:
${formData.message}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:contacto.mesatech@gmail.com?subject=Nuevo contacto desde MesaTech - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "¡Listo!",
        description: "Tu cliente de correo se abrirá para enviar el mensaje.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        business: "",
        package: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema. Por favor intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hablemos de tu <span className="text-primary">proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y te responderemos en menos de 24 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="business">Tipo de negocio</Label>
                <Input
                  id="business"
                  type="text"
                  placeholder="Ej: Restaurante, Coaching, E-commerce..."
                  value={formData.business}
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="package">Paquete deseado</Label>
                <Select
                  value={formData.package}
                  onValueChange={(value) =>
                    setFormData({ ...formData, package: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona un paquete" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basica">Landing Básica - 80€</SelectItem>
                    <SelectItem value="estandar">Estándar - 150€</SelectItem>
                    <SelectItem value="premium">Premium - 250€</SelectItem>
                    <SelectItem value="no-seguro">No estoy seguro/a</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary hover-glow"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Otras formas de contacto</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/351123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover-lift hover-glow transition-all"
                >
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Respuesta inmediata
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contacto.mesatech@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover-lift hover-glow transition-all"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm text-muted-foreground">
                      contacto.mesatech@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold">Horario</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Presupuesto sin compromiso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Asesoramiento personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Pago seguro y garantizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

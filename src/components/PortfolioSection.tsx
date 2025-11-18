import { ExternalLink } from "lucide-react";
import restaurantImg from "@/assets/portfolio-restaurant.jpg";
import coachImg from "@/assets/portfolio-coach.jpg";
import beautyImg from "@/assets/portfolio-beauty.jpg";

const portfolioItems = [
  {
    title: "Restaurante / Café",
    image: restaurantImg,
    link: "#",
  },
  {
    title: "Psicólogo / Coach",
    image: coachImg,
    link: "#",
  },
  {
    title: "Tienda Beauty",
    image: beautyImg,
    link: "#",
  },
  {
    title: "Landing multipropósito",
    image: restaurantImg,
    link: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Algunos de nuestros <span className="text-primary">diseños</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ejemplos de lo que podemos crear para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover-lift hover-glow transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
                  {item.title}
                  <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-muted-foreground">Ver demo</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

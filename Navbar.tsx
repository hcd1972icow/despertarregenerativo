import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre o Projeto" },
    { to: "/como-participar", label: "Como Participar" },
    { to: "/ferramentas", label: "Ferramentas Gratuitas" },
    { to: "/coluna", label: "Coluna no MilkPoint" },
    { to: "/impacto", label: "Impacto" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-accent transition-colors">
            <img src={logo} alt="Despertar Regenerativo" className="h-8 w-8" />
            <span>Despertar Regenerativo</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="default" size="sm" className="bg-gradient-hero hover:shadow-hover transition-all">
              <NavLink to="/como-participar">Comece Agora</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-accent hover:bg-secondary/50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block py-3 px-4 text-sm font-medium text-foreground hover:bg-secondary/50 hover:text-accent rounded-md transition-colors"
                activeClassName="bg-secondary text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Sprout className="h-6 w-6" />
              <span>Despertar Regenerativo</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Uma iniciativa ESGpec e MilkPoint para transformar a pecuária através da regeneração e sustentabilidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre o Projeto
                </NavLink>
              </li>
              <li>
                <NavLink to="/ferramentas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ferramentas
                </NavLink>
              </li>
              <li>
                <NavLink to="/impacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Impacto
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Parceiros */}
          <div>
            <h3 className="font-semibold mb-4">Parceiros</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>ESGpec</li>
              <li>MilkPoint</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contato@despertarregenerativo.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+55 (11) 0000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Despertar Regenerativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

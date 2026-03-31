import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 mb-3 flex-wrap" aria-label="Breadcrumb">
      <Link to="/" className="text-white/40 hover:text-white/60 transition-colors">
        <Home className="w-3 h-3" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3 text-white/20" />
          {item.path ? (
            <Link to={item.path} className="text-white/40 text-[12px] hover:text-white/60 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#FF6B35] text-[12px]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
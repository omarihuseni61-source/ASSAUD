import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-red-200 mb-6 flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-red-400" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-white font-medium">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-5">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-red-100 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

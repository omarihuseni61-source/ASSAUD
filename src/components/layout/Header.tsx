'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import navigationDataRaw from '@/data/navigation/mainNav.json';
import siteConfigRaw from '@/data/site/config.json';
import type { NavItem } from '@/types/common';
import type { SiteConfig } from '@/types/config';

const navigationData = navigationDataRaw as { navItems: NavItem[] };
const siteConfig = siteConfigRaw as SiteConfig;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navItems = navigationData.navItems;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* ==================== LOGO ==================== */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setIsOpen(false);
              setOpenDropdown(null);
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900 leading-none">
                {siteConfig.siteName}
              </div>
              <div className="text-xs text-gray-600 leading-none mt-1">
                University of Dar es Salaam
              </div>
            </div>
          </Link>

          {/* ==================== DESKTOP NAV ==================== */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-red-900 bg-red-50'
                      : 'text-gray-700 hover:text-red-900 hover:bg-red-50'
                  )}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.id && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && openDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors',
                          pathname === sub.href
                            ? 'text-red-900 bg-red-50 font-medium'
                            : 'text-gray-700 hover:text-red-900 hover:bg-red-50'
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ==================== DESKTOP CTA ==================== */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/community/membership"
              className="px-5 py-2.5 bg-gradient-to-r from-red-800 to-red-900 text-white text-sm font-semibold rounded-lg hover:from-red-900 hover:to-red-950 transition-all shadow-md hover:shadow-lg"
            >
              Join ASAUD
            </Link>
          </div>

          {/* ==================== MOBILE TOGGLE ==================== */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg hover:bg-red-50 active:bg-red-100 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-red-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const hasSubItems = !!item.subItems?.length;
              const isExpanded = openDropdown === item.id;
              const isActiveParent = isActive(item.href);

              return (
                <div
                  key={item.id}
                  className="border-b border-gray-50 last:border-0"
                >
                  {/* Parent row */}
                  <div className="flex items-center">
                    {/* Main link (navigates) */}
                    <Link
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      className={cn(
                        'flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                        isActiveParent
                          ? 'text-red-900 bg-red-50'
                          : 'text-gray-700 hover:bg-red-50'
                      )}
                    >
                      {item.label}
                    </Link>

                    {/* Chevron toggle (expands) */}
                    {hasSubItems && (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(isExpanded ? null : item.id)
                        }
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        aria-expanded={isExpanded}
                        className={cn(
                          'p-3 mr-1 rounded-lg transition-all',
                          isExpanded
                            ? 'text-red-900 bg-red-50'
                            : 'text-gray-400 hover:text-red-900 hover:bg-red-50'
                        )}
                      >
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-200',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Collapsible sub-items */}
                  {hasSubItems && (
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300 ease-in-out',
                        isExpanded
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      <div className="ml-4 mb-2 space-y-0.5 border-l-2 border-red-100 pl-3">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={cn(
                              'block px-3 py-2.5 rounded-lg text-sm transition-colors',
                              pathname === sub.href
                                ? 'text-red-900 bg-red-50 font-medium'
                                : 'text-gray-600 hover:text-red-900 hover:bg-red-50'
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Join CTA */}
            <Link
              href="/community/membership"
              onClick={() => {
                setIsOpen(false);
                setOpenDropdown(null);
              }}
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-red-800 to-red-900 text-white text-center text-sm font-semibold rounded-lg hover:from-red-900 hover:to-red-950 transition-all"
            >
              Join ASAUD
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
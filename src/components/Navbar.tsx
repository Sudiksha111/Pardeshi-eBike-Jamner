
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Sun, Moon, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: () => void;
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Brands", path: "/brands" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path ||
        (path === "/brands" &&
          location.pathname.startsWith("/brands/"));

  const themeButton = (
    <button
      type="button"
      onClick={setTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title="Toggle color theme"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[76px] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Pardeshi eBike home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Zap className="h-6 w-6 text-white" aria-hidden="true" />
          </span>

          <span className="truncate text-base font-extrabold tracking-tight text-foreground sm:text-lg lg:text-xl">
            Pardeshi <span className="text-primary">eBike</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2.5 text-sm font-semibold transition-colors duration-200 lg:px-4 ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/75 hover:bg-muted hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {themeButton}
        </div>

        {/* Mobile controls */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {themeButton}

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`grid overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-200 md:hidden ${
          isOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                  {active && (
                    <ArrowUpRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

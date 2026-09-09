import Link from "next/link";
import { disclaimer, footer, product } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-extrabold text-foreground">{product.name}</p>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{disclaimer}</p>
      </div>
    </footer>
  );
}

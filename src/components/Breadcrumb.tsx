import React from 'react';
import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      const element: { "@type": string; position: number; name: string; item?: string } = {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
      };
      if (item.href) {
        element.item = `https://astrasai.in${item.href}`;
      }
      return element;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs md:text-sm text-gray-500 mb-8 flex flex-wrap items-center gap-2 font-mono">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-gray-600 select-none">&rsaquo;</span>}
              {isLast || !item.href ? (
                <span className="text-gray-300 font-medium truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

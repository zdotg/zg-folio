"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <div className="flex flex-col">
      <Link
        href={href}
        className={`hover:bg-gray-100 p-1 text-xs rounded  ${
          active ||
          (href.startsWith("/dashboard") && pathname.startsWith("/dashboard"))
            ? "text-white font-semibold"
            : "text-gray-400"
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export default HeaderNavLink;

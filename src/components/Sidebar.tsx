"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/itens", label: "Itens" },
  { href: "/dashboard/emprestimos", label: "Empréstimos" },
  { href: "/dashboard/devolucoes", label: "Devoluções" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">🎵 Church Sound</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded-md hover:bg-gray-700 ${
              pathname === item.href ? "bg-gray-700 font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

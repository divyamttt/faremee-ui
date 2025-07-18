import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header() {
  const [open, setOpen] = useState(false);
  const tabs = [
    { label: "Flights", href: "/flights" },
    { label: "Hotels", href: "/hotels" },
    { label: "Car Rentals", href: "/car-rentals" },
    { label: "Vacation Packages", href: "/vacation-packages" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/"><a className="text-2xl font-bold text-blue-700">faremee</a></Link>
        <button
          className="sm:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}
        </button>
        <nav className={`flex-col sm:flex sm:flex-row ${open ? "flex" : "hidden"} space-y-2 sm:space-y-0 sm:space-x-6`}>
          {tabs.map((t) => (
            <Link key={t.href} href={t.href}>
              <a className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">{t.label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
);
}

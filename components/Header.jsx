import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header() {
  const [open, setOpen] = useState(false);
  const tabs = [
    { label: "Flights", href: "/search/flights" },
    { label: "Hotels", href: "/search/hotels" },
    { label: "Car Rentals", href: "/search/car-rentals" },
    { label: "Vacation Packages", href: "/search/vacation-packages" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-700">faremee</a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <a className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
                {tab.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <nav
        className={`md:hidden bg-white dark:bg-gray-900 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <a
                className="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded"
                onClick={() => setOpen(false)}
              >
                {tab.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  const tabs = [
    { label: "Flights", href: "/search/flights" },
    { label: "Hotels", href: "/search/hotels" },
    { label: "Car Rentals", href: "/search/car-rentals" },
    { label: "Vacation Packages", href: "/search/vacation-packages" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-3xl font-bold text-blue-700">faremee</a>
        </Link>
        <nav className="space-x-6 flex">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <a className="hover:text-blue-600">{tab.label}</a>
            </Link>
          ))}
        </nav>
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
}

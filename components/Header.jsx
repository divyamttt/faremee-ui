import Link from "next/link";

export default function Header() {
  const tabs = [
    { label: "Flights", href: "/search/flights" },
    { label: "Hotels", href: "/search/hotels" },
    { label: "Car Rentals", href: "/search/car-rentals" },
    { label: "Vacation Packages", href: "/search/vacation-packages" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-700">faremee</a>
        </Link>
        <nav className="w-full md:w-auto flex flex-wrap justify-center md:justify-end space-x-4 mt-3 md:mt-0">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <a className="whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-blue-600">
                {tab.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

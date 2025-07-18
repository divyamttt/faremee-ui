import { useState, useEffect } from "react";

export default function DealsCarousel() {
  const banners = [
    { id: 1, image: "/deals/1.jpg", link: "/flights" },
    { id: 2, image: "/deals/2.jpg", link: "/hotels" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setIdx((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative h-48 overflow-hidden rounded-lg mb-8">
      {banners.map((b, i) => (
        <a
          key={b.id}
          href={b.link}
          className={`absolute inset-0 transition-opacity ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={b.image} alt="" className="w-full h-full object-cover" />
        </a>
      ))}
    </div>
  );
}

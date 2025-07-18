import { useState, useEffect } from "react";

export default function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(iv);
  }, [images.length]);

  return (
    <div className="space-y-2">
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Thumb ${i + 1}`}
            className={`h-16 w-24 object-cover rounded cursor-pointer ${
              i === idx ? "ring-2 ring-blue-600" : ""
            }`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
);
}

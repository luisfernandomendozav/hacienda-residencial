"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/7C0A6106-Editar-1.jpg",
  "/images/7C0A6110-Editar-1.jpg",
  "/images/7C0A6122-Editar-1.jpg",
  "/images/7C0A6133-Editar-1.jpg",
  "/images/7C0A6161-1.jpg",
  "/images/7C0A6169-Editar-1.jpg",
  "/images/7C0A6194-Editar-1.jpg",
  "/images/7C0A6211-1.jpg",
  "/images/7C0A6217-1.jpg",
  "/images/7C0A6228-Editar-1.jpg",
  "/images/7C0A6245-Editar-1.jpg",
  "/images/7C0A6256-Editar-1.jpg",
  "/images/7C0A6269-Editar-1.jpg",
  "/images/7C0A6289-Editar-1.jpg",
  "/images/7C0A6309-Editar-1.jpg",
  "/images/7C0A6322-Editar-1.jpg",
  "/images/7C0A6335-1.jpg",
  "/images/7C0A6347-Editar-1.jpg",
  "/images/7C0A6355-Editar-1.jpg",
  "/images/7C0A6371-Editar-1.jpg",
  "/images/7C0A6379-Editar-1.jpg",
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(true);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange" && data.info === 0) {
          // Video ended (state 0)
          setIsVideoModalOpen(false);
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-40 flex gap-2">
        <a
          href="/"
          className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-lg transition-all flex items-center gap-2"
        >
          <span className="text-2xl">🇲🇽</span>
          <span className="text-sm font-medium">ES</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={images[selectedImage]}
          alt="Hacienda Residencial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4">🌿 House for Sale</h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Hacienda Residencial</h2>
          <p className="text-xl md:text-2xl max-w-3xl font-light">
            A unique residence that combines luxury, comfort, and harmony with nature under the concept of Japanese Zen style
          </p>
        </div>
      </section>

      {/* Price and Key Info */}
      <section className="bg-zen-earth text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-light mb-2">1,230 m²</p>
            <p className="text-lg opacity-90">Land</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">341 m²</p>
            <p className="text-lg opacity-90">Construction - Single Story</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">$12,650,000</p>
            <p className="text-lg opacity-90">MXN</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-center mb-12">
            Built with brick and thermal and sound insulation coating, this property has been designed to create an atmosphere of peace and relaxation, where all common areas connect with an interior garden featuring fountains and indirect lighting, achieving a cozy and sophisticated ambiance.
          </p>
        </div>
      </section>

      {/* Distribution */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-zen-earth">✨ Layout</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">3 bedrooms with full bathroom (master with large walk-in closet and jacuzzi bathroom)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Spacious kitchen with natural stone island</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Living room, dining room, and gathering spaces that flow to the patio</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Exterior service room with full bathroom</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Laundry room</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Wine cellar and storage room</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">2 additional guest bathrooms in the patio social area</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Garage for 4 vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zen Patio */}
      <section className="bg-zen-bamboo/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-8 text-zen-earth">🌳 Zen Patio</h2>
          <p className="text-lg leading-relaxed text-center mb-6">
            A space designed under the Japanese concept of connection with nature, featuring bamboo, fruit trees, and regional vegetation that provide freshness and harmony.
          </p>
          <p className="text-lg leading-relaxed text-center">
            Features a covered area ideal for gatherings and moments of contemplation. Plus an extra space with potential for a pool or additional social areas.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-zen-earth">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-75 transition-opacity"
                onClick={() => openModal(idx)}
              >
                <Image
                  src={img}
                  alt={`Hacienda Residencial ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-zen-earth text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-8">🏡 Privilege and Exclusivity</h2>
          <h3 className="text-2xl font-light text-center mb-8">at Hacienda Residencial</h3>
          <p className="text-lg leading-relaxed text-center mb-8">
            Live with security and tranquility surrounded by nature, controlled access and 24/7 surveillance, plus premium amenities such as a pool, basketball and tennis courts.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-zen-stone py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-zen-earth">🔑 A luxury property</h2>
          <p className="text-xl leading-relaxed text-zen-earth">
            Designed for those seeking more than a house: a refuge of peace and sophistication.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zen-earth text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">Hacienda Residencial</p>
          <p className="text-sm opacity-75 mt-2">House for Sale - Luxury Property</p>
          <div className="mt-6 space-y-2">
            <p className="text-sm">
              <a href="https://wa.me/526621016127" className="hover:opacity-75 transition-opacity">
                WhatsApp: 662 101 6127
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:masusancheztellechea@gmail.com" className="hover:opacity-75 transition-opacity">
                masusancheztellechea@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/526621016127"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-75 transition-opacity z-10"
          >
            ×
          </button>

          <div
            className="relative w-full h-full max-w-[450px] max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/cce6303Pe1I?autoplay=1&vq=hd720&enablejsapi=1"
              title="Hacienda Residencial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-75 transition-opacity z-10"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-5xl hover:opacity-75 transition-opacity z-10"
          >
            ‹
          </button>

          <div
            className="relative w-full h-full max-w-7xl max-h-screen p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[modalImageIndex]}
              alt={`Hacienda Residencial ${modalImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-5xl hover:opacity-75 transition-opacity z-10"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {modalImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}

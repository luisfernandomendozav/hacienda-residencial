"use client";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <main className="min-h-screen">
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
          <h1 className="text-5xl md:text-7xl font-light mb-4">🌿 Casa en Venta</h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Hacienda Residencial</h2>
          <p className="text-xl md:text-2xl max-w-3xl font-light">
            Una residencia única que combina lujo, confort y armonía con la naturaleza bajo el concepto del estilo Zen japonés
          </p>
        </div>
      </section>

      {/* Price and Key Info */}
      <section className="bg-zen-earth text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-light mb-2">1,230 m²</p>
            <p className="text-lg opacity-90">Terreno</p>
          </div>
          <div>
            <p className="text-4xl font-light mb-2">341 m²</p>
            <p className="text-lg opacity-90">Construcción - Una sola planta</p>
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
            Construida con ladrillo y recubrimiento aislante térmico y sonoro, esta propiedad ha sido diseñada para crear un ambiente de paz y relajación, donde todas las áreas comunes se conectan con un jardín interior con fuentes e iluminación indirecta, logrando una atmósfera acogedora y sofisticada.
          </p>
        </div>
      </section>

      {/* Distribution */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-zen-earth">✨ Distribución</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">3 recámaras con baño completo (la principal con walk-in closet de gran tamaño y baño con jacuzzi)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Cocina amplia con isla de piedra natural</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Sala, comedor y espacios de convivencia que fluyen hacia el patio</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Recámara de servicio exterior con baño completo</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Cuarto de lavado</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Cuarto para cava de vinos y bodega</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">2 baños adicionales para visitas en el área social del patio</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zen-bamboo text-xl">•</span>
                <p className="text-lg">Cochera para 4 vehículos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zen Patio */}
      <section className="bg-zen-bamboo/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-8 text-zen-earth">🌳 Patio Zen</h2>
          <p className="text-lg leading-relaxed text-center mb-6">
            Un espacio diseñado bajo el concepto japonés de conexión con la naturaleza, con bambúes, árboles frutales y vegetación de la región que aportan frescura y armonía.
          </p>
          <p className="text-lg leading-relaxed text-center">
            Cuenta con área techada ideal para reuniones y momentos de contemplación. Además un espacio extra con potencial para alberca o áreas sociales extras.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-zen-earth">Galería</h2>
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
          <h2 className="text-4xl font-light text-center mb-8">🏡 Privilegio y Exclusividad</h2>
          <h3 className="text-2xl font-light text-center mb-8">en Hacienda Residencial</h3>
          <p className="text-lg leading-relaxed text-center mb-8">
            Vive con seguridad y tranquilidad rodeado de la naturaleza, acceso controlado y vigilancia 24/7, además de amenidades premium como alberca, canchas de básquetbol y tenis.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-zen-stone py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-zen-earth">🔑 Una propiedad de lujo</h2>
          <p className="text-xl leading-relaxed text-zen-earth">
            Diseñada para quienes buscan más que una casa: un refugio de paz y sofisticación.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zen-earth text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">Hacienda Residencial</p>
          <p className="text-sm opacity-75 mt-2">Casa en Venta - Propiedad de Lujo</p>
        </div>
      </footer>

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
              src="https://www.youtube.com/embed/cce6303Pe1I?autoplay=1&mute=1&vq=hd720"
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

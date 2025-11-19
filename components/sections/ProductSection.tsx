"use client";

import { useState } from "react";
import {
  Check,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
}

export default function ProductSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    { id: 1, image: "/images/products/product-1.webp" },
    { id: 3, image: "/images/products/product-3.webp" },
    { id: 2, image: "/images/products/product-2.webp" },
    { id: 4, image: "/images/products/product-4.webp" },
    { id: 5, image: "/images/products/product-5.webp" },
    { id: 6, image: "/images/products/product-6.webp" },
    { id: 7, image: "/images/products/product-7.webp" },
  ];

  const productInfo = {
    name: "Bundling WormiBox",
    price: "Rp 699.999",
    description: "Paket lengkap sistem komposter cerdas dengan IoT monitoring",
    features: [
      "WormiBox Unit (2 Tingkat)",
      "IoT Monitoring System",
      "Cacing ANC dan Bedding",
      "Sekop Mini",
      "Panduan Lengkap",
    ],
  };

  const currentProduct = products[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="product" className="relative bg-linear-to-br from-lime-50 via-lime-100/30 to-lime-50 py-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Watermark - Shopping Cart */}
      <div className="absolute top-12 left-8 md:left-16 lg:left-24 opacity-[0.03]">
        <ShoppingCart
          className="w-64 h-64 rotate-20 text-emerald-800"
          strokeWidth={1}
        />
      </div>

      {/* Background Text - Buy Now */}
      <div className="absolute top-8 right-8 md:right-16 lg:right-24">
        <div className="text-left">
          <p className="text-[80px] md:text-[120px] lg:text-[160px] text-emerald-800/5 leading-none select-none">
            Buy
          </p>
          <p className="text-[80px] md:text-[120px] lg:text-[160px] text-emerald-800/5 leading-none select-none">
            Now!
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl text-emerald-800 mb-2">
            DAPATKAN
          </h2>
          <div className="inline-block bg-lime-300 px-8 py-4 shadow-[4px_4px_0_0_rgba(6,95,70,0.20)]">
            <h3 className="text-3xl lg:text-4xl font-bold text-emerald-800">
              WORMIBOX ANDA
            </h3>
          </div>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image Carousel */}
          <div className="relative">
            <div>
              <div className="relative aspect-square rounded-3xl bg-w">
                <Image
                  src={currentProduct.image}
                  alt={productInfo.name}
                  fill
                  className="object-contain rounded-3xl"
                  priority
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <>
              <button
                onClick={prevProduct}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-300 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Previous product"
              >
                <ChevronLeft
                  className="w-6 h-6 text-emerald-700"
                  strokeWidth={3}
                />
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-lime-300 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Next product"
              >
                <ChevronRight
                  className="w-6 h-6 text-emerald-700"
                  strokeWidth={3}
                />
              </button>
            </>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-emerald-700 w-8"
                      : "bg-emerald-700/30 w-3"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Details Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-lime-300/50">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-700 rounded-full mb-6">
              <Package className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>

            {/* Product Name */}
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              {productInfo.name}
            </h3>

            {/* Price */}
            <p className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
              {productInfo.price}
            </p>

            {/* Description */}
            <p className="text-emerald-700/80 text-lg mb-8 leading-relaxed">
              {productInfo.description}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {productInfo.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-lime-300 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check
                      className="w-3 h-3 text-emerald-700"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-emerald-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://shopee.co.id/wormibox"
              className="group w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
              <span>Pesan Sekarang</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

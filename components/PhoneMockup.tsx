"use client";

import { useState } from "react";
import {
  Bell,
  ChatCircle,
  Headphones,
  Heart,
  House,
  MagnifyingGlass,
  Plus,
  SealCheck,
  ShareNetwork,
  ShieldCheck,
  ShoppingBag,
  User,
} from "@/lib/icons";
import { KahadeMark } from "./Logo";

type Product = {
  seller: string;
  verified: boolean;
  title: string;
  price: string;
  art: string;
  glyph: React.ReactNode;
};

const PRODUCTS: Product[] = [
  {
    seller: "toko",
    verified: true,
    title: "Contoh produk",
    price: "Rp –",
    art: "from-black/[0.12] to-black/[0.05]",
    glyph: <ShoppingBag weight="regular" className="h-14 w-14 text-black/25" aria-hidden="true" />,
  },
  {
    seller: "toko",
    verified: true,
    title: "Contoh produk",
    price: "Rp –",
    art: "from-black/[0.08] to-black/[0.03]",
    glyph: <Headphones weight="regular" className="h-14 w-14 text-black/25" aria-hidden="true" />,
  },
];

function ProductCard({ product, defaultLiked = false }: { product: Product; defaultLiked?: boolean }) {
  const [liked, setLiked] = useState(defaultLiked);

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)]">
      <div className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${product.art}`}>
        {product.glyph}
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-black/85 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
          <ShieldCheck weight="regular" className="h-3.5 w-3.5" aria-hidden="true" />
          Escrow
        </span>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white" aria-hidden="true">
            {product.seller.charAt(0).toUpperCase()}
          </span>
          <span className="truncate text-xs font-semibold text-[#262626]">{product.seller}</span>
          {product.verified && (
            <SealCheck weight="fill" className="h-4 w-4 shrink-0 text-black" aria-label="Terverifikasi" />
          )}
        </div>

        <p className="mt-1.5 truncate text-[13px] text-[#525252]">{product.title}</p>
        <p className="mt-0.5 text-sm font-bold text-black">{product.price}</p>

        <div className="mt-2 flex items-center gap-2 border-t border-black/5 pt-2 text-[#525252]">
          <button
            type="button"
            className="like-btn flex min-h-[44px] min-w-[44px] items-center justify-center"
            data-liked={liked}
            aria-pressed={liked}
            aria-label={liked ? "Batalkan suka" : "Suka"}
            onClick={() => setLiked((v) => !v)}
          >
            <Heart weight={liked ? "fill" : "regular"} className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="flex min-h-[44px] min-w-[44px] items-center justify-center" aria-hidden="true">
            <ChatCircle weight="regular" className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="ml-auto flex min-h-[44px] min-w-[44px] items-center justify-center" aria-hidden="true">
            <ShareNetwork weight="regular" className="h-5 w-5" />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Phone mockup showing the Kahade social-commerce feed. */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]">
      {/* Frame */}
      <div className="rounded-[3rem] bg-black p-[10px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)]">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-white">
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="phone-screen max-h-[560px] overflow-y-auto pb-2 pt-11">
            {/* Feed header */}
            <div className="flex items-center justify-between px-4 pb-2">
              <KahadeMark className="h-7 w-7" />
              <span className="text-sm font-bold text-black">Feed</span>
              <span className="relative text-[#262626]" aria-hidden="true">
                <Bell weight="regular" className="h-5 w-5" aria-hidden="true" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-black" />
              </span>
            </div>

            <div className="space-y-3 px-3">
              <ProductCard product={PRODUCTS[0]} defaultLiked />
              <ProductCard product={PRODUCTS[1]} />
            </div>

            {/* Bottom tab bar */}
            <div className="sticky bottom-0 mt-3 flex items-center justify-around border-t border-black/10 bg-white/95 px-6 py-2.5 backdrop-blur">
              <span className="flex min-h-[44px] min-w-[44px] items-center justify-center text-black" aria-hidden="true">
                <House weight="regular" className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex min-h-[44px] min-w-[44px] items-center justify-center text-black/35" aria-hidden="true">
                <MagnifyingGlass weight="regular" className="h-5 w-5" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white" aria-hidden="true">
                <Plus weight="regular" className="h-5 w-5" />
              </span>
              <span className="flex min-h-[44px] min-w-[44px] items-center justify-center text-black/35" aria-hidden="true">
                <ChatCircle weight="regular" className="h-5 w-5" />
              </span>
              <span className="flex min-h-[44px] min-w-[44px] items-center justify-center text-black/35" aria-hidden="true">
                <User weight="regular" className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Soft glow behind */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[4rem] bg-gradient-to-b from-[#F3F4F6] to-transparent blur-2xl"
      />
    </div>
  );
}

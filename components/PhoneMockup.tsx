"use client";

import { useState } from "react";
import { KahadeMark } from "./Logo";

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M12 20.7C6.4 17.2 3 13.6 3 9.9 3 7.2 5.1 5 7.8 5c1.7 0 3.2.9 4.2 2.3C13 5.9 14.5 5 16.2 5 18.9 5 21 7.2 21 9.9c0 3.7-3.4 7.3-9 10.8z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 15V4m0 0L8 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#000000" aria-label="Terverifikasi">
      <path d="M12 2l2.4 2.4 3.4-.5 1 3.3 3.2 1.2-1.2 3.2 1.2 3.2-3.2 1.2-1 3.3-3.4-.5L12 22l-2.4-2.4-3.4.5-1-3.3-3.2-1.2L3.2 12 2 8.8l3.2-1.2 1-3.3 3.4.5L12 2z" />
      <path d="M10.6 14.6l-2.1-2.1-1.2 1.2 3.3 3.3 5.9-5.9-1.2-1.2-4.7 4.7z" fill="#fff" />
    </svg>
  );
}

type Product = {
  seller: string;
  verified: boolean;
  title: string;
  price: string;
  likes: string;
  comments: string;
  art: string;
  glyph: React.ReactNode;
};

function BagGlyph() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14 text-black/25" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M10 18h28l-2 22H12l-2-22z" strokeLinejoin="round" />
      <path d="M17 18v-3a7 7 0 0 1 14 0v3" strokeLinecap="round" />
    </svg>
  );
}

function HeadphoneGlyph() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14 text-black/25" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M10 30v-6a14 14 0 0 1 28 0v6" strokeLinecap="round" />
      <rect x="7" y="28" width="8" height="13" rx="3" />
      <rect x="33" y="28" width="8" height="13" rx="3" />
    </svg>
  );
}

const PRODUCTS: Product[] = [
  {
    seller: "tokokamera",
    verified: true,
    title: "Kamera mirrorless, mulus like new",
    price: "Rp4.250.000",
    likes: "1,2 rb",
    comments: "84",
    art: "from-[#e8e8e8] to-[#cfcfcf]",
    glyph: <BagGlyph />,
  },
  {
    seller: "audiohub",
    verified: true,
    title: "Headphone wireless noise cancelling",
    price: "Rp1.890.000",
    likes: "860",
    comments: "41",
    art: "from-[#dcdcdc] to-[#f0f0f0]",
    glyph: <HeadphoneGlyph />,
  },
];

function ProductCard({ product, defaultLiked = false }: { product: Product; defaultLiked?: boolean }) {
  const [liked, setLiked] = useState(defaultLiked);

  return (
    <article className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)]">
      <div className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${product.art}`}>
        {product.glyph}
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-black/85 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
          <ShieldIcon />
          Escrow
        </span>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
            {product.seller.charAt(0).toUpperCase()}
          </span>
          <span className="truncate text-xs font-semibold text-[#262626]">{product.seller}</span>
          {product.verified && <CheckBadge />}
        </div>

        <p className="mt-1.5 truncate text-[13px] text-[#525252]">{product.title}</p>
        <p className="mt-0.5 text-sm font-bold text-black">{product.price}</p>

        <div className="mt-2 flex items-center gap-4 border-t border-black/5 pt-2 text-[#525252]">
          <button
            type="button"
            className="like-btn flex min-h-[44px] min-w-[44px] items-center gap-1.5 text-xs font-medium"
            data-liked={liked}
            aria-pressed={liked}
            aria-label={liked ? "Batalkan suka" : "Suka"}
            onClick={() => setLiked((v) => !v)}
          >
            <HeartIcon />
            {product.likes}
          </button>
          <span className="flex items-center gap-1.5 text-xs font-medium">
            <CommentIcon />
            {product.comments}
          </span>
          <span className="ml-auto" aria-hidden="true">
            <ShareIcon />
          </span>
        </div>
      </div>
    </article>
  );
}

function TabIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Phone mockup showing the Kahade social-commerce feed. */
export function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[300px] sm:w-[330px]"
    >
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
              <span className="relative text-[#262626]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 20a2 2 0 0 0 4 0" strokeLinecap="round" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-black" />
              </span>
            </div>

            <div className="space-y-3 px-3">
              <ProductCard product={PRODUCTS[0]} defaultLiked />
              <ProductCard product={PRODUCTS[1]} />
            </div>

            {/* Bottom tab bar */}
            <div className="sticky bottom-0 mt-3 flex items-center justify-around border-t border-black/8 bg-white/95 px-6 py-2.5 backdrop-blur">
              <span className="text-black">
                <TabIcon d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9z" />
              </span>
              <span className="text-black/35">
                <TabIcon d="M11 5a6 6 0 1 0 4.2 10.3L20 20l1-1-4.7-4.7A6 6 0 0 0 11 5z" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <TabIcon d="M12 6v12M6 12h12" />
              </span>
              <span className="text-black/35">
                <TabIcon d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z" />
              </span>
              <span className="text-black/35">
                <TabIcon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0" />
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

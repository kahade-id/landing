"use client";

import Image from "next/image";
import { RealisticPhone } from "./RealisticPhone";

/** Phone mockup menampilkan screenshot asli aplikasi Kahade. */
export function PhoneMockup() {
  return (
    <RealisticPhone className="mx-auto w-[300px] sm:w-[330px]">
      {/* Layar: screenshot asli aplikasi */}
      <div className="relative h-[580px] w-full bg-[#F3F4F6] sm:h-[620px]">
        <Image
          src="/IMG_20261003_073351_971.jpg"
          alt="Tampilan asli aplikasi Kahade — feed jual beli yang aman"
          fill
          priority
          sizes="(max-width: 640px) 280px, 310px"
          className="object-cover object-top"
        />
      </div>

      {/* Soft glow behind */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[4rem] bg-gradient-to-b from-[#F3F4F6] to-transparent blur-2xl"
      />
    </RealisticPhone>
  );
}

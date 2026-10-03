"use client";

import Image from "next/image";

/** Phone mockup menampilkan screenshot asli aplikasi Kahade. */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]">
      {/* Frame */}
      <div className="rounded-[3rem] bg-black p-[10px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)]">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-white">
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Layar: screenshot asli aplikasi */}
          <div className="relative h-[560px] w-full bg-[#F3F4F6]">
            <Image
              src="/IMG_20261003_073351_971.jpg"
              alt="Tampilan asli aplikasi Kahade — feed jual beli Kahade"
              fill
              priority
              sizes="(max-width: 640px) 280px, 310px"
              className="object-cover object-top"
            />
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

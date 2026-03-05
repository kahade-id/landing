import { SimplePageLayout } from "@/components/layout";

export default function LicensePage() {
  return (
    <SimplePageLayout title="Lisensi & Kekayaan Intelektual" lastUpdated="1 Maret 2024">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Dokumen ini menjelaskan hak kekayaan intelektual PT Kahade Indonesia dan panduan penggunaan aset brand kami oleh pihak ketiga, termasuk mitra media, jurnalis, dan mitra bisnis.
          </p>
        </div>

        <section>
          <h2>Hak Cipta</h2>
          <p>Seluruh konten yang tersedia di platform Kahade — termasuk namun tidak terbatas pada teks, grafis, logo, ikon, foto, audio, video, kode perangkat lunak, desain antarmuka, dan struktur navigasi — adalah milik eksklusif PT Kahade Indonesia atau pemilik konten yang telah memberikan lisensi penggunaan kepada kami.</p>
          <p>Konten dilindungi oleh Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta dan perjanjian internasional yang berlaku di Indonesia.</p>
        </section>

        <section>
          <h2>Merek Dagang</h2>
          <p>Nama "<strong className="text-foreground">Kahade</strong>", logo Kahade, tagline, dan identitas visual lainnya adalah merek dagang terdaftar milik PT Kahade Indonesia.</p>
          <p>Merek dagang pihak ketiga yang disebutkan atau ditampilkan di platform kami adalah milik pemiliknya masing-masing. Penyebutan tidak berarti afiliasi atau endorsement.</p>

          <h3>Penggunaan Logo Kahade oleh Pihak Ketiga</h3>
          <p>Mitra resmi, mitra media, dan pihak yang telah mendapat persetujuan tertulis diizinkan menggunakan logo Kahade dengan ketentuan:</p>
          <ul>
            <li>Tidak mengubah proporsi, warna, atau elemen visual logo</li>
            <li>Memberikan ruang kosong yang cukup di sekitar logo (minimum 20% dari tinggi logo)</li>
            <li>Tidak menempatkan logo di atas latar belakang yang mengganggu keterbacaan</li>
            <li>Tidak menggunakan logo untuk menyiratkan kemitraan atau endorsement yang tidak ada</li>
          </ul>
          <p>Unduh aset brand resmi di halaman <a href="/press" className="text-foreground underline">Ruang Media</a> kami.</p>
        </section>

        <section>
          <h2>Lisensi Penggunaan Terbatas</h2>
          <p>Dengan tunduk pada ketentuan ini, kami memberikan lisensi terbatas, non-eksklusif, tidak dapat dialihkan untuk:</p>
          <ul>
            <li>Mengakses dan menggunakan platform Kahade untuk keperluan pribadi dan komersial yang sah</li>
            <li>Mengunduh dan mencetak konten untuk referensi pribadi (bukan redistribusi)</li>
            <li>Berbagi tautan ke konten Kahade dengan atribusi yang jelas</li>
            <li>Mengutip teks dalam jumlah wajar untuk keperluan editorial dengan atribusi</li>
          </ul>
        </section>

        <section>
          <h2>Penggunaan yang Dilarang</h2>
          <p>Tanpa persetujuan tertulis sebelumnya, dilarang:</p>
          <ul>
            <li>Mereproduksi, mendistribusikan, atau menjual konten Kahade untuk tujuan komersial</li>
            <li>Memodifikasi, menerjemahkan, atau membuat karya turunan</li>
            <li>Melakukan scraping otomatis atau pengambilan data massal</li>
            <li>Membuat situs atau aplikasi yang berpura-pura menjadi Kahade (phishing)</li>
            <li>Menggunakan merek dagang Kahade dalam nama domain atau nama bisnis</li>
            <li>Melepas, memodifikasi, atau menyembunyikan pemberitahuan hak cipta</li>
          </ul>
        </section>

        <section>
          <h2>Open Source</h2>
          <p>Beberapa komponen platform Kahade dibangun menggunakan perangkat lunak open source. Kami berterima kasih kepada komunitas open source dan memenuhi semua kewajiban lisensi yang berlaku. Daftar lengkap dependensi open source tersedia berdasarkan permintaan.</p>
        </section>

        <section>
          <h2>Pelanggaran dan Penegakan Hukum</h2>
          <p>Jika Anda menemukan dugaan pelanggaran kekayaan intelektual Kahade, atau jika Anda percaya konten Anda telah digunakan tanpa izin di platform kami, harap hubungi:</p>
          <ul>
            <li>Email DMCA/IP: <a href="mailto:legal@kahade.id">legal@kahade.id</a></li>
            <li>Sertakan: identitas Anda, deskripsi karya yang dilanggar, URL spesifik, dan pernyataan itikad baik</li>
          </ul>
        </section>

        <section>
          <h2>Hubungi Kami</h2>
          <p>Pertanyaan tentang lisensi atau izin penggunaan: <a href="mailto:legal@kahade.id">legal@kahade.id</a></p>
        </section>
      </div>
    </SimplePageLayout>
  );
}

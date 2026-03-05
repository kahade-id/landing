import { SimplePageLayout } from "@/components/layout";
import Link from "next/link";

export default function AntiFraudPage() {
  return (
    <SimplePageLayout title="Kebijakan Pencegahan Penipuan" lastUpdated="1 Maret 2026">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kahade berkomitmen untuk menciptakan ekosistem transaksi yang aman dan bebas penipuan. Kebijakan ini menjelaskan langkah-langkah yang kami ambil untuk mencegah, mendeteksi, dan menangani penipuan, serta tanggung jawab pengguna dalam menjaga keamanan platform.
          </p>
        </div>

        <section>
          <h2>1. Komitmen Kahade terhadap Keamanan</h2>
          <p>Kahade menerapkan pendekatan berlapis dalam pencegahan penipuan yang mencakup teknologi, kebijakan, dan edukasi pengguna:</p>
          <ul>
            <li><strong className="text-foreground">Pencegahan Proaktif:</strong> Sistem otomatis yang memantau pola transaksi mencurigakan secara real-time</li>
            <li><strong className="text-foreground">Deteksi Dini:</strong> Machine learning yang mengidentifikasi anomali sebelum fraud terjadi</li>
            <li><strong className="text-foreground">Respons Cepat:</strong> Tim keamanan yang siap merespons laporan dalam 1×24 jam</li>
            <li><strong className="text-foreground">Edukasi:</strong> Informasi berkelanjutan kepada pengguna tentang modus penipuan terkini</li>
          </ul>
        </section>

        <section>
          <h2>2. Modus Penipuan yang Perlu Diwaspadai</h2>

          <h3>2.1 Phishing & Impersonasi</h3>
          <ul>
            <li>Email atau pesan yang mengatasnamakan Kahade meminta data login atau informasi kartu</li>
            <li>Website palsu yang menyerupai tampilan Kahade (selalu pastikan URL: kahade.id)</li>
            <li>Akun media sosial palsu mengatasnamakan Kahade atau staf kami</li>
          </ul>
          <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg border border-border">
            ⚠️ <strong>Penting:</strong> Kahade tidak pernah meminta password, kode OTP, atau informasi kartu pembayaran melalui email, WhatsApp, atau telepon.
          </p>

          <h3>2.2 Transaksi Palsu</h3>
          <ul>
            <li>Penjual yang tidak pernah mengirimkan barang setelah menerima bukti pembayaran palsu</li>
            <li>Pembeli yang mengklaim barang tidak diterima meskipun sudah ada bukti pengiriman valid</li>
            <li>Manipulasi bukti transfer atau tangkapan layar pembayaran</li>
          </ul>

          <h3>2.3 Penipuan di Luar Platform</h3>
          <ul>
            <li>Penjual yang mengajak transaksi di luar Kahade setelah negosiasi dimulai di platform</li>
            <li>Tawaran "biaya lebih murah" jika transaksi dilakukan langsung tanpa escrow</li>
            <li>Permintaan pembayaran melalui transfer langsung dengan dalih "sistem sedang maintenance"</li>
          </ul>
        </section>

        <section>
          <h2>3. Sistem Perlindungan Kahade</h2>

          <h3>3.1 Verifikasi Identitas (KYC)</h3>
          <p>Setiap pengguna wajib menyelesaikan verifikasi identitas menggunakan dokumen resmi. Proses ini memastikan semua pihak yang bertransaksi adalah individu atau entitas yang dapat diidentifikasi dan dipertanggungjawabkan.</p>

          <h3>3.2 Pemantauan Transaksi Otomatis</h3>
          <p>Sistem kami secara otomatis:</p>
          <ul>
            <li>Memantau frekuensi dan pola transaksi setiap akun</li>
            <li>Menandai transaksi yang melebihi batas normal untuk review manual</li>
            <li>Menghentikan sementara akun yang terdeteksi melakukan aktivitas mencurigakan</li>
            <li>Melakukan pengecekan blacklist terhadap data pengguna dan rekening bank</li>
          </ul>

          <h3>3.3 Rekening Escrow Terpisah</h3>
          <p>Dana yang masuk ke Kahade disimpan di rekening escrow yang terpisah dan tidak dapat diakses oleh pihak manapun sebelum kondisi pencairan terpenuhi sesuai <Link href="/escrow-terms" className="text-foreground underline">Ketentuan Escrow</Link>.</p>

          <h3>3.4 Sistem Sengketa</h3>
          <p>Jika terjadi ketidaksesuaian, pengguna dapat mengajukan sengketa formal. Tim mediasi kami akan meninjau bukti dari kedua pihak secara objektif dan membuat keputusan dalam 3-5 hari kerja.</p>
        </section>

        <section>
          <h2>4. Kewajiban Pengguna</h2>
          <p>Untuk menjaga keamanan ekosistem Kahade, pengguna diwajibkan untuk:</p>
          <ul>
            <li>Tidak memberikan password atau kode OTP kepada siapapun, termasuk staf Kahade</li>
            <li>Melakukan seluruh proses transaksi di dalam platform Kahade</li>
            <li>Memberikan informasi yang akurat dan jujur dalam setiap transaksi</li>
            <li>Segera melaporkan aktivitas mencurigakan yang terdeteksi</li>
            <li>Tidak membuat akun ganda atau menggunakan identitas palsu</li>
            <li>Menjaga kerahasiaan data akun dan tidak berbagi akses dengan pihak lain</li>
          </ul>
        </section>

        <section>
          <h2>5. Tindakan terhadap Pelaku Penipuan</h2>
          <p>Kahade berhak mengambil tindakan berikut terhadap pengguna yang terbukti melakukan penipuan:</p>
          <ul>
            <li>Pemblokiran akun secara permanen</li>
            <li>Pembekuan dana dalam rekening escrow terkait</li>
            <li>Pelaporan kepada aparat penegak hukum yang berwenang</li>
            <li>Penyampaian data pengguna kepada pihak berwajib sesuai ketentuan hukum</li>
            <li>Tuntutan hukum perdata dan/atau pidana sesuai peraturan yang berlaku</li>
          </ul>
        </section>

        <section>
          <h2>6. Cara Melaporkan Penipuan</h2>
          <p>Jika Anda mencurigai adanya aktivitas penipuan atau penyalahgunaan platform, segera laporkan melalui:</p>
          <ul>
            <li>Email: <a href="mailto:fraud@kahade.id" className="text-foreground underline">fraud@kahade.id</a> (diprioritaskan, respons dalam 4 jam)</li>
            <li>Tombol "Laporkan" di dalam transaksi terkait pada aplikasi/web</li>
            <li>Halaman <Link href="/contact" className="text-foreground underline">Kontak Kami</Link></li>
          </ul>
          <p>Sertakan informasi berikut dalam laporan Anda: ID transaksi (jika ada), tangkapan layar aktivitas mencurigakan, dan deskripsi singkat kejadian.</p>
        </section>

        <section>
          <h2>7. Kerjasama dengan Aparat Penegak Hukum</h2>
          <p>Kahade berkomitmen untuk bekerjasama penuh dengan aparat penegak hukum dalam penyelidikan kasus penipuan, termasuk menyediakan data transaksi dan informasi akun sesuai dengan prosedur hukum yang berlaku dan ketentuan <Link href="/privacy" className="text-foreground underline">Kebijakan Privasi</Link> kami.</p>
        </section>

        <section>
          <h2>8. Pembaruan Kebijakan</h2>
          <p>Kebijakan ini dapat diperbarui sewaktu-waktu untuk mencerminkan perubahan ancaman keamanan atau regulasi. Pengguna akan diberitahu melalui email dan notifikasi dalam aplikasi untuk perubahan yang signifikan.</p>
        </section>
      </div>
    </SimplePageLayout>
  );
}

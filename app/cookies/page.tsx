import { SimplePageLayout } from "@/components/layout";

export default function CookiesPage() {
  return (
    <SimplePageLayout title="Kebijakan Cookie" lastUpdated="1 Maret 2024">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kebijakan Cookie ini menjelaskan cara Kahade menggunakan cookie dan teknologi pelacak serupa di website dan aplikasi kami. Kebijakan ini merupakan bagian dari <a href="/privacy" className="text-foreground underline">Kebijakan Privasi</a> kami.
          </p>
        </div>

        <section>
          <h2>Apa Itu Cookie?</h2>
          <p>Cookie adalah file teks kecil yang ditempatkan di perangkat Anda saat mengunjungi website. Cookie membantu website mengingat informasi tentang kunjungan Anda — seperti preferensi bahasa atau status login — sehingga kunjungan berikutnya lebih mudah dan nyaman.</p>
          <p>Selain cookie tradisional, kami juga menggunakan teknologi serupa seperti web storage (localStorage, sessionStorage), pixel tracking, dan fingerprinting terbatas untuk tujuan keamanan.</p>
        </section>

        <section>
          <h2>Jenis Cookie yang Kami Gunakan</h2>

          <h3>Cookie Esensial (Wajib)</h3>
          <p>Cookie ini mutlak diperlukan agar website berfungsi dengan benar. Tidak dapat dinonaktifkan karena terkait langsung dengan keamanan dan fungsionalitas inti layanan.</p>
          <ul>
            <li><strong className="text-foreground">Session cookie:</strong> Menjaga status login Anda selama sesi aktif</li>
            <li><strong className="text-foreground">CSRF token:</strong> Melindungi akun dari serangan cross-site request forgery</li>
            <li><strong className="text-foreground">Load balancer cookie:</strong> Memastikan konsistensi pengalaman selama sesi</li>
          </ul>

          <h3>Cookie Fungsional (Preferensi)</h3>
          <p>Memungkinkan website mengingat pilihan Anda untuk pengalaman yang lebih personal.</p>
          <ul>
            <li>Preferensi bahasa dan region</li>
            <li>Pengaturan tampilan (mode terang/gelap jika tersedia)</li>
            <li>Metode pembayaran yang terakhir digunakan</li>
          </ul>

          <h3>Cookie Analitik (Performa)</h3>
          <p>Membantu kami memahami cara pengguna berinteraksi dengan website secara anonim, sehingga kami dapat meningkatkan produk.</p>
          <ul>
            <li>Halaman yang paling sering dikunjungi</li>
            <li>Jalur navigasi pengguna</li>
            <li>Waktu yang dihabiskan di setiap halaman</li>
            <li>Sumber kunjungan (referrer)</li>
          </ul>
          <p>Data analitik dikumpulkan secara anonim dan diproses oleh pihak ketiga terpercaya yang terikat perjanjian pemrosesan data.</p>

          <h3>Cookie Keamanan</h3>
          <p>Digunakan khusus untuk mendeteksi aktivitas mencurigakan, mencegah penipuan, dan melindungi integritas platform.</p>
          <ul>
            <li>Deteksi bot dan aktivitas otomatis</li>
            <li>Rate limiting untuk mencegah serangan brute force</li>
            <li>Verifikasi keaslian perangkat untuk transaksi bernilai tinggi</li>
          </ul>
        </section>

        <section>
          <h2>Durasi Cookie</h2>
          <ul>
            <li><strong className="text-foreground">Session cookies:</strong> Dihapus saat browser ditutup</li>
            <li><strong className="text-foreground">Cookie fungsional:</strong> Disimpan hingga 12 bulan</li>
            <li><strong className="text-foreground">Cookie analitik:</strong> Disimpan hingga 24 bulan</li>
            <li><strong className="text-foreground">Cookie keamanan:</strong> Bervariasi, umumnya 30 hari</li>
          </ul>
        </section>

        <section>
          <h2>Mengelola Preferensi Cookie</h2>
          <p>Anda dapat mengelola cookie melalui beberapa cara:</p>

          <h3>Melalui Pengaturan Browser</h3>
          <ul>
            <li><strong className="text-foreground">Chrome:</strong> Pengaturan &gt; Privasi dan Keamanan &gt; Cookie dan Data Situs</li>
            <li><strong className="text-foreground">Firefox:</strong> Opsi &gt; Privasi & Keamanan &gt; Cookie dan Data Situs</li>
            <li><strong className="text-foreground">Safari:</strong> Preferensi &gt; Privasi &gt; Cookie dan Data Website</li>
          </ul>

          <h3>Implikasi Menonaktifkan Cookie</h3>
          <p>Menonaktifkan cookie esensial akan mencegah Anda login dan menggunakan layanan Kahade. Menonaktifkan cookie fungsional berarti Anda perlu mengatur ulang preferensi setiap kunjungan. Cookie analitik dapat dinonaktifkan tanpa memengaruhi fungsi utama layanan.</p>
        </section>

        <section>
          <h2>Pembaruan Kebijakan</h2>
          <p>Kami dapat memperbarui kebijakan ini seiring perubahan teknologi atau regulasi. Perubahan material akan diberitahukan melalui notifikasi di website.</p>
        </section>

        <section>
          <h2>Hubungi Kami</h2>
          <p>Pertanyaan tentang penggunaan cookie: <a href="mailto:privacy@kahade.id">privacy@kahade.id</a></p>
        </section>
      </div>
    </SimplePageLayout>
  );
}

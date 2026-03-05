import { SimplePageLayout } from "@/components/layout";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <SimplePageLayout title="Kebijakan Privasi" lastUpdated="1 Maret 2024">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kebijakan Privasi ini menjelaskan bagaimana PT Kahade Indonesia ("<strong className="text-foreground">Kahade</strong>", "<strong className="text-foreground">kami</strong>") mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami di{" "}
            <Link href="/" className="text-foreground underline">kahade.id</Link> dan aplikasi terkait. Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
          </p>
        </div>

        <section>
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan beberapa kategori informasi untuk menyediakan dan meningkatkan layanan kami:</p>
          <h3>Informasi yang Anda Berikan Langsung</h3>
          <ul>
            <li>Identitas: nama lengkap, tanggal lahir, jenis kelamin</li>
            <li>Kontak: alamat email, nomor telepon, alamat tempat tinggal</li>
            <li>Keuangan: nomor rekening bank, data dompet digital</li>
            <li>Verifikasi identitas: foto KTP/SIM, swafoto untuk verifikasi</li>
            <li>Komunikasi: pesan yang Anda kirim ke tim support kami</li>
          </ul>
          <h3>Informasi yang Dikumpulkan Secara Otomatis</h3>
          <ul>
            <li>Log aktivitas: halaman yang dikunjungi, waktu akses, fitur yang digunakan</li>
            <li>Data perangkat: jenis perangkat, sistem operasi, browser, alamat IP</li>
            <li>Cookies dan teknologi pelacak serupa (lihat <Link href="/cookies" className="text-foreground underline">Kebijakan Cookie</Link>)</li>
            <li>Data transaksi: nominal, tanggal, pihak yang terlibat, status transaksi</li>
          </ul>
        </section>

        <section>
          <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
          <ul>
            <li><strong className="text-foreground">Menyediakan layanan escrow:</strong> Memproses transaksi, menahan dan melepaskan dana sesuai kesepakatan</li>
            <li><strong className="text-foreground">Verifikasi identitas (KYC):</strong> Memenuhi kewajiban hukum anti pencucian uang (AML) dan mengenal nasabah</li>
            <li><strong className="text-foreground">Keamanan:</strong> Mendeteksi, mencegah, dan menyelidiki penipuan dan aktivitas ilegal</li>
            <li><strong className="text-foreground">Komunikasi:</strong> Notifikasi transaksi, pembaruan layanan, dan respons atas pertanyaan Anda</li>
            <li><strong className="text-foreground">Peningkatan produk:</strong> Analisis penggunaan untuk mengoptimalkan fitur dan pengalaman pengguna</li>
            <li><strong className="text-foreground">Kepatuhan hukum:</strong> Memenuhi kewajiban regulasi, pelaporan kepada otoritas yang berwenang</li>
          </ul>
          <p>Kami tidak menggunakan informasi Anda untuk penargetan iklan pihak ketiga tanpa persetujuan eksplisit.</p>
        </section>

        <section>
          <h2>3. Dasar Hukum Pemrosesan Data</h2>
          <p>Kami memproses data pribadi Anda berdasarkan dasar hukum berikut sesuai UU Perlindungan Data Pribadi Indonesia:</p>
          <ul>
            <li><strong className="text-foreground">Pelaksanaan perjanjian:</strong> Memproses data yang diperlukan untuk menyediakan layanan escrow yang Anda minta</li>
            <li><strong className="text-foreground">Kewajiban hukum:</strong> Kepatuhan terhadap peraturan OJK, PPATK, dan regulasi keuangan lainnya</li>
            <li><strong className="text-foreground">Kepentingan sah:</strong> Pencegahan penipuan, keamanan platform, dan peningkatan layanan</li>
            <li><strong className="text-foreground">Persetujuan:</strong> Untuk komunikasi pemasaran dan penggunaan data non-esensial lainnya</li>
          </ul>
        </section>

        <section>
          <h2>4. Keamanan Data</h2>
          <p>Kami menerapkan langkah keamanan teknis dan organisasi yang komprehensif:</p>
          <ul>
            <li>Enkripsi TLS/SSL untuk semua data yang ditransmisikan</li>
            <li>Enkripsi AES-256 untuk data yang disimpan di database</li>
            <li>Kontrol akses berbasis peran (RBAC) dengan prinsip least privilege</li>
            <li>Autentikasi multi-faktor wajib untuk akun staf yang mengakses data pengguna</li>
            <li>Audit log lengkap untuk semua akses ke data sensitif</li>
            <li>Penetration testing dan audit keamanan independen setiap tahun</li>
            <li>Prosedur respons insiden keamanan yang terdokumentasi</li>
          </ul>
          <p>Namun, tidak ada sistem yang 100% aman. Kami mendorong Anda untuk menggunakan kata sandi kuat dan menjaga kerahasiaan kredensial akun Anda.</p>
        </section>

        <section>
          <h2>5. Berbagi dan Pengungkapan Informasi</h2>
          <p>Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda. Informasi hanya dibagikan dalam situasi berikut:</p>
          <ul>
            <li><strong className="text-foreground">Pihak lawan transaksi:</strong> Informasi yang diperlukan untuk menyelesaikan transaksi escrow (nama, konfirmasi pembayaran)</li>
            <li><strong className="text-foreground">Penyedia layanan:</strong> Mitra teknis yang membantu mengoperasikan platform (payment gateway, hosting, analitik) — terikat perjanjian kerahasiaan</li>
            <li><strong className="text-foreground">Kewajiban hukum:</strong> Pengungkapan kepada OJK, PPATK, kepolisian, atau pengadilan jika diwajibkan hukum</li>
            <li><strong className="text-foreground">Perlindungan hak:</strong> Jika diperlukan untuk menegakkan syarat layanan atau melindungi hak pengguna lain</li>
            <li><strong className="text-foreground">Restrukturisasi bisnis:</strong> Dalam kasus merger atau akuisisi, data dapat dialihkan kepada entitas penerus (dengan pemberitahuan terlebih dahulu)</li>
          </ul>
        </section>

        <section>
          <h2>6. Retensi Data</h2>
          <p>Kami menyimpan data pribadi selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini:</p>
          <ul>
            <li>Data akun aktif: selama akun aktif dan 5 tahun setelah penutupan akun</li>
            <li>Data transaksi: 10 tahun sesuai ketentuan regulasi keuangan Indonesia</li>
            <li>Data KYC/verifikasi identitas: sesuai ketentuan PPATK (5 tahun setelah hubungan bisnis berakhir)</li>
            <li>Log komunikasi support: 3 tahun</li>
          </ul>
          <p>Setelah periode retensi berakhir, data dihapus secara aman atau dianonimasi.</p>
        </section>

        <section>
          <h2>7. Hak-Hak Anda</h2>
          <p>Sesuai UU PDP Indonesia, Anda memiliki hak-hak berikut atas data pribadi Anda:</p>
          <ul>
            <li><strong className="text-foreground">Akses:</strong> Meminta salinan data pribadi yang kami pegang tentang Anda</li>
            <li><strong className="text-foreground">Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat atau tidak lengkap</li>
            <li><strong className="text-foreground">Penghapusan:</strong> Meminta penghapusan data pribadi Anda (tunduk pada kewajiban hukum kami)</li>
            <li><strong className="text-foreground">Portabilitas:</strong> Menerima data Anda dalam format terstruktur yang dapat dibaca mesin</li>
            <li><strong className="text-foreground">Keberatan:</strong> Menolak pemrosesan data untuk tujuan tertentu, termasuk pemasaran langsung</li>
            <li><strong className="text-foreground">Penarikan persetujuan:</strong> Menarik kembali persetujuan yang sebelumnya diberikan</li>
          </ul>
          <p>Untuk menggunakan hak-hak ini, kirimkan permintaan ke <a href="mailto:privacy@kahade.id">privacy@kahade.id</a>. Kami merespons dalam 30 hari kalender.</p>
        </section>

        <section>
          <h2>8. Perubahan Kebijakan</h2>
          <p>Kami dapat memperbarui kebijakan ini secara berkala. Perubahan material akan diberitahukan melalui email atau notifikasi in-app minimal 30 hari sebelum berlaku. Penggunaan layanan setelah tanggal efektif perubahan merupakan persetujuan atas kebijakan yang diperbarui.</p>
        </section>

        <section>
          <h2>9. Hubungi Kami</h2>
          <p>Untuk pertanyaan, permintaan, atau keluhan terkait privasi:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@kahade.id">privacy@kahade.id</a></li>
            <li>Surat: Privacy Officer, PT Kahade Indonesia, Jl. Sudirman No. 123, Jakarta Pusat 10220</li>
          </ul>
          <p>Jika Anda tidak puas dengan respon kami, Anda memiliki hak untuk mengajukan pengaduan ke Kominfo atau otoritas perlindungan data yang relevan.</p>
        </section>
      </div>
    </SimplePageLayout>
  );
}

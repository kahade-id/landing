import { SimplePageLayout } from "@/components/layout";
import Link from "next/link";

export default function TermsPage() {
  return (
    <SimplePageLayout title="Ketentuan Layanan" lastUpdated="1 Maret 2024">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ketentuan Layanan ini merupakan perjanjian hukum antara Anda dan <strong className="text-foreground">PT Kahade Indonesia</strong>. Harap baca dengan seksama sebelum menggunakan layanan kami. Dengan mendaftar atau menggunakan Kahade, Anda menyatakan telah membaca, memahami, dan menyetujui ketentuan ini.
          </p>
        </div>

        <section>
          <h2>1. Definisi</h2>
          <ul>
            <li><strong className="text-foreground">"Kahade"</strong>: PT Kahade Indonesia, platform, dan semua layanan terkait</li>
            <li><strong className="text-foreground">"Pengguna"</strong>: Setiap individu atau entitas yang mendaftar dan menggunakan layanan Kahade</li>
            <li><strong className="text-foreground">"Transaksi"</strong>: Setiap perjanjian jual-beli atau pertukaran nilai yang diproses melalui sistem escrow Kahade</li>
            <li><strong className="text-foreground">"Dana Escrow"</strong>: Dana yang disimpan dalam rekening terpisah Kahade untuk menjamin transaksi</li>
            <li><strong className="text-foreground">"Sengketa"</strong>: Situasi di mana kedua pihak tidak setuju pada hasil atau syarat transaksi</li>
          </ul>
        </section>

        <section>
          <h2>2. Deskripsi Layanan</h2>
          <p>Kahade menyediakan platform escrow peer-to-peer yang memungkinkan pengguna bertransaksi dengan aman. Mekanisme kerja:</p>
          <ol>
            <li>Pembeli mengirimkan dana ke rekening escrow Kahade</li>
            <li>Kahade mengkonfirmasi penerimaan dana dan memberitahu penjual</li>
            <li>Penjual mengirimkan barang/jasa sesuai kesepakatan</li>
            <li>Pembeli mengkonfirmasi penerimaan yang memuaskan</li>
            <li>Kahade melepaskan dana ke penjual (dikurangi biaya platform)</li>
          </ol>
          <p>Kahade bertindak sebagai perantara netral dan bukan sebagai pihak dalam transaksi itu sendiri.</p>
        </section>

        <section>
          <h2>3. Kelayakan dan Pendaftaran Akun</h2>
          <p>Untuk menggunakan layanan Kahade, Anda harus:</p>
          <ul>
            <li>Berusia minimal 17 tahun atau memiliki persetujuan orang tua/wali yang sah</li>
            <li>Merupakan warga negara atau penduduk tetap Indonesia</li>
            <li>Memiliki nomor telepon dan email yang valid</li>
            <li>Menyelesaikan proses verifikasi identitas (KYC) yang diwajibkan</li>
            <li>Tidak pernah dilarang dari layanan Kahade sebelumnya</li>
          </ul>
          <p>Anda bertanggung jawab menjaga kerahasiaan kredensial akun dan wajib segera melaporkan akses tidak sah ke <a href="mailto:security@kahade.id">security@kahade.id</a>.</p>
        </section>

        <section>
          <h2>4. Biaya dan Pembayaran</h2>
          <ul>
            <li><strong className="text-foreground">Biaya platform:</strong> 2,5% dari nilai transaksi</li>
            <li><strong className="text-foreground">Minimum biaya:</strong> Rp 2.500 per transaksi</li>
            <li><strong className="text-foreground">Maksimum biaya:</strong> Rp 250.000 per transaksi</li>
            <li><strong className="text-foreground">Penanggung biaya:</strong> Dapat ditanggung pembeli, penjual, atau dibagi sesuai kesepakatan awal</li>
            <li><strong className="text-foreground">Biaya transfer bank:</strong> Biaya transfer pihak bank ditanggung pengguna sesuai kebijakan bank masing-masing</li>
          </ul>
          <p>Kahade berhak mengubah struktur biaya dengan pemberitahuan 30 hari sebelumnya. Transaksi yang sudah berjalan tidak terpengaruh perubahan tarif.</p>
        </section>

        <section>
          <h2>5. Kewajiban Pengguna</h2>
          <p>Sebagai pengguna Kahade, Anda berkomitmen untuk:</p>
          <ul>
            <li>Memberikan informasi yang akurat, jujur, dan tidak menyesatkan</li>
            <li>Menggunakan platform hanya untuk transaksi yang sah secara hukum</li>
            <li>Tidak terlibat dalam penipuan, pencucian uang, atau aktivitas ilegal</li>
            <li>Menyelesaikan transaksi dengan itikad baik</li>
            <li>Tidak melakukan penyalahgunaan sistem mediasi atau sengketa</li>
            <li>Mematuhi semua hukum dan regulasi yang berlaku di Indonesia</li>
          </ul>
        </section>

        <section>
          <h2>6. Transaksi dan Batas Waktu</h2>
          <ul>
            <li>Dana escrow dapat ditahan maksimal <strong className="text-foreground">30 hari</strong> untuk transaksi standar</li>
            <li>Jika melewati batas waktu tanpa konfirmasi, dana dikembalikan otomatis ke pembeli</li>
            <li>Perpanjangan waktu dapat diminta melalui kesepakatan kedua pihak melalui platform</li>
            <li>Penjual wajib mengupdate status pengiriman dalam platform Kahade</li>
          </ul>
        </section>

        <section>
          <h2>7. Penyelesaian Sengketa</h2>
          <p>Jika terjadi perselisihan, prosedur berikut berlaku:</p>
          <ol>
            <li><strong className="text-foreground">Negosiasi mandiri:</strong> Kedua pihak didorong menyelesaikan sendiri dalam 48 jam</li>
            <li><strong className="text-foreground">Mediasi Kahade:</strong> Jika gagal, salah satu pihak dapat mengajukan permintaan mediasi</li>
            <li><strong className="text-foreground">Review bukti:</strong> Tim mediasi meninjau semua bukti dari kedua pihak dalam 3–5 hari kerja</li>
            <li><strong className="text-foreground">Keputusan:</strong> Keputusan mediator bersifat final dan mengikat dalam platform Kahade</li>
          </ol>
          <p>Biaya mediasi: gratis untuk transaksi di bawah Rp 10 juta. Transaksi di atas Rp 10 juta dikenakan biaya mediasi Rp 50.000.</p>
        </section>

        <section>
          <h2>8. Pembatasan Tanggung Jawab</h2>
          <p>Kahade tidak bertanggung jawab atas:</p>
          <ul>
            <li>Kerugian akibat penipuan yang dilakukan oleh pengguna lain</li>
            <li>Kerusakan atau ketidaksesuaian barang yang tidak dilaporkan dalam batas waktu yang ditentukan</li>
            <li>Gangguan layanan di luar kendali kami (force majeure)</li>
            <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
          </ul>
          <p>Tanggung jawab maksimal Kahade terbatas pada nilai transaksi yang disengketakan atau Rp 10 juta, mana yang lebih rendah.</p>
        </section>

        <section>
          <h2>9. Penghentian Layanan</h2>
          <p>Kahade berhak menangguhkan atau menutup akun Anda jika terbukti melanggar ketentuan ini, melakukan penipuan, atau mengancam keamanan platform. Dana yang sah akan dikembalikan sesuai prosedur yang berlaku.</p>
        </section>

        <section>
          <h2>10. Hukum yang Berlaku</h2>
          <p>Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang tidak dapat diselesaikan melalui mediasi akan diselesaikan melalui Pengadilan Negeri Jakarta Pusat.</p>
        </section>

        <section>
          <h2>11. Hubungi Kami</h2>
          <p>Pertanyaan tentang ketentuan ini: <a href="mailto:legal@kahade.id">legal@kahade.id</a></p>
        </section>
      </div>
    </SimplePageLayout>
  );
}

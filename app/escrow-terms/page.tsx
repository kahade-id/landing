import { SimplePageLayout } from "@/components/layout";
import Link from "next/link";

export default function EscrowTermsPage() {
  return (
    <SimplePageLayout title="Ketentuan Escrow" lastUpdated="1 Maret 2026">
      <div className="space-y-10">
        <div className="p-6 bg-muted rounded-xl border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ketentuan Escrow ini mengatur mekanisme penahan dan pelepasan dana dalam setiap transaksi yang dilakukan melalui platform Kahade. Dengan memulai transaksi, Anda menyetujui ketentuan ini secara penuh. Harap baca dengan seksama sebelum menggunakan layanan escrow kami.
          </p>
        </div>

        <section>
          <h2>1. Definisi</h2>
          <p>Dalam Ketentuan Escrow ini, istilah-istilah berikut memiliki makna sebagai berikut:</p>
          <ul>
            <li><strong className="text-foreground">Escrow</strong> adalah mekanisme penyimpanan dana sementara oleh Kahade atas nama kedua pihak transaksi.</li>
            <li><strong className="text-foreground">Dana Escrow</strong> adalah uang yang disetor oleh Pembeli ke rekening escrow Kahade untuk keperluan transaksi tertentu.</li>
            <li><strong className="text-foreground">Pembeli</strong> adalah pihak yang melakukan pembayaran dan memasukkan dana ke sistem escrow.</li>
            <li><strong className="text-foreground">Penjual</strong> adalah pihak yang menerima dana setelah kondisi transaksi terpenuhi.</li>
            <li><strong className="text-foreground">Kondisi Pencairan</strong> adalah syarat yang harus dipenuhi agar dana escrow dilepaskan kepada Penjual.</li>
            <li><strong className="text-foreground">Periode Escrow</strong> adalah rentang waktu selama dana ditahan dalam sistem escrow.</li>
          </ul>
        </section>

        <section>
          <h2>2. Mekanisme Escrow</h2>
          <h3>2.1 Proses Pembayaran ke Escrow</h3>
          <p>Setelah transaksi dibuat dan disepakati oleh kedua pihak:</p>
          <ul>
            <li>Pembeli melakukan pembayaran sesuai jumlah transaksi melalui metode pembayaran yang tersedia</li>
            <li>Dana masuk ke rekening escrow Kahade yang terpisah dari dana operasional perusahaan</li>
            <li>Konfirmasi penerimaan dana dikirimkan kepada kedua pihak secara otomatis</li>
            <li>Status transaksi berubah menjadi "Dana Diterima — Menunggu Pengiriman/Pemenuhan"</li>
          </ul>

          <h3>2.2 Penahan Dana</h3>
          <p>Dana ditahan dalam sistem escrow selama Periode Escrow berlangsung. Dana hanya dapat dilepaskan dalam kondisi berikut:</p>
          <ul>
            <li>Pembeli mengkonfirmasi penerimaan barang/jasa sesuai kesepakatan</li>
            <li>Periode escrow berakhir tanpa adanya sengketa yang diajukan</li>
            <li>Keputusan tim mediasi memenangkan Penjual dalam proses sengketa</li>
            <li>Kedua pihak menyetujui pencairan secara mutual</li>
          </ul>

          <h3>2.3 Pelepasan Dana ke Penjual</h3>
          <p>Setelah kondisi pencairan terpenuhi, Kahade akan memproses pelepasan dana kepada Penjual dalam jangka waktu 1x24 jam hari kerja ke rekening yang telah terdaftar.</p>
        </section>

        <section>
          <h2>3. Durasi Escrow</h2>
          <ul>
            <li>Periode escrow standar adalah maksimal <strong className="text-foreground">30 hari kalender</strong> sejak dana diterima</li>
            <li>Periode dapat diperpanjang atas persetujuan kedua belah pihak, maksimal 2x perpanjangan</li>
            <li>Jika Pembeli tidak mengkonfirmasi penerimaan dalam 7 hari setelah bukti pengiriman valid disampaikan, sistem akan otomatis memproses konfirmasi</li>
            <li>Jika periode escrow habis tanpa konfirmasi dan tanpa sengketa, dana akan otomatis dilepaskan kepada Penjual</li>
          </ul>
        </section>

        <section>
          <h2>4. Pembatalan Transaksi</h2>
          <h3>4.1 Pembatalan Sebelum Pengiriman</h3>
          <p>Transaksi dapat dibatalkan dan dana dikembalikan penuh kepada Pembeli jika:</p>
          <ul>
            <li>Penjual belum mengkonfirmasi pengiriman</li>
            <li>Kedua pihak menyetujui pembatalan</li>
            <li>Penjual tidak merespons dalam batas waktu yang ditentukan</li>
          </ul>

          <h3>4.2 Pembatalan Setelah Pengiriman</h3>
          <p>Setelah Penjual mengkonfirmasi pengiriman, pembatalan hanya dapat dilakukan melalui proses sengketa formal.</p>

          <h3>4.3 Biaya Pembatalan</h3>
          <p>Tidak ada biaya pembatalan yang dikenakan kepada Pembeli untuk kondisi pembatalan yang sah sesuai ketentuan di atas.</p>
        </section>

        <section>
          <h2>5. Pengembalian Dana (Refund)</h2>
          <ul>
            <li>Pengembalian dana diproses dalam 1-3 hari kerja untuk bank transfer</li>
            <li>Pengembalian ke e-wallet diproses dalam 1x24 jam</li>
            <li>Biaya transfer bank yang timbul saat pengembalian ditanggung oleh Kahade</li>
            <li>Dana dikembalikan ke sumber pembayaran asal yang digunakan Pembeli</li>
          </ul>
        </section>

        <section>
          <h2>6. Rekening Escrow Terpisah</h2>
          <p>Kahade menjamin bahwa:</p>
          <ul>
            <li>Dana escrow disimpan di rekening bank terpisah dari dana operasional Kahade</li>
            <li>Dana escrow tidak dapat digunakan untuk keperluan operasional perusahaan</li>
            <li>Kahade melakukan audit rekening escrow secara berkala oleh auditor independen</li>
            <li>Dana pengguna terlindungi bahkan dalam skenario kebangkrutan perusahaan</li>
          </ul>
        </section>

        <section>
          <h2>7. Biaya Layanan Escrow</h2>
          <p>Biaya platform sebesar 2.5% dari nilai transaksi (minimum Rp 2.500, maksimum Rp 250.000) dikenakan atas penggunaan layanan escrow. Biaya ditampilkan secara transparan sebelum transaksi dikonfirmasi. Lihat halaman <Link href="/pricing" className="text-foreground underline">Harga & Paket</Link> untuk detail lebih lanjut.</p>
        </section>

        <section>
          <h2>8. Pembatasan Layanan</h2>
          <p>Layanan escrow tidak dapat digunakan untuk transaksi yang melibatkan:</p>
          <ul>
            <li>Barang atau jasa ilegal berdasarkan hukum yang berlaku di Indonesia</li>
            <li>Aset kripto atau instrumen keuangan tanpa izin regulasi yang sesuai</li>
            <li>Transaksi yang terindikasi sebagai pencucian uang atau pendanaan terorisme</li>
            <li>Konten yang melanggar hak kekayaan intelektual pihak ketiga</li>
          </ul>
        </section>

        <section>
          <h2>9. Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang Ketentuan Escrow ini, hubungi kami di:</p>
          <ul>
            <li>Email: <a href="mailto:legal@kahade.id" className="text-foreground underline">legal@kahade.id</a></li>
            <li>Halaman: <Link href="/contact" className="text-foreground underline">Kontak Kami</Link></li>
          </ul>
        </section>
      </div>
    </SimplePageLayout>
  );
}

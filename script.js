document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("calc-btn");
  if (!btn) return;

  function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
  }

  btn.addEventListener("click", function () {
    var harga = parseInt(document.getElementById("package").value, 10);
    var qtyRaw = document.getElementById("qty").value;
    var jumlah = parseInt(qtyRaw, 10);
    var kode = document.getElementById("promo").value.replace(/\s+/g, "").toUpperCase();
    var hasil = document.getElementById("result");

    if (qtyRaw === "" || isNaN(jumlah) || jumlah < 1) {
      hasil.innerHTML = "<p>Jumlah ruangan harus diisi minimal 1.</p>";
      return;
    }

    var hargaAwal = harga * jumlah;
    var persenDiskon;

    if (kode === "KINCLONG10" || jumlah >= 3) {
      persenDiskon = 10;
    } else {
      persenDiskon = 0;
    }

    var potongan = hargaAwal * persenDiskon / 100;
    var total = hargaAwal - potongan;

    hasil.innerHTML =
      "<p>Harga Awal: " + formatRupiah(hargaAwal) + "</p>" +
      "<p>Potongan Diskon (" + persenDiskon + "%): " + formatRupiah(potongan) + "</p>" +
      "<p><strong>Total Bayar: " + formatRupiah(total) + "</strong></p>";
  });
});

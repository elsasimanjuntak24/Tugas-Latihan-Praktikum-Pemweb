// Fungsi untuk menghitung nilai akhir dan menampilkan hasil
function hitungNilai() {
    // Mendapatkan nilai dari input Tugas, UTS, dan UAS
    const tugas = parseFloat(document.getElementById("nilaiTugas").value);
    const uts = parseFloat(document.getElementById("nilaiUTS").value);
    const uas = parseFloat(document.getElementById("nilaiUAS").value);

    // Validasi: Pastikan semua input adalah angka dan berada di antara 0-100
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Masukkan nilai antara 0 dan 100 untuk setiap komponen.");
        return; // Keluar dari fungsi jika ada input yang tidak valid
    }

    // Perhitungan nilai akhir dengan rata-rata tertimbang
    const totalNilai = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
    
    // Menentukan grade berdasarkan nilai akhir
    let grade = '';
    let lulus = totalNilai >= 60; // Kondisi lulus jika nilai >= 60

    if (totalNilai >= 90) grade = 'A';
    else if (totalNilai >= 80) grade = 'B';
    else if (totalNilai >= 70) grade = 'C';
    else if (totalNilai >= 60) grade = 'D';
    else grade = 'E';

    // Menampilkan hasil di div #hasil dengan status dan warna
    document.getElementById("hasil").innerHTML = `
        <p>Nilai Akhir: ${totalNilai.toFixed(2)} (Grade: ${grade})</p>
        <p>Status: <span class="status ${lulus ? 'pass' : 'fail'}">${lulus ? 'Lulus' : 'Tidak Lulus'}</span></p>
    `;
}
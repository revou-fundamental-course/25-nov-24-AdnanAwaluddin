// Menambahkan event listener untuk tombol 'calculateBtn' saat diklik
document.getElementById("calculateBtn").addEventListener("click", function () { 
    // Mengambil nilai berat dari input dan mengonversinya menjadi float
    const weight = parseFloat(document.getElementById("weight").value);
    // Mengambil nilai tinggi dari input, mengonversinya menjadi float, dan mengubahnya ke meter
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters
    // Mengambil nilai gender dari input (meskipun tidak digunakan dalam perhitungan BMI)
    const gender = document.getElementById("gender").value;

    // Memeriksa apakah berat dan tinggi yang dimasukkan valid
    if (!weight || !height) {
        alert("Harap masukkan berat dan tinggi badan yang valid!"); // Menampilkan alert jika input tidak valid
        return; // Keluar dari fungsi jika input tidak valid
    }

    // Menghitung BMI menggunakan rumus: berat (kg) / (tinggi (m) * tinggi (m))
    const bmi = (weight / (height * height)).toFixed(1);

    // Menginisialisasi kategori BMI
    let category = "";

    // Menentukan kategori BMI berdasarkan nilai yang dihitung
    if (bmi < 18.5) {
        category = "Kekurangan berat badan"; // Underweight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (ideal)"; // Normal weight
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan berat badan"; // Overweight
    } else {
        category = "Obesitas"; // Obesity
    }

    // Menampilkan hasil BMI dan kategorinya di elemen HTML yang sesuai
    document.getElementById("bmiResult").textContent = `BMI: ${bmi}`;
    document.getElementById("bmiCategory").textContent = `Kategori: ${category}`;
});

// Menambahkan event listener untuk tombol 'resetBtn' saat diklik
document.getElementById("resetBtn").addEventListener("click", function () {
    // Mengatur ulang teks hasil BMI dan kategori menjadi default
    document.getElementById("bmiResult").textContent = "BMI: -";
    document.getElementById("bmiCategory").textContent = "Kategori: -"; 
});

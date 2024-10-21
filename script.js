
    function calculate() {
    // Mendapatkan input angka dan operasi
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;
    let alertMessage = '';

    // Validasi apakah input kosong atau tidak valid
    if (isNaN(num1) || isNaN(num2)) {
    alertMessage = "Mohon masukkan angka yang valid di kedua input.";
    document.getElementById('alert').innerText = alertMessage;
    document.getElementById('result').innerText = '';
    return;  // Keluar dari fungsi jika input tidak valid
} else {
    document.getElementById('alert').innerText = ''; // Kosongkan pesan error jika input valid
}

    // Melakukan operasi berdasarkan pilihan
    switch (operation) {
    case "add":
    result = num1 + num2;
    break;
    case "subtract":
    result = num1 - num2;
    break;
    case "multiply":
    result = num1 * num2;
    break;
    case "divide":
    if (num2 !== 0) {
    result = num1 / num2;
} else {
    result = "Error: Pembagian dengan nol!";
}
    break;
    default:
    result = "Operasi tidak valid!";
}

    // Menampilkan hasil pada halaman
    document.getElementById('result').innerText = "Hasil: " + result;
}
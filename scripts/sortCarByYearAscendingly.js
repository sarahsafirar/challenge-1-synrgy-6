function sortCarByYearAscendingly(cars) {
    // Clone array untuk menghindari side-effect
    const result = [...cars];

    // Implementasi Bubble Sort
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j].year > result[j + 1].year) {
                // Tukar posisi elemen jika tahun lebih besar
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    // Hasilkan array yang sudah diurutkan secara ascending
    return result;
}
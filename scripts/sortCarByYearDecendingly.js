function sortCarByYearDescendingly(cars) {

    /**
     * pseudo code untuk sorting mobil berdasarkan tahun termuda
     * pertama adalah mengclone array agar menghindari side effect
     * kedua adalah mengurutkan array berdasarkan tahun termuda menggunakan fungsi bawaan short
     * ketiga adalah mengembalikan array hasil sorting (array yang sudah di clone)
     * selesai
     */


    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];
    // const cloneArray = result.slice();

    // // Tulis code-mu disini
    // // hasil pengurangan dari array dengan mekanisme jika hasil negatif maka ngeng2 akan ditempatkan sebelum ngeng1
    // cloneArray.sort((car1, car2) => car2.year - car1.year);

    // // Rubah code ini dengan array hasil sorting secara ascending
    // return cloneArray;

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j].year < result[j + 1].year) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}
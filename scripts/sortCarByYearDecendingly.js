function sortCarByYearDescendingly(cars) {


    console.log(cars);


    const result = [...cars];

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